// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'`

function pyramid(n) {
  const space = ' ';
  const sharp = '#';

  const totalRowCount = n + ( n - 1 );

  let spaceCount = n - 1;
  let sharpCount = 1;

  for ( let i = 0; i < n; i++ ) {
    let resultRow = '';

    let innerSpaceCount = spaceCount;
    let innerSharpCount = sharpCount;

    for ( let j = 0; j < totalRowCount; j++ ) {

      if ( innerSpaceCount !== 0 ) {
        resultRow = resultRow + space;
        innerSpaceCount = innerSpaceCount - 1;
      } else if ( innerSpaceCount === 0 && innerSharpCount !== 0 ) {
        resultRow = resultRow + sharp;
        innerSharpCount = innerSharpCount - 1;
      } else {
        resultRow = resultRow + space;
      }
      
    }

    spaceCount = spaceCount - 1;
    sharpCount = sharpCount + 2;
    console.log( resultRow );
  }
}

// SOLUTION 1.
// function pyramid(n) {
//   const midPoint = Math.floor( ( 2 * n - 1 ) / 2 );

//   for ( let row = 0; row < n; row ++ ) {
//     let level = '';

//     for ( let column = 0; column < 2 * n - 1; column++ ) {
//       if ( midPoint - row <= column && midPoint + row >= column ) { // point!
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log( level );
//   }
// }

// SOLUTION 2.
// function pyramid(n, row=0, level='') {
//   if ( row === n ) return;

//   if ( level.length === 2 * n - 1 ) {
//     console.log( level );
//     return pyramid( n, row + 1 );
//   }

//   const midPoint = Math.floor( ( 2 * n - 1) / 2 );
//   let add;
//   if ( midPoint - row <= level.length && midPoint + row >= level.length ) {
//     add = '#';
//   } else {
//     add = ' ';
//   }

//   pyramid( n, row, level + add );
// }

// function timeTest() {
//   console.time( 'label' );
//   pyramid( 20 );
//   console.timeEnd( 'label' );
// }

// timeTest();

module.exports = pyramid;
