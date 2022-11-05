import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        textForLogin:string;
        primary: string;
        background: string;
    }
  }