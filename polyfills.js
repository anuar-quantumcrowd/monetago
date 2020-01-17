import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import Fill from 'core-js/fn/array/fill'
import Filter from 'core-js/fn/array/filter'
import Find from 'core-js/fn/array/find'
import Includes from 'core-js/fn/array/includes'
import Reduce from 'core-js/fn/array/reduce'
import Keys from 'core-js/fn/object/keys'
import Values from 'core-js/fn/object/values'
import EndsWith from 'core-js/fn/string/ends-with'
import 'core-js/fn/symbol'
import 'core-js/fn/weak-set'
import From from 'core-js/fn/array/from'
import Assign from 'core-js/fn/object/assign'

Array.fill = Fill
Array.filter = Filter
Array.find = Find
Array.from = From
Array.includes = Includes
Array.reduce = Reduce
Object.assign = Assign
Object.keys = Keys
Object.values = Values
String.prototype.endsWith = EndsWith
