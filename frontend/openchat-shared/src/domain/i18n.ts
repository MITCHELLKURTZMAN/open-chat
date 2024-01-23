type Locale = string;
type TranslationKey = string;
export type TranslationCorrection = {
    locale: string;
    key: string;
    value: string;
    proposedBy: string;
    proposedAt: number;
    status: "pending" | "approved" | "rejected" | "deployed";
};

export type TranslationRejectionReason = "bad_translation" | "layout_problem";

/**
 * This is a flattened version of what gets stored in the i18n translation dictionaries. These corrections
 * will get merged with the default translations at runtime
 */
export type TranslationCorrections = Record<Locale, Record<TranslationKey, TranslationCorrection>>;
