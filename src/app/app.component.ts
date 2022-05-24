import { Component } from '@angular/core';
import { EmojiCategory, EmojiEvent } from '../lib/picker/ngx-emoji';

const CUSTOM_EMOJIS: EmojiCategory[] = [
  {
    id: "page1",
    icon: "./assets/images/b.png",
    name: "page1 name",
    emojis: [
      {
        name: 'Party Parrot',
        shortNames: ['parrot'],
        keywords: ['party'],
        imageUrl: './assets/images/Photo.png',
        isLocked: true
      },
      {
        name: 'Party Parrot',
        shortNames: ['parrot'],
        keywords: ['party'],
        imageUrl: './assets/images/bb.png',
      },
      {
        name: 'Party Parrot',
        shortNames: ['parrot'],
        keywords: ['party'],
        imageUrl: './assets/images/parrot.gif',
      },
    ]
  },
  {
    id: "page2",
    name: "page2 name",
    emojis: [
      {
        name: 'Octocat',
        isLocked:true,
        shortNames: ['octocat'],
        keywords: ['github'],
        imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
      },
      {
        name: 'Squirrel',
        shortNames: ['shipit', 'squirrel'],
        keywords: ['github'],
        imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
      }]
  },
  {
    id: "page4",
    name: "page4 name",
    emojis: [{
      name: 'Squirrel',
      shortNames: ['shipit', 'squirrel'],
      keywords: ['github'],
      imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
    }]
  },
  {
    id: "page5",
    name: "page5 name",
    emojis: [{
      name: 'Squirrel',
      shortNames: ['shipit', 'squirrel'],
      keywords: ['github'],
      imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
    }]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  themes = [
    'native',
    'apple',
    'google',
    'twitter',
    'facebook',
  ];
  darkMode: undefined | boolean = !!(
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-color-scheme: dark)').matches
  );
  darkestMode: undefined | boolean = undefined;
  set = 'native';
  native = true;
  CUSTOM_EMOJIS = CUSTOM_EMOJIS;
  setTheme(set: string) {
    this.native = set === 'native';
    this.set = set;
  }
  setDarkmode(mode: boolean | undefined) {
    if (mode === undefined) {
      this.darkestMode = mode;
      this.darkMode = !!(
        typeof matchMedia === 'function' &&
        matchMedia('(prefers-color-scheme: dark)').matches
      );
    } else {
      this.darkMode = mode;
      this.darkestMode = mode;
    }
  }
  handleClick($event: EmojiEvent) {
    console.log($event.emoji);
  }
  emojiFilter(e: string): boolean {
    // Can use this to test [emojisToShowFilter]
    if (e && e.indexOf && e.indexOf('1F4') >= 0) {
      return true;
    }
    return false;
  }
}
