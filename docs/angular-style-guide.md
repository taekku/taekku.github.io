---
layout: mama
title: Angular Style Guide
---
Angular Syntax, 규칙 및 응용 프로그램 구조에 대한 독창적 인 가이드를 찾고 계십니까? 바로 들어가십시오! 이 스타일 가이드는 선호하는 규칙을 제시하며, 중요한 이유를 설명합니다.

# Style vocabulary
각 guideline은 좋은 사례, 나쁜 사례를 설명하고 일관된 설명을 제공합니다.

각 지침의 표현은 얼마나 강력한 권고인지 나타냅니다.:
- `Do` 항상 따라야하는 것이 하나입니다. 항상 너무 강한 단어 일 수 있습니다. 문자 그대로 항상 지켜 져야하는 지침은 극히 드문 경우입니다. 반면, Do 지침을 위반 한 경우는 매우 드문 사례가 필요합니다.
- `Consider`
  일반적으로 지침을 따라야한다고 생각하십시오. 가이드 라인의 의미를 완전히 이해하고 벗어날 좋은 이유가 있다면 그렇게하십시오. 일관성있게 노력하십시오.
- `Avoid`
  피해야 할 일은 거의하지 말아야 할 일을 나타냅니다. 피하기 위해 코드 예제는 틀린 빨간 머리글을 가지고 있습니다.
- `Why?`
  이전 권장 사항을 따르는 이유를 제공합니다.

# File structure conventions

일부 코드 예제는 하나 이상의 유사한 이름의 짝 파일이있는 파일을 표시합니다. 예 : `hero.component.ts` 및 `hero.component.html`.

지침은 바로 가기 `hero.component.ts`\|`html`\|`css`\|`spec`을 사용하여 다양한 파일을 나타냅니다. 이 바로 가기를 사용하면이 안내서의 파일 구조를 읽기 쉽고 간결하게 만들 수 있습니다.

# Single responsibility

Single Responsibility Principle(SRP:단일 책임 원칙)을 모든 구성 요소, 서비스 및 기타 기호에 적용하십시오. 이렇게하면 앱을보다 깔끔하고 쉽게 읽고 유지 관리 할 수 있으며 테스트 할 수 있습니다.

## Rule of One
### Style 01-01
- `Do`
  파일 당 하나의 `service` 또는 `component`를 정의하십시오.
- `Consider`
  파일을 400 줄의 코드로 제한합니다.
- `Why?`
  파일당 하나의 component를 유지하면, source controle에서 팀과의 충돌을 피하고, 읽기 쉽고, 유지관리하기 더 쉽다.
- `Why?` 파일 당 하나의 구성 요소는 변수를 공유하거나 불필요한 종결을 만들거나 종속성과 원하지 않는 결합을 일으키는 파일에서 구성 요소를 결합 할 때 종종 발생하는 숨겨진 버그를 방지합니다.
- `Why?` 하나의 구성 요소가 파일의 기본 내보내기가 될 수 있으므로 라우터를 통한 지연로드가 용이합니다.
- 핵심은 코드를 재사용 가능하고 읽기 쉬우 며 실수가 적은 코드로 만드는 것입니다.

## Small functions
### Style 01-02
- `Do`
  작은 function을 정의
- `Consider`
  75줄 이하로 제한
- `Why?`
  작은 기능은 특히 한 가지 일을하고 한 가지 목적을 수행 할 때 테스트하기 쉽습니다.
- `Why?` 작은 함수는 재사용을 촉진합니다.
- `Why?` 작은 함수은 읽기가 쉽습니다.
- `Why?` 작은 함수은 유지하기가 더 쉽습니다.
- `Why?` 작은 함수는 외부 범위와 변수를 공유하는 큰 함수와 함께 제공되는 숨겨진 버그를 피하거나, 원하지 않는 종결을 만들거나, 종속성과 원하지 않는 결합을 피하는 데 도움이됩니다.

# Naming
이름 지정 규칙은 유지 보수성과 가독성을 위해 대단히 중요합니다. 이 설명서는 파일 이름과 기호 이름에 대해 이름 지정 규칙을 권장합니다.

