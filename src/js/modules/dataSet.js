const dataSet = {
	materialName: [
		'Foundation blocks 2-2-4',
		'Decking board 36x145 mm',
		'Support board 45x195 mm',
		'Support board  45x95 mm',
		'Metal corner 90x90 mm',
		'Screws 4,2x50 mm'
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
		'325',
		'168',
		'200',
		'100',
		'108',
		'2'
	],
	units: [
		'pc',
		'm',
		'm',
		'm',
		'pc',
		'pc'
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

const HEIGHT_VALUE_ERROR = 'Enter whole number from 1 to 7';
const LENGTH_VALUE_ERROR = 'Length must be a number from 0 to 6';
const PRICE_ERROR = 'Price must be a number';
const CURRENCY = '$';

export { dataSet, HEIGHT_VALUE_ERROR, LENGTH_VALUE_ERROR, PRICE_ERROR, CURRENCY };
