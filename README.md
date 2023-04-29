# Запуск проекта

```console
npm install - установка зависимостей
npm run start:dev или npm run start:dev:vite - запуск проекта на сборке webpack или на vite
```

---

## Скрипты

- `npm run start` - Запуск frontend-части проекта на `webpack`
- `npm run start:vite` - Запуск frontend-части проекта на `vite`
- `npm run start:dev` - Полный запуск проекта на `webpack` + `json-server`
- `npm run start:dev:vite` - Полный запуск проекта на `vite` + `json-server`
- `npm run build:prod` - Сборка проекта `production` в режиме
- `npm run build:dev` - Сборка проекта `development` в режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов линтером
- `npm run lint:scss:fix` - Исправление scss файлов линтером
- `npm run test:unit` - Запуск unit-тестов с `jest`
- `npm run test:ui` - Запуск скриншот-тестов с `loki`
- `npm run test:ui:ok` - Подтверждение измененных скриншотных тестов
- `npm run test:ui:ci`- Запуск скриншотных тестов для `CI`
- `npm run test:ui:report` - Генерация отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json-отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML-отчета для скриншотных тестов
- `npm run storybook` - Запуск `Storybook`
- `npm run storybook:build` - Cборка `Storybook`
- `npm run prepare` - Прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации Feature-Sliced слайсов
- `npm run generate:slice:docs` - Скрипт для генерации файлов для документации слайсов
- `npm run generate:ui:api` - Скрипт для создания Public API для shared UI-компонентов
- `npm run generate:import:update` - Скрипт для рефакторинга всех импортов в проекте под требуемый алиас

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced.

Документация FSD - [Feature-Sliced Design](https://feature-sliced.design/)

---

## Интернационализация

В проекте используется библиотека `i18next` для работы с переводами. Файлы с переводами хранятся в `public/locales`.

Документация i18n - [i18next](https://www.i18next.com/)

---

## Тесты

В проекте используется 4 вида тестов:

1. Unit-тесты на jest - `npm run test:unit`
2. Тесты для компонентов с RTL - `npm run test:unit`
3. Скриншотное тестирование с loki - `npm run test:ui`
4. e2e-тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [тестирование](/docs/tests.md)

---

## Линтинг

В проверке используется [eslint](https://eslint.org/) и [stylelint](https://stylelint.io/) для проверки `typescript`-кода и `sсss`-стилей.

Для контроля главных архитектурных принципов методлогии Feature-Slice используется самописный `eslint-plugin` *eslint-plugin-heildionis-plugin*, который содержит 3 правила:

1. `path-checker` - Запрет абсолютных импортов в рамках одного модуля

    ```powershell
        Cтруктура:
        pages/
            AnyPage/
                ui/
                    AnyPage/
                        AnyPage.tsx
                    AnyPageHeader/
                        AnyPageHeader.tsx
    ```

    ```typescript
        // Файл pages/AnyPage/ui/AnyPage

        import { AnyPageHeader } from './AnyPageHeader/AnyPageHeader' // корректный импорт 

        import { AnyPageHeader } from 'pages/AnyPage/ui/AnyPageHeader/AnyPageHeader' // некорректный импорт  
    ```

2. `layer-imports` - Проверка использования импортов в слоях

    ```powershell
        Cтруктура:
        pages/
            AnyPage/
                ui/
                    AnyPage/
                    AnyPageHeader/
                    ...
                index.ts
        widgets/
            Widget/
                ui/
                    Widget/
                    ...
                index.ts
        features/
            AnyFeature/
                ui/
                    AnyFeature/
                    ...
                index.ts
    ```

    ```typescript
        // Файл pages/AnyPage
        import { Widget } from 'widgets/Widgets' // корректный импорт 

        // Файл features/AnyFeature
        import { Widget } from 'widgets/Widgets' // некорректный импорт 
    ```

3. `public-api-imports` - Разрешает импорт в другие модули только из Public API модуля. Имеет autofix

    ```powershell
        Cтруктура:
        pages/
            AnyPage/
                ui/
                    AnyPage/
                        AnyPage.tsx
        features/
            AnyFeature/
                ui/
                    AnyFeature/
                        AnyFeature.tsx
                index.ts - PUBLIC API
    ```

    ```typescript
        // Файл pages/AnyPage/ui/AnyPage

        import { AnyFeature } from 'features/AnyFeature' // корректный импорт 

        import { AnyPageHeader } from 'features/AnyFeature/ui/AnyFeature/AnyFeature.tsx' // некорректный импорт  
    ```

Подробнее о линтинге - [линтинг](/docs/eslint.md)

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью [storybook-addon-mock](https://storybook.js.org/addons/storybook-addon-mock).

Файл со стори-кейсами создается рядом с компонентом с расширением `.stories.tsx`

Запуск сторибука: `npm run storybook`

Подробнее о сторибуке прокта - [storybook](/docs/storybook.md)

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

- На [Webpack](https://webpack.js.org/) - `config/build`
- На [Vite](https://vitejs.dev/) - `vite.config.ts`

Вся конфигурация хранится в `config`

- `/config/babel` - babel
- `/config/build` - конфигурация webpack
- `/config/jest` - конфигурация тестовой среды
- `/config/storybook` - конфигурация storybook

---

## CI-pipeline и precommit хуки

Конфигурация для [Github Actions](https://docs.github.com/en/actions) находится в `/.github/workflows`. В CI при *push* или *merge* в ветку `main` прогоняются все виды тестов, сборка проекта, сторибука, линтинг. CI выполняется последовательно, без распараллеливания процессов.

В precommit проверяем проект линтерами.

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью [Redux Toolkit](https://redux-toolkit.js.org/). По возможности необходимо нормализовать сущности с помощью [EntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter).

Запросы на сервер выполняются с помощью *[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)*.
Однако в проекте остались места, где запросы выполняются с помощью *[axios](https://axios-http.com/docs/intro)* и *[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)*.

Для асинхронного подключения(для сокращения размера бандла) *reducers* используется компонент `DynamicModuleLoader`.

---
