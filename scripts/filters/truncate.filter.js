// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2

angular.module('todoApp').filter('truncate', ['$filter', function($filter) {
    /**Filter for truncating long texts
     * @param  {string} input Value passed to filter
     * @param  {number} limit Limit for adding ellipsis
     */
    return function(input, limit) {
        if (!input) return;
        if (input.length <= limit) {
            return input;
        }

        return $filter('limitTo')(input, limit) + '...';
    };
}]);