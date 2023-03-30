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
