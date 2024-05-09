// 부모 컴포넌트는 슬롯을 정의할 때 특정 데이터를 하위 컴포넌트의 슬롯에 전달 가능.
// 이 데이터는 슬롯을 사용하는 템플릿 내에서만 접근 가능.

// #append-icon="data"는 명명된 슬롯(append-icon)에 data 객체를 전달
<template #append-icon="data">
