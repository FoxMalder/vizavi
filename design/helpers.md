https://codepen.io/avkvak/pen/ppVvjx
https://jsfiddle.net/Ankhena/omuc1b0u/

```css
div {
  width: 90%;
  height: 300px;
  margin: 20px auto;
  background: linear-gradient( 110deg, #00f 50%, transparent 50.2%), url(http://paranormalnews.ru/113/5/019.jpg) no-repeat right top / cover;
}
```

===

```css
.wrap {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 300px;
}

.content {
	position: relative;
	flex: 1 0 auto;
	// background: linear-gradient(180deg, blue 0%, red 100%);
	background-color: red;

	&:after {
		content: '';
		position: absolute;
		display: block;
		height: 100%;
		width: 100px;
		top: 0;
		right: -60px;
		transform: skew(-15deg);
		background: linear-gradient(180deg, blue 0%, red 100%);
		z-index: 1;
	}
}

.image {
	img {
		display: block;
	}
}

.content-inner {
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	z-index: 2;
}

h1 {
	color: white;
	line-height: 1;
	margin: 0;
	padding: 0 20px;
}
```

```html
<div class="wrap">
	<div class="content">
		<div class="content-inner">
			<h1>Some content</h1>
		</div>
	</div>
	<div class="image">
		<img src="http://placehold.it/500x300"/>
	</div>
</div>
```
