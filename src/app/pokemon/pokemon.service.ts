import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, find, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemon').pipe(
      tap((pokemonList) => console.table(pokemonList)), 
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)), 
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    ))
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
