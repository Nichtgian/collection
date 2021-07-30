export class TranslatedText {
    language: LanguageType;
    value: string;

    constructor(value: string, language: LanguageType = LanguageType.EN) {
        this.value = value;
        this.language = language;
    }
}
