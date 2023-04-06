<FancyButton>
  클릭하기! <!-- 슬롯 컨텐츠 -->
</FancyButton>

// FancyButton의 템플릿
<button class="fancy-btn">
  <slot></slot> <!-- 슬롯 아울렛 -->
</button>


// 여러 엘리먼트 또는 컴포넌트도 전달 가능.
<FancyButton>
  <span style="color:red">클릭하기!</span>
  <AwesomeIcon name="plus" />
</FancyButton>


// 슬롯 컨텐츠는 부모 컴포넌트에 정의되어 있으므로 부모 컴포넌트의 데이터 범위에 접근 가능.
<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>


// "제출" 텍스트가 <button> 내부에 렌더링.
<button type="submit">
  <slot>
    제출 <!-- 대체 컨텐츠 -->
  </slot>
</button>

// 최종 렌더링 결과.
<button type="submit">제출</button>


// 여러 개의 slot
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<BaseLayout>
  <template v-slot:header>
    <!-- 헤더 슬롯의 컨텐츠 -->
  </template>
</BaseLayout>


// 단축 문법을 사용해 세 개의 슬롯  사용.
<BaseLayout>
  <template #header>
    <h1>다음은 페이지 제목일 수 있습니다.</h1>
  </template>

  <template #default>
    <p>주요 내용에 대한 단락입니다.</p>
    <p>그리고 또 하나.</p>
  </template>

  <template #footer>
    <p>다음은 연락처 정보입니다.</p>
  </template>
</BaseLayout>

:: 최종 렌더링

<div class="container">
  <header>
    <h1>다음은 페이지 제목일 수 있습니다.</h1>
  </header>
  <main>
    <p>주요 내용에 대한 단락입니다.</p>
    <p>그리고 또 하나.</p>
  </main>
  <footer>
    <p>다음은 연락처 정보입니다.</p>
  </footer>
</div>


<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 단축 문법 사용 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>



// 함수의 인자와 마찬가지로, 구조 분해 할당 가능.
MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>
