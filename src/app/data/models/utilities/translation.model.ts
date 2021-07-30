export class Translation {
    translations: TranslatedText[];
    defaultText: string;

    constructor(translations: TranslatedText[] = [], defaultText: string = "NotFound") {
        this.translations = translations;
        this.defaultText = defaultText;
    }

    addValue(value: string, language: LanguageType = LanguageType.EN): void {

        this.translations.push(new Translation(value, language));
    }

    getValue(language: LanguageType = LanguageType.EN): string {

        /* Find translation or return EN */
        let translation = this.translations.find(x => x.language == language);
        if (translation == null && language != LanguageType.EN) {
            translation = this.translations.find(x => x.language == LanguageType.EN);
        }

        /* If no translation available return NotFound */
        if (translation == null) {
            return this.defaultText;
        }

        return translation.value;
    }

    hasTranslation(language: LanguageType = LanguageType.EN): boolean {

        /* If has translated value for given language */
        return this.translations.some(x => x.language == language);
    }
}