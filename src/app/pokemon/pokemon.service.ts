import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, find, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }
  
  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }

  private log(response: any){
    console.table(response)
  }

  getPokemonList(): Observable<Pokemon[]> {

    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)), 
      catchError((err) => this.handleError(err, undefined))
    );
  }
  
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((err) => this.handleError(err, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {

    if ( term.length <= 2) {
      return of([]);
    }
    
    return this.http.get<Pokemon[]> (`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((err) => this.handleError(err, []))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('/api/pokemons', pokemon, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
    );
  } 
  
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((err) => this.handleError(err, undefined))
    );
  }

  
  getPokemonTypeList() : string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }

}
