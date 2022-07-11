import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  ]
})
  
export class AppComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
}
