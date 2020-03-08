import mergeSort, {merge} from './mergeSort';

function testMerge(arr) {
	const cloneSorted = arr.slice();
	cloneSorted.sort((a, b) => a - b);
	merge(arr, new Array(arr.length), 0, arr.length - 1);
  expect(arr).toEqual(cloneSorted);
}

function testMergeSort(arr) {
	const cloneSorted = arr.slice();
	cloneSorted.sort((a, b) => a - b);
	mergeSort(arr);
  expect(arr).toEqual(cloneSorted);
}

test('Merge two sorted halves #1', () => {
	const arr = [2, 5, 1, 9];
	testMerge(arr);
});

test('Merge two sorted halves #2', () => {
	const arr = [2, 4, 5, 1, 3, 9];
	testMerge(arr);
});

test('Merge two sorted halves #3', () => {
	const arr = [2, 4, 5, 6, 1, 3, 8, 9];
	testMerge(arr);
});

test('Merge two sorted halves #4', () => {
	const arr = [2, 4, 4, 5, 6, 1, 3, 3, 8, 9];
	testMerge(arr);
});

test('Test sorting #1', () => {
	const arr = [2, 5, 1, 9];
	testMergeSort(arr);
});

test('Test sorting #2', () => {
	const arr = [1, 0, 1, 9];
	testMergeSort(arr);
});
