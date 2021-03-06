"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runApp = exports.sum = void 0;

const sum = (a, b) => a + b;

exports.sum = sum;

const runApp = obj => {
  /* eslint-disable */
  const tbl = document.createElement('table');
  const tblHead = document.createElement('th');
  const tblTr = document.createElement('tr');
  const tblTd = document.createElement('td');
  /* eslint-enable */

  tblHead.textContent = 'example';
  tblTd.textContent = 'content';
  tblTr.append(tblTd);
  tblHead.append(tblTr);
  tbl.append(tblHead);
  obj.append(tbl);
  return obj;
};

exports.runApp = runApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kdFRhYmxlLmpzIl0sIm5hbWVzIjpbInN1bSIsImEiLCJiIiwicnVuQXBwIiwib2JqIiwidGJsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGJsSGVhZCIsInRibFRyIiwidGJsVGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBRyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxHQUFHQyxDQUExQjs7OztBQUVBLE1BQU1DLE1BQU0sR0FBSUMsR0FBRCxJQUFTO0FBQ3RCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLFFBQU1HLEtBQUssR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQTs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDRyxXQUFSLEdBQXNCLFNBQXRCO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixTQUFwQjtBQUNBRixFQUFBQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUYsS0FBYjtBQUNBRixFQUFBQSxPQUFPLENBQUNJLE1BQVIsQ0FBZUgsS0FBZjtBQUNBSixFQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBV0osT0FBWDtBQUNBSixFQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBV1AsR0FBWDtBQUNBLFNBQU9ELEdBQVA7QUFDRCxDQWREIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xuXG5jb25zdCBydW5BcHAgPSAob2JqKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGNvbnN0IHRibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IHRibEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBjb25zdCB0YmxUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGNvbnN0IHRibFRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICB0YmxIZWFkLnRleHRDb250ZW50ID0gJ2V4YW1wbGUnO1xuICB0YmxUZC50ZXh0Q29udGVudCA9ICdjb250ZW50JztcbiAgdGJsVHIuYXBwZW5kKHRibFRkKTtcbiAgdGJsSGVhZC5hcHBlbmQodGJsVHIpO1xuICB0YmwuYXBwZW5kKHRibEhlYWQpO1xuICBvYmouYXBwZW5kKHRibCk7XG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnQgeyBzdW0sIHJ1bkFwcCB9O1xuIl19