## General Naming Guidelines
### Style 02-01
- `Do` 모든 기호에 일관된 이름을 사용하십시오.
- `Do` 기호의 기능을 설명하고 그 유형을 설명하는 패턴을 따르십시오. 권장 패턴은 `feature.type.ts`입니다.
- `Why?` 명명 규칙은 내용을 한 눈에 파악할 수있는 일관된 방법을 제공합니다. 프로젝트 내에서 일관성이 중요합니다. 팀과의 일관성이 중요합니다. 회사 전체의 일관성은 엄청난 효율성을 제공합니다.
- `Why?` 명명 규칙은 원하는 코드를 더 빨리 찾아 내고 이해하기 쉽게 만들어줍니다.
- `Why?` 폴더와 파일의 이름은 의도를 명확하게 전달해야합니다. 예를 들어 `app/heroes/hero-list.component.ts`에는 영웅 목록을 관리하는 구성 요소가 포함될 수 있습니다.

## Separate file names with dots and dashes
### Style 02-02
- `Do` 설명적인 이름으로 단어를 분리하려면 대시를 사용하십시오.
- `Do` 설명적인 이름을 유형과 분리하려면 점을 사용하십시오.
- `Do` 구성 요소의 기능을 설명하고 그 유형을 설명하는 패턴 다음의 모든 구성 요소에 일관된 유형 이름을 사용하십시오. 권장되는 패턴은 `feature.type.ts`입니다.
- `Do` `.service`, `.component`, `.pipe`, `.module` 및 `.directive`와 같은 기존 유형 이름을 사용하십시오. 너무 많은 것을 만들지 않도록주의해야한다면 추가 유형 이름을 만듭니다.
- `Why?` 유형 이름은 파일에있는 내용을 신속하게 식별 할 수있는 일관된 방법을 제공합니다.
- `Why?` 형식 이름을 사용하면 편집기 나 IDE의 퍼지 검색 기술을 사용하여 특정 파일 형식을 쉽게 찾을 수 있습니다.
- `Why?` `.service`와 같은 축약되지 않은 유형 이름은 설명 적이며 모호하지 않습니다. `.srv`, `.svc` 및 `.serv`와 같은 약어는 혼동을 줄 수 있습니다.
- `Why?` 형식 이름은 모든 자동화 된 작업에 대해 패턴 일치를 제공합니다.

## Symbols and file names
### Style 02-03

- `Do` 자신이 나타내는 이름을 따서 명명 된 모든 자산에 대해 일관된 이름을 사용하십시오.
- `Do` 클래스 이름에는 대문자로 대문자를 사용하십시오.
- `Do` 기호 이름을 파일 이름과 일치 시키십시오.
- `Do` 해당 유형의 항목에 대해 기존 접미어 (예 : Component, Directive, Module, Pipe, or Service)가있는 심볼 이름을 추가하십시오.
- `Do` 파일에 해당 유형의 파일에 대한 일반적인 접미어 (예 : `.component.ts`, `.directive.ts`, `.module.ts`, `.pipe.ts` 또는 `.service.ts`)를 지정하십시오.
- `Why?` 일관된 규칙에 따라 여러 유형의 자산을 신속하게 식별하고 참조 할 수 있습니다.

## Service Names
### Style 02-04

- `Do` 해당 기능의 이름을 따서 명명 된 모든 서비스에 일관된 이름을 사용하십시오.
- `Do` Service 클래스에 접미사를 추가하십시오. 예를 들어 데이터 나 영웅을 얻는 것은 DataService 또는 HeroService라고해야합니다.

약간의 용어는 모호하지 않은 서비스입니다. 그들은 일반적으로 `-er`로 끝나는 대행사를 나타냅니다. `LoggerService` 대신 `Logger` 메시지를 기록하는 서비스의 이름을 지정할 수도 있습니다. 프로젝트에서이 예외가 동의 할 지 결정하십시오. 항상 그렇듯이 일관성을 위해 노력하십시오.

- `Why?` 서비스를 신속하게 식별하고 참조 할 수있는 일관된 방법을 제공합니다.
- `Why?` `Logger`와 같은 명확한 서비스 이름에는 접미사가 필요하지 않습니다.
- `Why?` `Credit`과 같은 서비스 이름은 명사이며 접미사가 필요하며 서비스이거나 다른 것이면 분명하지 않을 때 접미사가 붙어야합니다.

<table>
  <tr>
    <th>Symbol Name</th>
    <th>File Name</th>
  </tr>
  <tr>
    <td>
      @Injectable()<br/>
      export class HeroDataService { }
    </td>
    <td>hero-data.service.ts</td>
  </tr>
  <tr>
    <td>
      @Injectable()<br/>
      export class CreditService { }
    </td>
    <td>credit.service.ts</td>
  </tr>
  <tr>
    <td>
      @Injectable()<br/>
      export class Logger { }
    </td>
    <td>logger.service.ts</td>
  </tr>
</table>

## Bootstrapping
### Style 02-05

