// 関数 料理の例
function cut(food) {
	const cutFood = food.slice();
	return cutFood;
}
const cutCarrot = cut(carrot);
const cutPotato = cut(potato);

// 関数 twitterの文字数制限
function isTweetable(text) {
	return text.length <= 140;
}

function alertTweetable(text) {
	if (text.length <= 140) {
		alert("You can tweet");
	}
}

isTweetable("foo");
alertTweetable("foo");

// 匿名関数
// const isTweetable(text) {
//   if (text.length <= 140) {
// 		alert("You can tweet");
// 	}
// }

//　コールバック関数
function unfollow() {
	console.log("フォローを外しました");
}

function cancelTweet() {
	console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
	if (window.confirm("実行しますか？")) {
		fn();
	}
}

confirmed(cancelTweet);
