import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {

  }
  transform(codePoint: string): SafeHtml {
    const castedCode = twemoji.convert.fromCodePoint(codePoint);
    return this.domSanitizer.bypassSecurityTrustHtml(twemoji.parse(castedCode, {
      folder: 'svg',
      ext: '.svg'
    }));
  }
}

declare var twemoji: {
  convert: { fromCodePoint(str: string): string; }
  parse(str: string, options?: { folder: string, ext: string }): string;
};