- `Do` `main.ts`라는 파일에 앱의 부트 스트래핑과 플랫폼 로직을 넣으십시오.
- `Do` 부트 스트래핑 논리에 오류 처리를 포함시킵니다.
- `Do` `main.ts`에 앱 논리를 두지 마십시오. 대신 구성 요소 또는 서비스에 배치하는 것을 고려하십시오.
- `Why?` 앱의 시작 논리에 대한 일관된 규칙을 따릅니다.
- `Why?` 다른 기술 플랫폼의 익숙한 규칙을 따릅니다.

## Component selectors
### Style 02-06
- `Do` Component의 element `selector`에 이름을 지정할 때는 대시 또는 대소 문자를 사용하십시오.
- `Why?` 요소 이름을 Customer Elements의 사양과 일관되게 유지합니다.

## Component custom prefix
### Style 02-07

- `Do` 하이픈으로 연결된 소문자 요소 선택기 값 (예 : admin-users)을 사용하십시오.
- `Do` 구성 요소 선택기에 대한 사용자 지정 접두사를 사용하십시오. 예를 들어 toh라는 접두사는 Tour of Heroes에서 나오며 admin 접두어는 관리 기능 영역을 나타냅니다.
- `Do` 기능 영역 또는 앱 자체를 식별하는 접두어를 사용하십시오.
- `Why?` 다른 앱 및 기본 HTML 요소의 요소와 요소 이름의 충돌을 방지합니다.
- `Why?` 다른 앱에서 구성 요소를 홍보하고 공유하는 것이 더 쉬워집니다.
- `Why?` 구성 요소는 DOM에서 쉽게 식별 할 수 있습니다.

## Directive selectors
### Style 02-07

- `Do` 지시어의 선택자를 명명하기 위해 낙타의 경우를 사용하십시오.
- `Why?` 뷰에 바인딩 된 지시문에 정의 된 속성의 이름을 특성 이름과 일관되게 유지합니다.
- `Why?` Angular HTML 구문 분석기는 대소 문자를 구분하며 더 낮은 camel case를 인식합니다.

## Directive custom prefix
### Style 02-08

- `Do` 지시어 선택자에 맞춤 프리픽스를 사용합니다 (예 : Tour of Heroes의 접두어 toh).
- `Do` 선택기가 원시 HTML 속성과 일치하지 않는 경우 낮은 낙타의 경우 요소가 아닌 선택자를 철자하십시오.
- `Why?` 이름 충돌을 방지합니다.
- `Why?` 지침을 쉽게 식별 할 수 있습니다.

## Pipe names
### Style 02-09

- `Do` 해당 기능의 이름을 따서 명명 된 모든 파이프에 대해 일관된 이름을 사용하십시오.
- `Why?` 파이프를 신속하게 식별하고 참조 할 수있는 일관된 방법을 제공합니다.

## Unit test file names
### Style 02-10

- `Do` 이름 테스트 스펙 파일은 테스트하는 구성 요소와 동일합니다.
- `Do` `.spec` 접미어가있는 이름 테스트 스펙 파일을 수행하십시오.
- `Why?` 테스트를 신속하게 식별 할 수있는 일관된 방법을 제공합니다.
- `Why?` 카르마 또는 다른 테스트 주자를위한 패턴 일치를 제공합니다.

## End-to-End (E2E) test file names
### Style 02-11

- `Do` 엔드 - 투 - 엔드 테스트 스펙 파일의 이름을 .e2e-spec 접미어로 테스트 한 후에 이름을 지정하십시오.
- `Why?` 엔드 - 투 - 엔드 테스트를 신속하게 식별 할 수있는 일관된 방법을 제공합니다.
- `Why?` 테스트 주자와 빌드 자동화를위한 패턴 일치를 제공합니다.

## Angular NgModule names
### Style 02-12
- `Do` 접미사 모듈과 함께 기호 이름을 추가하십시오.
- `Do` 파일 이름에 .module.ts 확장자를 지정하십시오.
- `Do` 기능 및 폴더가있는 모듈의 이름을 지정하십시오.
- `Why?` 모듈을 신속하게 식별하고 참조 할 수있는 일관된 방법을 제공합니다.
- `Why?` 어퍼 카멜 케이스는 생성자를 사용하여 인스턴스화 할 수있는 객체를 식별하는 데 일반적으로 사용됩니다.
- `Why?` 모듈을 동일한 명명 된 기능의 루트로 쉽게 식별합니다.
- `Do` _RoutingModule_ 을 사용하여 `RoutingModule` 클래스 이름의 접미사를 지정하십시오.
- `Do` `-routing.module.ts`를 사용하여 _RoutingModule_ 의 파일 이름을 끝내십시오.
- `Why?` _RoutingModule_ 은 Angular router를 구성하는 데 전적으로 사용되는 모듈입니다. 일관된 클래스 및 파일 이름 규칙을 사용하면 이러한 모듈을 쉽게 찾고 확인할 수 있습니다.

