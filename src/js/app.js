$(document).ready(() => {
	/* Worry Bar */
	$(".worryText, .areYouText, .dreamText").mouseover(() => {
		$(".worryBar").animate({ width: "90%" });
	});
	$(".worryText, .areYouText, .dreamText").mouseout(() => {
		$(".worryBar").animate({ width: "10%" });
	});

	/* Education Bar */
	$(".eduText").mouseover(() => {
		$(".eduBar").animate({ width: "45%" });
	});
	$(".eduText").mouseout(() => {
		$(".eduBar").animate({ width: "10%" });
	});

	/* Mentor bar */
	$(".menText").mouseover(() => {
		$(".menBar").animate({ width: "45%" });
	});
	$(".menText").mouseout(() => {
		$(".menBar").animate({ width: "10%" });
	});

	/* Empower Bar */
	$(".empText").mouseover(() => {
		$(".empBar").animate({ width: "45%" });
	});
	$(".empText").mouseout(() => {
		$(".empBar").animate({ width: "10%" });
	});
});
