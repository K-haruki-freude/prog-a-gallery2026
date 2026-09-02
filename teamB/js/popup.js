document.addEventListener('DOMContentLoaded', () => {
	const popupLinks = document.querySelectorAll('.js-popup');
	const hamburger = document.getElementById('js-hamburger');
	const navMenu = document.getElementById('js-nav');

	/* ===================================================
	   ポップアップウィンドウの制御 ＋ メニューの自動閉じ
	   =================================================== */
	popupLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			// HTMLの data- 属性から設定値を抽出
			const url = link.dataset.url;
			const name = link.dataset.name;
			const width = parseInt(link.dataset.width, 10) || 1000;
			const height = parseInt(link.dataset.height, 10) || 800;

			// HelpWinOpen関数が存在する場合はそれを呼び出し、無ければ標準window.openを使用
			if (typeof HelpWinOpen === 'function') {
				HelpWinOpen(url, name, width, height);
			} else {
				window.open(url, name, `width=${width},height=${height},resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes`);
			}

			// ポップアップが開いたらナビメニューを自動で閉じる
			if (hamburger && navMenu) {
				hamburger.classList.remove('is-active');
				navMenu.classList.remove('is-active');
			}
		});
	});
});