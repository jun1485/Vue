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
