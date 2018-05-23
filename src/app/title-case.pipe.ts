import {Pipe, PipeTransform} from '@angular/core';
import {st} from '@angular/core/src/render3';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPrep(word)) {
        words[i] = word.toLowerCase();
      } else {words[i] = this.toTitleCase(words[i]); }
    }
    return words.join(' ');
  }

  private isPrep(word: string): boolean {
    const prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