# Coding conventions
코딩, 명명 및 공백 규칙을 일관되게 설정하십시오.
## Classes
### Style 03-01
- `Do` 클래스 이름을 지정할 때 Upper Camel case를 사용하십시오.
- `Why?` 클래스 이름에 대한 일반적인 생각을 따르십시오.
- `Why?` 클래스를 인스턴스화하고 인스턴스를 생성 할 수 있습니다. 관습에 따라, upper camel case는 건설 가능한 자산을 나타냅니다.

## Constants
### Style 03-02
- `Do` 변수가 응용 프로그램 수명 동안 변경되지 않아야하는 경우 `const`로 변수를 선언하십시오.
- `Why?` 가치가 불변하다는 것을 독자들에게 전하십시오.
- `Why?` TypeScript는 즉시 초기화를 요구하고 후속 재 할당을 막음으로써 그 의도를 시행하도록 도와줍니다.
- `Consider` camel case 에 `const` 변수의 철자를 고려하십시오.
- `Why?` 하위 낙타의 변수 이름 (`heroRoutes`)은 기존의 UPPER_SNAKE_CASE 이름 (`HERO_ROUTES`)보다 읽기 쉽고 이해하기 쉽습니다.
- `Why?` UPPER_SNAKE_CASE에서 이름 지정 상수의 전통은 최신 IDE에서 `const` 선언을 빨리 표시하기 전의 시대를 나타냅니다. TypeScript는 우발적 인 재 할당을 방지합니다.
- `Do`
UPPER_SNAKE_CASE의 철자가있는 기존 `const` 변수를 허용합니다.
- `Why?`
UPPER_SNAKE_CASE의 전통은 특히 제 3 자 모듈에서 널리 보급되어 있습니다. 기존 코드 및 문서가 손상 될 위험이 있으므로 변경할 가치가 거의 없습니다.
```typescript
export const mockHeroes   = ['Sam', 'Jill']; // prefer
export const heroesUrl    = 'api/heroes';    // prefer
export const VILLAINS_URL = 'api/villains';  // tolerate
```

## Interfaces
### Style 03-03
- `Do` name an interface using upper camel case.
- `Consider` naming an interface without an `I` prefix.
- `Consider` using a class instead of an interface for services and declarables (components, directives, and pipes).
- `Consider` using an interface for data models.
- `Why?` TypeScript guidelines discourage the `I` prefix.
- `Why?` A class alone is less code than a  _class-plus-interface_.
- `Why?` A class can act as an interface (use `implements` instead of `extends`).
- `Why?` An interface-class can be a provider lookup token in Angular dependency injection.
```typescript
import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroCollectorService {
  hero: Hero;

  constructor() { }
}
```

## Properties and methods
### Style 03-04
- `Do` use lower camel case to name properties and methods.
- `Avoid` prefixing private properties and methods with an underscore.
- `Why?` Follows conventional thinking for properties and methods.
- `Why?` JavaScript lacks a true private property or method.
- `Why?` TypeScript tooling makes it easy to identify private vs. public properties and methods.

## Import line spacing
### Style 03-06
- `Consider` leaving one empty line between third party imports and application imports.
- `Consider` listing import lines alphabetized by the module.
- `Consider` listing destructured imported symbols alphabetically.
- `Why?` The empty line separates your stuff from their stuff.
- `Why?` Alphabetizing makes it easier to read and locate symbols.

# Application structure and NgModules

장기적인 비전과 실행에 대한 단기적인 관점을가집니다. 작게 시작하지만 앱이 어디로 향하는 지 명심하십시오.

모든 앱 코드는 `src` 폴더에 있습니다. 모든 기능 영역은 자체 NgModule과 함께 자체 폴더에 있습니다.

모든 콘텐츠는 파일 당 하나의 저작물입니다. 각 구성 요소, 서비스 및 파이프는 자체 파일에 있습니다. 모든 타사 공급 업체 스크립트는 `src` 폴더가 아닌 다른 폴더에 저장됩니다. 당신은 그 (것)들을 쓰지 않으며 당신은 그 (것)들을 `src`를 어수선하게하고 싶지 않다. 이 설명서의 파일에는 이름 지정 규칙을 사용하십시오.

## LIFT

