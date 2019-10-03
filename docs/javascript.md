---
layout: page
title: ECMAScript
---
# Javascript 2019
## Language 기본
- var
   * function scope
- let
- const
- string에 추가된 method
  * startsWith
  * endsWith
  * includes
- for of - 순회하기
    ```
    var data = [1,2,234];
    data.forEach(function(value){
        console.log(data[value]);
    })
    ```

## IIFE[Immediately Invoked Function Expression]
- "Iffy"라 발음 : 즉시호출함수표현…
    ```
    (function(d){
    let myday = new Date(d);
    myday.setFullYear(myday.getFullYear() + 1);
    return myday;
    })('2018.08.10');
    ```

## Aboute DATE
### 날짜 포맷(yyyymmdd)출력하기(datepicker를 이용하여)
    (function(p_date){
    let startDate = new Date(p_date);
    startDate.setDate(startDate.getDate() + 1);
    return $.datepicker.formatDate('yy.mm.dd', startDate);
    })("2018.09.12")

### 말일 구하기
    (function(day){
        let lastday = new Date(day.substring(0,4), day.substring(4,6)-1+1, 0);
        return $.datepicker.formatDate('yymmdd', lastday);
    })(getStdDate())

### 날짜 더하기
    ((new Date()).getFullYear() + 1) + ".12.31"
