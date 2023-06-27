import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

type NameSpace = 'common';

export async function useTranslation(lang: string, ns: NameSpace = 'common', keyPrefix?: string) {
    const instance = createInstance();
    await instance
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lang, ns));
    return {
        t: instance.getFixedT(lang, ns, keyPrefix),
        i18n: instance,
    };
}