### Style 04-01
- `Do` structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY.
- `Do` define the structure to follow these four basic guidelines, listed in order of importance.
- `Why?` LIFT Provides a consistent structure that scales well, is modular, and makes it easier to increase developer efficiency by finding code quickly. To confirm your intuition about a particular structure, ask: _can I quickly open and start work in all of the related files for this feature?_

## Locate

### Style 04-02
- `Do` make locating code intuitive, simple and fast.
- `Why?` To work efficiently you must be able to find files quickly, especially when you do not know (or do not remember) the file names. Keeping related files near each other in an intuitive location saves time. A descriptive folder structure makes a world of difference to you and the people who come after you.

## Identify
## Style 04-03
- `Do` name the file such that you instantly know what it contains and represents.
- `Do` be descriptive with file names and keep the contents of the file to exactly one component.
- `Avoid` files with multiple components, multiple services, or a mixture.
- `Why?` Spend less time hunting and pecking for code, and become more efficient. Longer file names are far better than _short-but-obscure_ abbreviated names.

> 하나의 파일에서 여러 개의 파일보다 더 잘 발견되고 이해되는 작고 밀접하게 관련된 기능 세트를 가지고있을 때 파일 당 일 (one-thing-per-file) 규칙을 벗어나는 것이 유리할 수 있습니다. 이 허점을 조심하십시오.

## Flat
### Style 04-04
- `Do` keep a flat folder structure as long as possible.
- `Consider` creating sub-folders when a folder reaches seven or more files.
- `Consider` configuring the IDE to hide distracting, irrelevant files such as generated `.js` and `.js.map` files.
- `Why?` No one wants to search for a file through seven levels of folders. A flat structure is easy to scan.

On the other hand, psychologists believe that humans start to struggle when the number of adjacent interesting things exceeds nine. So when a folder has ten or more files, it may be time to create subfolders.

Base your decision on your comfort level. Use a flatter structure until there is an obvious value to creating a new folder.

## T-DRY (Try to be DRY)

