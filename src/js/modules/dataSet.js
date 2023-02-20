const dataSet = {
	materialName: [
		'Фундаментный блок ФБС 2-2-3',
		'Террасная доска 36x145 мм',
		'Доска 45x195 мм для тетивы',
		'Доска 45x95 мм для тетивы',
		'Угловая пластина 90x90 мм',
		'Саморезы оцинкованные 4,2x50 мм'
	],
	amounts: [
		'0',
		'0',
		'0',
		'0',
		'0',
		'0'
	],
	prices: [
		'296',
		'167',
		'200',
		'108',
		'108',
		'2'
	],
	units: [
		'шт.',
		'м.п.',
		'м.п.',
		'м.п.',
		'шт.',
		'шт.'
	],
	costs: [
		'0',
		'0',
		'0',
		'0',
		'0',
		'0'
	]
};

const HEIGHT_VALUE_ERROR = 'Введите целое число от 1 до 7';
const LENGTH_VALUE_ERROR = 'Введите целое число от 0 до 6';
const PRICE_ERROR = 'ВВЕДИТЕ ЧИСЛО';
const CURRENCY = 'руб.';

export { dataSet, HEIGHT_VALUE_ERROR, LENGTH_VALUE_ERROR, PRICE_ERROR, CURRENCY };