### Style 04-05
- `Do` be DRY (Don't Repeat Yourself).
- `Avoid` being so DRY that you sacrifice readability.
- `Why?` Being DRY is important, but not crucial if it sacrifices the other elements of LIFT. That's why it's called T-DRY. For example, it's redundant to name a template hero-view.component.html because with the .html extension, it is obviously a view. But if something is not obvious or departs from a convention, then spell it out.

## Overall structural guidelines

### Style 04-06
- `Do` start small but keep in mind where the app is heading down the road.
- `Do` have a near term view of implementation and a long term vision.
- `Do` put all of the app's code in a folder named `src`.
- `Consider` creating a folder for a component when it has multiple accompanying files (`.ts`, `.html`, `.css` and `.spec`).
- `Why?` Helps keep the app structure small and easy to maintain in the early stages, while being easy to evolve as the app grows.
- `Why?` Components often have four files (e.g. `*.html`, `*.css`, `*.ts`, and `*.spec.ts`) and can clutter a folder quickly.

> 전용 폴더의 구성 요소가 널리 선호되는 반면, 소형 응용 프로그램의 또 다른 옵션은 구성 요소를 편평하게 유지하는 것입니다 (전용 폴더가 아님). 이렇게하면 최대 4 개의 파일이 기존 폴더에 추가되지만 폴더 중첩도 줄어 듭니다. 당신이 선택한 것이 무엇이든지간에 일관성을 유지하십시오.

## Folders-by-feature structure

### Style 04-07
- `Do` create folders named for the feature area they represent.
- `Why?` A developer can locate the code and identify what each file represents at a glance. The structure is as flat as it can be and there are no repetitive or redundant names.
- `Why?` The LIFT guidelines are all covered.
- `Why?` Helps reduce the app from becoming cluttered through organizing the content and keeping them aligned with the LIFT guidelines.
- `Why?` When there are a lot of files, for example 10+, locating them is easier with a consistent folder structure and more difficult in a flat structure.
- `Do` create an NgModule for each feature area.
- `Why?` NgModules make it easy to lazy load routable features.
- `Why?` NgModules make it easier to isolate, test, and re-use features.

## App root module

### Style 04-08
- `Do` create an NgModule in the app's root folder, for example, in `/src/app`.
- `Why?` Every app requires at least one root NgModule.
- `Consider` naming the root module `app.module.ts`.
- `Why?` Makes it easier to locate and identify the root module.

## Feature modules

### Style 04-09
- `Do` create an NgModule for all distinct features in an application; for example, a Heroes feature.
- `Do` place the feature module in the same named folder as the feature area; for example, in app/heroes.
- `Do` name the feature module file reflecting the name of the feature area and folder; for example, app/heroes/heroes.module.ts.
- `Do` name the feature module symbol reflecting the name of the feature area, folder, and file; for example, app/heroes/heroes.module.ts defines HeroesModule.
- `Why?` A feature module can expose or hide its implementation from other modules.
- `Why?` A feature module identifies distinct sets of related components that comprise the feature area.
- `Why?` A feature module can easily be routed to both eagerly and lazily.
- `Why?` A feature module defines clear boundaries between specific functionality and other application features.
- `Why?` A feature module helps clarify and make it easier to assign development responsibilities to different teams.
- `Why?` A feature module can easily be isolated for testing.

## Shared feature module

### Style 04-10
- `Do` create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule.
- `Do` declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
- `Consider` using the name SharedModule when the contents of a shared module are referenced across the entire application.
- `Consider` not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module. There are exceptions, however. For example, in the sample code that follows, notice that the SharedModule provides FilterTextService. This is acceptable here because the service is stateless;that is, the consumers of the service aren't impacted by new instances.
- `Do` import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
- `Why?` SharedModule will contain components, directives and pipes that may need features from another common module; for example, ngFor in CommonModule.
- `Do` declare all components, directives, and pipes in the SharedModule.
- `Do` export all symbols from the SharedModule that other feature modules need to use.
- `Why?` SharedModule exists to make commonly used components, directives and pipes available for use in the templates of components in many other modules.
- `Avoid` specifying app-wide singleton providers in a SharedModule. Intentional singletons are OK. Take care.
- `Why?` A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesirable results.
- `Why?` You don't want each module to have its own separate instance of singleton services. Yet there is a real danger of that happening if the SharedModule provides a service.

## Core feature module

### Style 04-11

- `Consider` collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
- `Consider` calling the application-wide core module, `CoreModule`. Importing `CoreModule` into the root `AppModule` reduces its complexity and emphasizes its role as orchestrator of the application as a whole.
- `Do` create a feature module named `CoreModule` in a core folder (e.g. `app/core/core.module.ts` defines `CoreModule`).
- `Do` put a singleton service whose instance will be shared throughout the application in the `CoreModule` (e.g. `ExceptionService` and `LoggerService`).
- `Do` import all modules required by the assets in the `CoreModule` (e.g. `CommonModule` and `FormsModule`).
- `Why?` `CoreModule` provides one or more singleton services. Angular registers the providers with the app root injector, making a singleton instance of each service available to any component that needs them, whether that component is eagerly or lazily loaded.
- `Why?` `CoreModule` will contain singleton services. When a lazy loaded module imports these, it will get a new instance and not the intended app-wide singleton.
- `Do` gather application-wide, single use components in the `CoreModule`. Import it once (in the `AppModule`) when the app starts and never import it anywhere else. (e.g. `NavComponent` and `SpinnerComponent`).
- `Why?` Real world apps can have several single-use components (e.g., spinners, message toasts, and modal dialogs) that appear only in the `AppComponent` template. They are not imported elsewhere so they're not shared in that sense. Yet they're too big and messy to leave loose in the root folder.
- `Avoid` importing the `CoreModule` anywhere except in the `AppModule`.
- `Why?` A lazily loaded feature module that directly imports the `CoreModule` will make its own copy of services and likely have undesirable results.
- `Why?` An eagerly loaded feature module already has access to the `AppModule`'s injector, and thus the `CoreModule`'s services.
- `Do` export all symbols from the `CoreModule` that the `AppModule` will import and make available for other feature modules to use.
- `Why?` `CoreModule` exists to make commonly used singleton services available for use in the many other modules.
- `Why?` You want the entire app to use the one, singleton instance. You don't want each module to have its own separate instance of singleton services. Yet there is a real danger of that happening accidentally if the `CoreModule` provides a service.
> `AppModule` is a little smaller because many app/root classes have moved to other modules. `AppModule` is stable because you will add future components and providers to other modules, not this one. `AppModule` delegates to imported modules rather than doing work. `AppModule` is focused on its main task, orchestrating the app as a whole.

## Prevent re-import of the core module

### Style 04-12
Only the root `AppModule` should import the `CoreModule`.

- `Do` guard against reimporting of `CoreModule` and fail fast by adding guard logic.
- `Why?` Guards against reimporting of the `CoreModule`.
- `Why?` Guards against creating multiple instances of assets intended to be singletons.

## Lazy Loaded folders

### Style 04-13
A distinct application feature or workflow may be _lazy loaded_ or loaded on demand rather than when the application starts.

- `Do` put the contents of lazy loaded features in a _lazy loaded folder_. A typical _lazy loaded folder_ contains a _routing component_, its child components, and their related assets and modules.
- `Why?` The folder makes it easy to identify and isolate the feature content.

## Never directly import lazy loaded folders

### Style 04-14
- `Avoid` allowing modules in sibling and parent folders to directly import a module in a _lazy loaded feature_.
- `Why?` Directly importing and using a module will load it immediately when the intention is to load it on demand.

# Components

## Components as elements

### Style 05-03
- `Consider` giving components an _element_ selector, as opposed to _attribute_ or class selectors.
- `Why?` components have templates containing HTML and optional Angular template syntax. They display content. Developers place components on the page as they would native HTML elements and web components.
- `Why?` It is easier to recognize that a symbol is a component by looking at the template's html.

> There are a few cases where you give a component an attribute, such as when you want to augment a built-in element. For example, Material Design uses this technique with `<button mat-button>`. However, you wouldn't use this technique on a custom element.

## Extract templates and styles to their own files

### Style 05-04
- `Do` extract templates and styles into a separate file, when more than 3 lines.
- `Do` name the template file `[component-name].component.html`, where [component-name] is the component name.
- `Do` name the style file `[component-name].component.css`, where [component-name] is the component name.
- `Do` specify _component-relative_ URLs, prefixed with `./`.
- `Why?` Large, inline templates and styles obscure the component's purpose and implementation, reducing readability and maintainability.
- `Why?` In most editors, syntax hints and code snippets aren't available when developing inline templates and styles. The Angular TypeScript Language Service (forthcoming) promises to overcome this deficiency for HTML templates in those editors that support it; it won't help with CSS styles.
- `Why?` A _component relative_ URL requires no change when you move the component files, as long as the files stay together.
- `Why?` The `./` prefix is standard syntax for relative URLs; don't depend on Angular's current ability to do without that prefix.

## Decorate input and output properties

### Style 05-12
- `Do` use the `@Input()` and `@Output()` class decorators instead of the `inputs` and `outputs` properties of the `@Directive` and `@Component` metadata:
- `Consider` placing `@Input()` or `@Output()` on the same line as the property it decorates.
- `Why?` It is easier and more readable to identify which properties in a class are inputs or outputs.
- `Why?` If you ever need to rename the property or event name associated with `@Input` or `@Output`, you can modify it in a single place.
- `Why?` The metadata declaration attached to the directive is shorter and thus more readable.
- `Why?` Placing the decorator on the same line _usually_ makes for shorter code and still easily identifies the property as an input or output. Put it on the line above when doing so is clearly more readable.

## Avoid aliasing inputs and outputs

### Style 05-13
- `Avoid` _input_ and _output_ aliases except when it serves an important purpose.
- `Why?` Two names for the same property (one private, one public) is inherently confusing.
- `Why?` You should use an alias when the directive name is also an _input_ property, and the directive name doesn't describe the property.

## Member sequence

### Style 05-14
- `Do` place properties up top followed by methods.
- `Do` place private members after public members, alphabetized.
- `Why?` Placing members in a consistent sequence makes it easy to read and helps instantly identify which members of the component serve which purpose.

## Delegate complex component logic to services

### Style 05-15

- `Do` limit logic in a component to only that required for the view. All other logic should be delegated to services.
- `Do` move reusable logic to services and keep components simple and focused on their intended purpose.
- `Why?` Logic may be reused by multiple components when placed within a service and exposed via a function.
- `Why?` Logic in a service can more easily be isolated in a unit test, while the calling logic in the component can be easily mocked.
- `Why?` Removes dependencies and hides implementation details from the component.
- `Why?` Keeps the component slim, trim, and focused.

## Don't prefix output properties

### Style 05-16
- `Do` name events without the prefix on.
- `Do` name event handler methods with the prefix on followed by the event name.
- `Why?` This is consistent with built-in events such as button clicks.
- `Why?` Angular allows for an alternative syntax on-*. If the event itself was prefixed with on this would result in an on-onEvent binding expression.

## Put presentation logic in the component class

### Style 05-17

- `Do` put presentation logic in the component class, and not in the template.
- `Why?` Logic will be contained in one place (the component class) instead of being spread in two places.
- `Why?` Keeping the component's presentation logic in the class instead of the template improves testability, maintainability, and reusability.

# Directives

## Use directives to enhance an element

### Style 06-01

- `Do` use attribute directives when you have presentation logic without a template.
- `Why?` Attribute directives don't have an associated template.
- `Why?` An element may have more than one attribute directive applied.

## HostListener/HostBinding decorators versus host metadata

### Style 06-03

- `Consider` preferring the `@HostListener` and `@HostBinding` to the host property of the `@Directive` and `@Component` decorators.
- `Do` be consistent in your choice.
- `Why?` The property associated with `@HostBinding` or the method associated with `@HostListener` can be modified only in a single place—in the directive's class. If you use the 1 metadata property, you must modify both the property/method declaration in the directive's class and the metadata in the decorator associated with the directive.

Compare with the less preferred host metadata alternative.

- `Why?` The host metadata is only one term to remember and doesn't require extra ES imports.

# Services

## Services are singletons

### Style 07-01

- `Do` use services as singletons within the same injector. Use them for sharing data and functionality.
- `Why?` Services are ideal for sharing methods across a feature area or an app.
- `Why?` Services are ideal for sharing stateful in-memory data.

## Single responsibility

### Style 07-02
- `Do` create services with a single responsibility that is encapsulated by its context.
- `Do` create a new service once the service begins to exceed that singular purpose.
- `Why?` When a service has multiple responsibilities, it becomes difficult to test.
- `Why?` When a service has multiple responsibilities, every component or service that injects it now carries the weight of them all.

## Providing a service

### Style 07-03

- `Do` provide a service with the app root injector in the `@Injectable` decorator of the service.
- `Why?` The Angular injector is hierarchical.
- `Why?` When you provide the service to a root injector, that instance of the service is shared and available in every class that needs the service. This is ideal when a service is sharing methods or state.
- `Why?` When you register a service in the `@Injectable` decorator of the service, optimization tools such as those used by the CLI's production builds can perform tree shaking and remove services that aren't used by your app.
- `Why?` This is not ideal when two different components need different instances of a service. In this scenario it would be better to provide the service at the component level that needs the new and separate instance.

## Use the @Injectable() class decorator

### Style 07-04

- `Do` use the `@Injectable()` class decorator instead of the `@Inject` parameter decorator when using types as tokens for the dependencies of a service.
- `Why?` The Angular Dependency Injection (DI) mechanism resolves a service's own dependencies based on the declared types of that service's constructor parameters.
- `Why?` When a service accepts only dependencies associated with type tokens, the `@Injectable()` syntax is much less verbose compared to using `@Inject()` on each individual constructor parameter.

# Data Services

## Talk to the server through a service

### Style 08-01

- `Do` refactor logic for making data operations and interacting with data to a service.
- `Do` make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.
- `Why?` The component's responsibility is for the presentation and gathering of information for the view. It should not care how it gets the data, just that it knows who to ask for it. Separating the data services moves the logic on how to get it to the data service, and lets the component be simpler and more focused on the view.
- `Why?` This makes it easier to test (mock or real) the data calls when testing a component that uses a data service.
- `Why?` The details of data management, such as headers, HTTP methods, caching, error handling, and retry logic, are irrelevant to components and other data consumers.

A data service encapsulates these details. It's easier to evolve these details inside the service without affecting its consumers. And it's easier to test the consumers with mock service implementations.

# Lifecycle hooks

Use Lifecycle hooks to tap into important events exposed by Angular.

## Implement lifecycle hook interfaces

### Style 09-01

- `Do` implement the lifecycle hook interfaces.
- `Why?` Lifecycle interfaces prescribe typed method signatures. use those signatures to flag spelling and syntax mistakes.라이프 사이클 인터페이스는 유형이 지정된 메소드 서명을 처 리합니다. 이러한 서명을 사용하여 철자 및 구문 오류를 표시하십시오.

# Appendix

Angular에 유용한 도구 및 팁.

## Codelyzer

### Style A-01

- `Do` 이 가이드를 따르려면 codelyzer를 사용하십시오.
- `Consider` 귀하의 요구에 맞게 규칙을 조정하십시오.

## File templates and snippets

### Style A-02

- `Do` 파일 템플리트 또는 스 니펫을 사용하여 일관된 스타일 및 패턴을 따르십시오. 다음은 웹 개발 편집기 및 IDE에 대한 템플릿 및 스니펫입니다.
- `Consider` 이 스타일과 지침을 따르는 Visual Studio 코드 스니펫 사용.
- `Consider` 이 스타일과 지침을 따르는 Atom을위한 스니펫을 사용합니다.
- `Consider` 이 스타일과 지침을 따르는 숭고한 텍스트를위한 스니펫 (snippets)사용하기.
- `Consider` 이러한 스타일과 지침을 따르는 Vim의 스니펫을 사용합니다.