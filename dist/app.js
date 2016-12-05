webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var app_module_1 = __webpack_require__(23);
	__webpack_require__(496);
	if (false) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
	    .then(function (success) { return console.log("Bootstrap success"); })
	    .catch(function (err) { return console.error(err); });


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(28);
	var ng_bootstrap_1 = __webpack_require__(29);
	var app_routing_1 = __webpack_require__(37);
	var app_component_1 = __webpack_require__(474);
	var login_component_1 = __webpack_require__(70);
	var start_page_component_1 = __webpack_require__(102);
	var admin_start_page_component_ts_1 = __webpack_require__(105);
	var statistic_component_1 = __webpack_require__(428);
	var subject_component_1 = __webpack_require__(112);
	var test_component_1 = __webpack_require__(137);
	var timetable_component_1 = __webpack_require__(455);
	var faculty_component_1 = __webpack_require__(413);
	var group_component_1 = __webpack_require__(431);
	var group_timetable_component_1 = __webpack_require__(434);
	var group_result_component_1 = __webpack_require__(438);
	var group_test_result_component_1 = __webpack_require__(441);
	var speciality_component_1 = __webpack_require__(446);
	var admin_user_component_1 = __webpack_require__(444);
	var student_component_1 = __webpack_require__(449);
	var auth_admin_guard_ts_1 = __webpack_require__(68);
	var auth_student_guard_ts_1 = __webpack_require__(69);
	var login_service_1 = __webpack_require__(72);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var student_profile_component_1 = __webpack_require__(452);
	var entity_bar_component_1 = __webpack_require__(475);
	var table_component_1 = __webpack_require__(478);
	var info_modal_component_1 = __webpack_require__(73);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var test_detail_component_1 = __webpack_require__(457);
	var question_component_1 = __webpack_require__(459);
	var answer_component_1 = __webpack_require__(462);
	var tests_tabset_component_1 = __webpack_require__(481);
	var test_player_component_1 = __webpack_require__(469);
	var user_profile_component_1 = __webpack_require__(466);
	var group_service_1 = __webpack_require__(435);
	var test_player_service_1 = __webpack_require__(470);
	var test_list_component_1 = __webpack_require__(483);
	var test_list_shedule_component_1 = __webpack_require__(487);
	var test_bar_component_1 = __webpack_require__(489);
	var alert_component_1 = __webpack_require__(492);
	var common_service_1 = __webpack_require__(96);
	var test_results_component_1 = __webpack_require__(494);
	var not_found_component_1 = __webpack_require__(108);
	var test_player_guard_1 = __webpack_require__(473);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                http_1.HttpModule,
	                ng_bootstrap_1.NgbModule.forRoot(),
	                forms_1.ReactiveFormsModule,
	                app_routing_1.routing
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                login_component_1.LoginComponent,
	                subject_component_1.SubjectComponent,
	                start_page_component_1.StartPageComponent,
	                admin_start_page_component_ts_1.AdminStartPageComponent,
	                faculty_component_1.FacultyComponent,
	                statistic_component_1.StatisticComponent,
	                group_component_1.GroupComponent,
	                group_timetable_component_1.GroupTimetableComponent,
	                group_result_component_1.GroupResultComponent,
	                group_test_result_component_1.GroupTestResultComponent,
	                admin_user_component_1.AdminUserComponent,
	                speciality_component_1.SpecialityComponent,
	                student_component_1.StudentComponent,
	                student_profile_component_1.StudentProfileComponent,
	                entity_bar_component_1.EntityBarComponent,
	                table_component_1.TableComponent,
	                info_modal_component_1.InfoModalComponent,
	                modal_add_edit_component_1.ModalAddEditComponent,
	                test_component_1.TestComponent,
	                tests_tabset_component_1.TestsTabsetComponent,
	                test_player_component_1.TestPlayerComponent,
	                user_profile_component_1.UserProfileComponent,
	                timetable_component_1.TimeTableComponent,
	                test_detail_component_1.TestDetailComponent,
	                question_component_1.QuestionComponent,
	                answer_component_1.AnswerComponent,
	                test_list_component_1.TestListComponent,
	                test_list_shedule_component_1.TestListSheduleComponent,
	                test_bar_component_1.TestBarComponent,
	                alert_component_1.NgbdAlertSelfclosing,
	                test_results_component_1.StudentTestResultsComponent,
	                not_found_component_1.NotFoundComponent
	            ],
	            providers: [
	                login_service_1.LoginService,
	                crud_service_1.CRUDService,
	                group_service_1.GroupService,
	                subject_service_1.SubjectService,
	                http_1.HttpModule,
	                auth_admin_guard_ts_1.AuthAdminGuard,
	                auth_student_guard_ts_1.AuthStudentGuard,
	                test_player_guard_1.TestPlayerGuard,
	                test_player_service_1.TestPlayerService,
	                common_service_1.CommonService
	            ],
	            entryComponents: [modal_add_edit_component_1.ModalAddEditComponent, info_modal_component_1.InfoModalComponent],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.2.3
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(25), __webpack_require__(4), __webpack_require__(5), __webpack_require__(26)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return flat.concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var isPromise = _angular_core.__core_private__.isPromise;
	
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var regex;
	            var regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());
	
	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	
	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a range value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="range" [(ngModel)]="age" >
	     *  ```
	     */
	    var RangeValueAccessor = (function () {
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return RangeValueAccessor;
	    }());
	
	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(name) || null;
	            }
	            return null;
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             * The parent control.
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     * You can't use the value key without the disabled key; both are required
	     * to use this way of initialization.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last: 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? this.form.get(path) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? extra['validator'] : null;
	            var asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());
	
	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus,
	        NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(3), __webpack_require__(22), __webpack_require__(24), __webpack_require__(5), __webpack_require__(30), __webpack_require__(33), __webpack_require__(35));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/common", "@angular/forms", "rxjs/Observable", "rxjs/add/observable/fromEvent", "rxjs/add/operator/do", "rxjs/add/operator/let"], factory);
		else if(typeof exports === 'object')
			exports["ngb"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("rxjs/add/observable/fromEvent"), require("rxjs/add/operator/do"), require("rxjs/add/operator/let"));
		else
			root["ngb"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["forms"], root["Rx"], root["Rx"]["Observable"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var accordion_module_1 = __webpack_require__(2);
		var alert_module_1 = __webpack_require__(7);
		var radio_module_1 = __webpack_require__(10);
		var carousel_module_1 = __webpack_require__(13);
		var collapse_module_1 = __webpack_require__(16);
		var datepicker_module_1 = __webpack_require__(18);
		var dropdown_module_1 = __webpack_require__(33);
		var modal_module_1 = __webpack_require__(36);
		var pagination_module_1 = __webpack_require__(45);
		var popover_module_1 = __webpack_require__(48);
		var progressbar_module_1 = __webpack_require__(52);
		var rating_module_1 = __webpack_require__(55);
		var tabset_module_1 = __webpack_require__(58);
		var timepicker_module_1 = __webpack_require__(61);
		var tooltip_module_1 = __webpack_require__(65);
		var typeahead_module_1 = __webpack_require__(68);
		var accordion_module_2 = __webpack_require__(2);
		exports.NgbAccordionModule = accordion_module_2.NgbAccordionModule;
		exports.NgbAccordionConfig = accordion_module_2.NgbAccordionConfig;
		var alert_module_2 = __webpack_require__(7);
		exports.NgbAlertModule = alert_module_2.NgbAlertModule;
		exports.NgbAlertConfig = alert_module_2.NgbAlertConfig;
		var radio_module_2 = __webpack_require__(10);
		exports.NgbButtonsModule = radio_module_2.NgbButtonsModule;
		var carousel_module_2 = __webpack_require__(13);
		exports.NgbCarouselModule = carousel_module_2.NgbCarouselModule;
		exports.NgbCarouselConfig = carousel_module_2.NgbCarouselConfig;
		var collapse_module_2 = __webpack_require__(16);
		exports.NgbCollapseModule = collapse_module_2.NgbCollapseModule;
		var datepicker_module_2 = __webpack_require__(18);
		exports.NgbDatepickerModule = datepicker_module_2.NgbDatepickerModule;
		exports.NgbDatepickerI18n = datepicker_module_2.NgbDatepickerI18n;
		exports.NgbDatepickerConfig = datepicker_module_2.NgbDatepickerConfig;
		exports.NgbDateParserFormatter = datepicker_module_2.NgbDateParserFormatter;
		var dropdown_module_2 = __webpack_require__(33);
		exports.NgbDropdownModule = dropdown_module_2.NgbDropdownModule;
		exports.NgbDropdownConfig = dropdown_module_2.NgbDropdownConfig;
		var modal_module_2 = __webpack_require__(36);
		exports.NgbModalModule = modal_module_2.NgbModalModule;
		exports.NgbModal = modal_module_2.NgbModal;
		exports.NgbActiveModal = modal_module_2.NgbActiveModal;
		exports.NgbModalRef = modal_module_2.NgbModalRef;
		exports.ModalDismissReasons = modal_module_2.ModalDismissReasons;
		var pagination_module_2 = __webpack_require__(45);
		exports.NgbPaginationModule = pagination_module_2.NgbPaginationModule;
		exports.NgbPaginationConfig = pagination_module_2.NgbPaginationConfig;
		var popover_module_2 = __webpack_require__(48);
		exports.NgbPopoverModule = popover_module_2.NgbPopoverModule;
		exports.NgbPopoverConfig = popover_module_2.NgbPopoverConfig;
		var progressbar_module_2 = __webpack_require__(52);
		exports.NgbProgressbarModule = progressbar_module_2.NgbProgressbarModule;
		exports.NgbProgressbarConfig = progressbar_module_2.NgbProgressbarConfig;
		var rating_module_2 = __webpack_require__(55);
		exports.NgbRatingModule = rating_module_2.NgbRatingModule;
		exports.NgbRatingConfig = rating_module_2.NgbRatingConfig;
		var tabset_module_2 = __webpack_require__(58);
		exports.NgbTabsetModule = tabset_module_2.NgbTabsetModule;
		exports.NgbTabsetConfig = tabset_module_2.NgbTabsetConfig;
		var timepicker_module_2 = __webpack_require__(61);
		exports.NgbTimepickerModule = timepicker_module_2.NgbTimepickerModule;
		exports.NgbTimepickerConfig = timepicker_module_2.NgbTimepickerConfig;
		var tooltip_module_2 = __webpack_require__(65);
		exports.NgbTooltipModule = tooltip_module_2.NgbTooltipModule;
		exports.NgbTooltipConfig = tooltip_module_2.NgbTooltipConfig;
		var typeahead_module_2 = __webpack_require__(68);
		exports.NgbTypeaheadModule = typeahead_module_2.NgbTypeaheadModule;
		exports.NgbTypeaheadConfig = typeahead_module_2.NgbTypeaheadConfig;
		var NGB_MODULES = [
		    accordion_module_1.NgbAccordionModule, alert_module_1.NgbAlertModule, radio_module_1.NgbButtonsModule, carousel_module_1.NgbCarouselModule, collapse_module_1.NgbCollapseModule, datepicker_module_1.NgbDatepickerModule,
		    dropdown_module_1.NgbDropdownModule, modal_module_1.NgbModalModule, pagination_module_1.NgbPaginationModule, popover_module_1.NgbPopoverModule, progressbar_module_1.NgbProgressbarModule, rating_module_1.NgbRatingModule,
		    tabset_module_1.NgbTabsetModule, timepicker_module_1.NgbTimepickerModule, tooltip_module_1.NgbTooltipModule, typeahead_module_1.NgbTypeaheadModule
		];
		var NgbRootModule = (function () {
		    function NgbRootModule() {
		    }
		    NgbRootModule = __decorate([
		        core_1.NgModule({
		            imports: [
		                alert_module_1.NgbAlertModule.forRoot(), radio_module_1.NgbButtonsModule.forRoot(), collapse_module_1.NgbCollapseModule.forRoot(), progressbar_module_1.NgbProgressbarModule.forRoot(),
		                tooltip_module_1.NgbTooltipModule.forRoot(), typeahead_module_1.NgbTypeaheadModule.forRoot(), accordion_module_1.NgbAccordionModule.forRoot(), carousel_module_1.NgbCarouselModule.forRoot(),
		                datepicker_module_1.NgbDatepickerModule.forRoot(), dropdown_module_1.NgbDropdownModule.forRoot(), modal_module_1.NgbModalModule.forRoot(), pagination_module_1.NgbPaginationModule.forRoot(),
		                popover_module_1.NgbPopoverModule.forRoot(), progressbar_module_1.NgbProgressbarModule.forRoot(), rating_module_1.NgbRatingModule.forRoot(), tabset_module_1.NgbTabsetModule.forRoot(),
		                timepicker_module_1.NgbTimepickerModule.forRoot(), tooltip_module_1.NgbTooltipModule.forRoot()
		            ],
		            exports: NGB_MODULES
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbRootModule);
		    return NgbRootModule;
		}());
		exports.NgbRootModule = NgbRootModule;
		var NgbModule = (function () {
		    function NgbModule() {
		    }
		    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
		    NgbModule = __decorate([
		        core_1.NgModule({ imports: NGB_MODULES, exports: NGB_MODULES }), 
		        __metadata('design:paramtypes', [])
		    ], NgbModule);
		    return NgbModule;
		}());
		exports.NgbModule = NgbModule;
		//# sourceMappingURL=index.js.map
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var accordion_1 = __webpack_require__(4);
		var accordion_config_1 = __webpack_require__(6);
		var accordion_2 = __webpack_require__(4);
		exports.NgbAccordion = accordion_2.NgbAccordion;
		exports.NgbPanel = accordion_2.NgbPanel;
		exports.NgbPanelTitle = accordion_2.NgbPanelTitle;
		exports.NgbPanelContent = accordion_2.NgbPanelContent;
		var accordion_config_2 = __webpack_require__(6);
		exports.NgbAccordionConfig = accordion_config_2.NgbAccordionConfig;
		var NGB_ACCORDION_DIRECTIVES = [accordion_1.NgbAccordion, accordion_1.NgbPanel, accordion_1.NgbPanelTitle, accordion_1.NgbPanelContent];
		var NgbAccordionModule = (function () {
		    function NgbAccordionModule() {
		    }
		    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [accordion_config_1.NgbAccordionConfig] }; };
		    NgbAccordionModule = __decorate([
		        core_1.NgModule({ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbAccordionModule);
		    return NgbAccordionModule;
		}());
		exports.NgbAccordionModule = NgbAccordionModule;
		//# sourceMappingURL=accordion.module.js.map
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var accordion_config_1 = __webpack_require__(6);
		var nextId = 0;
		/**
		 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
		 */
		var NgbPanelTitle = (function () {
		    function NgbPanelTitle(templateRef) {
		        this.templateRef = templateRef;
		    }
		    NgbPanelTitle = __decorate([
		        core_1.Directive({ selector: 'template[ngbPanelTitle]' }), 
		        __metadata('design:paramtypes', [core_1.TemplateRef])
		    ], NgbPanelTitle);
		    return NgbPanelTitle;
		}());
		exports.NgbPanelTitle = NgbPanelTitle;
		/**
		 * This directive must be used to wrap accordion panel content.
		 */
		var NgbPanelContent = (function () {
		    function NgbPanelContent(templateRef) {
		        this.templateRef = templateRef;
		    }
		    NgbPanelContent = __decorate([
		        core_1.Directive({ selector: 'template[ngbPanelContent]' }), 
		        __metadata('design:paramtypes', [core_1.TemplateRef])
		    ], NgbPanelContent);
		    return NgbPanelContent;
		}());
		exports.NgbPanelContent = NgbPanelContent;
		/**
		 * The NgbPanel directive represents an in individual panel with the title and collapsible
		 * content
		 */
		var NgbPanel = (function () {
		    function NgbPanel() {
		        /**
		         *  A flag determining whether the panel is disabled or not.
		         *  When disabled, the panel cannot be toggled.
		         */
		        this.disabled = false;
		        /**
		         *  An optional id for the panel. The id should be unique.
		         *  If not provided, it will be auto-generated.
		         */
		        this.id = "ngb-panel-" + nextId++;
		    }
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPanel.prototype, "disabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPanel.prototype, "id", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPanel.prototype, "title", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPanel.prototype, "type", void 0);
		    __decorate([
		        core_1.ContentChild(NgbPanelContent), 
		        __metadata('design:type', NgbPanelContent)
		    ], NgbPanel.prototype, "contentTpl", void 0);
		    __decorate([
		        core_1.ContentChild(NgbPanelTitle), 
		        __metadata('design:type', NgbPanelTitle)
		    ], NgbPanel.prototype, "titleTpl", void 0);
		    NgbPanel = __decorate([
		        core_1.Directive({ selector: 'ngb-panel' }), 
		        __metadata('design:paramtypes', [])
		    ], NgbPanel);
		    return NgbPanel;
		}());
		exports.NgbPanel = NgbPanel;
		/**
		 * The NgbAccordion directive is a collection of panels.
		 * It can assure that only panel can be opened at a time.
		 */
		var NgbAccordion = (function () {
		    function NgbAccordion(config) {
		        /**
		         * An array or comma separated strings of panel identifiers that should be opened
		         */
		        this.activeIds = [];
		        /**
		         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
		         */
		        this.panelChange = new core_1.EventEmitter();
		        /**
		         * A map that stores each panel state
		         */
		        this._states = new Map();
		        /**
		         * A map that stores references to all panels
		         */
		        this._panelRefs = new Map();
		        this.type = config.type;
		        this.closeOtherPanels = config.closeOthers;
		    }
		    /**
		     * Programmatically toggle a panel with a given id.
		     */
		    NgbAccordion.prototype.toggle = function (panelId) {
		        var panel = this._panelRefs.get(panelId);
		        if (panel && !panel.disabled) {
		            var nextState = !this._states.get(panelId);
		            var defaultPrevented_1 = false;
		            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
		            if (!defaultPrevented_1) {
		                this._states.set(panelId, nextState);
		                if (this.closeOtherPanels) {
		                    this._closeOthers(panelId);
		                }
		                this._updateActiveIds();
		            }
		        }
		    };
		    NgbAccordion.prototype.ngAfterContentChecked = function () {
		        // active id updates
		        if (util_1.isString(this.activeIds)) {
		            this.activeIds = this.activeIds.split(/\s*,\s*/);
		        }
		        this._updateStates();
		        // closeOthers updates
		        if (this.activeIds.length > 1 && this.closeOtherPanels) {
		            this._closeOthers(this.activeIds[0]);
		            this._updateActiveIds();
		        }
		    };
		    /**
		     * @internal
		     */
		    NgbAccordion.prototype.isOpen = function (panelId) { return this._states.get(panelId); };
		    NgbAccordion.prototype._closeOthers = function (panelId) {
		        var _this = this;
		        this._states.forEach(function (state, id) {
		            if (id !== panelId) {
		                _this._states.set(id, false);
		            }
		        });
		    };
		    NgbAccordion.prototype._updateActiveIds = function () {
		        var _this = this;
		        this.activeIds =
		            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
		    };
		    NgbAccordion.prototype._updateStates = function () {
		        var _this = this;
		        this._states.clear();
		        this._panelRefs.clear();
		        this.panels.toArray().forEach(function (panel) {
		            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
		            _this._panelRefs.set(panel.id, panel);
		        });
		    };
		    __decorate([
		        core_1.ContentChildren(NgbPanel), 
		        __metadata('design:type', core_1.QueryList)
		    ], NgbAccordion.prototype, "panels", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbAccordion.prototype, "activeIds", void 0);
		    __decorate([
		        core_1.Input('closeOthers'), 
		        __metadata('design:type', Boolean)
		    ], NgbAccordion.prototype, "closeOtherPanels", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbAccordion.prototype, "type", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbAccordion.prototype, "panelChange", void 0);
		    NgbAccordion = __decorate([
		        core_1.Component({
		            selector: 'ngb-accordion',
		            exportAs: 'ngbAccordion',
		            template: "\n  <div class=\"card\">\n    <template ngFor let-panel [ngForOf]=\"panels\">\n      <div [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n        <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\">\n          {{panel.title}}<template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></template>\n        </a>\n      </div>\n      <div class=\"card-block\" *ngIf=\"isOpen(panel.id)\">\n        <template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></template>\n      </div>\n    </template>\n  </div>\n"
		        }), 
		        __metadata('design:paramtypes', [accordion_config_1.NgbAccordionConfig])
		    ], NgbAccordion);
		    return NgbAccordion;
		}());
		exports.NgbAccordion = NgbAccordion;
		//# sourceMappingURL=accordion.js.map
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
		function toInteger(value) {
		    return parseInt("" + value, 10);
		}
		exports.toInteger = toInteger;
		function toString(value) {
		    return (value !== undefined && value !== null) ? "" + value : '';
		}
		exports.toString = toString;
		function getValueInRange(value, max, min) {
		    if (min === void 0) { min = 0; }
		    return Math.max(Math.min(value, max), min);
		}
		exports.getValueInRange = getValueInRange;
		function isString(value) {
		    return typeof value === 'string';
		}
		exports.isString = isString;
		function isNumber(value) {
		    return !isNaN(toInteger(value));
		}
		exports.isNumber = isNumber;
		function isDefined(value) {
		    return value !== undefined && value !== null;
		}
		exports.isDefined = isDefined;
		function padNumber(value) {
		    if (isNumber(value)) {
		        return ("0" + value).slice(-2);
		    }
		    else {
		        return '';
		    }
		}
		exports.padNumber = padNumber;
		function regExpEscape(text) {
		    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
		}
		exports.regExpEscape = regExpEscape;
		//# sourceMappingURL=util.js.map
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbAccordion component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the accordions used in the application.
		 */
		var NgbAccordionConfig = (function () {
		    function NgbAccordionConfig() {
		        this.closeOthers = false;
		    }
		    NgbAccordionConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbAccordionConfig);
		    return NgbAccordionConfig;
		}());
		exports.NgbAccordionConfig = NgbAccordionConfig;
		//# sourceMappingURL=accordion-config.js.map
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var alert_1 = __webpack_require__(8);
		var alert_config_1 = __webpack_require__(9);
		var alert_2 = __webpack_require__(8);
		exports.NgbAlert = alert_2.NgbAlert;
		var alert_config_2 = __webpack_require__(9);
		exports.NgbAlertConfig = alert_config_2.NgbAlertConfig;
		var NgbAlertModule = (function () {
		    function NgbAlertModule() {
		    }
		    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [alert_config_1.NgbAlertConfig] }; };
		    NgbAlertModule = __decorate([
		        core_1.NgModule({ declarations: [alert_1.NgbAlert], exports: [alert_1.NgbAlert], imports: [common_1.CommonModule], entryComponents: [alert_1.NgbAlert] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbAlertModule);
		    return NgbAlertModule;
		}());
		exports.NgbAlertModule = NgbAlertModule;
		//# sourceMappingURL=alert.module.js.map
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var alert_config_1 = __webpack_require__(9);
		/**
		 * Alerts can be used to provide feedback messages.
		 */
		var NgbAlert = (function () {
		    function NgbAlert(config) {
		        /**
		         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
		         */
		        this.close = new core_1.EventEmitter();
		        this.dismissible = config.dismissible;
		        this.type = config.type;
		    }
		    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbAlert.prototype, "dismissible", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbAlert.prototype, "type", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbAlert.prototype, "close", void 0);
		    NgbAlert = __decorate([
		        core_1.Component({
		            selector: 'ngb-alert',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            template: "\n    <div [class]=\"'alert alert-' + type\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
		        }), 
		        __metadata('design:paramtypes', [alert_config_1.NgbAlertConfig])
		    ], NgbAlert);
		    return NgbAlert;
		}());
		exports.NgbAlert = NgbAlert;
		//# sourceMappingURL=alert.js.map
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbAlert component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the alerts used in the application.
		 */
		var NgbAlertConfig = (function () {
		    function NgbAlertConfig() {
		        this.dismissible = true;
		        this.type = 'warning';
		    }
		    NgbAlertConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbAlertConfig);
		    return NgbAlertConfig;
		}());
		exports.NgbAlertConfig = NgbAlertConfig;
		//# sourceMappingURL=alert-config.js.map
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var radio_1 = __webpack_require__(11);
		var radio_2 = __webpack_require__(11);
		exports.NgbRadio = radio_2.NgbRadio;
		exports.NgbActiveLabel = radio_2.NgbActiveLabel;
		exports.NgbRadioGroup = radio_2.NgbRadioGroup;
		var NGB_RADIO_DIRECTIVES = [radio_1.NgbRadio, radio_1.NgbActiveLabel, radio_1.NgbRadioGroup];
		var NgbButtonsModule = (function () {
		    function NgbButtonsModule() {
		    }
		    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
		    NgbButtonsModule = __decorate([
		        core_1.NgModule({ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES }), 
		        __metadata('design:paramtypes', [])
		    ], NgbButtonsModule);
		    return NgbButtonsModule;
		}());
		exports.NgbButtonsModule = NgbButtonsModule;
		//# sourceMappingURL=radio.module.js.map
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var __param = (this && this.__param) || function (paramIndex, decorator) {
		    return function (target, key) { decorator(target, key, paramIndex); }
		};
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(12);
		var NGB_RADIO_VALUE_ACCESSOR = {
		    provide: forms_1.NG_VALUE_ACCESSOR,
		    useExisting: core_1.forwardRef(function () { return NgbRadioGroup; }),
		    multi: true
		};
		/**
		 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
		 * specified via ngModel.
		 */
		var NgbRadioGroup = (function () {
		    function NgbRadioGroup() {
		        this._radios = new Set();
		        this._value = null;
		        this.onChange = function (_) { };
		        this.onTouched = function () { };
		    }
		    NgbRadioGroup.prototype.onRadioChange = function (radio) {
		        this.writeValue(radio.value);
		        this.onChange(radio.value);
		    };
		    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadios(); };
		    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
		    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
		    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
		    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
		        this._disabled = isDisabled;
		        this._updateRadios();
		    };
		    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
		    NgbRadioGroup.prototype.writeValue = function (value) {
		        this._value = value;
		        this._updateRadios();
		    };
		    NgbRadioGroup.prototype._updateRadios = function () {
		        var _this = this;
		        this._radios.forEach(function (radio) { return radio.update(_this._value, _this._disabled); });
		    };
		    NgbRadioGroup = __decorate([
		        core_1.Directive({
		            selector: '[ngbRadioGroup]',
		            host: { 'data-toggle': 'buttons', 'class': 'btn-group' },
		            providers: [NGB_RADIO_VALUE_ACCESSOR]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbRadioGroup);
		    return NgbRadioGroup;
		}());
		exports.NgbRadioGroup = NgbRadioGroup;
		var NgbActiveLabel = (function () {
		    function NgbActiveLabel(_renderer, _elRef) {
		        this._renderer = _renderer;
		        this._elRef = _elRef;
		    }
		    Object.defineProperty(NgbActiveLabel.prototype, "active", {
		        set: function (isActive) { this._renderer.setElementClass(this._elRef.nativeElement, 'active', isActive); },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(NgbActiveLabel.prototype, "disabled", {
		        set: function (isDisabled) {
		            this._renderer.setElementClass(this._elRef.nativeElement, 'disabled', isDisabled);
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(NgbActiveLabel.prototype, "focused", {
		        set: function (isFocused) { this._renderer.setElementClass(this._elRef.nativeElement, 'focus', isFocused); },
		        enumerable: true,
		        configurable: true
		    });
		    NgbActiveLabel = __decorate([
		        core_1.Directive({ selector: 'label.btn' }), 
		        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
		    ], NgbActiveLabel);
		    return NgbActiveLabel;
		}());
		exports.NgbActiveLabel = NgbActiveLabel;
		/**
		 * Marks an input of type "radio" as part of the NgbRadioGroup.
		 */
		var NgbRadio = (function () {
		    function NgbRadio(_group, _label, _renderer, _element) {
		        this._group = _group;
		        this._label = _label;
		        this._renderer = _renderer;
		        this._element = _element;
		        this._value = null;
		        if (this._group) {
		            this._group.register(this);
		        }
		    }
		    Object.defineProperty(NgbRadio.prototype, "value", {
		        get: function () { return this._value; },
		        /**
		         * You can specify model value of a given radio by binding to the value property.
		        */
		        set: function (value) {
		            this._value = value;
		            var stringValue = value ? value.toString() : '';
		            this._renderer.setElementProperty(this._element.nativeElement, 'value', stringValue);
		            if (this._group) {
		                this._group.onRadioValueUpdate();
		            }
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(NgbRadio.prototype, "checked", {
		        get: function () { return this._checked; },
		        set: function (value) {
		            this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(NgbRadio.prototype, "disabled", {
		        get: function () { return this._disabled; },
		        set: function (value) {
		            this._disabled = this._element.nativeElement.hasAttribute('disabled') ? true : value;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(NgbRadio.prototype, "focused", {
		        set: function (isFocused) {
		            if (this._label) {
		                this._label.focused = isFocused;
		            }
		        },
		        enumerable: true,
		        configurable: true
		    });
		    NgbRadio.prototype.ngOnDestroy = function () {
		        if (this._group) {
		            this._group.unregister(this);
		        }
		    };
		    NgbRadio.prototype.onChange = function () {
		        if (this._group) {
		            this._group.onRadioChange(this);
		        }
		    };
		    NgbRadio.prototype.update = function (value, isDisabled) {
		        this._checked = (this.value === value && value !== null);
		        this._disabled = isDisabled;
		        this._label.active = this._checked;
		        this._label.disabled = this._disabled;
		    };
		    __decorate([
		        core_1.Input('value'), 
		        __metadata('design:type', Object), 
		        __metadata('design:paramtypes', [Object])
		    ], NgbRadio.prototype, "value", null);
		    __decorate([
		        core_1.Input('checked'), 
		        __metadata('design:type', Object), 
		        __metadata('design:paramtypes', [Object])
		    ], NgbRadio.prototype, "checked", null);
		    __decorate([
		        core_1.Input('disabled'), 
		        __metadata('design:type', Object), 
		        __metadata('design:paramtypes', [Object])
		    ], NgbRadio.prototype, "disabled", null);
		    NgbRadio = __decorate([
		        core_1.Directive({
		            selector: 'input[type=radio]',
		            host: {
		                '[checked]': 'checked',
		                '[disabled]': 'disabled',
		                '(change)': 'onChange()',
		                '(focus)': 'focused = true',
		                '(blur)': 'focused = false'
		            }
		        }),
		        __param(0, core_1.Optional()),
		        __param(1, core_1.Optional()), 
		        __metadata('design:paramtypes', [NgbRadioGroup, NgbActiveLabel, core_1.Renderer, core_1.ElementRef])
		    ], NgbRadio);
		    return NgbRadio;
		}());
		exports.NgbRadio = NgbRadio;
		//# sourceMappingURL=radio.js.map
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_12__;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var carousel_1 = __webpack_require__(14);
		var carousel_config_1 = __webpack_require__(15);
		var carousel_2 = __webpack_require__(14);
		exports.NgbCarousel = carousel_2.NgbCarousel;
		exports.NgbSlide = carousel_2.NgbSlide;
		var carousel_config_2 = __webpack_require__(15);
		exports.NgbCarouselConfig = carousel_config_2.NgbCarouselConfig;
		var NgbCarouselModule = (function () {
		    function NgbCarouselModule() {
		    }
		    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [carousel_config_1.NgbCarouselConfig] }; };
		    NgbCarouselModule = __decorate([
		        core_1.NgModule({ declarations: carousel_1.NGB_CAROUSEL_DIRECTIVES, exports: carousel_1.NGB_CAROUSEL_DIRECTIVES, imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbCarouselModule);
		    return NgbCarouselModule;
		}());
		exports.NgbCarouselModule = NgbCarouselModule;
		//# sourceMappingURL=carousel.module.js.map
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var carousel_config_1 = __webpack_require__(15);
		var nextId = 0;
		/**
		 * Represents an individual slide to be used within a carousel.
		 */
		var NgbSlide = (function () {
		    function NgbSlide(tplRef) {
		        this.tplRef = tplRef;
		        /**
		         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
		         * Will be auto-generated if not provided.
		         */
		        this.id = "ngb-slide-" + nextId++;
		    }
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbSlide.prototype, "id", void 0);
		    NgbSlide = __decorate([
		        core_1.Directive({ selector: 'template[ngbSlide]' }), 
		        __metadata('design:paramtypes', [core_1.TemplateRef])
		    ], NgbSlide);
		    return NgbSlide;
		}());
		exports.NgbSlide = NgbSlide;
		/**
		 * Directive to easily create carousels based on Bootstrap's markup.
		 */
		var NgbCarousel = (function () {
		    function NgbCarousel(config) {
		        this.interval = config.interval;
		        this.wrap = config.wrap;
		        this.keyboard = config.keyboard;
		    }
		    NgbCarousel.prototype.ngAfterContentChecked = function () {
		        var activeSlide = this._getSlideById(this.activeId);
		        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
		    };
		    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
		    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
		    /**
		     * Navigate to a slide with the specified identifier.
		     */
		    NgbCarousel.prototype.select = function (slideId) {
		        this.cycleToSelected(slideId);
		        this._restartTimer();
		    };
		    /**
		     * Navigate to the next slide.
		     */
		    NgbCarousel.prototype.prev = function () {
		        this.cycleToPrev();
		        this._restartTimer();
		    };
		    /**
		     * Navigate to the next slide.
		     */
		    NgbCarousel.prototype.next = function () {
		        this.cycleToNext();
		        this._restartTimer();
		    };
		    /**
		     * Stops the carousel from cycling through items.
		     */
		    NgbCarousel.prototype.pause = function () { this._stopTimer(); };
		    /**
		     * Restarts cycling through the carousel slides from left to right.
		     */
		    NgbCarousel.prototype.cycle = function () { this._startTimer(); };
		    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId)); };
		    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId)); };
		    NgbCarousel.prototype.cycleToSelected = function (slideIdx) {
		        var selectedSlide = this._getSlideById(slideIdx);
		        if (selectedSlide) {
		            this.activeId = selectedSlide.id;
		        }
		    };
		    NgbCarousel.prototype.keyPrev = function () {
		        if (this.keyboard) {
		            this.prev();
		        }
		    };
		    NgbCarousel.prototype.keyNext = function () {
		        if (this.keyboard) {
		            this.next();
		        }
		    };
		    NgbCarousel.prototype._restartTimer = function () {
		        this._stopTimer();
		        this._startTimer();
		    };
		    NgbCarousel.prototype._startTimer = function () {
		        var _this = this;
		        if (this.interval > 0) {
		            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
		        }
		    };
		    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
		    NgbCarousel.prototype._getSlideById = function (slideId) {
		        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
		        return slideWithId.length ? slideWithId[0] : null;
		    };
		    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
		        return this.slides.toArray().indexOf(this._getSlideById(slideId));
		    };
		    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
		        var slideArr = this.slides.toArray();
		        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
		        var isLastSlide = currentSlideIdx === slideArr.length - 1;
		        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
		            slideArr[currentSlideIdx + 1].id;
		    };
		    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
		        var slideArr = this.slides.toArray();
		        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
		        var isFirstSlide = currentSlideIdx === 0;
		        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
		            slideArr[currentSlideIdx - 1].id;
		    };
		    __decorate([
		        core_1.ContentChildren(NgbSlide), 
		        __metadata('design:type', core_1.QueryList)
		    ], NgbCarousel.prototype, "slides", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbCarousel.prototype, "interval", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbCarousel.prototype, "wrap", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbCarousel.prototype, "keyboard", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbCarousel.prototype, "activeId", void 0);
		    NgbCarousel = __decorate([
		        core_1.Component({
		            selector: 'ngb-carousel',
		            exportAs: 'ngbCarousel',
		            host: {
		                'class': 'carousel slide',
		                '[style.display]': '"block"',
		                'tabIndex': '0',
		                '(mouseenter)': 'pause()',
		                '(mouseleave)': 'cycle()',
		                '(keyup.arrowLeft)': 'keyPrev()',
		                '(keyup.arrowRight)': 'keyNext()'
		            },
		            template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" (click)=\"cycleToSelected(slide.id)\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <template [ngTemplateOutlet]=\"slide.tplRef\"></template>\n      </div>\n    </div>\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"icon-next\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
		        }), 
		        __metadata('design:paramtypes', [carousel_config_1.NgbCarouselConfig])
		    ], NgbCarousel);
		    return NgbCarousel;
		}());
		exports.NgbCarousel = NgbCarousel;
		exports.NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
		//# sourceMappingURL=carousel.js.map
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbCarousel component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the carousels used in the application.
		 */
		var NgbCarouselConfig = (function () {
		    function NgbCarouselConfig() {
		        this.interval = 5000;
		        this.wrap = true;
		        this.keyboard = true;
		    }
		    NgbCarouselConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbCarouselConfig);
		    return NgbCarouselConfig;
		}());
		exports.NgbCarouselConfig = NgbCarouselConfig;
		//# sourceMappingURL=carousel-config.js.map
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var collapse_1 = __webpack_require__(17);
		var collapse_2 = __webpack_require__(17);
		exports.NgbCollapse = collapse_2.NgbCollapse;
		var NgbCollapseModule = (function () {
		    function NgbCollapseModule() {
		    }
		    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
		    NgbCollapseModule = __decorate([
		        core_1.NgModule({ declarations: [collapse_1.NgbCollapse], exports: [collapse_1.NgbCollapse] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbCollapseModule);
		    return NgbCollapseModule;
		}());
		exports.NgbCollapseModule = NgbCollapseModule;
		//# sourceMappingURL=collapse.module.js.map
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
		 */
		var NgbCollapse = (function () {
		    function NgbCollapse() {
		        /**
		         * A flag indicating collapsed (true) or open (false) state.
		         */
		        this.collapsed = false;
		    }
		    __decorate([
		        core_1.Input('ngbCollapse'), 
		        __metadata('design:type', Object)
		    ], NgbCollapse.prototype, "collapsed", void 0);
		    NgbCollapse = __decorate([
		        core_1.Directive({
		            selector: '[ngbCollapse]',
		            exportAs: 'ngbCollapse',
		            host: { '[class.collapse]': 'true', '[class.in]': '!collapsed', '[attr.aria-expanded]': '!collapsed' }
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbCollapse);
		    return NgbCollapse;
		}());
		exports.NgbCollapse = NgbCollapse;
		//# sourceMappingURL=collapse.js.map
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var datepicker_1 = __webpack_require__(19);
		var datepicker_month_view_1 = __webpack_require__(25);
		var datepicker_navigation_1 = __webpack_require__(27);
		var datepicker_input_1 = __webpack_require__(28);
		var forms_1 = __webpack_require__(12);
		var datepicker_day_view_1 = __webpack_require__(31);
		var datepicker_i18n_1 = __webpack_require__(26);
		var ngb_calendar_1 = __webpack_require__(20);
		var ngb_date_parser_formatter_1 = __webpack_require__(29);
		var datepicker_service_1 = __webpack_require__(22);
		var datepicker_navigation_select_1 = __webpack_require__(32);
		var datepicker_config_1 = __webpack_require__(24);
		var datepicker_2 = __webpack_require__(19);
		exports.NgbDatepicker = datepicker_2.NgbDatepicker;
		var datepicker_input_2 = __webpack_require__(28);
		exports.NgbInputDatepicker = datepicker_input_2.NgbInputDatepicker;
		var datepicker_month_view_2 = __webpack_require__(25);
		exports.NgbDatepickerMonthView = datepicker_month_view_2.NgbDatepickerMonthView;
		var datepicker_day_view_2 = __webpack_require__(31);
		exports.NgbDatepickerDayView = datepicker_day_view_2.NgbDatepickerDayView;
		var datepicker_navigation_2 = __webpack_require__(27);
		exports.NgbDatepickerNavigation = datepicker_navigation_2.NgbDatepickerNavigation;
		var datepicker_navigation_select_2 = __webpack_require__(32);
		exports.NgbDatepickerNavigationSelect = datepicker_navigation_select_2.NgbDatepickerNavigationSelect;
		var datepicker_config_2 = __webpack_require__(24);
		exports.NgbDatepickerConfig = datepicker_config_2.NgbDatepickerConfig;
		var datepicker_i18n_2 = __webpack_require__(26);
		exports.NgbDatepickerI18n = datepicker_i18n_2.NgbDatepickerI18n;
		var ngb_date_parser_formatter_2 = __webpack_require__(29);
		exports.NgbDateParserFormatter = ngb_date_parser_formatter_2.NgbDateParserFormatter;
		var NgbDatepickerModule = (function () {
		    function NgbDatepickerModule() {
		    }
		    NgbDatepickerModule.forRoot = function () {
		        return {
		            ngModule: NgbDatepickerModule,
		            providers: [
		                { provide: ngb_calendar_1.NgbCalendar, useClass: ngb_calendar_1.NgbCalendarGregorian },
		                { provide: datepicker_i18n_1.NgbDatepickerI18n, useClass: datepicker_i18n_1.NgbDatepickerI18nDefault },
		                { provide: ngb_date_parser_formatter_1.NgbDateParserFormatter, useClass: ngb_date_parser_formatter_1.NgbDateISOParserFormatter }, datepicker_service_1.NgbDatepickerService,
		                datepicker_config_1.NgbDatepickerConfig
		            ]
		        };
		    };
		    NgbDatepickerModule = __decorate([
		        core_1.NgModule({
		            declarations: [
		                datepicker_1.NgbDatepicker, datepicker_month_view_1.NgbDatepickerMonthView, datepicker_navigation_1.NgbDatepickerNavigation, datepicker_navigation_select_1.NgbDatepickerNavigationSelect, datepicker_day_view_1.NgbDatepickerDayView,
		                datepicker_input_1.NgbInputDatepicker
		            ],
		            exports: [datepicker_1.NgbDatepicker, datepicker_input_1.NgbInputDatepicker],
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            entryComponents: [datepicker_1.NgbDatepicker]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbDatepickerModule);
		    return NgbDatepickerModule;
		}());
		exports.NgbDatepickerModule = NgbDatepickerModule;
		//# sourceMappingURL=datepicker.module.js.map
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(12);
		var ngb_calendar_1 = __webpack_require__(20);
		var ngb_date_1 = __webpack_require__(21);
		var datepicker_service_1 = __webpack_require__(22);
		var datepicker_view_model_1 = __webpack_require__(23);
		var util_1 = __webpack_require__(5);
		var datepicker_config_1 = __webpack_require__(24);
		var NGB_DATEPICKER_VALUE_ACCESSOR = {
		    provide: forms_1.NG_VALUE_ACCESSOR,
		    useExisting: core_1.forwardRef(function () { return NgbDatepicker; }),
		    multi: true
		};
		/**
		 * A lightweight and highly configurable datepicker directive
		 */
		var NgbDatepicker = (function () {
		    function NgbDatepicker(_service, _calendar, config) {
		        this._service = _service;
		        this._calendar = _calendar;
		        this.disabled = false;
		        this.onChange = function (_) { };
		        this.onTouched = function () { };
		        this.dayTemplate = config.dayTemplate;
		        this.firstDayOfWeek = config.firstDayOfWeek;
		        this.markDisabled = config.markDisabled;
		        this.minDate = config.minDate;
		        this.maxDate = config.maxDate;
		        this.outsideDays = config.outsideDays;
		        this.showNavigation = config.showNavigation;
		        this.showWeekdays = config.showWeekdays;
		        this.showWeekNumbers = config.showWeekNumbers;
		        this.startDate = config.startDate;
		    }
		    /**
		     * Navigates current view to provided date.
		     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
		     * If nothing provided calendar will open current month.
		     * Use 'startDate' input as an alternative
		     */
		    NgbDatepicker.prototype.navigateTo = function (date) {
		        this._setViewWithinLimits(date ? ngb_date_1.NgbDate.from(date) : this._calendar.getToday());
		        this._updateData();
		    };
		    NgbDatepicker.prototype.ngOnInit = function () {
		        this._setDates();
		        this.navigateTo(this.startDate);
		    };
		    NgbDatepicker.prototype.ngOnChanges = function (changes) {
		        this._setDates();
		        this.navigateTo(this.startDate);
		    };
		    NgbDatepicker.prototype.onDateSelect = function (date) {
		        this._setViewWithinLimits(date);
		        this.onTouched();
		        this.writeValue(date);
		        this.onChange({ year: date.year, month: date.month, day: date.day });
		        // switch current month
		        if (this._date.month !== this.month.number) {
		            this._updateData();
		        }
		    };
		    NgbDatepicker.prototype.onNavigateDateSelect = function (date) {
		        this._setViewWithinLimits(date);
		        this._updateData();
		    };
		    NgbDatepicker.prototype.onNavigateEvent = function (event) {
		        switch (event) {
		            case datepicker_view_model_1.NavigationEvent.PREV:
		                this._setViewWithinLimits(this._calendar.getPrev(this._date, 'm'));
		                break;
		            case datepicker_view_model_1.NavigationEvent.NEXT:
		                this._setViewWithinLimits(this._calendar.getNext(this._date, 'm'));
		                break;
		        }
		        this._updateData();
		    };
		    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
		    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
		    NgbDatepicker.prototype.writeValue = function (value) { this.model = value ? new ngb_date_1.NgbDate(value.year, value.month, value.day) : null; };
		    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
		    NgbDatepicker.prototype._setDates = function () {
		        this._maxDate = ngb_date_1.NgbDate.from(this.maxDate);
		        this._minDate = ngb_date_1.NgbDate.from(this.minDate);
		        this._date = this.startDate ? ngb_date_1.NgbDate.from(this.startDate) : this._calendar.getToday();
		        if (!this._minDate) {
		            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
		        }
		        if (!this._maxDate) {
		            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
		            this._maxDate = this._calendar.getPrev(this._maxDate);
		        }
		        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
		            throw new Error("'maxDate' " + this._maxDate + " should be greater than 'minDate' " + this._minDate);
		        }
		    };
		    NgbDatepicker.prototype._setViewWithinLimits = function (date) {
		        if (this._minDate && date.before(this._minDate)) {
		            this._date = new ngb_date_1.NgbDate(this._minDate.year, this._minDate.month, 1);
		        }
		        else if (this._maxDate && date.after(this._maxDate)) {
		            this._date = new ngb_date_1.NgbDate(this._maxDate.year, this._maxDate.month, 1);
		        }
		        else {
		            this._date = new ngb_date_1.NgbDate(date.year, date.month, 1);
		        }
		    };
		    NgbDatepicker.prototype._updateData = function () {
		        this.month = this._service.generateMonthViewModel(this._date, this._minDate, this._maxDate, util_1.toInteger(this.firstDayOfWeek), this.markDisabled);
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbDatepicker.prototype, "dayTemplate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbDatepicker.prototype, "firstDayOfWeek", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Function)
		    ], NgbDatepicker.prototype, "markDisabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepicker.prototype, "minDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepicker.prototype, "maxDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepicker.prototype, "outsideDays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepicker.prototype, "showNavigation", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepicker.prototype, "showWeekdays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepicker.prototype, "showWeekNumbers", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepicker.prototype, "startDate", void 0);
		    NgbDatepicker = __decorate([
		        core_1.Component({
		            exportAs: 'ngbDatepicker',
		            selector: 'ngb-datepicker',
		            template: "\n    <template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n       <div ngbDatepickerDayView [date]=\"date\" [currentMonth]=\"currentMonth\" [selected]=\"selected\" [disabled]=\"disabled\"></div>\n    </template>\n    \n    <table>\n      <tbody *ngIf=\"showNavigation\" ngbDatepickerNavigation\n        [date]=\"_date\"\n        [minDate]=\"_minDate\"\n        [maxDate]=\"_maxDate\"\n        [disabled]=\"disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </tbody>\n      \n      <tbody ngbDatepickerMonthView\n        [month]=\"month\"\n        [selectedDate]=\"model\"\n        [dayTemplate]=\"dayTemplate || dt\"\n        [showWeekdays]=\"showWeekdays\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [disabled]=\"disabled\"\n        [outsideDays]=\"outsideDays\"\n        (select)=\"onDateSelect($event)\">\n      </tbody>\n    </table>\n  ",
		            providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
		        }), 
		        __metadata('design:paramtypes', [datepicker_service_1.NgbDatepickerService, ngb_calendar_1.NgbCalendar, datepicker_config_1.NgbDatepickerConfig])
		    ], NgbDatepicker);
		    return NgbDatepicker;
		}());
		exports.NgbDatepicker = NgbDatepicker;
		//# sourceMappingURL=datepicker.js.map
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var ngb_date_1 = __webpack_require__(21);
		var core_1 = __webpack_require__(1);
		function fromJSDate(jsDate) {
		    return new ngb_date_1.NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
		}
		function toJSDate(date) {
		    return new Date(date.year, date.month - 1, date.day);
		}
		var NgbCalendar = (function () {
		    function NgbCalendar() {
		    }
		    NgbCalendar = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbCalendar);
		    return NgbCalendar;
		}());
		exports.NgbCalendar = NgbCalendar;
		var NgbCalendarGregorian = (function (_super) {
		    __extends(NgbCalendarGregorian, _super);
		    function NgbCalendarGregorian() {
		        _super.apply(this, arguments);
		    }
		    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
		    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
		    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
		    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
		        if (period === void 0) { period = 'd'; }
		        if (number === void 0) { number = 1; }
		        var jsDate = toJSDate(date);
		        switch (period) {
		            case 'y':
		                return new ngb_date_1.NgbDate(date.year + number, 1, 1);
		            case 'm':
		                jsDate = new Date(date.year, date.month + number - 1, 1);
		                break;
		            case 'd':
		                jsDate.setDate(jsDate.getDate() + number);
		                break;
		            default:
		                return date;
		        }
		        return fromJSDate(jsDate);
		    };
		    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
		        if (period === void 0) { period = 'd'; }
		        if (number === void 0) { number = 1; }
		        return this.getNext(date, period, -number);
		    };
		    NgbCalendarGregorian.prototype.getWeekday = function (date) {
		        var jsDate = toJSDate(date);
		        var day = jsDate.getDay();
		        // in JS Date Sun=0, in ISO 8601 Sun=7
		        return day === 0 ? 7 : day;
		    };
		    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
		        // in JS Date Sun=0, in ISO 8601 Sun=7
		        if (firstDayOfWeek === 7) {
		            firstDayOfWeek = 0;
		        }
		        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
		        var date = week[thursdayIndex];
		        var jsDate = toJSDate(date);
		        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
		        var time = jsDate.getTime();
		        jsDate.setMonth(0); // Compare with Jan 1
		        jsDate.setDate(1);
		        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
		    };
		    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
		    NgbCalendarGregorian = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbCalendarGregorian);
		    return NgbCalendarGregorian;
		}(NgbCalendar));
		exports.NgbCalendarGregorian = NgbCalendarGregorian;
		//# sourceMappingURL=ngb-calendar.js.map
	
	/***/ },
	/* 21 */
	/***/ function(module, exports) {
	
		"use strict";
		var NgbDate = (function () {
		    function NgbDate(year, month, day) {
		        this.year = year;
		        this.month = month;
		        this.day = day;
		    }
		    NgbDate.from = function (date) {
		        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
		    };
		    NgbDate.prototype.equals = function (other) {
		        return other && this.year === other.year && this.month === other.month && this.day === other.day;
		    };
		    NgbDate.prototype.before = function (other) {
		        if (!other) {
		            return false;
		        }
		        if (this.year === other.year) {
		            if (this.month === other.month) {
		                return this.day === other.day ? false : this.day < other.day;
		            }
		            else {
		                return this.month < other.month;
		            }
		        }
		        else {
		            return this.year < other.year;
		        }
		    };
		    NgbDate.prototype.after = function (other) {
		        if (!other) {
		            return false;
		        }
		        if (this.year === other.year) {
		            if (this.month === other.month) {
		                return this.day === other.day ? false : this.day > other.day;
		            }
		            else {
		                return this.month > other.month;
		            }
		        }
		        else {
		            return this.year > other.year;
		        }
		    };
		    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
		    return NgbDate;
		}());
		exports.NgbDate = NgbDate;
		//# sourceMappingURL=ngb-date.js.map
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var ngb_calendar_1 = __webpack_require__(20);
		var ngb_date_1 = __webpack_require__(21);
		var core_1 = __webpack_require__(1);
		var NgbDatepickerService = (function () {
		    function NgbDatepickerService(_calendar) {
		        this._calendar = _calendar;
		    }
		    NgbDatepickerService.prototype.generateMonthViewModel = function (date, minDate, maxDate, firstDayOfWeek, markDisabled) {
		        var month = { number: date.month, year: date.year, weeks: [], weekdays: [] };
		        date = this._getFirstViewDate(date, firstDayOfWeek);
		        // month has weeks
		        for (var w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
		            var days = [];
		            // week has days
		            for (var d = 0; d < this._calendar.getDaysPerWeek(); d++) {
		                if (w === 0) {
		                    month.weekdays.push(this._calendar.getWeekday(date));
		                }
		                var newDate = new ngb_date_1.NgbDate(date.year, date.month, date.day);
		                var disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
		                if (!disabled && markDisabled) {
		                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
		                }
		                days.push({ date: newDate, disabled: disabled });
		                date = this._calendar.getNext(date);
		            }
		            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(function (day) { return ngb_date_1.NgbDate.from(day.date); }), firstDayOfWeek), days: days });
		        }
		        return month;
		    };
		    NgbDatepickerService.prototype._getFirstViewDate = function (date, firstDayOfWeek) {
		        var _this = this;
		        var currentMonth = date.month;
		        var today = new ngb_date_1.NgbDate(date.year, date.month, date.day);
		        var yesterday = this._calendar.getPrev(today);
		        var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === _this._calendar.getWeekday(today); };
		        var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === _this._calendar.getWeekday(today); };
		        // going back in time
		        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
		            today = new ngb_date_1.NgbDate(yesterday.year, yesterday.month, yesterday.day);
		            yesterday = this._calendar.getPrev(yesterday);
		        }
		        return today;
		    };
		    NgbDatepickerService = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [ngb_calendar_1.NgbCalendar])
		    ], NgbDatepickerService);
		    return NgbDatepickerService;
		}());
		exports.NgbDatepickerService = NgbDatepickerService;
		//# sourceMappingURL=datepicker-service.js.map
	
	/***/ },
	/* 23 */
	/***/ function(module, exports) {
	
		"use strict";
		(function (NavigationEvent) {
		    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
		    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
		})(exports.NavigationEvent || (exports.NavigationEvent = {}));
		var NavigationEvent = exports.NavigationEvent;
		//# sourceMappingURL=datepicker-view-model.js.map
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbDatepicker component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the datepickers used in the application.
		 */
		var NgbDatepickerConfig = (function () {
		    function NgbDatepickerConfig() {
		        this.firstDayOfWeek = 1;
		        this.outsideDays = 'visible';
		        this.showNavigation = true;
		        this.showWeekdays = true;
		        this.showWeekNumbers = false;
		    }
		    NgbDatepickerConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbDatepickerConfig);
		    return NgbDatepickerConfig;
		}());
		exports.NgbDatepickerConfig = NgbDatepickerConfig;
		//# sourceMappingURL=datepicker-config.js.map
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var ngb_date_1 = __webpack_require__(21);
		var datepicker_i18n_1 = __webpack_require__(26);
		var NgbDatepickerMonthView = (function () {
		    function NgbDatepickerMonthView(i18n) {
		        this.i18n = i18n;
		        this.select = new core_1.EventEmitter();
		    }
		    NgbDatepickerMonthView.prototype.doSelect = function (day) {
		        if (!this.isDisabled(day) && !this.isCollapsed(day) && !this.isHidden(day)) {
		            this.select.emit(ngb_date_1.NgbDate.from(day.date));
		        }
		    };
		    NgbDatepickerMonthView.prototype.isDisabled = function (day) { return this.disabled || day.disabled; };
		    NgbDatepickerMonthView.prototype.isSelected = function (date) { return this.selectedDate && this.selectedDate.equals(date); };
		    NgbDatepickerMonthView.prototype.isCollapsed = function (day) { return this.outsideDays === 'collapsed' && this.month.number !== day.date.month; };
		    NgbDatepickerMonthView.prototype.isHidden = function (day) { return this.outsideDays === 'hidden' && this.month.number !== day.date.month; };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbDatepickerMonthView.prototype, "dayTemplate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerMonthView.prototype, "disabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerMonthView.prototype, "month", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerMonthView.prototype, "outsideDays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', ngb_date_1.NgbDate)
		    ], NgbDatepickerMonthView.prototype, "selectedDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerMonthView.prototype, "showWeekdays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerMonthView.prototype, "showWeekNumbers", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerMonthView.prototype, "select", void 0);
		    NgbDatepickerMonthView = __decorate([
		        core_1.Component({
		            selector: '[ngbDatepickerMonthView]',
		            styles: ["\n    .weekday {\n      padding-bottom: 0.25rem;\n    }\n    .weeknumber {    \n    }\n    .day {\n      padding: 0;\n      height: 100%;\n      cursor: pointer;\n    }\n    .day.disabled, .day.hidden, .day.collapsed {\n      cursor: default;\n    }\n    :host/deep/.day.collapsed > * {      \n      display: none;\n    }\n    :host/deep/.day.hidden > * {\n      visibility: hidden;\n    }    \n  "],
		            template: "\n    <tr *ngIf=\"showWeekdays\">\n      <td *ngIf=\"showWeekNumbers\"></td>\n      <td *ngFor=\"let w of month.weekdays\" class=\"weekday text-xs-center font-weight-bold\">{{ i18n.getWeekdayName(w) }}</td>\n    </tr>\n    <tr *ngFor=\"let week of month.weeks\">\n      <td *ngIf=\"showWeekNumbers\" class=\"weeknumber small text-xs-center\">{{ week.number }}</td>\n      <td *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"day\" [class.disabled]=\"isDisabled(day)\" \n      [class.collapsed]=\"isCollapsed(day)\" [class.hidden]=\"isHidden(day)\">\n          <template [ngTemplateOutlet]=\"dayTemplate\" \n          [ngOutletContext]=\"{date: {year: day.date.year, month: day.date.month, day: day.date.day}, \n            currentMonth: month.number, \n            disabled: isDisabled(day), \n            selected: isSelected(day.date)}\">\n          </template>\n      </td>\n    </tr>\n  "
		        }), 
		        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n])
		    ], NgbDatepickerMonthView);
		    return NgbDatepickerMonthView;
		}());
		exports.NgbDatepickerMonthView = NgbDatepickerMonthView;
		//# sourceMappingURL=datepicker-month-view.js.map
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
		var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		/**
		 * Type of the service supplying month and weekday names to to NgbDatepicker component.
		 * See the i18n demo for how to extend this class and define a custom provider for i18n.
		 */
		var NgbDatepickerI18n = (function () {
		    function NgbDatepickerI18n() {
		    }
		    NgbDatepickerI18n = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbDatepickerI18n);
		    return NgbDatepickerI18n;
		}());
		exports.NgbDatepickerI18n = NgbDatepickerI18n;
		var NgbDatepickerI18nDefault = (function (_super) {
		    __extends(NgbDatepickerI18nDefault, _super);
		    function NgbDatepickerI18nDefault() {
		        _super.apply(this, arguments);
		    }
		    NgbDatepickerI18nDefault.prototype.getWeekdayName = function (weekday) { return WEEKDAYS[weekday - 1]; };
		    NgbDatepickerI18nDefault.prototype.getMonthName = function (month) { return MONTHS[month - 1]; };
		    NgbDatepickerI18nDefault = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbDatepickerI18nDefault);
		    return NgbDatepickerI18nDefault;
		}(NgbDatepickerI18n));
		exports.NgbDatepickerI18nDefault = NgbDatepickerI18nDefault;
		//# sourceMappingURL=datepicker-i18n.js.map
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var datepicker_view_model_1 = __webpack_require__(23);
		var ngb_date_1 = __webpack_require__(21);
		var datepicker_i18n_1 = __webpack_require__(26);
		var ngb_calendar_1 = __webpack_require__(20);
		var NgbDatepickerNavigation = (function () {
		    function NgbDatepickerNavigation(i18n, _calendar) {
		        this.i18n = i18n;
		        this._calendar = _calendar;
		        this.navigation = datepicker_view_model_1.NavigationEvent;
		        this.type = 'select';
		        this.navigate = new core_1.EventEmitter();
		        this.select = new core_1.EventEmitter();
		    }
		    NgbDatepickerNavigation.prototype.doNavigate = function (event) { this.navigate.emit(event); };
		    NgbDatepickerNavigation.prototype.nextDisabled = function () {
		        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
		    };
		    NgbDatepickerNavigation.prototype.prevDisabled = function () {
		        return this.disabled || (this.minDate && this._calendar.getPrev(this.date, 'm').before(this.minDate));
		    };
		    NgbDatepickerNavigation.prototype.selectDate = function (date) { this.select.emit(date); };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', ngb_date_1.NgbDate)
		    ], NgbDatepickerNavigation.prototype, "date", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerNavigation.prototype, "disabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', ngb_date_1.NgbDate)
		    ], NgbDatepickerNavigation.prototype, "maxDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', ngb_date_1.NgbDate)
		    ], NgbDatepickerNavigation.prototype, "minDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerNavigation.prototype, "showWeekNumbers", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerNavigation.prototype, "type", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerNavigation.prototype, "navigate", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerNavigation.prototype, "select", void 0);
		    NgbDatepickerNavigation = __decorate([
		        core_1.Component({
		            selector: '[ngbDatepickerNavigation]',
		            styles: ["\n    td {\n      text-align: center;\n      padding-bottom: 0.25rem;\n    }\n  "],
		            template: "\n    <tr>\n      <td>\n        <button type=\"button\" (click)=\"doNavigate(navigation.PREV)\" class=\"btn btn-sm btn-secondary btn-block\" \n          [disabled]=\"prevDisabled()\">&lt;</button>\n      </td>\n      <td [attr.colspan]=\"showWeekNumbers ? 6 : 5\">      \n        <ngb-datepicker-navigation-select *ngIf=\"type === 'select'\"\n          [date]=\"date\"\n          [minYear]=\"minDate.year\"\n          [maxYear]=\"maxDate.year\"\n          [disabled] = \"disabled\"\n          (select)=\"selectDate($event)\">\n        </ngb-datepicker-navigation-select>\n      </td>\n      <td>\n        <button type=\"button\" (click)=\"doNavigate(navigation.NEXT)\" class=\"btn btn-sm btn-secondary btn-block\" \n          [disabled]=\"nextDisabled()\">&gt;</button>\n      </td>\n    </tr>\n  "
		        }), 
		        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n, ngb_calendar_1.NgbCalendar])
		    ], NgbDatepickerNavigation);
		    return NgbDatepickerNavigation;
		}());
		exports.NgbDatepickerNavigation = NgbDatepickerNavigation;
		//# sourceMappingURL=datepicker-navigation.js.map
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(12);
		var ngb_date_1 = __webpack_require__(21);
		var datepicker_1 = __webpack_require__(19);
		var ngb_date_parser_formatter_1 = __webpack_require__(29);
		var positioning_1 = __webpack_require__(30);
		var NGB_DATEPICKER_VALUE_ACCESSOR = {
		    provide: forms_1.NG_VALUE_ACCESSOR,
		    useExisting: core_1.forwardRef(function () { return NgbInputDatepicker; }),
		    multi: true
		};
		/**
		 * A directive that makes it possible to have datepickers on input fields.
		 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
		 */
		var NgbInputDatepicker = (function () {
		    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone) {
		        var _this = this;
		        this._parserFormatter = _parserFormatter;
		        this._elRef = _elRef;
		        this._vcRef = _vcRef;
		        this._renderer = _renderer;
		        this._cfr = _cfr;
		        this._cRef = null;
		        this._onChange = function (_) { };
		        this._onTouched = function () { };
		        this._zoneSubscription = ngZone.onStable.subscribe(function () {
		            if (_this._cRef) {
		                positioning_1.positionElements(_this._elRef.nativeElement, _this._cRef.location.nativeElement, 'bottom-left');
		            }
		        });
		    }
		    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
		    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
		    NgbInputDatepicker.prototype.writeValue = function (value) {
		        this._model = value ? new ngb_date_1.NgbDate(value.year, value.month, value.day) : null;
		        this._writeModelValue(this._model);
		    };
		    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
		        this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
		        if (this.isOpen()) {
		            this._cRef.instance.setDisabledState(isDisabled);
		        }
		    };
		    NgbInputDatepicker.prototype.manualDateChange = function (value) {
		        this._model = ngb_date_1.NgbDate.from(this._parserFormatter.parse(value));
		        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : null);
		        this._writeModelValue(this._model);
		    };
		    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
		    /**
		     * Opens the datepicker with the selected date indicated by the ngModel value.
		     */
		    NgbInputDatepicker.prototype.open = function () {
		        var _this = this;
		        if (!this.isOpen()) {
		            var cf = this._cfr.resolveComponentFactory(datepicker_1.NgbDatepicker);
		            this._cRef = this._vcRef.createComponent(cf);
		            this._applyPopupStyling(this._cRef.location.nativeElement);
		            this._cRef.instance.writeValue(this._model);
		            this._applyDatepickerInputs(this._cRef.instance);
		            this._cRef.instance.ngOnInit();
		            // date selection event handling
		            this._cRef.instance.registerOnChange(function (selectedDate) {
		                _this.writeValue(selectedDate);
		                _this._onChange(selectedDate);
		                _this.close();
		            });
		        }
		    };
		    /**
		     * Closes the datepicker popup.
		     */
		    NgbInputDatepicker.prototype.close = function () {
		        if (this.isOpen()) {
		            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
		            this._cRef = null;
		        }
		    };
		    /**
		     * Toggles the datepicker popup (opens when closed and closes when opened).
		     */
		    NgbInputDatepicker.prototype.toggle = function () {
		        if (this.isOpen()) {
		            this.close();
		        }
		        else {
		            this.open();
		        }
		    };
		    /**
		     * Navigates current view to provided date.
		     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
		     * If nothing provided calendar will open current month.
		     * Use 'startDate' input as an alternative
		     */
		    NgbInputDatepicker.prototype.navigateTo = function (date) {
		        if (this.isOpen()) {
		            this._cRef.instance.navigateTo(date);
		        }
		    };
		    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
		    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
		        var _this = this;
		        ['dayTemplate', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'outsideDays', 'showNavigation',
		            'showWeekdays', 'showWeekNumbers']
		            .forEach(function (optionName) {
		            if (_this[optionName] !== undefined) {
		                datepickerInstance[optionName] = _this[optionName];
		            }
		        });
		        datepickerInstance.startDate = this.startDate || this._model;
		    };
		    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
		        this._renderer.setElementClass(nativeElement, 'dropdown-menu', true);
		        this._renderer.setElementStyle(nativeElement, 'display', 'block');
		        this._renderer.setElementStyle(nativeElement, 'padding', '0.40rem');
		    };
		    NgbInputDatepicker.prototype._writeModelValue = function (model) {
		        this._renderer.setElementProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
		        if (this.isOpen()) {
		            this._cRef.instance.writeValue(model);
		            this._onTouched();
		        }
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbInputDatepicker.prototype, "dayTemplate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbInputDatepicker.prototype, "firstDayOfWeek", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Function)
		    ], NgbInputDatepicker.prototype, "markDisabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbInputDatepicker.prototype, "minDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbInputDatepicker.prototype, "maxDate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbInputDatepicker.prototype, "outsideDays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbInputDatepicker.prototype, "showNavigation", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbInputDatepicker.prototype, "showWeekdays", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbInputDatepicker.prototype, "showWeekNumbers", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbInputDatepicker.prototype, "startDate", void 0);
		    NgbInputDatepicker = __decorate([
		        core_1.Directive({
		            selector: 'input[ngbDatepicker]',
		            exportAs: 'ngbDatepicker',
		            host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
		            providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
		        }), 
		        __metadata('design:paramtypes', [ngb_date_parser_formatter_1.NgbDateParserFormatter, core_1.ElementRef, core_1.ViewContainerRef, core_1.Renderer, core_1.ComponentFactoryResolver, core_1.NgZone])
		    ], NgbInputDatepicker);
		    return NgbInputDatepicker;
		}());
		exports.NgbInputDatepicker = NgbInputDatepicker;
		//# sourceMappingURL=datepicker-input.js.map
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var util_1 = __webpack_require__(5);
		/**
		 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
		 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
		 * to use an alternative format.
		 */
		var NgbDateParserFormatter = (function () {
		    function NgbDateParserFormatter() {
		    }
		    return NgbDateParserFormatter;
		}());
		exports.NgbDateParserFormatter = NgbDateParserFormatter;
		var NgbDateISOParserFormatter = (function (_super) {
		    __extends(NgbDateISOParserFormatter, _super);
		    function NgbDateISOParserFormatter() {
		        _super.apply(this, arguments);
		    }
		    NgbDateISOParserFormatter.prototype.parse = function (value) {
		        if (value) {
		            var dateParts = value.trim().split('-');
		            if (dateParts.length === 1 && util_1.isNumber(dateParts[0])) {
		                return { year: util_1.toInteger(dateParts[0]), month: null, day: null };
		            }
		            else if (dateParts.length === 2 && util_1.isNumber(dateParts[0]) && util_1.isNumber(dateParts[1])) {
		                return { year: util_1.toInteger(dateParts[0]), month: util_1.toInteger(dateParts[1]), day: null };
		            }
		            else if (dateParts.length === 3 && util_1.isNumber(dateParts[0]) && util_1.isNumber(dateParts[1]) && util_1.isNumber(dateParts[2])) {
		                return { year: util_1.toInteger(dateParts[0]), month: util_1.toInteger(dateParts[1]), day: util_1.toInteger(dateParts[2]) };
		            }
		        }
		        return null;
		    };
		    NgbDateISOParserFormatter.prototype.format = function (date) {
		        return date ?
		            date.year + "-" + (util_1.isNumber(date.month) ? util_1.padNumber(date.month) : '') + "-" + (util_1.isNumber(date.day) ? util_1.padNumber(date.day) : '') :
		            '';
		    };
		    return NgbDateISOParserFormatter;
		}(NgbDateParserFormatter));
		exports.NgbDateISOParserFormatter = NgbDateISOParserFormatter;
		//# sourceMappingURL=ngb-date-parser-formatter.js.map
	
	/***/ },
	/* 30 */
	/***/ function(module, exports) {
	
		"use strict";
		// previous version:
		// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
		var Positioning = (function () {
		    function Positioning() {
		    }
		    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
		    Positioning.prototype.isStaticPositioned = function (element) {
		        return (this.getStyle(element, 'position') || 'static') === 'static';
		    };
		    Positioning.prototype.offsetParent = function (element) {
		        var offsetParentEl = element.offsetParent || document.documentElement;
		        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
		            offsetParentEl = offsetParentEl.offsetParent;
		        }
		        return offsetParentEl || document.documentElement;
		    };
		    Positioning.prototype.position = function (element, round) {
		        if (round === void 0) { round = true; }
		        var elPosition;
		        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
		        if (this.getStyle(element, 'position') === 'fixed') {
		            elPosition = element.getBoundingClientRect();
		        }
		        else {
		            var offsetParentEl = this.offsetParent(element);
		            elPosition = this.offset(element, false);
		            if (offsetParentEl !== document.documentElement) {
		                parentOffset = this.offset(offsetParentEl, false);
		            }
		            parentOffset.top += offsetParentEl.clientTop;
		            parentOffset.left += offsetParentEl.clientLeft;
		        }
		        elPosition.top -= parentOffset.top;
		        elPosition.bottom -= parentOffset.top;
		        elPosition.left -= parentOffset.left;
		        elPosition.right -= parentOffset.left;
		        if (round) {
		            elPosition.top = Math.round(elPosition.top);
		            elPosition.bottom = Math.round(elPosition.bottom);
		            elPosition.left = Math.round(elPosition.left);
		            elPosition.right = Math.round(elPosition.right);
		        }
		        return elPosition;
		    };
		    Positioning.prototype.offset = function (element, round) {
		        if (round === void 0) { round = true; }
		        var elBcr = element.getBoundingClientRect();
		        var viewportOffset = {
		            top: window.pageYOffset - document.documentElement.clientTop,
		            left: window.pageXOffset - document.documentElement.clientLeft
		        };
		        var elOffset = {
		            height: elBcr.height || element.offsetHeight,
		            width: elBcr.width || element.offsetWidth,
		            top: elBcr.top + viewportOffset.top,
		            bottom: elBcr.bottom + viewportOffset.top,
		            left: elBcr.left + viewportOffset.left,
		            right: elBcr.right + viewportOffset.left
		        };
		        if (round) {
		            elOffset.height = Math.round(elOffset.height);
		            elOffset.width = Math.round(elOffset.width);
		            elOffset.top = Math.round(elOffset.top);
		            elOffset.bottom = Math.round(elOffset.bottom);
		            elOffset.left = Math.round(elOffset.left);
		            elOffset.right = Math.round(elOffset.right);
		        }
		        return elOffset;
		    };
		    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
		        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
		        var shiftWidth = {
		            left: hostElPosition.left,
		            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
		            right: hostElPosition.left + hostElPosition.width
		        };
		        var shiftHeight = {
		            top: hostElPosition.top,
		            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
		            bottom: hostElPosition.top + hostElPosition.height
		        };
		        var targetElBCR = targetElement.getBoundingClientRect();
		        var placementPrimary = placement.split('-')[0] || 'top';
		        var placementSecondary = placement.split('-')[1] || 'center';
		        var targetElPosition = {
		            height: targetElBCR.height || targetElement.offsetHeight,
		            width: targetElBCR.width || targetElement.offsetWidth,
		            top: 0,
		            bottom: targetElBCR.height || targetElement.offsetHeight,
		            left: 0,
		            right: targetElBCR.width || targetElement.offsetWidth
		        };
		        switch (placementPrimary) {
		            case 'top':
		                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
		                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
		                targetElPosition.left = shiftWidth[placementSecondary];
		                targetElPosition.right += shiftWidth[placementSecondary];
		                break;
		            case 'bottom':
		                targetElPosition.top = shiftHeight[placementPrimary];
		                targetElPosition.bottom += shiftHeight[placementPrimary];
		                targetElPosition.left = shiftWidth[placementSecondary];
		                targetElPosition.right += shiftWidth[placementSecondary];
		                break;
		            case 'left':
		                targetElPosition.top = shiftHeight[placementSecondary];
		                targetElPosition.bottom += shiftHeight[placementSecondary];
		                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
		                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
		                break;
		            case 'right':
		                targetElPosition.top = shiftHeight[placementSecondary];
		                targetElPosition.bottom += shiftHeight[placementSecondary];
		                targetElPosition.left = shiftWidth[placementPrimary];
		                targetElPosition.right += shiftWidth[placementPrimary];
		                break;
		        }
		        targetElPosition.top = Math.round(targetElPosition.top);
		        targetElPosition.bottom = Math.round(targetElPosition.bottom);
		        targetElPosition.left = Math.round(targetElPosition.left);
		        targetElPosition.right = Math.round(targetElPosition.right);
		        return targetElPosition;
		    };
		    return Positioning;
		}());
		exports.Positioning = Positioning;
		var positionService = new Positioning();
		function positionElements(hostElement, targetElement, placement, appendToBody) {
		    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
		    targetElement.style.top = pos.top + "px";
		    targetElement.style.left = pos.left + "px";
		}
		exports.positionElements = positionElements;
		//# sourceMappingURL=positioning.js.map
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var NgbDatepickerDayView = (function () {
		    function NgbDatepickerDayView() {
		    }
		    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbDatepickerDayView.prototype, "currentMonth", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerDayView.prototype, "date", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerDayView.prototype, "disabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerDayView.prototype, "selected", void 0);
		    NgbDatepickerDayView = __decorate([
		        core_1.Component({
		            selector: '[ngbDatepickerDayView]',
		            styles: ["\n    :host {      \n      text-align: center;\n      padding: 0.185rem 0.25rem;      \n      border-radius: 0.25rem;\n    }\n  "],
		            host: {
		                '[class.bg-primary]': 'selected',
		                '[class.text-white]': 'selected',
		                '[class.text-muted]': 'isMuted()',
		                '[class.btn-secondary]': '!disabled'
		            },
		            template: "{{ date.day }}"
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbDatepickerDayView);
		    return NgbDatepickerDayView;
		}());
		exports.NgbDatepickerDayView = NgbDatepickerDayView;
		//# sourceMappingURL=datepicker-day-view.js.map
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var ngb_date_1 = __webpack_require__(21);
		var util_1 = __webpack_require__(5);
		var datepicker_i18n_1 = __webpack_require__(26);
		var ngb_calendar_1 = __webpack_require__(20);
		var NgbDatepickerNavigationSelect = (function () {
		    function NgbDatepickerNavigationSelect(i18n, calendar) {
		        this.i18n = i18n;
		        this.years = [];
		        this.select = new core_1.EventEmitter();
		        this.months = calendar.getMonths();
		    }
		    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
		        if (changes['maxYear'] || changes['minYear']) {
		            this._generateYears();
		        }
		    };
		    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new ngb_date_1.NgbDate(this.date.year, util_1.toInteger(month), 1)); };
		    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new ngb_date_1.NgbDate(util_1.toInteger(year), this.date.month, 1)); };
		    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
		        var _this = this;
		        this.years = Array.from({ length: this.maxYear - this.minYear + 1 }, function (e, i) { return _this.minYear + i; });
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', ngb_date_1.NgbDate)
		    ], NgbDatepickerNavigationSelect.prototype, "date", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDatepickerNavigationSelect.prototype, "disabled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbDatepickerNavigationSelect.prototype, "maxYear", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbDatepickerNavigationSelect.prototype, "minYear", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbDatepickerNavigationSelect.prototype, "select", void 0);
		    NgbDatepickerNavigationSelect = __decorate([
		        core_1.Component({
		            selector: 'ngb-datepicker-navigation-select',
		            styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
		            template: "\n    <select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date.month\" (change)=\"changeMonth($event.target.value)\">\n      <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthName(m) }}</option>\n    </select>" +
		                "<select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date.year\" (change)=\"changeYear($event.target.value)\">\n      <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  " // template needs to be formatted in a certain way so we don't add empty text nodes
		        }), 
		        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n, ngb_calendar_1.NgbCalendar])
		    ], NgbDatepickerNavigationSelect);
		    return NgbDatepickerNavigationSelect;
		}());
		exports.NgbDatepickerNavigationSelect = NgbDatepickerNavigationSelect;
		//# sourceMappingURL=datepicker-navigation-select.js.map
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var dropdown_1 = __webpack_require__(34);
		var dropdown_config_1 = __webpack_require__(35);
		var dropdown_2 = __webpack_require__(34);
		exports.NgbDropdown = dropdown_2.NgbDropdown;
		exports.NgbDropdownToggle = dropdown_2.NgbDropdownToggle;
		var dropdown_config_2 = __webpack_require__(35);
		exports.NgbDropdownConfig = dropdown_config_2.NgbDropdownConfig;
		var NGB_DROPDOWN_DIRECTIVES = [dropdown_1.NgbDropdownToggle, dropdown_1.NgbDropdown];
		var NgbDropdownModule = (function () {
		    function NgbDropdownModule() {
		    }
		    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [dropdown_config_1.NgbDropdownConfig] }; };
		    NgbDropdownModule = __decorate([
		        core_1.NgModule({ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES }), 
		        __metadata('design:paramtypes', [])
		    ], NgbDropdownModule);
		    return NgbDropdownModule;
		}());
		exports.NgbDropdownModule = NgbDropdownModule;
		//# sourceMappingURL=dropdown.module.js.map
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var dropdown_config_1 = __webpack_require__(35);
		/**
		 * Transforms a node into a dropdown.
		 */
		var NgbDropdown = (function () {
		    function NgbDropdown(config) {
		        /**
		         *  Defines whether or not the dropdown-menu is open initially.
		         */
		        this._open = false;
		        /**
		         *  An event fired when the dropdown is opened or closed.
		         *  Event's payload equals whether dropdown is open.
		         */
		        this.openChange = new core_1.EventEmitter();
		        this.up = config.up;
		        this.autoClose = config.autoClose;
		    }
		    /**
		     * Checks if the dropdown menu is open or not.
		     */
		    NgbDropdown.prototype.isOpen = function () { return this._open; };
		    /**
		     * Opens the dropdown menu of a given navbar or tabbed navigation.
		     */
		    NgbDropdown.prototype.open = function () {
		        if (!this._open) {
		            this._open = true;
		            this.openChange.emit(true);
		        }
		    };
		    /**
		     * Closes the dropdown menu of a given navbar or tabbed navigation.
		     */
		    NgbDropdown.prototype.close = function () {
		        if (this._open) {
		            this._open = false;
		            this.openChange.emit(false);
		        }
		    };
		    /**
		     * Toggles the dropdown menu of a given navbar or tabbed navigation.
		     */
		    NgbDropdown.prototype.toggle = function () {
		        if (this.isOpen()) {
		            this.close();
		        }
		        else {
		            this.open();
		        }
		    };
		    NgbDropdown.prototype.closeFromOutsideClick = function ($event) {
		        if (this.autoClose && !this._isEventFromToggle($event)) {
		            this.close();
		        }
		    };
		    NgbDropdown.prototype.closeFromOutsideEsc = function () {
		        if (this.autoClose) {
		            this.close();
		        }
		    };
		    Object.defineProperty(NgbDropdown.prototype, "toggleElement", {
		        /**
		         * @internal
		         */
		        set: function (toggleElement) { this._toggleElement = toggleElement; },
		        enumerable: true,
		        configurable: true
		    });
		    NgbDropdown.prototype._isEventFromToggle = function ($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDropdown.prototype, "up", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbDropdown.prototype, "autoClose", void 0);
		    __decorate([
		        core_1.Input('open'), 
		        __metadata('design:type', Object)
		    ], NgbDropdown.prototype, "_open", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbDropdown.prototype, "openChange", void 0);
		    NgbDropdown = __decorate([
		        core_1.Directive({
		            selector: '[ngbDropdown]',
		            exportAs: 'ngbDropdown',
		            host: {
		                '[class.dropdown]': '!up',
		                '[class.dropup]': 'up',
		                '[class.open]': 'isOpen()',
		                '(keyup.esc)': 'closeFromOutsideEsc()',
		                '(document:click)': 'closeFromOutsideClick($event)'
		            }
		        }), 
		        __metadata('design:paramtypes', [dropdown_config_1.NgbDropdownConfig])
		    ], NgbDropdown);
		    return NgbDropdown;
		}());
		exports.NgbDropdown = NgbDropdown;
		/**
		 * Allows the dropdown to be toggled via click. This directive is optional.
		 */
		var NgbDropdownToggle = (function () {
		    function NgbDropdownToggle(dropdown, elementRef) {
		        this.dropdown = dropdown;
		        dropdown.toggleElement = elementRef.nativeElement;
		    }
		    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
		    NgbDropdownToggle = __decorate([
		        core_1.Directive({
		            selector: '[ngbDropdownToggle]',
		            host: {
		                'class': 'dropdown-toggle',
		                'aria-haspopup': 'true',
		                '[attr.aria-expanded]': 'dropdown.isOpen()',
		                '(click)': 'toggleOpen()'
		            }
		        }), 
		        __metadata('design:paramtypes', [NgbDropdown, core_1.ElementRef])
		    ], NgbDropdownToggle);
		    return NgbDropdownToggle;
		}());
		exports.NgbDropdownToggle = NgbDropdownToggle;
		//# sourceMappingURL=dropdown.js.map
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbDropdown directive.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the dropdowns used in the application.
		 */
		var NgbDropdownConfig = (function () {
		    function NgbDropdownConfig() {
		        this.up = false;
		        this.autoClose = true;
		    }
		    NgbDropdownConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbDropdownConfig);
		    return NgbDropdownConfig;
		}());
		exports.NgbDropdownConfig = NgbDropdownConfig;
		//# sourceMappingURL=dropdown-config.js.map
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var modal_container_1 = __webpack_require__(37);
		var modal_backdrop_1 = __webpack_require__(39);
		var modal_window_1 = __webpack_require__(40);
		var modal_stack_1 = __webpack_require__(42);
		var modal_1 = __webpack_require__(44);
		var modal_2 = __webpack_require__(44);
		exports.NgbModal = modal_2.NgbModal;
		var modal_ref_1 = __webpack_require__(43);
		exports.NgbModalRef = modal_ref_1.NgbModalRef;
		exports.NgbActiveModal = modal_ref_1.NgbActiveModal;
		var modal_dismiss_reasons_1 = __webpack_require__(41);
		exports.ModalDismissReasons = modal_dismiss_reasons_1.ModalDismissReasons;
		var NgbModalModule = (function () {
		    function NgbModalModule() {
		    }
		    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [modal_1.NgbModal, modal_stack_1.NgbModalStack] }; };
		    NgbModalModule = __decorate([
		        core_1.NgModule({
		            declarations: [modal_container_1.NgbModalContainer, modal_backdrop_1.NgbModalBackdrop, modal_window_1.NgbModalWindow],
		            entryComponents: [modal_backdrop_1.NgbModalBackdrop, modal_window_1.NgbModalWindow],
		            providers: [modal_1.NgbModal],
		            exports: [modal_container_1.NgbModalContainer]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbModalModule);
		    return NgbModalModule;
		}());
		exports.NgbModalModule = NgbModalModule;
		//# sourceMappingURL=modal.module.js.map
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var popup_1 = __webpack_require__(38);
		var modal_backdrop_1 = __webpack_require__(39);
		var modal_window_1 = __webpack_require__(40);
		var modal_stack_1 = __webpack_require__(42);
		var modal_ref_1 = __webpack_require__(43);
		var NgbModalContainer = (function () {
		    function NgbModalContainer(_injector, _renderer, _viewContainerRef, _componentFactoryResolver, ngbModalStack) {
		        this._injector = _injector;
		        this._renderer = _renderer;
		        this._viewContainerRef = _viewContainerRef;
		        this._componentFactoryResolver = _componentFactoryResolver;
		        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(modal_backdrop_1.NgbModalBackdrop);
		        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(modal_window_1.NgbModalWindow);
		        ngbModalStack.registerContainer(this);
		    }
		    NgbModalContainer.prototype.open = function (moduleCFR, content, options) {
		        var activeModal = new modal_ref_1.NgbActiveModal();
		        var contentRef = this._getContentRef(moduleCFR, content, activeModal);
		        var windowCmptRef;
		        var backdropCmptRef;
		        var ngbModalRef;
		        if (options.backdrop !== false) {
		            backdropCmptRef =
		                this._viewContainerRef.createComponent(this._backdropFactory, this._viewContainerRef.length, this._injector);
		        }
		        windowCmptRef = this._viewContainerRef.createComponent(this._windowFactory, this._viewContainerRef.length, this._injector, contentRef.nodes);
		        ngbModalRef = new modal_ref_1.NgbModalRef(this._viewContainerRef, windowCmptRef, contentRef, backdropCmptRef);
		        activeModal.close = function (result) { ngbModalRef.close(result); };
		        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
		        this._applyWindowOptions(windowCmptRef.instance, options);
		        return ngbModalRef;
		    };
		    NgbModalContainer.prototype._applyWindowOptions = function (windowInstance, options) {
		        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
		            if (util_1.isDefined(options[optionName])) {
		                windowInstance[optionName] = options[optionName];
		            }
		        });
		    };
		    NgbModalContainer.prototype._getContentRef = function (moduleCFR, content, context) {
		        if (!content) {
		            return new popup_1.ContentRef([]);
		        }
		        else if (content instanceof core_1.TemplateRef) {
		            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
		            return new popup_1.ContentRef([viewRef.rootNodes], viewRef);
		        }
		        else if (util_1.isString(content)) {
		            return new popup_1.ContentRef([[this._renderer.createText(null, "" + content)]]);
		        }
		        else {
		            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
		            var modalContentInjector = core_1.ReflectiveInjector.resolveAndCreate([{ provide: modal_ref_1.NgbActiveModal, useValue: context }], this._injector);
		            var componentRef = this._viewContainerRef.createComponent(contentCmptFactory, 0, modalContentInjector);
		            return new popup_1.ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
		        }
		    };
		    NgbModalContainer = __decorate([
		        core_1.Directive({ selector: 'template[ngbModalContainer]' }), 
		        __metadata('design:paramtypes', [core_1.Injector, core_1.Renderer, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, modal_stack_1.NgbModalStack])
		    ], NgbModalContainer);
		    return NgbModalContainer;
		}());
		exports.NgbModalContainer = NgbModalContainer;
		//# sourceMappingURL=modal-container.js.map
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var core_1 = __webpack_require__(1);
		var ContentRef = (function () {
		    function ContentRef(nodes, viewRef, componentRef) {
		        this.nodes = nodes;
		        this.viewRef = viewRef;
		        this.componentRef = componentRef;
		    }
		    return ContentRef;
		}());
		exports.ContentRef = ContentRef;
		var PopupService = (function () {
		    function PopupService(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
		        this._injector = _injector;
		        this._viewContainerRef = _viewContainerRef;
		        this._renderer = _renderer;
		        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
		    }
		    PopupService.prototype.open = function (content) {
		        if (!this._windowRef) {
		            this._contentRef = this._getContentRef(content);
		            this._windowRef =
		                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
		        }
		        return this._windowRef;
		    };
		    PopupService.prototype.close = function () {
		        if (this._windowRef) {
		            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
		            this._windowRef = null;
		            if (this._contentRef.viewRef) {
		                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
		                this._contentRef = null;
		            }
		        }
		    };
		    PopupService.prototype._getContentRef = function (content) {
		        if (!content) {
		            return new ContentRef([]);
		        }
		        else if (content instanceof core_1.TemplateRef) {
		            var viewRef = this._viewContainerRef.createEmbeddedView(content);
		            return new ContentRef([viewRef.rootNodes], viewRef);
		        }
		        else {
		            return new ContentRef([[this._renderer.createText(null, "" + content)]]);
		        }
		    };
		    return PopupService;
		}());
		exports.PopupService = PopupService;
		//# sourceMappingURL=popup.js.map
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var NgbModalBackdrop = (function () {
		    function NgbModalBackdrop() {
		    }
		    NgbModalBackdrop = __decorate([
		        core_1.Component({ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade in' } }), 
		        __metadata('design:paramtypes', [])
		    ], NgbModalBackdrop);
		    return NgbModalBackdrop;
		}());
		exports.NgbModalBackdrop = NgbModalBackdrop;
		//# sourceMappingURL=modal-backdrop.js.map
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var modal_dismiss_reasons_1 = __webpack_require__(41);
		var NgbModalWindow = (function () {
		    function NgbModalWindow(_elRef, _renderer) {
		        this._elRef = _elRef;
		        this._renderer = _renderer;
		        this.backdrop = true;
		        this.keyboard = true;
		        this.dismissEvent = new core_1.EventEmitter();
		    }
		    NgbModalWindow.prototype.backdropClick = function () {
		        if (this.backdrop === true) {
		            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.BACKDROP_CLICK);
		        }
		    };
		    NgbModalWindow.prototype.escKey = function ($event) {
		        if (this.keyboard && !$event.defaultPrevented) {
		            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.ESC);
		        }
		    };
		    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
		    NgbModalWindow.prototype.stopPropagation = function ($event) { $event.stopPropagation(); };
		    NgbModalWindow.prototype.ngOnInit = function () {
		        this._elWithFocus = document.activeElement;
		        this._renderer.setElementClass(document.body, 'modal-open', true);
		    };
		    NgbModalWindow.prototype.ngAfterViewInit = function () {
		        if (!this._isNodeChildOfAnother(this._elRef.nativeElement, document.activeElement)) {
		            this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
		        }
		    };
		    NgbModalWindow.prototype.ngOnDestroy = function () {
		        if (this._elWithFocus && this._isNodeChildOfAnother(document.body, this._elWithFocus)) {
		            this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
		        }
		        else {
		            this._renderer.invokeElementMethod(document.body, 'focus', []);
		        }
		        this._elWithFocus = null;
		        this._renderer.setElementClass(document.body, 'modal-open', false);
		    };
		    NgbModalWindow.prototype._isNodeChildOfAnother = function (parentNode, potentialChildNode) { return parentNode.contains(potentialChildNode); };
		    __decorate([
		        // element that is focused prior to modal opening
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbModalWindow.prototype, "backdrop", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbModalWindow.prototype, "keyboard", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbModalWindow.prototype, "size", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbModalWindow.prototype, "windowClass", void 0);
		    __decorate([
		        core_1.Output('dismiss'), 
		        __metadata('design:type', Object)
		    ], NgbModalWindow.prototype, "dismissEvent", void 0);
		    NgbModalWindow = __decorate([
		        core_1.Component({
		            selector: 'ngb-modal-window',
		            host: {
		                '[class]': '"modal fade in" + (windowClass ? " " + windowClass : "")',
		                'role': 'dialog',
		                'tabindex': '-1',
		                'style': 'display: block;',
		                '(keyup.esc)': 'escKey($event)',
		                '(click)': 'backdropClick()'
		            },
		            template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\" (click)=\"stopPropagation($event)\"><ng-content></ng-content></div>\n    </div>\n    "
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
		    ], NgbModalWindow);
		    return NgbModalWindow;
		}());
		exports.NgbModalWindow = NgbModalWindow;
		//# sourceMappingURL=modal-window.js.map
	
	/***/ },
	/* 41 */
	/***/ function(module, exports) {
	
		"use strict";
		(function (ModalDismissReasons) {
		    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
		    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
		})(exports.ModalDismissReasons || (exports.ModalDismissReasons = {}));
		var ModalDismissReasons = exports.ModalDismissReasons;
		//# sourceMappingURL=modal-dismiss-reasons.js.map
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var NgbModalStack = (function () {
		    function NgbModalStack() {
		    }
		    NgbModalStack.prototype.open = function (moduleCFR, content, options) {
		        if (options === void 0) { options = {}; }
		        if (!this.modalContainer) {
		            throw new Error('Missing modal container, add <template ngbModalContainer></template> to one of your application templates.');
		        }
		        return this.modalContainer.open(moduleCFR, content, options);
		    };
		    NgbModalStack.prototype.registerContainer = function (modalContainer) { this.modalContainer = modalContainer; };
		    NgbModalStack = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbModalStack);
		    return NgbModalStack;
		}());
		exports.NgbModalStack = NgbModalStack;
		//# sourceMappingURL=modal-stack.js.map
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var popup_1 = __webpack_require__(38);
		/**
		 * A reference to an active (currently opened) modal. Instances of this class
		 * can be injected into components passed as modal content.
		 */
		var NgbActiveModal = (function () {
		    function NgbActiveModal() {
		    }
		    /**
		     * Can be used to close a modal, passing an optional result.
		     */
		    NgbActiveModal.prototype.close = function (result) { };
		    /**
		     * Can be used to dismiss a modal, passing an optional reason.
		     */
		    NgbActiveModal.prototype.dismiss = function (reason) { };
		    NgbActiveModal = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbActiveModal);
		    return NgbActiveModal;
		}());
		exports.NgbActiveModal = NgbActiveModal;
		/**
		 * A reference to a newly opened modal.
		 */
		var NgbModalRef = (function () {
		    function NgbModalRef(_viewContainerRef, _windowCmptRef, _contentRef, _backdropCmptRef) {
		        var _this = this;
		        this._viewContainerRef = _viewContainerRef;
		        this._windowCmptRef = _windowCmptRef;
		        this._contentRef = _contentRef;
		        this._backdropCmptRef = _backdropCmptRef;
		        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
		        this.result = new Promise(function (resolve, reject) {
		            _this._resolve = resolve;
		            _this._reject = reject;
		        });
		        this.result.then(null, function () { });
		    }
		    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
		        /**
		         * The instance of component used as modal's content.
		         * Undefined when a TemplateRef is used as modal's content.
		         */
		        get: function () {
		            if (this._contentRef.componentRef) {
		                return this._contentRef.componentRef.instance;
		            }
		        },
		        // only needed to keep TS1.8 compatibility
		        set: function (instance) { },
		        enumerable: true,
		        configurable: true
		    });
		    /**
		     * Can be used to close a modal, passing an optional result.
		     */
		    NgbModalRef.prototype.close = function (result) {
		        if (this._windowCmptRef) {
		            this._resolve(result);
		            this._removeModalElements();
		        }
		    };
		    /**
		     * Can be used to dismiss a modal, passing an optional reason.
		     */
		    NgbModalRef.prototype.dismiss = function (reason) {
		        if (this._windowCmptRef) {
		            this._reject(reason);
		            this._removeModalElements();
		        }
		    };
		    NgbModalRef.prototype._removeModalElements = function () {
		        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowCmptRef.hostView));
		        if (this._backdropCmptRef) {
		            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._backdropCmptRef.hostView));
		        }
		        if (this._contentRef && this._contentRef.viewRef) {
		            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
		        }
		        this._windowCmptRef = null;
		        this._backdropCmptRef = null;
		        this._contentRef = null;
		    };
		    NgbModalRef = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentRef, popup_1.ContentRef, core_1.ComponentRef])
		    ], NgbModalRef);
		    return NgbModalRef;
		}());
		exports.NgbModalRef = NgbModalRef;
		//# sourceMappingURL=modal-ref.js.map
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var modal_stack_1 = __webpack_require__(42);
		/**
		 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
		 * the "open" method!
		 */
		var NgbModal = (function () {
		    function NgbModal(_moduleCFR, _modalStack) {
		        this._moduleCFR = _moduleCFR;
		        this._modalStack = _modalStack;
		    }
		    /**
		     * Opens a new modal window with the specified content and using supplied options. Content can be provided
		     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
		     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
		     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
		     */
		    NgbModal.prototype.open = function (content, options) {
		        if (options === void 0) { options = {}; }
		        return this._modalStack.open(this._moduleCFR, content, options);
		    };
		    NgbModal = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, modal_stack_1.NgbModalStack])
		    ], NgbModal);
		    return NgbModal;
		}());
		exports.NgbModal = NgbModal;
		//# sourceMappingURL=modal.js.map
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var pagination_1 = __webpack_require__(46);
		var pagination_config_1 = __webpack_require__(47);
		var pagination_2 = __webpack_require__(46);
		exports.NgbPagination = pagination_2.NgbPagination;
		var pagination_config_2 = __webpack_require__(47);
		exports.NgbPaginationConfig = pagination_config_2.NgbPaginationConfig;
		var NgbPaginationModule = (function () {
		    function NgbPaginationModule() {
		    }
		    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [pagination_config_1.NgbPaginationConfig] }; };
		    NgbPaginationModule = __decorate([
		        core_1.NgModule({ declarations: [pagination_1.NgbPagination], exports: [pagination_1.NgbPagination], imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbPaginationModule);
		    return NgbPaginationModule;
		}());
		exports.NgbPaginationModule = NgbPaginationModule;
		//# sourceMappingURL=pagination.module.js.map
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var pagination_config_1 = __webpack_require__(47);
		/**
		 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
		 */
		var NgbPagination = (function () {
		    function NgbPagination(config) {
		        this.pageCount = 0;
		        this.pages = [];
		        /**
		         *  Current page.
		         */
		        this.page = 0;
		        /**
		         *  An event fired when the page is changed.
		         *  Event's payload equals to the newly selected page.
		         */
		        this.pageChange = new core_1.EventEmitter(true);
		        this.boundaryLinks = config.boundaryLinks;
		        this.directionLinks = config.directionLinks;
		        this.ellipses = config.ellipses;
		        this.maxSize = config.maxSize;
		        this.pageSize = config.pageSize;
		        this.rotate = config.rotate;
		        this.size = config.size;
		    }
		    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
		    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
		    NgbPagination.prototype.selectPage = function (pageNumber) {
		        this._setPageInRange(pageNumber);
		        this.ngOnChanges(null);
		    };
		    NgbPagination.prototype.ngOnChanges = function (changes) {
		        // re-calculate new length of pages
		        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
		        // fill-in model needed to render pages
		        this.pages.length = 0;
		        for (var i = 1; i <= this.pageCount; i++) {
		            this.pages.push(i);
		        }
		        // set page within 1..max range
		        this._setPageInRange(this.page);
		        // apply maxSize if necessary
		        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
		            var start = 0;
		            var end = this.pageCount;
		            // either paginating or rotating page numbers
		            if (this.rotate) {
		                _a = this._applyRotation(), start = _a[0], end = _a[1];
		            }
		            else {
		                _b = this._applyPagination(), start = _b[0], end = _b[1];
		            }
		            this.pages = this.pages.slice(start, end);
		            // adding ellipses
		            this._applyEllipses(start, end);
		        }
		        var _a, _b;
		    };
		    /**
		     * @internal
		     */
		    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
		    /**
		     * Appends ellipses and first/last page number to the displayed pages
		     */
		    NgbPagination.prototype._applyEllipses = function (start, end) {
		        if (this.ellipses) {
		            if (start > 0) {
		                this.pages.unshift(-1);
		                this.pages.unshift(1);
		            }
		            if (end < this.pageCount) {
		                this.pages.push(-1);
		                this.pages.push(this.pageCount);
		            }
		        }
		    };
		    /**
		     * Rotates page numbers based on maxSize items visible.
		     * Currently selected page stays in the middle:
		     *
		     * Ex. for selected page = 6:
		     * [5,*6*,7] for maxSize = 3
		     * [4,5,*6*,7] for maxSize = 4
		     */
		    NgbPagination.prototype._applyRotation = function () {
		        var start = 0;
		        var end = this.pageCount;
		        var leftOffset = Math.floor(this.maxSize / 2);
		        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
		        if (this.page <= leftOffset) {
		            // very beginning, no rotation -> [0..maxSize]
		            end = this.maxSize;
		        }
		        else if (this.pageCount - this.page < leftOffset) {
		            // very end, no rotation -> [len-maxSize..len]
		            start = this.pageCount - this.maxSize;
		        }
		        else {
		            // rotate
		            start = this.page - leftOffset - 1;
		            end = this.page + rightOffset;
		        }
		        return [start, end];
		    };
		    /**
		     * Paginates page numbers based on maxSize items per page
		     */
		    NgbPagination.prototype._applyPagination = function () {
		        var page = Math.ceil(this.page / this.maxSize) - 1;
		        var start = page * this.maxSize;
		        var end = start + this.maxSize;
		        return [start, end];
		    };
		    NgbPagination.prototype._setPageInRange = function (newPageNo) {
		        var prevPageNo = this.page;
		        this.page = util_1.getValueInRange(newPageNo, this.pageCount, 1);
		        if (this.page !== prevPageNo) {
		            this.pageChange.emit(this.page);
		        }
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbPagination.prototype, "boundaryLinks", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbPagination.prototype, "directionLinks", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbPagination.prototype, "ellipses", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbPagination.prototype, "rotate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbPagination.prototype, "collectionSize", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbPagination.prototype, "maxSize", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPagination.prototype, "page", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbPagination.prototype, "pageSize", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbPagination.prototype, "pageChange", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPagination.prototype, "size", void 0);
		    NgbPagination = __decorate([
		        core_1.Component({
		            selector: 'ngb-pagination',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            template: "\n    <nav>\n      <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n        <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasPrevious()\">\n          <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\">\n            <span aria-hidden=\"true\">&laquo;&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>                \n        </li>\n      \n        <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasPrevious()\">\n          <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n\n        <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\" \n          [class.disabled]=\"isEllipsis(pageNumber)\">\n          <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n          <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">{{pageNumber}}</a>\n        </li>\n\n        <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext()\">\n          <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext()\">\n          <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\">\n            <span aria-hidden=\"true\">&raquo;&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>                \n        </li>        \n      </ul>\n    </nav>\n  "
		        }), 
		        __metadata('design:paramtypes', [pagination_config_1.NgbPaginationConfig])
		    ], NgbPagination);
		    return NgbPagination;
		}());
		exports.NgbPagination = NgbPagination;
		//# sourceMappingURL=pagination.js.map
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbPagination component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the paginations used in the application.
		 */
		var NgbPaginationConfig = (function () {
		    function NgbPaginationConfig() {
		        this.boundaryLinks = false;
		        this.directionLinks = true;
		        this.ellipses = true;
		        this.maxSize = 0;
		        this.pageSize = 10;
		        this.rotate = false;
		    }
		    NgbPaginationConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbPaginationConfig);
		    return NgbPaginationConfig;
		}());
		exports.NgbPaginationConfig = NgbPaginationConfig;
		//# sourceMappingURL=pagination-config.js.map
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var popover_1 = __webpack_require__(49);
		var popover_config_1 = __webpack_require__(51);
		var popover_2 = __webpack_require__(49);
		exports.NgbPopover = popover_2.NgbPopover;
		var popover_config_2 = __webpack_require__(51);
		exports.NgbPopoverConfig = popover_config_2.NgbPopoverConfig;
		var NgbPopoverModule = (function () {
		    function NgbPopoverModule() {
		    }
		    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [popover_config_1.NgbPopoverConfig] }; };
		    NgbPopoverModule = __decorate([
		        core_1.NgModule({ declarations: [popover_1.NgbPopover, popover_1.NgbPopoverWindow], exports: [popover_1.NgbPopover], entryComponents: [popover_1.NgbPopoverWindow] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbPopoverModule);
		    return NgbPopoverModule;
		}());
		exports.NgbPopoverModule = NgbPopoverModule;
		//# sourceMappingURL=popover.module.js.map
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var triggers_1 = __webpack_require__(50);
		var positioning_1 = __webpack_require__(30);
		var popup_1 = __webpack_require__(38);
		var popover_config_1 = __webpack_require__(51);
		var NgbPopoverWindow = (function () {
		    function NgbPopoverWindow() {
		        this.placement = 'top';
		    }
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPopoverWindow.prototype, "placement", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPopoverWindow.prototype, "title", void 0);
		    NgbPopoverWindow = __decorate([
		        core_1.Component({
		            selector: 'ngb-popover-window',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            host: { '[class]': '"popover in popover-" + placement', 'role': 'tooltip' },
		            // TODO remove the div.popover-arrow, which is there only to maintain compatibility with bootstrap alpha.4
		            template: "\n    <div class=\"popover-arrow\"></div>\n    <h3 class=\"popover-title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbPopoverWindow);
		    return NgbPopoverWindow;
		}());
		exports.NgbPopoverWindow = NgbPopoverWindow;
		/**
		 * A lightweight, extensible directive for fancy popover creation.
		 */
		var NgbPopover = (function () {
		    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
		        var _this = this;
		        this._elementRef = _elementRef;
		        this._renderer = _renderer;
		        /**
		         * Emits an event when the popover is shown
		         */
		        this.shown = new core_1.EventEmitter();
		        /**
		         * Emits an event when the popover is hidden
		         */
		        this.hidden = new core_1.EventEmitter();
		        this.placement = config.placement;
		        this.triggers = config.triggers;
		        this.container = config.container;
		        this._popupService = new popup_1.PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
		        this._zoneSubscription = ngZone.onStable.subscribe(function () {
		            if (_this._windowRef) {
		                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
		            }
		        });
		    }
		    /**
		     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
		     */
		    NgbPopover.prototype.open = function () {
		        if (!this._windowRef) {
		            this._windowRef = this._popupService.open(this.ngbPopover);
		            this._windowRef.instance.placement = this.placement;
		            this._windowRef.instance.title = this.popoverTitle;
		            if (this.container === 'body') {
		                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
		            }
		            // we need to manually invoke change detection since events registered via
		            // Renderer::listen() are not picked up by change detection with the OnPush strategy
		            this._windowRef.changeDetectorRef.markForCheck();
		            this.shown.emit();
		        }
		    };
		    /**
		     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
		     */
		    NgbPopover.prototype.close = function () {
		        if (this._windowRef) {
		            this._popupService.close();
		            this._windowRef = null;
		            this.hidden.emit();
		        }
		    };
		    /**
		     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
		     */
		    NgbPopover.prototype.toggle = function () {
		        if (this._windowRef) {
		            this.close();
		        }
		        else {
		            this.open();
		        }
		    };
		    /**
		     * Returns whether or not the popover is currently being shown
		     */
		    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
		    NgbPopover.prototype.ngOnInit = function () {
		        this._unregisterListenersFn = triggers_1.listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
		    };
		    NgbPopover.prototype.ngOnDestroy = function () {
		        this.close();
		        this._unregisterListenersFn();
		        this._zoneSubscription.unsubscribe();
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPopover.prototype, "ngbPopover", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPopover.prototype, "popoverTitle", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbPopover.prototype, "placement", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPopover.prototype, "triggers", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbPopover.prototype, "container", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbPopover.prototype, "shown", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbPopover.prototype, "hidden", void 0);
		    NgbPopover = __decorate([
		        core_1.Directive({ selector: '[ngbPopover]', exportAs: 'ngbPopover' }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, popover_config_1.NgbPopoverConfig, core_1.NgZone])
		    ], NgbPopover);
		    return NgbPopover;
		}());
		exports.NgbPopover = NgbPopover;
		//# sourceMappingURL=popover.js.map
	
	/***/ },
	/* 50 */
	/***/ function(module, exports) {
	
		"use strict";
		var Trigger = (function () {
		    function Trigger(open, close) {
		        this.open = open;
		        this.close = close;
		        if (!close) {
		            this.close = open;
		        }
		    }
		    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
		    return Trigger;
		}());
		exports.Trigger = Trigger;
		var DEFAULT_ALIASES = {
		    hover: ['mouseenter', 'mouseleave']
		};
		function parseTriggers(triggers, aliases) {
		    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
		    var trimmedTriggers = (triggers || '').trim();
		    if (trimmedTriggers.length === 0) {
		        return [];
		    }
		    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
		        var alias = aliases[triggerPair[0]] || triggerPair;
		        return new Trigger(alias[0], alias[1]);
		    });
		    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
		    if (manualTriggers.length > 1) {
		        throw 'Triggers parse error: only one manual trigger is allowed';
		    }
		    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
		        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
		    }
		    return parsedTriggers;
		}
		exports.parseTriggers = parseTriggers;
		var noopFn = function () { };
		function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
		    var parsedTriggers = parseTriggers(triggers);
		    var listeners = [];
		    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
		        return noopFn;
		    }
		    parsedTriggers.forEach(function (trigger) {
		        if (trigger.open === trigger.close) {
		            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
		        }
		        else {
		            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
		        }
		    });
		    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
		}
		exports.listenToTriggers = listenToTriggers;
		//# sourceMappingURL=triggers.js.map
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbPopover directive.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the popovers used in the application.
		 */
		var NgbPopoverConfig = (function () {
		    function NgbPopoverConfig() {
		        this.placement = 'top';
		        this.triggers = 'click';
		    }
		    NgbPopoverConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbPopoverConfig);
		    return NgbPopoverConfig;
		}());
		exports.NgbPopoverConfig = NgbPopoverConfig;
		//# sourceMappingURL=popover-config.js.map
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var progressbar_1 = __webpack_require__(53);
		var progressbar_config_1 = __webpack_require__(54);
		var progressbar_2 = __webpack_require__(53);
		exports.NgbProgressbar = progressbar_2.NgbProgressbar;
		var progressbar_config_2 = __webpack_require__(54);
		exports.NgbProgressbarConfig = progressbar_config_2.NgbProgressbarConfig;
		var NgbProgressbarModule = (function () {
		    function NgbProgressbarModule() {
		    }
		    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [progressbar_config_1.NgbProgressbarConfig] }; };
		    NgbProgressbarModule = __decorate([
		        core_1.NgModule({ declarations: [progressbar_1.NgbProgressbar], exports: [progressbar_1.NgbProgressbar] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbProgressbarModule);
		    return NgbProgressbarModule;
		}());
		exports.NgbProgressbarModule = NgbProgressbarModule;
		//# sourceMappingURL=progressbar.module.js.map
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var progressbar_config_1 = __webpack_require__(54);
		/**
		 * Directive that can be used to provide feedback on the progress of a workflow or an action.
		 */
		var NgbProgressbar = (function () {
		    function NgbProgressbar(config) {
		        /**
		         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
		         */
		        this.value = 0;
		        this.max = config.max;
		        this.animated = config.animated;
		        this.striped = config.striped;
		        this.type = config.type;
		    }
		    NgbProgressbar.prototype.getValue = function () { return util_1.getValueInRange(this.value, this.max); };
		    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbProgressbar.prototype, "max", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbProgressbar.prototype, "animated", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbProgressbar.prototype, "striped", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbProgressbar.prototype, "type", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbProgressbar.prototype, "value", void 0);
		    NgbProgressbar = __decorate([
		        core_1.Component({
		            selector: 'ngb-progressbar',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            template: "\n    <progress class=\"progress {{type ? 'progress-' + type : ''}}\" \n      [class.progress-animated]=\"animated\" \n      [class.progress-striped]=\"striped\"\n      [max]=\"max\" [value]=\"getValue()\">\n      <div class=\"progress\">\n        <span class=\"progress-bar\" [style.width.%]=\"getPercentValue()\"><ng-content></ng-content></span>\n      </div>\n    </progress>\n  "
		        }), 
		        __metadata('design:paramtypes', [progressbar_config_1.NgbProgressbarConfig])
		    ], NgbProgressbar);
		    return NgbProgressbar;
		}());
		exports.NgbProgressbar = NgbProgressbar;
		//# sourceMappingURL=progressbar.js.map
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbProgressbar component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the progress bars used in the application.
		 */
		var NgbProgressbarConfig = (function () {
		    function NgbProgressbarConfig() {
		        this.max = 100;
		        this.animated = false;
		        this.striped = false;
		    }
		    NgbProgressbarConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbProgressbarConfig);
		    return NgbProgressbarConfig;
		}());
		exports.NgbProgressbarConfig = NgbProgressbarConfig;
		//# sourceMappingURL=progressbar-config.js.map
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var rating_config_1 = __webpack_require__(56);
		var rating_1 = __webpack_require__(57);
		var rating_2 = __webpack_require__(57);
		exports.NgbRating = rating_2.NgbRating;
		var rating_config_2 = __webpack_require__(56);
		exports.NgbRatingConfig = rating_config_2.NgbRatingConfig;
		var NgbRatingModule = (function () {
		    function NgbRatingModule() {
		    }
		    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [rating_config_1.NgbRatingConfig] }; };
		    NgbRatingModule = __decorate([
		        core_1.NgModule({ declarations: [rating_1.NgbRating], exports: [rating_1.NgbRating], imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbRatingModule);
		    return NgbRatingModule;
		}());
		exports.NgbRatingModule = NgbRatingModule;
		//# sourceMappingURL=rating.module.js.map
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbRating component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the ratings used in the application.
		 */
		var NgbRatingConfig = (function () {
		    function NgbRatingConfig() {
		        this.max = 10;
		        this.readonly = false;
		    }
		    NgbRatingConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbRatingConfig);
		    return NgbRatingConfig;
		}());
		exports.NgbRatingConfig = NgbRatingConfig;
		//# sourceMappingURL=rating-config.js.map
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var rating_config_1 = __webpack_require__(56);
		/**
		 * Rating directive that will take care of visualising a star rating bar.
		 */
		var NgbRating = (function () {
		    function NgbRating(config) {
		        this.range = [];
		        /**
		         * An event fired when a user is hovering over a given rating.
		         * Event's payload equals to the rating being hovered over.
		         */
		        this.hover = new core_1.EventEmitter();
		        /**
		         * An event fired when a user stops hovering over a given rating.
		         * Event's payload equals to the rating of the last item being hovered over.
		         */
		        this.leave = new core_1.EventEmitter();
		        /**
		         * An event fired when a user selects a new rating.
		         * Event's payload equals to the newly selected rating.
		         */
		        this.rateChange = new core_1.EventEmitter();
		        this.max = config.max;
		        this.readonly = config.readonly;
		    }
		    Object.defineProperty(NgbRating.prototype, "ariaValueText", {
		        get: function () { return this.rate + " out of " + this.max; },
		        enumerable: true,
		        configurable: true
		    });
		    NgbRating.prototype.enter = function (value) {
		        if (!this.readonly) {
		            this.rate = value;
		        }
		        this.hover.emit(value);
		    };
		    NgbRating.prototype.getFillValue = function (index) {
		        var diff = this.rate - index;
		        if (diff >= 1) {
		            return 100;
		        }
		        if (diff < 1 && diff > 0) {
		            return Number.parseInt((diff * 100).toFixed(2));
		        }
		        return 0;
		    };
		    NgbRating.prototype.ngOnChanges = function (changes) {
		        if (changes['rate']) {
		            this._oldRate = this.rate;
		        }
		    };
		    NgbRating.prototype.ngOnInit = function () { this.range = Array.from({ length: this.max }, function (v, k) { return k + 1; }); };
		    NgbRating.prototype.reset = function () {
		        this.leave.emit(this.rate);
		        this.rate = this._oldRate;
		    };
		    NgbRating.prototype.update = function (value) {
		        if (!this.readonly) {
		            this._oldRate = value;
		            this.rate = value;
		            this.rateChange.emit(value);
		        }
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbRating.prototype, "max", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbRating.prototype, "rate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbRating.prototype, "readonly", void 0);
		    __decorate([
		        core_1.Input(),
		        core_1.ContentChild(core_1.TemplateRef), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbRating.prototype, "starTemplate", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbRating.prototype, "hover", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbRating.prototype, "leave", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbRating.prototype, "rateChange", void 0);
		    NgbRating = __decorate([
		        core_1.Component({
		            selector: 'ngb-rating',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            template: "\n    <template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</template>\n    <span tabindex=\"0\" (mouseleave)=\"reset()\" role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"rate\" [attr.aria-valuetext]=\"ariaValueText\">\n      <template ngFor [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < rate ? '*' : ' ' }})</span>\n        <span (mouseenter)=\"enter(index + 1)\" (click)=\"update(index + 1)\" \n        [style.cursor]=\"readonly ? 'default' : 'pointer'\">\n          <template [ngTemplateOutlet]=\"starTemplate || t\" [ngOutletContext]=\"{fill: getFillValue(index)}\"></template>\n        </span>\n      </template>\n    </span>\n  "
		        }), 
		        __metadata('design:paramtypes', [rating_config_1.NgbRatingConfig])
		    ], NgbRating);
		    return NgbRating;
		}());
		exports.NgbRating = NgbRating;
		//# sourceMappingURL=rating.js.map
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var tabset_1 = __webpack_require__(59);
		var tabset_config_1 = __webpack_require__(60);
		var tabset_2 = __webpack_require__(59);
		exports.NgbTabset = tabset_2.NgbTabset;
		exports.NgbTab = tabset_2.NgbTab;
		exports.NgbTabContent = tabset_2.NgbTabContent;
		exports.NgbTabTitle = tabset_2.NgbTabTitle;
		var tabset_config_2 = __webpack_require__(60);
		exports.NgbTabsetConfig = tabset_config_2.NgbTabsetConfig;
		var NGB_TABSET_DIRECTIVES = [tabset_1.NgbTabset, tabset_1.NgbTab, tabset_1.NgbTabContent, tabset_1.NgbTabTitle];
		var NgbTabsetModule = (function () {
		    function NgbTabsetModule() {
		    }
		    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [tabset_config_1.NgbTabsetConfig] }; };
		    NgbTabsetModule = __decorate([
		        core_1.NgModule({ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTabsetModule);
		    return NgbTabsetModule;
		}());
		exports.NgbTabsetModule = NgbTabsetModule;
		//# sourceMappingURL=tabset.module.js.map
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var tabset_config_1 = __webpack_require__(60);
		var nextId = 0;
		/**
		 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
		 */
		var NgbTabTitle = (function () {
		    function NgbTabTitle(templateRef) {
		        this.templateRef = templateRef;
		    }
		    NgbTabTitle = __decorate([
		        core_1.Directive({ selector: 'template[ngbTabTitle]' }), 
		        __metadata('design:paramtypes', [core_1.TemplateRef])
		    ], NgbTabTitle);
		    return NgbTabTitle;
		}());
		exports.NgbTabTitle = NgbTabTitle;
		/**
		 * This directive must be used to wrap content to be displayed in a tab.
		 */
		var NgbTabContent = (function () {
		    function NgbTabContent(templateRef) {
		        this.templateRef = templateRef;
		    }
		    NgbTabContent = __decorate([
		        core_1.Directive({ selector: 'template[ngbTabContent]' }), 
		        __metadata('design:paramtypes', [core_1.TemplateRef])
		    ], NgbTabContent);
		    return NgbTabContent;
		}());
		exports.NgbTabContent = NgbTabContent;
		/**
		 * A directive representing an individual tab.
		 */
		var NgbTab = (function () {
		    function NgbTab() {
		        /**
		         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
		         */
		        this.id = "ngb-tab-" + nextId++;
		        /**
		         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
		         */
		        this.disabled = false;
		    }
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTab.prototype, "id", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTab.prototype, "title", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTab.prototype, "disabled", void 0);
		    __decorate([
		        core_1.ContentChild(NgbTabContent), 
		        __metadata('design:type', NgbTabContent)
		    ], NgbTab.prototype, "contentTpl", void 0);
		    __decorate([
		        core_1.ContentChild(NgbTabTitle), 
		        __metadata('design:type', NgbTabTitle)
		    ], NgbTab.prototype, "titleTpl", void 0);
		    NgbTab = __decorate([
		        core_1.Directive({ selector: 'ngb-tab' }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTab);
		    return NgbTab;
		}());
		exports.NgbTab = NgbTab;
		/**
		 * A component that makes it easy to create tabbed interface.
		 */
		var NgbTabset = (function () {
		    function NgbTabset(config) {
		        /**
		         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
		         */
		        this.tabChange = new core_1.EventEmitter();
		        this.type = config.type;
		    }
		    /**
		     * Selects the tab with the given id and shows its associated pane.
		     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
		     */
		    NgbTabset.prototype.select = function (tabId) {
		        var selectedTab = this._getTabById(tabId);
		        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
		            var defaultPrevented_1 = false;
		            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
		            if (!defaultPrevented_1) {
		                this.activeId = selectedTab.id;
		            }
		        }
		    };
		    NgbTabset.prototype.ngAfterContentChecked = function () {
		        // auto-correct activeId that might have been set incorrectly as input
		        var activeTab = this._getTabById(this.activeId);
		        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
		    };
		    NgbTabset.prototype._getTabById = function (id) {
		        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
		        return tabsWithId.length ? tabsWithId[0] : null;
		    };
		    __decorate([
		        core_1.ContentChildren(NgbTab), 
		        __metadata('design:type', core_1.QueryList)
		    ], NgbTabset.prototype, "tabs", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTabset.prototype, "activeId", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTabset.prototype, "type", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbTabset.prototype, "tabChange", void 0);
		    NgbTabset = __decorate([
		        core_1.Component({
		            selector: 'ngb-tabset',
		            exportAs: 'ngbTabset',
		            template: "\n    <ul [class]=\"'nav nav-' + type\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\" \n          href (click)=\"!!select(tab.id)\">\n          {{tab.title}}<template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <template ngFor let-tab [ngForOf]=\"tabs\">\n        <div class=\"tab-pane active\" *ngIf=\"tab.id === activeId\" role=\"tabpanel\" [attr.aria-labelledby]=\"tab.id\">\n          <template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></template>\n        </div>\n      </template>\n    </div>\n  "
		        }), 
		        __metadata('design:paramtypes', [tabset_config_1.NgbTabsetConfig])
		    ], NgbTabset);
		    return NgbTabset;
		}());
		exports.NgbTabset = NgbTabset;
		//# sourceMappingURL=tabset.js.map
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbTabset component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the tabsets used in the application.
		 */
		var NgbTabsetConfig = (function () {
		    function NgbTabsetConfig() {
		        this.type = 'tabs';
		    }
		    NgbTabsetConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbTabsetConfig);
		    return NgbTabsetConfig;
		}());
		exports.NgbTabsetConfig = NgbTabsetConfig;
		//# sourceMappingURL=tabset-config.js.map
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var timepicker_1 = __webpack_require__(62);
		var timepicker_config_1 = __webpack_require__(64);
		var timepicker_2 = __webpack_require__(62);
		exports.NgbTimepicker = timepicker_2.NgbTimepicker;
		var timepicker_config_2 = __webpack_require__(64);
		exports.NgbTimepickerConfig = timepicker_config_2.NgbTimepickerConfig;
		var NgbTimepickerModule = (function () {
		    function NgbTimepickerModule() {
		    }
		    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [timepicker_config_1.NgbTimepickerConfig] }; };
		    NgbTimepickerModule = __decorate([
		        core_1.NgModule({ declarations: [timepicker_1.NgbTimepicker], exports: [timepicker_1.NgbTimepicker], imports: [common_1.CommonModule] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTimepickerModule);
		    return NgbTimepickerModule;
		}());
		exports.NgbTimepickerModule = NgbTimepickerModule;
		//# sourceMappingURL=timepicker.module.js.map
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(12);
		var util_1 = __webpack_require__(5);
		var ngb_time_1 = __webpack_require__(63);
		var timepicker_config_1 = __webpack_require__(64);
		var NGB_TIMEPICKER_VALUE_ACCESSOR = {
		    provide: forms_1.NG_VALUE_ACCESSOR,
		    useExisting: core_1.forwardRef(function () { return NgbTimepicker; }),
		    multi: true
		};
		/**
		 * A lightweight & configurable timepicker directive.
		 */
		var NgbTimepicker = (function () {
		    function NgbTimepicker(config) {
		        this.onChange = function (_) { };
		        this.onTouched = function () { };
		        this.meridian = config.meridian;
		        this.spinners = config.spinners;
		        this.seconds = config.seconds;
		        this.hourStep = config.hourStep;
		        this.minuteStep = config.minuteStep;
		        this.secondStep = config.secondStep;
		        this.disabled = config.disabled;
		        this.readonlyInputs = config.readonlyInputs;
		    }
		    NgbTimepicker.prototype.writeValue = function (value) {
		        this.model = value ? new ngb_time_1.NgbTime(value.hour, value.minute, value.second) : new ngb_time_1.NgbTime();
		        if (!this.seconds && (!value || !util_1.isNumber(value.second))) {
		            this.model.second = 0;
		        }
		    };
		    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
		    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
		    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
		    NgbTimepicker.prototype.changeHour = function (step) {
		        this.model.changeHour(step);
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.changeMinute = function (step) {
		        this.model.changeMinute(step);
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.changeSecond = function (step) {
		        this.model.changeSecond(step);
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.updateHour = function (newVal) {
		        this.model.updateHour(util_1.toInteger(newVal));
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.updateMinute = function (newVal) {
		        this.model.updateMinute(util_1.toInteger(newVal));
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.updateSecond = function (newVal) {
		        this.model.updateSecond(util_1.toInteger(newVal));
		        this.propagateModelChange();
		    };
		    NgbTimepicker.prototype.toggleMeridian = function () {
		        if (this.meridian) {
		            this.changeHour(12);
		        }
		    };
		    NgbTimepicker.prototype.formatHour = function (value) { return util_1.padNumber(util_1.isNumber(value) ? (value % (this.meridian ? 12 : 24)) : NaN); };
		    NgbTimepicker.prototype.formatMinSec = function (value) { return util_1.padNumber(value); };
		    NgbTimepicker.prototype.ngOnChanges = function (changes) {
		        if (changes['seconds'] && !this.seconds && this.model && !util_1.isNumber(this.model.second)) {
		            this.model.second = 0;
		            this.propagateModelChange(false);
		        }
		    };
		    NgbTimepicker.prototype.propagateModelChange = function (touched) {
		        if (touched === void 0) { touched = true; }
		        if (touched) {
		            this.onTouched();
		        }
		        if (this.model.isValid(this.seconds)) {
		            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
		        }
		        else {
		            this.onChange(null);
		        }
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTimepicker.prototype, "meridian", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTimepicker.prototype, "spinners", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTimepicker.prototype, "seconds", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbTimepicker.prototype, "hourStep", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbTimepicker.prototype, "minuteStep", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], NgbTimepicker.prototype, "secondStep", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTimepicker.prototype, "readonlyInputs", void 0);
		    NgbTimepicker = __decorate([
		        core_1.Component({
		            selector: 'ngb-timepicker',
		            styles: ["\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n    \n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n    \n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n  "],
		            template: "\n     <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <table>\n        <tr *ngIf=\"spinners\">\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeHour(hourStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron\"></span>\n            </button>\n          </td>\n          <td>&nbsp;</td>\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeMinute(minuteStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron\"></span>\n            </button>\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;</td>\n            <td class=\"text-xs-center\">\n              <button type=\"button\" class=\"btn-link\" (click)=\"changeSecond(secondStep)\"\n                [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron\"></span>\n              </button>\n            </td>\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;</td>\n            <td>&nbsp;</td>\n          </template>\n        </tr>\n        <tr>\n          <td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n              [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </td>\n          <td>&nbsp;:&nbsp;</td>\n          <td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n              [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;:&nbsp;</td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n              [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;&nbsp;</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"toggleMeridian()\">{{model.hour > 12 ? 'PM' : 'AM'}}</button>\n            </td>\n          </template>\n        </tr>\n        <tr *ngIf=\"spinners\">\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeHour(-hourStep)\" \n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron bottom\"></span>\n            </button>\n          </td>\n          <td>&nbsp;</td>\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeMinute(-minuteStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron bottom\"></span>\n            </button>\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;</td>\n            <td class=\"text-xs-center\">\n              <button type=\"button\" class=\"btn-link\" (click)=\"changeSecond(-secondStep)\"\n                [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron bottom\"></span>\n              </button>\n            </td>\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;</td>\n            <td>&nbsp;</td>\n          </template>\n        </tr>\n      </table>\n    </fieldset>\n  ",
		            providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
		        }), 
		        __metadata('design:paramtypes', [timepicker_config_1.NgbTimepickerConfig])
		    ], NgbTimepicker);
		    return NgbTimepicker;
		}());
		exports.NgbTimepicker = NgbTimepicker;
		//# sourceMappingURL=timepicker.js.map
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var util_1 = __webpack_require__(5);
		var NgbTime = (function () {
		    function NgbTime(hour, minute, second) {
		        this.hour = util_1.toInteger(hour);
		        this.minute = util_1.toInteger(minute);
		        this.second = util_1.toInteger(second);
		    }
		    NgbTime.prototype.changeHour = function (step) {
		        if (step === void 0) { step = 1; }
		        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
		    };
		    NgbTime.prototype.updateHour = function (hour) {
		        if (util_1.isNumber(hour)) {
		            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
		        }
		        else {
		            this.hour = NaN;
		        }
		    };
		    NgbTime.prototype.changeMinute = function (step) {
		        if (step === void 0) { step = 1; }
		        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
		    };
		    NgbTime.prototype.updateMinute = function (minute) {
		        if (util_1.isNumber(minute)) {
		            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
		            this.changeHour(Math.floor(minute / 60));
		        }
		        else {
		            this.minute = NaN;
		        }
		    };
		    NgbTime.prototype.changeSecond = function (step) {
		        if (step === void 0) { step = 1; }
		        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
		    };
		    NgbTime.prototype.updateSecond = function (second) {
		        if (util_1.isNumber(second)) {
		            this.second = second < 0 ? 60 + second % 60 : second % 60;
		            this.changeMinute(Math.floor(second / 60));
		        }
		        else {
		            this.second = NaN;
		        }
		    };
		    NgbTime.prototype.isValid = function (checkSecs) {
		        if (checkSecs === void 0) { checkSecs = true; }
		        return util_1.isNumber(this.hour) && util_1.isNumber(this.minute) && (checkSecs ? util_1.isNumber(this.second) : true);
		    };
		    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
		    return NgbTime;
		}());
		exports.NgbTime = NgbTime;
		//# sourceMappingURL=ngb-time.js.map
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbTimepicker component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the timepickers used in the application.
		 */
		var NgbTimepickerConfig = (function () {
		    function NgbTimepickerConfig() {
		        this.meridian = false;
		        this.spinners = true;
		        this.seconds = false;
		        this.hourStep = 1;
		        this.minuteStep = 1;
		        this.secondStep = 1;
		        this.disabled = false;
		        this.readonlyInputs = false;
		    }
		    NgbTimepickerConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbTimepickerConfig);
		    return NgbTimepickerConfig;
		}());
		exports.NgbTimepickerConfig = NgbTimepickerConfig;
		//# sourceMappingURL=timepicker-config.js.map
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var tooltip_1 = __webpack_require__(66);
		var tooltip_config_1 = __webpack_require__(67);
		var tooltip_config_2 = __webpack_require__(67);
		exports.NgbTooltipConfig = tooltip_config_2.NgbTooltipConfig;
		var tooltip_2 = __webpack_require__(66);
		exports.NgbTooltip = tooltip_2.NgbTooltip;
		var NgbTooltipModule = (function () {
		    function NgbTooltipModule() {
		    }
		    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [tooltip_config_1.NgbTooltipConfig] }; };
		    NgbTooltipModule = __decorate([
		        core_1.NgModule({ declarations: [tooltip_1.NgbTooltip, tooltip_1.NgbTooltipWindow], exports: [tooltip_1.NgbTooltip], entryComponents: [tooltip_1.NgbTooltipWindow] }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTooltipModule);
		    return NgbTooltipModule;
		}());
		exports.NgbTooltipModule = NgbTooltipModule;
		//# sourceMappingURL=tooltip.module.js.map
	
	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var triggers_1 = __webpack_require__(50);
		var positioning_1 = __webpack_require__(30);
		var popup_1 = __webpack_require__(38);
		var tooltip_config_1 = __webpack_require__(67);
		var NgbTooltipWindow = (function () {
		    function NgbTooltipWindow() {
		        this.placement = 'top';
		    }
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTooltipWindow.prototype, "placement", void 0);
		    NgbTooltipWindow = __decorate([
		        core_1.Component({
		            selector: 'ngb-tooltip-window',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            host: { '[class]': '"tooltip in tooltip-" + placement', 'role': 'tooltip' },
		            // TODO remove the div.tooltip-arrow, which is there only to maintain compatibility with bootstrap alpha.4
		            template: "\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTooltipWindow);
		    return NgbTooltipWindow;
		}());
		exports.NgbTooltipWindow = NgbTooltipWindow;
		/**
		 * A lightweight, extensible directive for fancy tooltip creation.
		 */
		var NgbTooltip = (function () {
		    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
		        var _this = this;
		        this._elementRef = _elementRef;
		        this._renderer = _renderer;
		        /**
		       * Emits an event when the tooltip is shown
		       */
		        this.shown = new core_1.EventEmitter();
		        /**
		         * Emits an event when the tooltip is hidden
		         */
		        this.hidden = new core_1.EventEmitter();
		        this.placement = config.placement;
		        this.triggers = config.triggers;
		        this.container = config.container;
		        this._popupService = new popup_1.PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
		        this._zoneSubscription = ngZone.onStable.subscribe(function () {
		            if (_this._windowRef) {
		                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
		            }
		        });
		    }
		    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
		        get: function () { return this._ngbTooltip; },
		        /**
		         * Content to be displayed as tooltip. If falsy, the tooltip won't open.
		         */
		        set: function (value) {
		            this._ngbTooltip = value;
		            if (!value && this._windowRef) {
		                this.close();
		            }
		        },
		        enumerable: true,
		        configurable: true
		    });
		    /**
		     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
		     */
		    NgbTooltip.prototype.open = function () {
		        if (!this._windowRef && this._ngbTooltip) {
		            this._windowRef = this._popupService.open(this._ngbTooltip);
		            this._windowRef.instance.placement = this.placement;
		            if (this.container === 'body') {
		                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
		            }
		            // we need to manually invoke change detection since events registered via
		            // Renderer::listen() - to be determined if this is a bug in the Angular 2
		            this._windowRef.changeDetectorRef.markForCheck();
		            this.shown.emit();
		        }
		    };
		    /**
		     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
		     */
		    NgbTooltip.prototype.close = function () {
		        if (this._windowRef != null) {
		            this._popupService.close();
		            this._windowRef = null;
		            this.hidden.emit();
		        }
		    };
		    /**
		     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
		     */
		    NgbTooltip.prototype.toggle = function () {
		        if (this._windowRef) {
		            this.close();
		        }
		        else {
		            this.open();
		        }
		    };
		    /**
		     * Returns whether or not the tooltip is currently being shown
		     */
		    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
		    NgbTooltip.prototype.ngOnInit = function () {
		        this._unregisterListenersFn = triggers_1.listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
		    };
		    NgbTooltip.prototype.ngOnDestroy = function () {
		        this.close();
		        this._unregisterListenersFn();
		        this._zoneSubscription.unsubscribe();
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTooltip.prototype, "placement", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTooltip.prototype, "triggers", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTooltip.prototype, "container", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbTooltip.prototype, "shown", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbTooltip.prototype, "hidden", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object), 
		        __metadata('design:paramtypes', [Object])
		    ], NgbTooltip.prototype, "ngbTooltip", null);
		    NgbTooltip = __decorate([
		        core_1.Directive({ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, tooltip_config_1.NgbTooltipConfig, core_1.NgZone])
		    ], NgbTooltip);
		    return NgbTooltip;
		}());
		exports.NgbTooltip = NgbTooltip;
		//# sourceMappingURL=tooltip.js.map
	
	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbTooltip directive.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the tooltips used in the application.
		 */
		var NgbTooltipConfig = (function () {
		    function NgbTooltipConfig() {
		        this.placement = 'top';
		        this.triggers = 'hover';
		    }
		    NgbTooltipConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbTooltipConfig);
		    return NgbTooltipConfig;
		}());
		exports.NgbTooltipConfig = NgbTooltipConfig;
		//# sourceMappingURL=tooltip-config.js.map
	
	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var common_1 = __webpack_require__(3);
		var highlight_1 = __webpack_require__(69);
		var typeahead_window_1 = __webpack_require__(70);
		var typeahead_1 = __webpack_require__(71);
		var typeahead_config_1 = __webpack_require__(76);
		var highlight_2 = __webpack_require__(69);
		exports.NgbHighlight = highlight_2.NgbHighlight;
		var typeahead_window_2 = __webpack_require__(70);
		exports.NgbTypeaheadWindow = typeahead_window_2.NgbTypeaheadWindow;
		var typeahead_config_2 = __webpack_require__(76);
		exports.NgbTypeaheadConfig = typeahead_config_2.NgbTypeaheadConfig;
		var NgbTypeaheadModule = (function () {
		    function NgbTypeaheadModule() {
		    }
		    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [typeahead_config_1.NgbTypeaheadConfig] }; };
		    NgbTypeaheadModule = __decorate([
		        core_1.NgModule({
		            declarations: [typeahead_1.NgbTypeahead, highlight_1.NgbHighlight, typeahead_window_1.NgbTypeaheadWindow],
		            exports: [typeahead_1.NgbTypeahead],
		            imports: [common_1.CommonModule],
		            entryComponents: [typeahead_window_1.NgbTypeaheadWindow]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTypeaheadModule);
		    return NgbTypeaheadModule;
		}());
		exports.NgbTypeaheadModule = NgbTypeaheadModule;
		//# sourceMappingURL=typeahead.module.js.map
	
	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var NgbHighlight = (function () {
		    function NgbHighlight() {
		        this.highlightClass = 'ngb-highlight';
		    }
		    NgbHighlight.prototype.ngOnChanges = function (changes) {
		        var resultStr = util_1.toString(this.result);
		        var resultLC = resultStr.toLowerCase();
		        var termLC = util_1.toString(this.term).toLowerCase();
		        var currentIdx = 0;
		        if (termLC.length > 0) {
		            this.parts = resultLC.split(new RegExp("(" + util_1.regExpEscape(termLC) + ")")).map(function (part) {
		                var originalPart = resultStr.substr(currentIdx, part.length);
		                currentIdx += part.length;
		                return originalPart;
		            });
		        }
		        else {
		            this.parts = [resultStr];
		        }
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbHighlight.prototype, "highlightClass", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbHighlight.prototype, "result", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbHighlight.prototype, "term", void 0);
		    NgbHighlight = __decorate([
		        core_1.Component({
		            selector: 'ngb-highlight',
		            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
		            template: "<template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
		                "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><template [ngIf]=\"!isOdd\">{{part}}</template>" +
		                "</template>",
		            styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbHighlight);
		    return NgbHighlight;
		}());
		exports.NgbHighlight = NgbHighlight;
		//# sourceMappingURL=highlight.js.map
	
	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var util_1 = __webpack_require__(5);
		var NgbTypeaheadWindow = (function () {
		    function NgbTypeaheadWindow() {
		        /**
		         * An index of a match to be selected initially
		         */
		        this.activeIdx = 0;
		        /**
		         * A function used to format a given result before display. This function should return a formatted string without any
		         * HTML markup
		         */
		        this.formatter = util_1.toString;
		        /**
		         * Event raised when user selects a particular result row
		         */
		        this.selectEvent = new core_1.EventEmitter();
		    }
		    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
		    /**
		     * @internal
		     */
		    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) { this.activeIdx = activeIdx; };
		    NgbTypeaheadWindow.prototype.next = function () { this.activeIdx = (this.activeIdx + 1) % this.results.length; };
		    NgbTypeaheadWindow.prototype.prev = function () { this.activeIdx = (this.activeIdx <= 0 ? this.results.length - 1 : this.activeIdx - 1); };
		    /**
		     * @internal
		     */
		    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTypeaheadWindow.prototype, "activeIdx", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTypeaheadWindow.prototype, "results", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], NgbTypeaheadWindow.prototype, "term", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], NgbTypeaheadWindow.prototype, "formatter", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbTypeaheadWindow.prototype, "resultTemplate", void 0);
		    __decorate([
		        core_1.Output('select'), 
		        __metadata('design:type', Object)
		    ], NgbTypeaheadWindow.prototype, "selectEvent", void 0);
		    NgbTypeaheadWindow = __decorate([
		        core_1.Component({
		            selector: 'ngb-typeahead-window',
		            exportAs: 'ngbTypeaheadWindow',
		            host: { 'class': 'dropdown-menu', 'style': 'display: block' },
		            template: "\n    <template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </template>\n    <template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" [class.active]=\"idx === activeIdx\" \n        (mouseenter)=\"markActive(idx)\" \n        (click)=\"select(result)\">\n          <template [ngTemplateOutlet]=\"resultTemplate || rt\" \n          [ngOutletContext]=\"{result: result, term: term, formatter: formatter}\"></template>\n      </button>\n    </template>\n  "
		        }), 
		        __metadata('design:paramtypes', [])
		    ], NgbTypeaheadWindow);
		    return NgbTypeaheadWindow;
		}());
		exports.NgbTypeaheadWindow = NgbTypeaheadWindow;
		//# sourceMappingURL=typeahead-window.js.map
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var forms_1 = __webpack_require__(12);
		var Observable_1 = __webpack_require__(72);
		__webpack_require__(73);
		__webpack_require__(74);
		__webpack_require__(75);
		var positioning_1 = __webpack_require__(30);
		var typeahead_window_1 = __webpack_require__(70);
		var popup_1 = __webpack_require__(38);
		var util_1 = __webpack_require__(5);
		var typeahead_config_1 = __webpack_require__(76);
		var Key;
		(function (Key) {
		    Key[Key["Tab"] = 9] = "Tab";
		    Key[Key["Enter"] = 13] = "Enter";
		    Key[Key["Escape"] = 27] = "Escape";
		    Key[Key["ArrowUp"] = 38] = "ArrowUp";
		    Key[Key["ArrowDown"] = 40] = "ArrowDown";
		})(Key || (Key = {}));
		var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
		    provide: forms_1.NG_VALUE_ACCESSOR,
		    useExisting: core_1.forwardRef(function () { return NgbTypeahead; }),
		    multi: true
		};
		/**
		 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
		 */
		var NgbTypeahead = (function () {
		    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
		        var _this = this;
		        this._elementRef = _elementRef;
		        this._viewContainerRef = _viewContainerRef;
		        this._renderer = _renderer;
		        this._injector = _injector;
		        /**
		         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
		         */
		        this.selectItem = new core_1.EventEmitter();
		        this._onTouched = function () { };
		        this._onChange = function (_) { };
		        this.editable = config.editable;
		        this.focusFirst = config.focusFirst;
		        this.showHint = config.showHint;
		        this._valueChanges = Observable_1.Observable.fromEvent(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
		        this._popupService = new popup_1.PopupService(typeahead_window_1.NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
		        this._zoneSubscription = ngZone.onStable.subscribe(function () {
		            if (_this._windowRef) {
		                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, 'bottom-left');
		            }
		        });
		    }
		    NgbTypeahead.prototype.ngOnInit = function () {
		        var _this = this;
		        this._subscription = this._subscribeToUserInput(this._valueChanges
		            .do(function (value) {
		            _this._userInput = value;
		            if (_this.editable) {
		                _this._onChange(value);
		            }
		        })
		            .let(this.ngbTypeahead));
		    };
		    NgbTypeahead.prototype.ngOnDestroy = function () {
		        this._unsubscribeFromUserInput();
		        this._zoneSubscription.unsubscribe();
		    };
		    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
		    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
		    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
		    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
		        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
		    };
		    NgbTypeahead.prototype.dismissPopup = function () {
		        if (this.isPopupOpen()) {
		            this._closePopup();
		            this._writeInputValue(this._userInput);
		        }
		    };
		    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
		    NgbTypeahead.prototype.handleBlur = function () { this._onTouched(); };
		    NgbTypeahead.prototype.handleKeyDown = function (event) {
		        if (!this._windowRef) {
		            return;
		        }
		        if (Key[util_1.toString(event.which)]) {
		            event.preventDefault();
		            switch (event.which) {
		                case Key.ArrowDown:
		                    this._windowRef.instance.next();
		                    this._showHint();
		                    break;
		                case Key.ArrowUp:
		                    this._windowRef.instance.prev();
		                    this._showHint();
		                    break;
		                case Key.Enter:
		                case Key.Tab:
		                    var result = this._windowRef.instance.getActive();
		                    if (util_1.isDefined(result)) {
		                        this._selectResult(result);
		                    }
		                    this._closePopup();
		                    break;
		                case Key.Escape:
		                    this.dismissPopup();
		                    break;
		            }
		        }
		    };
		    NgbTypeahead.prototype._openPopup = function () {
		        var _this = this;
		        if (!this._windowRef) {
		            this._windowRef = this._popupService.open();
		            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
		        }
		    };
		    NgbTypeahead.prototype._closePopup = function () {
		        this._popupService.close();
		        this._windowRef = null;
		    };
		    NgbTypeahead.prototype._selectResult = function (result) {
		        var defaultPrevented = false;
		        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
		        if (!defaultPrevented) {
		            this.writeValue(result);
		            this._onChange(result);
		        }
		    };
		    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
		        this._selectResult(result);
		        this._closePopup();
		    };
		    NgbTypeahead.prototype._showHint = function () {
		        if (this.showHint) {
		            var userInputLowerCase = this._userInput.toLowerCase();
		            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
		            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
		                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
		                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'setSelectionRange', [this._userInput.length, formattedVal.length]);
		            }
		            else {
		                this.writeValue(this._windowRef.instance.getActive());
		            }
		        }
		    };
		    NgbTypeahead.prototype._formatItemForInput = function (item) {
		        return item && this.inputFormatter ? this.inputFormatter(item) : util_1.toString(item);
		    };
		    NgbTypeahead.prototype._writeInputValue = function (value) {
		        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
		    };
		    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
		        var _this = this;
		        return userInput$.subscribe(function (results) {
		            if (!results || results.length === 0) {
		                _this._closePopup();
		            }
		            else {
		                _this._openPopup();
		                _this._windowRef.instance.activeIdx = _this.focusFirst ? 0 : -1;
		                _this._windowRef.instance.results = results;
		                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
		                if (_this.resultFormatter) {
		                    _this._windowRef.instance.formatter = _this.resultFormatter;
		                }
		                if (_this.resultTemplate) {
		                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
		                }
		                _this._showHint();
		                // The observable stream we are subscribing to might have async steps
		                // and if a component containing typeahead is using the OnPush strategy
		                // the change detection turn wouldn't be invoked automatically.
		                _this._windowRef.changeDetectorRef.detectChanges();
		            }
		        });
		    };
		    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
		        if (this._subscription) {
		            this._subscription.unsubscribe();
		        }
		        this._subscription = null;
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTypeahead.prototype, "editable", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTypeahead.prototype, "focusFirst", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Function)
		    ], NgbTypeahead.prototype, "inputFormatter", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Function)
		    ], NgbTypeahead.prototype, "ngbTypeahead", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Function)
		    ], NgbTypeahead.prototype, "resultFormatter", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', core_1.TemplateRef)
		    ], NgbTypeahead.prototype, "resultTemplate", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], NgbTypeahead.prototype, "showHint", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', Object)
		    ], NgbTypeahead.prototype, "selectItem", void 0);
		    NgbTypeahead = __decorate([
		        core_1.Directive({
		            selector: 'input[ngbTypeahead]',
		            host: {
		                '(blur)': 'handleBlur()',
		                '[class.open]': 'isPopupOpen()',
		                '(document:click)': 'dismissPopup()',
		                '(keydown)': 'handleKeyDown($event)',
		                'autocomplete': 'off',
		                'autocapitalize': 'off',
		                'autocorrect': 'off'
		            },
		            providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, typeahead_config_1.NgbTypeaheadConfig, core_1.NgZone])
		    ], NgbTypeahead);
		    return NgbTypeahead;
		}());
		exports.NgbTypeahead = NgbTypeahead;
		//# sourceMappingURL=typeahead.js.map
	
	/***/ },
	/* 72 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_72__;
	
	/***/ },
	/* 73 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_73__;
	
	/***/ },
	/* 74 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_74__;
	
	/***/ },
	/* 75 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_75__;
	
	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		/**
		 * Configuration service for the NgbTypeahead component.
		 * You can inject this service, typically in your root component, and customize the values of its properties in
		 * order to provide default values for all the typeaheads used in the application.
		 */
		var NgbTypeaheadConfig = (function () {
		    function NgbTypeaheadConfig() {
		        this.editable = true;
		        this.focusFirst = true;
		        this.showHint = false;
		    }
		    NgbTypeaheadConfig = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], NgbTypeaheadConfig);
		    return NgbTypeaheadConfig;
		}());
		exports.NgbTypeaheadConfig = NgbTypeaheadConfig;
		//# sourceMappingURL=typeahead-config.js.map
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng-bootstrap.js.map

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(38);
	var auth_admin_guard_ts_1 = __webpack_require__(68);
	var auth_student_guard_ts_1 = __webpack_require__(69);
	var login_component_1 = __webpack_require__(70);
	var start_page_component_1 = __webpack_require__(102);
	var admin_start_page_component_ts_1 = __webpack_require__(105);
	var not_found_component_1 = __webpack_require__(108);
	var admin_routing_1 = __webpack_require__(111);
	var student_routing_1 = __webpack_require__(465);
	var appRoutes = [
	    { path: "", redirectTo: "/login", pathMatch: "full" },
	    { path: "login", component: login_component_1.LoginComponent },
	    { path: "notfound", component: not_found_component_1.NotFoundComponent },
	    {
	        path: "student",
	        component: start_page_component_1.StartPageComponent,
	        canActivate: [auth_student_guard_ts_1.AuthStudentGuard],
	        children: student_routing_1.studentRoutes
	    },
	    {
	        path: "admin",
	        component: admin_start_page_component_ts_1.AdminStartPageComponent,
	        canActivate: [auth_admin_guard_ts_1.AuthAdminGuard],
	        children: admin_routing_1.adminRoutes
	    },
	    { path: "**", redirectTo: "/login", pathMatch: "full" }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });


/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var AuthAdminGuard = (function () {
	    function AuthAdminGuard(router) {
	        this.router = router;
	    }
	    AuthAdminGuard.prototype.canActivate = function () {
	        return this.checkLogin();
	    };
	    AuthAdminGuard.prototype.checkLogin = function () {
	        if (sessionStorage.getItem("userRole") === "admin")
	            return true;
	        this.router.navigate(["/notfound"]);
	        return false;
	    };
	    AuthAdminGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], AuthAdminGuard);
	    return AuthAdminGuard;
	    var _a;
	}());
	exports.AuthAdminGuard = AuthAdminGuard;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var AuthStudentGuard = (function () {
	    function AuthStudentGuard(router) {
	        this.router = router;
	    }
	    AuthStudentGuard.prototype.canActivate = function () {
	        return this.checkLogin();
	    };
	    AuthStudentGuard.prototype.checkLogin = function () {
	        if (sessionStorage.getItem("userRole") === "student")
	            return true;
	        this.router.navigate(["/notfound"]);
	        return false;
	    };
	    AuthStudentGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], AuthStudentGuard);
	    return AuthStudentGuard;
	    var _a;
	}());
	exports.AuthStudentGuard = AuthStudentGuard;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_1 = __webpack_require__(71);
	var login_service_1 = __webpack_require__(72);
	var LoginComponent = (function () {
	    function LoginComponent(loginService) {
	        this.loginService = loginService;
	        this.user = new user_1.User();
	    }
	    LoginComponent.prototype.onSubmit = function () {
	        this.loginService.login(this.user);
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: "login-form",
	            template: __webpack_require__(100),
	            styles: [__webpack_require__(101)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof login_service_1.LoginService !== 'undefined' && login_service_1.LoginService) === 'function' && _a) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User(username, email, password, password_confirm) {
	        if (username === void 0) { username = ""; }
	        if (password === void 0) { password = ""; }
	        this.username = username;
	        this.password = password;
	        this.password_confirm = password_confirm;
	        if (email != undefined) {
	            this.email = email;
	        }
	    }
	    return User;
	}());
	exports.User = User;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(5);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var constant_1 = __webpack_require__(76);
	var constant_2 = __webpack_require__(76);
	var constant_3 = __webpack_require__(76);
	var common_service_1 = __webpack_require__(96);
	var LoginService = (function () {
	    function LoginService(_router, _http, modalService, commonService) {
	        var _this = this;
	        this._router = _router;
	        this._http = _http;
	        this.modalService = modalService;
	        this.commonService = commonService;
	        this.modalInfoConfig = constant_3.modalInfoConfig;
	        this.loginUrl = constant_1.loginUrl;
	        this.logoutUrl = constant_2.logoutUrl;
	        this.badLoginOrPasswordMessage = constant_3.badLoginOrPasswordMessage;
	        this.badLogoutMessage = constant_3.badLogoutMessage;
	        this.serverErrorMessage = constant_3.serverErrorMessage;
	        this._headers = new http_1.Headers({ "content-type": "application/json" });
	        this.successEventModal = constant_3.successEventModal;
	        this.handleError = function (error) {
	            return Observable_1.Observable.throw(error.status);
	        };
	        this.successRequest = function (response) { return response.json(); };
	        this.successLogin = function (response) {
	            var dTester = JSON.parse(localStorage.getItem("dTester"));
	            if (dTester) {
	                var userIdHash = _this.commonService.cryptData(+response.id);
	                if (userIdHash !== dTester.userId) {
	                    localStorage.removeItem("dTester");
	                }
	            }
	            if (response.roles[1] === "student") {
	                sessionStorage.setItem("userRole", response.roles[1]);
	                sessionStorage.setItem("userId", response.id);
	                _this._router.navigate(["/student"]);
	            }
	            else if (response.roles[1] === "admin") {
	                sessionStorage.setItem("userRole", response.roles[1]);
	                _this._router.navigate(["/admin"]);
	            }
	        };
	        this.errorLogin = function (error) {
	            if (error === 400) {
	                _this.modalInfoConfig.infoString = _this.badLoginOrPasswordMessage;
	                _this.successEventModal();
	            }
	            else {
	                _this.modalInfoConfig.infoString = _this.serverErrorMessage;
	                _this.successEventModal();
	            }
	        };
	        this.successLogout = function (response) {
	            if (response.status === 200) {
	                sessionStorage.removeItem("userRole");
	                sessionStorage.removeItem("userId");
	                _this._router.navigate(["/login"]);
	            }
	        };
	        this.errorLogout = function () {
	            _this.modalInfoConfig.infoString = _this.badLogoutMessage;
	            _this.modalInfoConfig.action = "confirm";
	            _this.modalInfoConfig.title = "Попередження!";
	            var modalRef = _this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	            modalRef.componentInstance.config = _this.modalInfoConfig;
	            modalRef.result
	                .then(function () {
	                return;
	            }, function () {
	                sessionStorage.removeItem("userRole");
	                sessionStorage.removeItem("userId");
	                _this._router.navigate(["/login"]);
	            });
	        };
	    }
	    ;
	    LoginService.prototype.login = function (user) {
	        this._http
	            .post(this.loginUrl, JSON.stringify(user), { headers: this._headers })
	            .map(this.successRequest)
	            .catch(this.handleError)
	            .subscribe(this.successLogin, this.errorLogin);
	    };
	    ;
	    LoginService.prototype.logout = function () {
	        this._http
	            .get(this.logoutUrl)
	            .catch(this.handleError)
	            .subscribe(this.successLogout, this.errorLogout);
	    };
	    LoginService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _c) || Object, (typeof (_d = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _d) || Object])
	    ], LoginService);
	    return LoginService;
	    var _a, _b, _c, _d;
	}());
	exports.LoginService = LoginService;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(29);
	var InfoModalComponent = (function () {
	    function InfoModalComponent(activeModal) {
	        this.activeModal = activeModal;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], InfoModalComponent.prototype, "config", void 0);
	    InfoModalComponent = __decorate([
	        core_1.Component({
	            selector: "info-modal",
	            template: __webpack_require__(74),
	            styles: [__webpack_require__(75)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== 'undefined' && ng_bootstrap_1.NgbActiveModal) === 'function' && _a) || Object])
	    ], InfoModalComponent);
	    return InfoModalComponent;
	    var _a;
	}());
	exports.InfoModalComponent = InfoModalComponent;


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <h4 class=\"modal-title\">{{config.title}}</h4>\r\n</div>\r\n<div class=\"modal-body modal-body-info-confirm\">\r\n    {{config.infoString}}\r\n</div>\r\n<div class=\"modal-footer\" *ngIf=\"config.action==='confirm'\">\r\n    <button type=\"button\" class=\"btn btn-secondary\"\r\n            (click)=\"activeModal.close()\">ТАК\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">НІ</button>\r\n</div>\r\n<div class=\"modal-footer\" *ngIf=\"config.action==='info'\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">OK</button>\r\n</div>\r\n\r\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = ".modal-body-add-edit {\r\n    background-color: #f9f9f9;\r\n}\r\n\r\n.input-group-add-edit {\r\n    margin: 10px auto;\r\n}\r\n\r\n.modal-span {\r\n    min-width: 161px;\r\n}\r\n\r\n.open-modal-btn {\r\n    display: inline-block;\r\n}\r\n\r\n.modal-body-info-confirm{\r\n    text-align: center;\r\n    font-size: 120%;\r\n}"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(77));
	__export(__webpack_require__(78));
	__export(__webpack_require__(79));
	__export(__webpack_require__(80));
	__export(__webpack_require__(81));
	__export(__webpack_require__(82));
	__export(__webpack_require__(83));
	__export(__webpack_require__(84));
	__export(__webpack_require__(85));
	__export(__webpack_require__(86));
	__export(__webpack_require__(87));
	__export(__webpack_require__(88));
	__export(__webpack_require__(89));
	__export(__webpack_require__(90));
	__export(__webpack_require__(91));
	__export(__webpack_require__(92));
	__export(__webpack_require__(93));
	__export(__webpack_require__(94));
	__export(__webpack_require__(95));


/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	exports.addTitle = "Створити новий факультет";
	exports.searchTitle = "Введіть дані для пошуку";
	exports.entityTitle = "Факультети";
	exports.selectLimitTitle = "Виберіть кількість факультетів на сторінці";
	// Constants for table.component
	exports.headersFaculty = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва факультету", className: "col-xs-12 col-sm-4" },
	    { name: "Опис Факультету", className: "col-xs-12 col-sm-4" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsFaculty = [
	    {
	        title: "Перейти до груп факультету",
	        action: "group",
	        glyphicon: "glyphicon glyphicon-th",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати факультет",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити факультет",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddFaculty = {
	    title: "Створити факультет",
	    list: [
	        { name: "Назва факультету", value: "", title: "name", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Опис факультету", value: "", title: "description", type: "text", formControlName: "entityDescription",
	            hint: "Максимальна довжина опису 100 символів" },
	    ],
	    action: "create",
	    labelBtn: "Додати"
	};
	exports.configEditFaculty = {
	    title: "Редагувати факультет",
	    list: [
	        { name: "Назва факультету", value: "", title: "name", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Опис факультету", value: "", title: "description", type: "text", formControlName: "entityDescription",
	            hint: "Максимальна довжина опису 100 символів" },
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: ""
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersAdminUser = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Логін", className: "col-xs-12 col-sm-4" },
	    { name: "Поштова скринька", className: "col-xs-12 col-sm-4" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsAdminUser = [
	    {
	        title: "Редагувати дані адміністротора",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити адміністратора",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddAdminUser = {
	    title: "Додати адміністратора",
	    list: [
	        { name: "Логін", value: "", title: "username", type: "text", formControlName: "username",
	            hint: "Це поле обов'язкове" },
	        { name: "Поштова скринька", value: "", title: "email", type: "email", formControlName: "email",
	            hint: "Електронна адреса повинна бути формату логін@домен" },
	        { name: "Пароль", value: "", title: "password", type: "password", formControlName: "password",
	            hint: "Пароль повинен складатись мінімум з восьми символів" },
	        { name: "Підтвердіть пароль", value: "", title: "passwordConfirm", type: "password", formControlName: "cpassword",
	            hint: "Пароль повинен складатись мінімум з восьми символів" }
	    ],
	    action: "create",
	    labelBtn: "Додати"
	};
	exports.configEditAdminUser = {
	    title: "Редагувати адміністратора",
	    list: [
	        { name: "Логін", value: "", title: "username", type: "text", formControlName: "username",
	            hint: "Це поле обов'язкове" },
	        { name: "Поштова скринька", value: "", title: "email", type: "email", formControlName: "email",
	            hint: "Електронна адреса повинна бути формату логін@домен" },
	        { name: "Пароль", value: "", title: "password", type: "password", formControlName: "password",
	            hint: "Пароль повинен складатись мінімум з восьми символів" },
	        { name: "Підтвердіть пароль", value: "", title: "passwordConfirm", type: "password", formControlName: "cpassword",
	            hint: "Пароль повинен складатись мінімум з восьми символів" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: ""
	};


/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersSpeciality = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Код спеціальності", className: "col-xs-12 col-sm-4" },
	    { name: "Назва спеціальності", className: "col-xs-12 col-sm-4" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsSpeciality = [
	    {
	        title: "Перейти до груп спеціальності",
	        action: "viewGroup",
	        glyphicon: "glyphicon glyphicon-th",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати дані спеціальності",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити спеціальність",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddSpeciality = {
	    title: "Додати спеціальність",
	    list: [
	        { name: "Код спеціальності", value: "", title: "code", type: "text", formControlName: "specialityCode",
	            hint: "Код може складатись з цифр, пробілів та крапок" },
	        { name: "Назва спеціальності", value: "", title: "specialityName", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" }
	    ],
	    action: "create",
	    labelBtn: "Додати"
	};
	exports.configEditSpeciality = {
	    title: "Редагувати спеціальність",
	    list: [
	        { name: "Код спеціальності", value: "", title: "code", type: "text", formControlName: "specialityCode",
	            hint: "Код може складатись з цифр, пробілів, '.' та '-'" },
	        { name: "Назва спеціальності", value: "", title: "specialityName", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: ""
	};


/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersGroup = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва групи", className: "col-xs-12 col-sm-2" },
	    { name: "Факультет", className: "col-xs-12 col-sm-3" },
	    { name: "Спеціальність", className: "col-xs-12 col-sm-3" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsGroup = [
	    {
	        title: "Переглянути результати тестування групи",
	        action: "viewResult",
	        glyphicon: "glyphicon glyphicon-list-alt",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Переглянути студентів групи",
	        action: "viewStudents",
	        glyphicon: "glyphicon glyphicon-user",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Розклад тестування групи",
	        action: "viewTimetable",
	        glyphicon: "glyphicon glyphicon-calendar",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати групу",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити групу",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddGroup = {
	    title: "Додати групу",
	    list: [
	        { name: "Назва групи", value: "", title: "groupName", type: "text", formControlName: "groupName",
	            hint: "Назва групи повинна бути наступного формату" }
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    select: [
	        { selectName: "Факультет", selectItem: [], selected: "" },
	        { selectName: "Спеціальність", selectItem: [], selected: "" }
	    ]
	};
	exports.configEditGroup = {
	    title: "Редагувати групу",
	    list: [
	        { name: "Назва групи", value: "", title: "groupName", type: "text", formControlName: "groupName",
	            hint: "Назва групи повинна бути наступного формату" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    select: [
	        { selectName: "Факультет", selectItem: [], selected: "" },
	        { selectName: "Спеціальність", selectItem: [], selected: "" }
	    ]
	};


/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersGroupTimeTable = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва предмету", className: "col-xs-12 col-sm-3" },
	    { name: "Дата початку", className: "col-xs-12 col-sm-2" },
	    { name: "Час початку", className: "col-xs-12 col-sm-1" },
	    { name: "Дата кінця", className: "col-xs-12 col-sm-2" },
	    { name: "Час кінця", className: "col-xs-12 col-sm-1" },
	    { name: "", className: "col-xs-12 col-sm-2" }
	];
	exports.actionsGroupTimeTable = [
	    {
	        title: "Редагувати розклад",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити розклад",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddGroupTimeTable = {
	    title: "Назначити тестування",
	    list: [
	        { name: "Дата початку", value: "", title: "date", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "startDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час початку", value: "", title: "date", type: "time", placeholder: "год:хв",
	            formControlName: "startTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	        { name: "Дата кінця", value: "", title: "time", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "endDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час кінця", value: "", title: "time", type: "time", placeholder: "год:хв",
	            formControlName: "endTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	    ],
	    action: "create",
	    labelBtn: "Назначити",
	    select: [
	        { selectName: "Предмети", selectItem: [], selected: "" }
	    ],
	};
	exports.configEditGroupTimeTable = {
	    title: "Редагувати тестування",
	    list: [
	        { name: "Дата початку", value: {}, title: "date", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "startDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час початку", value: "", title: "date", type: "time", placeholder: "год:хв",
	            formControlName: "startTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	        { name: "Дата кінця", value: {}, title: "time", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "endDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час кінця", value: "", title: "time", type: "time", placeholder: "год:хв",
	            formControlName: "endTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    select: [
	        { selectName: "Предмети", selectItem: [], selected: "" }
	    ]
	};


/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersGroupResult = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва предмету", className: "col-xs-12 col-sm-5" },
	    { name: "Назва тесту", className: "col-xs-12 col-sm-4" },
	    { name: "", className: "col-xs-12 col-sm-2" }
	];
	exports.actionsGroupResult = [
	    {
	        title: "Переглянути результати тесту",
	        action: "viewTestResult",
	        glyphicon: "glyphicon glyphicon-eye-open",
	        btnClassName: "btn btn-default btn-sm"
	    }
	];


/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersGroupTestResult = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "ПІБ Студента", className: "col-xs-12 col-sm-4" },
	    { name: "Результат", className: "col-xs-12 col-sm-2" },
	    { name: "У відсотках", className: "col-xs-12 col-sm-2 print-hide" },
	    { name: "Оцінка", className: "col-xs-12 col-sm-3" },
	    { name: "ECTS", className: "col-xs-12 print-show" }
	];


/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	// Array of entities for statistic page
	exports.entities = [
	    {
	        name: "faculty",
	        count: "...",
	        nameForIteration: "факультетів"
	    },
	    {
	        name: "speciality",
	        count: "...",
	        nameForIteration: "спеціальностей"
	    },
	    {
	        name: "group",
	        count: "...",
	        nameForIteration: "груп"
	    },
	    {
	        name: "student",
	        count: "...",
	        nameForIteration: "студентів"
	    },
	    {
	        name: "subject",
	        count: "...",
	        nameForIteration: "предметів"
	    },
	    {
	        name: "test",
	        count: "...",
	        nameForIteration: "тестів"
	    }
	];


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var info_modal_component_1 = __webpack_require__(73);
	exports.changeLimit = function (limit) {
	    this.limit = limit;
	    this.offset = 0;
	    this.page = 1;
	    this.getRecordsRange();
	};
	exports.pageChange = function (num) {
	    if (!num) {
	        this.page = 1;
	        return;
	    }
	    this.page = num;
	    this.offset = (this.page - 1) * this.limit;
	    this.getRecordsRange();
	};
	exports.getCountRecords = function () {
	    var _this = this;
	    this.crudService.getCountRecords(this.entity)
	        .subscribe(function (data) {
	        _this.entityDataLength = +data.numberOfRecords;
	        _this.getRecordsRange();
	    }, function (error) { return console.log("error: ", error); });
	};
	exports.getRecordsRange = function () {
	    var _this = this;
	    this.crudService.getRecordsRange(this.entity, this.limit, this.offset)
	        .subscribe(function (data) {
	        _this.createTableConfig(data);
	    }, function (error) { return console.log("error: ", error); });
	};
	exports.successEventModal = function () {
	    this.modalInfoConfig.action = "info";
	    this.modalInfoConfig.title = "Повідомлення";
	    var modalRef = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	    modalRef.componentInstance.config = this.modalInfoConfig;
	};
	exports.delRecord = function (entity, id) {
	    var _this = this;
	    this.offset = (this.page - 1) * this.limit;
	    this.crudService.delRecord(entity, id)
	        .subscribe(function () {
	        _this.modalInfoConfig.infoString = "\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E.";
	        _this.modalInfoConfig.action = "info";
	        _this.modalInfoConfig.title = "Повідомлення";
	        var modalRef = _this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRef.componentInstance.config = _this.modalInfoConfig;
	        _this.refreshData("delete");
	    });
	};
	exports.findEntity = function (searchTerm) {
	    var _this = this;
	    this.search = searchTerm;
	    if (this.search.length === 0) {
	        this.offset = 0;
	        this.page = 1;
	        this.getCountRecords();
	        return;
	    }
	    this.crudService.getRecordsBySearch(this.entity, this.search)
	        .subscribe(function (data) {
	        if (data.response === "no records") {
	            _this.entityData = [];
	            return;
	        }
	        _this.page = 1;
	        _this.createTableConfig(data);
	    }, function (error) { return console.log("error: ", error); });
	};
	exports.refreshData = function (action) {
	    var _this = this;
	    if (action === "delete" && this.entityData.length === 1 && this.entityDataLength > 1) {
	        this.offset = (this.page - 2) * this.limit;
	        this.page -= 1;
	    }
	    else if (this.entityData.length > 1) {
	        this.offset = (this.page - 1) * this.limit;
	    }
	    this.crudService.getCountRecords(this.entity)
	        .subscribe(function (data) {
	        _this.entityDataLength = +data.numberOfRecords;
	        _this.getRecordsRange();
	    }, function (error) { return console.log(error); });
	};


/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	exports.baseUrl = "http://dtapi.local/";
	// export const baseUrl: string = "http://ec2-35-160-47-83.us-west-2.compute.amazonaws.com/";
	// AUTH action
	exports.loginUrl = exports.baseUrl + "login/index";
	exports.logoutUrl = exports.baseUrl + "login/logout";
	// Url
	exports.getTestsBySubjectIdUrl = exports.baseUrl + "test/getTestsBySubject"; // + id of subject
	exports.getTimeTableForSubjectUrl = exports.baseUrl + "timeTable/getTimeTablesForSubject"; // + id of subject
	exports.getTestDetailsByTestUrl = exports.baseUrl + "testDetail/getTestDetailsByTest"; // + id of subject
	exports.getQuestionsByLevelRandUrl = exports.baseUrl + "question/getQuestionsByLevelRand"; // + test_id + level + number
	exports.getRecordsRangeByTestUrl = exports.baseUrl + "question/getRecordsRangeByTest"; // + test_id + limit + offset
	exports.countRecordsByTestUrl = exports.baseUrl + "question/countRecordsByTest"; // + test_id
	exports.getAnswerByQuestionUrl = exports.baseUrl + "answer/getAnswersByQuestion"; // + test_id
	// Pagination
	exports.maxSize = 5;
	// Config for info-confirm modal
	exports.modalInfoConfig = {
	    title: "",
	    infoString: "",
	    action: ""
	};


/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	exports.badLogoutMessage = "Помилка на сервері. Чи хочете спробувати вийти повторно?(виберіть ТАК). Якщо не хочете, то Вас буде перенаправлено до сторінки логінізації, проте вихід з облікового запису не відбудеться (виберіть НІ).";
	exports.badLoginOrPasswordMessage = "Неправильний логін або пароль";
	exports.serverErrorMessage = "Помилка на сервері. Зверніться до адмінстратора";


/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	// varibles for common table
	exports.headersSubject = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва предмету", className: "col-xs-12 col-sm-4" },
	    { name: "Опис предмету", className: "col-xs-12 col-sm-4" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsSubject = [
	    {
	        title: "Перейти до тестів",
	        action: "test",
	        glyphicon: "glyphicon glyphicon-check",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Розклад тестів",
	        action: "timeTable",
	        glyphicon: "glyphicon glyphicon-calendar",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати предмет",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити предмет",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// for add-edit modal
	exports.configAddSubject = {
	    title: "Створити предмет",
	    list: [
	        { name: "Назва предмету", value: "", title: "name", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Опис предмету", value: "", title: "description", type: "text", formControlName: "entityDescription",
	            hint: "Максимальна довжина опису 100 символів" }
	    ],
	    action: "create",
	    labelBtn: "Додати"
	};
	exports.configEditSubject = {
	    title: "Редагувати предмет",
	    list: [
	        { name: "Назва предмету", value: "", title: "name", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Опис предмету", value: "", title: "description", type: "text", formControlName: "entityDescription",
	            hint: "Максимальна довжина опису 100 символів" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: ""
	};


/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersTest = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва тесту", className: "col-xs-12 col-sm-2" },
	    { name: "Завдань", className: "col-xs-12 col-sm-1 text-center" },
	    { name: "Тривалість", className: "col-xs-12 col-sm-2 text-center" },
	    { name: "Cпроб", className: "col-xs-12 col-sm-1 text-center" },
	    { name: "Статус", className: "col-xs-12 col-sm-2" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsTest = [
	    {
	        title: "Детальніше про тест",
	        action: "testDetail",
	        glyphicon: "glyphicon glyphicon-info-sign",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Завдання",
	        action: "question",
	        glyphicon: "glyphicon glyphicon-tasks",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати тест",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити тест",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configEditTest = {
	    title: "Редагувати тест",
	    list: [
	        { name: "Назва тесту", value: "", title: "name", type: "text", formControlName: "name",
	            hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Кількість завдань", value: "", title: "tasks", type: "text", formControlName: "count",
	            hint: "Допускається використовувати тільки цифри" },
	        { name: "Тривалість тесту", value: "", title: "time_for_test", type: "text", formControlName: "testTime/Rate",
	            hint: "Допускається використовувати тільки цифри" },
	        { name: "Кількість спроб", value: "", title: "attempts", type: "text", formControlName: "testAttempts",
	            hint: "Допускається використовувати тільки цифри (максимальне значення 255)" },
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    select: [
	        { selectName: "Статус", selectItem: ["Не доступно", "Доступно"], selected: "" }
	    ]
	};
	exports.configAddTest = {
	    title: "Додати тест",
	    list: [
	        { name: "Назва тесту", value: "", title: "name", type: "text", placeholder: "Вкажіть назву тесту",
	            formControlName: "name", hint: "Назва може складатись тільки з українських літер та пробілів" },
	        { name: "Кількість завдань", value: "", title: "tasks", type: "text", placeholder: "Задайте кількість завдань",
	            formControlName: "count", hint: "Допускається використовувати тільки цифри" },
	        { name: "Тривалість тесту", value: "", title: "time_for_test", type: "text", placeholder: "Встановіть час, хв",
	            formControlName: "testTime", hint: "Допускається використовувати тільки цифри" },
	        { name: "Кількість спроб", value: "", title: "attempts", type: "text", placeholder: "Встановіть кількість спроб",
	            formControlName: "testAttempts", hint: "Допускається використовувати тільки цифри (максимальне значення 255)" }
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    select: [
	        { selectName: "Статус", selectItem: ["Не доступно", "Доступно"], selected: "" }
	    ]
	};


/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersTestDetail = [
	    { name: "№", className: "col-xs-12 col-sm-1 text-center" },
	    { name: "Рівень", className: "col-xs-12 col-sm-2 text-center" },
	    { name: "Кількість завдань", className: "col-xs-12 col-sm-3 text-center" },
	    { name: "Кількість балів", className: "col-xs-12 col-sm-3 text-center" },
	    { name: "", className: "col-xs-12 col-sm-3 text-center" }
	];
	exports.actionsTestDetail = [
	    {
	        title: "Редагувати параметр",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити параметр",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddTestDetail = {
	    title: "Додати новий параметр тесту",
	    list: [
	        { name: "Кількість завдань", value: "", title: "tasks", type: "text", placeholder: "Вкажіть кількість завдань",
	            formControlName: "count", hint: "Допускається використовувати тільки цифри" },
	        { name: "Кількість балів", value: "", title: "rate", type: "text", placeholder: "Вкажіть кількість балів",
	            formControlName: "testTime/Rate", hint: "Допускається використовувати тільки цифри" }
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    select: [
	        { selectName: "Рівень", selectItem: [], selected: "" }
	    ]
	};
	exports.configEditTestDetail = {
	    title: "Редагувати параметр тесту",
	    list: [
	        { name: "Кількість завдань", value: "", title: "tasks", type: "text", placeholder: "Вкажіть кількість завдань",
	            formControlName: "count", hint: "Допускається використовувати тільки цифри" },
	        { name: "Кількість балів", value: "", title: "rate", type: "text", placeholder: "Вкажіть кількість балів",
	            formControlName: "testTime/Rate", hint: "Допускається використовувати тільки цифри" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    select: [
	        { selectName: "Рівень", selectItem: [], selected: "" }
	    ]
	};


/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersTimeTable = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Назва групи", className: "col-xs-12 col-sm-2" },
	    { name: "Дата початку", className: "col-xs-12 col-sm-2" },
	    { name: "Час початку", className: "col-xs-12 col-sm-1" },
	    { name: "Дата кінця", className: "col-xs-12 col-sm-2" },
	    { name: "Час кінця", className: "col-xs-12 col-sm-1" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsTimeTable = [
	    {
	        title: "Редагувати розклад",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити розклад",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddTimeTable = {
	    title: "Додати нову подію у розклад",
	    list: [
	        { name: "Дата початку", value: "", title: "date", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "startDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час початку", value: "", title: "date", type: "time", placeholder: "год:хв",
	            formControlName: "startTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	        { name: "Дата кінця", value: "", title: "time", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "endDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час кінця", value: "", title: "time", type: "time", placeholder: "год:хв",
	            formControlName: "endTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    select: [
	        { selectName: "Групи", selectItem: [], selected: "" }
	    ]
	};
	exports.configEditTimeTable = {
	    title: "Редагувати дану подію",
	    list: [
	        { name: "Дата початку", value: {}, title: "date", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "startDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час початку", value: "", title: "date", type: "time", placeholder: "год:хв",
	            formControlName: "startTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	        { name: "Дата кінця", value: {}, title: "time", type: "date", placeholder: "РРРР-ММ-ДД",
	            formControlName: "endDate", hint: "Дата повинна бути наступного формату РРРР-ММ-ДД" },
	        { name: "Час кінця", value: "", title: "time", type: "time", placeholder: "год:хв",
	            formControlName: "endTime", hint: "Час повинен бути наступного формату ГГ:ХХ (наприклад 23:59)" },
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    select: [
	        { selectName: "Групи", selectItem: [], selected: "" }
	    ]
	};


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersQuestion = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "Завдання", className: "col-xs-12 col-sm-3" },
	    { name: "Рівень", className: "col-xs-12 col-sm-1" },
	    { name: "Тип", className: "col-xs-12 col-sm-2" },
	    { name: "Вкладення", className: "col-xs-12 col-sm-3" },
	    { name: "", className: "col-xs-12 col-sm-2" }
	];
	exports.actionsQuestion = [
	    {
	        title: "Перейти до відповіді",
	        action: "answer",
	        glyphicon: "glyphicon glyphicon-list-alt",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Редагувати завдання",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити завдання",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddQuestion = {
	    title: "Додати нове завдання",
	    list: [
	        { name: "Завдання", value: "", title: "task", type: "text", placeholder: "Опис завдання для тесту",
	            formControlName: "name", hint: "Назва може складатись тільки з українських літер та пробілів" },
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    img: { imgName: "Вкладення", value: "", title: "attachment", type: "file" },
	    select: [
	        { selectName: "Рівень", selectItem: [], selected: "" },
	        { selectName: "Тип", selectItem: [], selected: "" }
	    ]
	};
	exports.configEditQuestion = {
	    title: "Редагувати завдання",
	    list: [
	        { name: "Завдання", value: "", title: "task", type: "text", placeholder: "Опис завдання для тесту",
	            formControlName: "name", hint: "Назва може складатись тільки з українських літер та пробілів" },
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    img: { imgName: "Вкладення", value: "", title: "attachment", type: "file" },
	    select: [
	        { selectName: "Рівень", selectItem: [], selected: "" },
	        { selectName: "Тип", selectItem: [], selected: "" }
	    ]
	};


/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";
	// Student's constants for table.component
	exports.headersStudentAdmin = [
	    { name: "№", className: "col-xs-12 col-sm-1" },
	    { name: "ПІБ", className: "col-xs-12 col-sm-3" },
	    { name: "№ залікової книжки", className: "col-xs-12 col-sm-3" },
	    { name: "Група", className: "col-xs-12 col-sm-3" },
	    { name: "", className: "col-xs-12 col-sm-2" }
	];
	exports.actionsStudentAdmin = [
	    {
	        title: "Переглянути профіль студента",
	        action: "view",
	        glyphicon: "glyphicon glyphicon-user",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити профіль студента",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }];


/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";
	// Constants for table.component
	exports.headersAnswer = [
	    { name: "Текст відповіді", className: "col-xs-12 col-sm-3" },
	    { name: "Вкладення", className: "col-xs-12 col-sm-3" },
	    { name: "Правильна відповідь", className: "col-xs-12 col-sm-3" },
	    { name: "", className: "col-xs-12 col-sm-3" }
	];
	exports.actionsAnswer = [
	    {
	        title: "Редагувати відповідь",
	        action: "edit",
	        glyphicon: "glyphicon glyphicon-edit",
	        btnClassName: "btn btn-default btn-sm"
	    },
	    {
	        title: "Видалити відповідь",
	        action: "delete",
	        glyphicon: "glyphicon glyphicon-trash",
	        btnClassName: "btn btn-danger btn-sm"
	    }
	];
	// Constants for add-edit-modal component
	exports.configAddAnswer = {
	    title: "Додати нову відповідь",
	    list: [
	        { name: "Текст відповіді", value: "", title: "answer_text", type: "text", placeholder: "Відповідь для тесту",
	            formControlName: "answer", hint: "Текст відповіді не може перевищувати 100 символів" },
	    ],
	    select: [
	        { selectName: "Правильна відповідь", selectItem: [], selected: "" }
	    ],
	    action: "create",
	    labelBtn: "Додати",
	    img: { imgName: "Вкладення", value: "", title: "attachment", type: "file" }
	};
	exports.configEditAnswer = {
	    title: "Редагувати завдання",
	    list: [
	        { name: "Текст відповіді", value: "", title: "answer_text", type: "text", placeholder: "Відповідь для тесту",
	            formControlName: "answer", hint: "Текст відповіді не може перевищувати 100 символів" },
	    ],
	    select: [
	        { selectName: "Правильна відповідь", selectItem: [], selected: "" }
	    ],
	    action: "edit",
	    labelBtn: "Редагувати",
	    id: "",
	    img: { imgName: "Вкладення", value: "", title: "attachment", type: "file" }
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(76);
	exports.getAnswersByQuestionTestPlayerUrl = index_1.baseUrl + "SAnswer/getAnswersByQuestion";
	exports.checkSAnswerUrl = index_1.baseUrl + "SAnswer/checkAnswers";
	exports.getTimeStampUrl = index_1.baseUrl + "TestPlayer/getTimeStamp";
	exports.saveEndTimeUrl = index_1.baseUrl + "TestPlayer/saveEndTime";
	exports.getEndTimeUrl = index_1.baseUrl + "TestPlayer/getEndTime";
	exports.resetSessionDataUrl = index_1.baseUrl + "TestPlayer/resetSessionData";
	exports.getTestRecordUrl = index_1.baseUrl + "test/getRecords";
	exports.countTestPassesByStudentUrl = index_1.baseUrl + "Result/countTestPassesByStudent";
	exports.navButtonConstClassName = "btn nom-qua";
	exports.modalInfoParams = {
	    canDeactivateMessage: ["Ви дійсно хочете припинити тестування (ваші результати можуть бути втраченими)?",
	        "confirm", "Попередження!"],
	    youAsweredAllQuestion: ["\u0412\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0438 \u043D\u0430 \u0432\u0441\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u0429\u043E\u0431 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u0438 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0442\u0435\u0441\u0442\"",
	        "info", "Повідомлення."],
	    doYouWantFinishTest: ["Ви дійсно хочете завершити тестування?", "confirm", "Підтвердження."],
	    mistakeDuringSaveResult: ["\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432. \u041D\u0430\u0436\u043C\u0456\u0442\u044C \"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0442\u0435\u0441\u0442\" \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
	        "info", "Результат тестування!"],
	    youUsedAllAtempts: ["Ви використали всі спроби", "info", "Повідомлення."],
	    impossibleRecoverTest: ["Відновлення тесту не можливо!", "info", "Повідомлення."]
	};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var config_modal_info_1 = __webpack_require__(97);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var md5 = __webpack_require__(98);
	var CommonService = (function () {
	    function CommonService(modalService) {
	        this.modalService = modalService;
	    }
	    ;
	    CommonService.prototype.leftPad = function (num) {
	        var result;
	        if (num >= 0) {
	            result = num < 10 ? "0" + num : "" + num;
	        }
	        else {
	            result = Math.abs(num) < 10 ? "-0" + Math.abs(num) : "" + num;
	        }
	        return result;
	    };
	    CommonService.prototype.cryptData = function (data) {
	        return md5(JSON.stringify(data)).toString();
	    };
	    CommonService.prototype.createSQLDate = function (date, type, separator) {
	        var result;
	        if (type === "date") {
	            var year = this.leftPad(date.getFullYear());
	            var month = this.leftPad(date.getMonth() + 1);
	            var day = this.leftPad(date.getDate());
	            result = [year, month, day].join(separator);
	        }
	        else if (type === "time") {
	            var hours = this.leftPad(date.getHours());
	            var min = this.leftPad(date.getMinutes());
	            var sec = this.leftPad(date.getSeconds());
	            result = [hours, min, sec].join(separator);
	        }
	        return result;
	    };
	    CommonService.prototype.openModalInfo = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i - 0] = arguments[_i];
	        }
	        var config = new config_modal_info_1.ConfigModalInfo(arr[0], arr[1], arr[2]);
	        var modalRef = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRef.componentInstance.config = config;
	        return modalRef.result;
	    };
	    CommonService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _a) || Object])
	    ], CommonService);
	    return CommonService;
	    var _a;
	}());
	exports.CommonService = CommonService;


/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";
	var ConfigModalInfo = (function () {
	    function ConfigModalInfo(infoString, action, title) {
	        if (infoString === void 0) { infoString = ""; }
	        if (action === void 0) { action = "info"; }
	        if (title === void 0) { title = "Повідомлення"; }
	        this.title = title;
	        this.action = action;
	        this.infoString = infoString;
	    }
	    return ConfigModalInfo;
	}());
	exports.ConfigModalInfo = ConfigModalInfo;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	;(function (root, factory) {
		if (true) {
			// CommonJS
			module.exports = exports = factory(__webpack_require__(99));
		}
		else if (typeof define === "function" && define.amd) {
			// AMD
			define(["./core"], factory);
		}
		else {
			// Global (browser)
			factory(root.CryptoJS);
		}
	}(this, function (CryptoJS) {
	
		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;
	
		    // Constants table
		    var T = [];
	
		    // Compute constants
		    (function () {
		        for (var i = 0; i < 64; i++) {
		            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
		        }
		    }());
	
		    /**
		     * MD5 hash algorithm.
		     */
		    var MD5 = C_algo.MD5 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476
		            ]);
		        },
	
		        _doProcessBlock: function (M, offset) {
		            // Swap endian
		            for (var i = 0; i < 16; i++) {
		                // Shortcuts
		                var offset_i = offset + i;
		                var M_offset_i = M[offset_i];
	
		                M[offset_i] = (
		                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		                );
		            }
	
		            // Shortcuts
		            var H = this._hash.words;
	
		            var M_offset_0  = M[offset + 0];
		            var M_offset_1  = M[offset + 1];
		            var M_offset_2  = M[offset + 2];
		            var M_offset_3  = M[offset + 3];
		            var M_offset_4  = M[offset + 4];
		            var M_offset_5  = M[offset + 5];
		            var M_offset_6  = M[offset + 6];
		            var M_offset_7  = M[offset + 7];
		            var M_offset_8  = M[offset + 8];
		            var M_offset_9  = M[offset + 9];
		            var M_offset_10 = M[offset + 10];
		            var M_offset_11 = M[offset + 11];
		            var M_offset_12 = M[offset + 12];
		            var M_offset_13 = M[offset + 13];
		            var M_offset_14 = M[offset + 14];
		            var M_offset_15 = M[offset + 15];
	
		            // Working varialbes
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
	
		            // Computation
		            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
		            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
		            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
		            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
		            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
		            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
		            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
		            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
		            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
		            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
		            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
		            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
		            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
		            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
		            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
		            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
	
		            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
		            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
		            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
		            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
		            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
		            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
		            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
		            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
		            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
		            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
		            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
		            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
		            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
		            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
		            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
		            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
	
		            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
		            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
		            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
		            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
		            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
		            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
		            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
		            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
		            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
		            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
		            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
		            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
		            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
		            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
		            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
		            b = HH(b, c, d, a, M_offset_2,  23, T[47]);
	
		            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
		            d = II(d, a, b, c, M_offset_7,  10, T[49]);
		            c = II(c, d, a, b, M_offset_14, 15, T[50]);
		            b = II(b, c, d, a, M_offset_5,  21, T[51]);
		            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
		            d = II(d, a, b, c, M_offset_3,  10, T[53]);
		            c = II(c, d, a, b, M_offset_10, 15, T[54]);
		            b = II(b, c, d, a, M_offset_1,  21, T[55]);
		            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
		            d = II(d, a, b, c, M_offset_15, 10, T[57]);
		            c = II(c, d, a, b, M_offset_6,  15, T[58]);
		            b = II(b, c, d, a, M_offset_13, 21, T[59]);
		            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
		            d = II(d, a, b, c, M_offset_11, 10, T[61]);
		            c = II(c, d, a, b, M_offset_2,  15, T[62]);
		            b = II(b, c, d, a, M_offset_9,  21, T[63]);
	
		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		        },
	
		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
	
		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;
	
		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	
		            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
		            var nBitsTotalL = nBitsTotal;
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
		                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
		            );
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
		            );
	
		            data.sigBytes = (dataWords.length + 1) * 4;
	
		            // Hash final blocks
		            this._process();
	
		            // Shortcuts
		            var hash = this._hash;
		            var H = hash.words;
	
		            // Swap endian
		            for (var i = 0; i < 4; i++) {
		                // Shortcut
		                var H_i = H[i];
	
		                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		            }
	
		            // Return final computed hash
		            return hash;
		        },
	
		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();
	
		            return clone;
		        }
		    });
	
		    function FF(a, b, c, d, x, s, t) {
		        var n = a + ((b & c) | (~b & d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }
	
		    function GG(a, b, c, d, x, s, t) {
		        var n = a + ((b & d) | (c & ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }
	
		    function HH(a, b, c, d, x, s, t) {
		        var n = a + (b ^ c ^ d) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }
	
		    function II(a, b, c, d, x, s, t) {
		        var n = a + (c ^ (b | ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }
	
		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.MD5('message');
		     *     var hash = CryptoJS.MD5(wordArray);
		     */
		    C.MD5 = Hasher._createHelper(MD5);
	
		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacMD5(message, key);
		     */
		    C.HmacMD5 = Hasher._createHmacHelper(MD5);
		}(Math));
	
	
		return CryptoJS.MD5;
	
	}));

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	;(function (root, factory) {
		if (true) {
			// CommonJS
			module.exports = exports = factory();
		}
		else if (typeof define === "function" && define.amd) {
			// AMD
			define([], factory);
		}
		else {
			// Global (browser)
			root.CryptoJS = factory();
		}
	}(this, function () {
	
		/**
		 * CryptoJS core components.
		 */
		var CryptoJS = CryptoJS || (function (Math, undefined) {
		    /*
		     * Local polyfil of Object.create
		     */
		    var create = Object.create || (function () {
		        function F() {};
	
		        return function (obj) {
		            var subtype;
	
		            F.prototype = obj;
	
		            subtype = new F();
	
		            F.prototype = null;
	
		            return subtype;
		        };
		    }())
	
		    /**
		     * CryptoJS namespace.
		     */
		    var C = {};
	
		    /**
		     * Library namespace.
		     */
		    var C_lib = C.lib = {};
	
		    /**
		     * Base object for prototypal inheritance.
		     */
		    var Base = C_lib.Base = (function () {
	
	
		        return {
		            /**
		             * Creates a new object that inherits from this object.
		             *
		             * @param {Object} overrides Properties to copy into the new object.
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         field: 'value',
		             *
		             *         method: function () {
		             *         }
		             *     });
		             */
		            extend: function (overrides) {
		                // Spawn
		                var subtype = create(this);
	
		                // Augment
		                if (overrides) {
		                    subtype.mixIn(overrides);
		                }
	
		                // Create default initializer
		                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
		                    subtype.init = function () {
		                        subtype.$super.init.apply(this, arguments);
		                    };
		                }
	
		                // Initializer's prototype is the subtype object
		                subtype.init.prototype = subtype;
	
		                // Reference supertype
		                subtype.$super = this;
	
		                return subtype;
		            },
	
		            /**
		             * Extends this object and runs the init method.
		             * Arguments to create() will be passed to init().
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var instance = MyType.create();
		             */
		            create: function () {
		                var instance = this.extend();
		                instance.init.apply(instance, arguments);
	
		                return instance;
		            },
	
		            /**
		             * Initializes a newly created object.
		             * Override this method to add some logic when your objects are created.
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         init: function () {
		             *             // ...
		             *         }
		             *     });
		             */
		            init: function () {
		            },
	
		            /**
		             * Copies properties into this object.
		             *
		             * @param {Object} properties The properties to mix in.
		             *
		             * @example
		             *
		             *     MyType.mixIn({
		             *         field: 'value'
		             *     });
		             */
		            mixIn: function (properties) {
		                for (var propertyName in properties) {
		                    if (properties.hasOwnProperty(propertyName)) {
		                        this[propertyName] = properties[propertyName];
		                    }
		                }
	
		                // IE won't copy toString using the loop above
		                if (properties.hasOwnProperty('toString')) {
		                    this.toString = properties.toString;
		                }
		            },
	
		            /**
		             * Creates a copy of this object.
		             *
		             * @return {Object} The clone.
		             *
		             * @example
		             *
		             *     var clone = instance.clone();
		             */
		            clone: function () {
		                return this.init.prototype.extend(this);
		            }
		        };
		    }());
	
		    /**
		     * An array of 32-bit words.
		     *
		     * @property {Array} words The array of 32-bit words.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var WordArray = C_lib.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of 32-bit words.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.create();
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];
	
		            if (sigBytes != undefined) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 4;
		            }
		        },
	
		        /**
		         * Converts this word array to a string.
		         *
		         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
		         *
		         * @return {string} The stringified word array.
		         *
		         * @example
		         *
		         *     var string = wordArray + '';
		         *     var string = wordArray.toString();
		         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
		         */
		        toString: function (encoder) {
		            return (encoder || Hex).stringify(this);
		        },
	
		        /**
		         * Concatenates a word array to this word array.
		         *
		         * @param {WordArray} wordArray The word array to append.
		         *
		         * @return {WordArray} This word array.
		         *
		         * @example
		         *
		         *     wordArray1.concat(wordArray2);
		         */
		        concat: function (wordArray) {
		            // Shortcuts
		            var thisWords = this.words;
		            var thatWords = wordArray.words;
		            var thisSigBytes = this.sigBytes;
		            var thatSigBytes = wordArray.sigBytes;
	
		            // Clamp excess bits
		            this.clamp();
	
		            // Concat
		            if (thisSigBytes % 4) {
		                // Copy one byte at a time
		                for (var i = 0; i < thatSigBytes; i++) {
		                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
		                }
		            } else {
		                // Copy one word at a time
		                for (var i = 0; i < thatSigBytes; i += 4) {
		                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
		                }
		            }
		            this.sigBytes += thatSigBytes;
	
		            // Chainable
		            return this;
		        },
	
		        /**
		         * Removes insignificant bits.
		         *
		         * @example
		         *
		         *     wordArray.clamp();
		         */
		        clamp: function () {
		            // Shortcuts
		            var words = this.words;
		            var sigBytes = this.sigBytes;
	
		            // Clamp
		            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		            words.length = Math.ceil(sigBytes / 4);
		        },
	
		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = wordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone.words = this.words.slice(0);
	
		            return clone;
		        },
	
		        /**
		         * Creates a word array filled with random bytes.
		         *
		         * @param {number} nBytes The number of random bytes to generate.
		         *
		         * @return {WordArray} The random word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.random(16);
		         */
		        random: function (nBytes) {
		            var words = [];
	
		            var r = (function (m_w) {
		                var m_w = m_w;
		                var m_z = 0x3ade68b1;
		                var mask = 0xffffffff;
	
		                return function () {
		                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
		                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
		                    var result = ((m_z << 0x10) + m_w) & mask;
		                    result /= 0x100000000;
		                    result += 0.5;
		                    return result * (Math.random() > .5 ? 1 : -1);
		                }
		            });
	
		            for (var i = 0, rcache; i < nBytes; i += 4) {
		                var _r = r((rcache || Math.random()) * 0x100000000);
	
		                rcache = _r() * 0x3ade67b7;
		                words.push((_r() * 0x100000000) | 0);
		            }
	
		            return new WordArray.init(words, nBytes);
		        }
		    });
	
		    /**
		     * Encoder namespace.
		     */
		    var C_enc = C.enc = {};
	
		    /**
		     * Hex encoding strategy.
		     */
		    var Hex = C_enc.Hex = {
		        /**
		         * Converts a word array to a hex string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The hex string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
	
		            // Convert
		            var hexChars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                hexChars.push((bite >>> 4).toString(16));
		                hexChars.push((bite & 0x0f).toString(16));
		            }
	
		            return hexChars.join('');
		        },
	
		        /**
		         * Converts a hex string to a word array.
		         *
		         * @param {string} hexStr The hex string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
		         */
		        parse: function (hexStr) {
		            // Shortcut
		            var hexStrLength = hexStr.length;
	
		            // Convert
		            var words = [];
		            for (var i = 0; i < hexStrLength; i += 2) {
		                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
		            }
	
		            return new WordArray.init(words, hexStrLength / 2);
		        }
		    };
	
		    /**
		     * Latin1 encoding strategy.
		     */
		    var Latin1 = C_enc.Latin1 = {
		        /**
		         * Converts a word array to a Latin1 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Latin1 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
	
		            // Convert
		            var latin1Chars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                latin1Chars.push(String.fromCharCode(bite));
		            }
	
		            return latin1Chars.join('');
		        },
	
		        /**
		         * Converts a Latin1 string to a word array.
		         *
		         * @param {string} latin1Str The Latin1 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
		         */
		        parse: function (latin1Str) {
		            // Shortcut
		            var latin1StrLength = latin1Str.length;
	
		            // Convert
		            var words = [];
		            for (var i = 0; i < latin1StrLength; i++) {
		                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
		            }
	
		            return new WordArray.init(words, latin1StrLength);
		        }
		    };
	
		    /**
		     * UTF-8 encoding strategy.
		     */
		    var Utf8 = C_enc.Utf8 = {
		        /**
		         * Converts a word array to a UTF-8 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-8 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            try {
		                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
		            } catch (e) {
		                throw new Error('Malformed UTF-8 data');
		            }
		        },
	
		        /**
		         * Converts a UTF-8 string to a word array.
		         *
		         * @param {string} utf8Str The UTF-8 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
		         */
		        parse: function (utf8Str) {
		            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
		        }
		    };
	
		    /**
		     * Abstract buffered block algorithm template.
		     *
		     * The property blockSize must be implemented in a concrete subtype.
		     *
		     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		     */
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
		        /**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
		        reset: function () {
		            // Initial values
		            this._data = new WordArray.init();
		            this._nDataBytes = 0;
		        },
	
		        /**
		         * Adds new data to this block algorithm's buffer.
		         *
		         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm._append('data');
		         *     bufferedBlockAlgorithm._append(wordArray);
		         */
		        _append: function (data) {
		            // Convert string to WordArray, else assume WordArray already
		            if (typeof data == 'string') {
		                data = Utf8.parse(data);
		            }
	
		            // Append
		            this._data.concat(data);
		            this._nDataBytes += data.sigBytes;
		        },
	
		        /**
		         * Processes available data blocks.
		         *
		         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
		         *
		         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
		         *
		         * @return {WordArray} The processed data.
		         *
		         * @example
		         *
		         *     var processedData = bufferedBlockAlgorithm._process();
		         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
		         */
		        _process: function (doFlush) {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var dataSigBytes = data.sigBytes;
		            var blockSize = this.blockSize;
		            var blockSizeBytes = blockSize * 4;
	
		            // Count blocks ready
		            var nBlocksReady = dataSigBytes / blockSizeBytes;
		            if (doFlush) {
		                // Round up to include partial blocks
		                nBlocksReady = Math.ceil(nBlocksReady);
		            } else {
		                // Round down to include only full blocks,
		                // less the number of blocks that must remain in the buffer
		                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
		            }
	
		            // Count words ready
		            var nWordsReady = nBlocksReady * blockSize;
	
		            // Count bytes ready
		            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
	
		            // Process blocks
		            if (nWordsReady) {
		                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
		                    // Perform concrete-algorithm logic
		                    this._doProcessBlock(dataWords, offset);
		                }
	
		                // Remove processed words
		                var processedWords = dataWords.splice(0, nWordsReady);
		                data.sigBytes -= nBytesReady;
		            }
	
		            // Return processed words
		            return new WordArray.init(processedWords, nBytesReady);
		        },
	
		        /**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone._data = this._data.clone();
	
		            return clone;
		        },
	
		        _minBufferSize: 0
		    });
	
		    /**
		     * Abstract hasher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		     */
		    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         */
		        cfg: Base.extend(),
	
		        /**
		         * Initializes a newly created hasher.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
		         *
		         * @example
		         *
		         *     var hasher = CryptoJS.algo.SHA256.create();
		         */
		        init: function (cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);
	
		            // Set initial values
		            this.reset();
		        },
	
		        /**
		         * Resets this hasher to its initial state.
		         *
		         * @example
		         *
		         *     hasher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);
	
		            // Perform concrete-hasher logic
		            this._doReset();
		        },
	
		        /**
		         * Updates this hasher with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {Hasher} This hasher.
		         *
		         * @example
		         *
		         *     hasher.update('message');
		         *     hasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            // Append
		            this._append(messageUpdate);
	
		            // Update the hash
		            this._process();
	
		            // Chainable
		            return this;
		        },
	
		        /**
		         * Finalizes the hash computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The hash.
		         *
		         * @example
		         *
		         *     var hash = hasher.finalize();
		         *     var hash = hasher.finalize('message');
		         *     var hash = hasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Final message update
		            if (messageUpdate) {
		                this._append(messageUpdate);
		            }
	
		            // Perform concrete-hasher logic
		            var hash = this._doFinalize();
	
		            return hash;
		        },
	
		        blockSize: 512/32,
	
		        /**
		         * Creates a shortcut function to a hasher's object interface.
		         *
		         * @param {Hasher} hasher The hasher to create a helper for.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
		         */
		        _createHelper: function (hasher) {
		            return function (message, cfg) {
		                return new hasher.init(cfg).finalize(message);
		            };
		        },
	
		        /**
		         * Creates a shortcut function to the HMAC's object interface.
		         *
		         * @param {Hasher} hasher The hasher to use in this HMAC helper.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
		         */
		        _createHmacHelper: function (hasher) {
		            return function (message, key) {
		                return new C_algo.HMAC.init(hasher, key).finalize(message);
		            };
		        }
		    });
	
		    /**
		     * Algorithm namespace.
		     */
		    var C_algo = C.algo = {};
	
		    return C;
		}(Math));
	
	
		return CryptoJS;
	
	}));

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login-container\">\r\n    <form class=\"loginform\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"login\">Логін</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"login\" name=\"login\"\r\n                   placeholder=\"логін\" required\r\n                   [(ngModel)]=\"user.username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\"\r\n                   placeholder=\"пароль\" required name=\"password\"\r\n                   [(ngModel)]=\"user.password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default submit-btn\">Увійти</button>\r\n    </form>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = ".login-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    color: #fff;\r\n    background: url(\"./assets/background.jpg\") center no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.btn.btn-default.submit-btn {\r\n    position: relative;\r\n    margin-left: 50%;\r\n    left: -35px;\r\n    width: 70px;\r\n}\r\n"

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var StartPageComponent = (function () {
	    function StartPageComponent() {
	    }
	    StartPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(103),
	            styles: [__webpack_require__(104)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StartPageComponent);
	    return StartPageComponent;
	}());
	exports.StartPageComponent = StartPageComponent;


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<router-outlet></router-outlet>";

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = ".info{\r\n\tbackground-color:#f9f9f9;\r\n\tborder: 5px solid #fff;\r\n}\r\n\r\n.time{\r\n\tcolor:#000;\r\n}\r\n.nom-qua{\r\n\tmargin-top:2px;\r\n\tmargin-bottom:2px;\r\n}\r\nli.available {\r\n\tmargin-top: 15px;\r\n}\r\n@media (max-width: 767px) {\r\n.nom-qua{\r\n\tmargin:5px;\r\n}\r\n\r\n}"

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var login_service_ts_1 = __webpack_require__(72);
	var AdminStartPageComponent = (function () {
	    function AdminStartPageComponent(_loginService) {
	        this._loginService = _loginService;
	    }
	    AdminStartPageComponent.prototype.logout = function () {
	        this._loginService.logout();
	    };
	    AdminStartPageComponent = __decorate([
	        core_1.Component({
	            selector: "admin-start",
	            template: __webpack_require__(106),
	            styles: [__webpack_require__(107)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof login_service_ts_1.LoginService !== 'undefined' && login_service_ts_1.LoginService) === 'function' && _a) || Object])
	    ], AdminStartPageComponent);
	    return AdminStartPageComponent;
	    var _a;
	}());
	exports.AdminStartPageComponent = AdminStartPageComponent;


/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div class=\"main-menu\">\r\n    <nav class=\"navbar navbar-default main-menu-navbar\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                        data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a\r\n                            routerLink=\"statistic\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Статистика</a></li>\r\n                    <li><a\r\n                            routerLink=\"group\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Групи</a></li>\r\n                    <li><a\r\n                            routerLink=\"faculty\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Факультети</a></li>\r\n                    <li><a routerLink=\"subject\"\r\n                           routerLinkActive=\"active\"\r\n                           [routerLinkActiveOptions]=\"{exact: true}\">Предмети</a></li>\r\n                    <li><a\r\n                            routerLink=\"speciality\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Спеціальності</a></li>\r\n                    <li><a\r\n                            routerLink=\"student\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Студенти</a></li>\r\n                    <li><a\r\n                            routerLink=\"adminUser\"\r\n                            routerLinkActive=\"active\"\r\n                            [routerLinkActiveOptions]=\"{exact: true}\">Адміністратори</a></li>\r\n                </ul>\r\n                <div class=\"nav navbar-nav navbar-right\">\r\n                    <a class=\"btn btn-default btn-sm navbar-btn\" role=\"button\" (click)=\"logout()\">\r\n                        <span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span>\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<router-outlet></router-outlet>";

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = ".main-menu {\r\n    max-width: 1024px;\r\n    margin: 0px auto 10px auto;\r\n    padding: 10px;\r\n    min-width: 420px;\r\n    font-size: 12px;\r\n}\r\n\r\n.main-menu .main-menu-navbar {\r\n    margin-bottom: 0;\r\n    min-width: 420px;\r\n}\r\n\r\n.main-menu .navbar-nav .active {\r\n    background-color: #e7e7e7;\r\n}"

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var NotFoundComponent = (function () {
	    function NotFoundComponent(location) {
	        this.location = location;
	    }
	    NotFoundComponent.prototype.back = function () {
	        this.location.back();
	    };
	    NotFoundComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(109),
	            styles: [__webpack_require__(110)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
	    ], NotFoundComponent);
	    return NotFoundComponent;
	    var _a;
	}());
	exports.NotFoundComponent = NotFoundComponent;


/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <div class=\"page-header\">\r\n        <h1>Сторінка не знайдена</h1>\r\n    </div>\r\n    <a class=\"btn btn-default\" (click)=\"back()\">Повернутись назад</a>\r\n    <a class=\"btn btn-default\" routerLink=\"/login\">На сторінку авторизації</a>\r\n</div>";

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\r\n"

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var subject_component_1 = __webpack_require__(112);
	var test_component_1 = __webpack_require__(137);
	var faculty_component_1 = __webpack_require__(413);
	var statistic_component_1 = __webpack_require__(428);
	var group_component_1 = __webpack_require__(431);
	var group_timetable_component_1 = __webpack_require__(434);
	var group_result_component_1 = __webpack_require__(438);
	var group_test_result_component_1 = __webpack_require__(441);
	var admin_user_component_1 = __webpack_require__(444);
	var speciality_component_1 = __webpack_require__(446);
	var student_component_1 = __webpack_require__(449);
	var student_profile_component_1 = __webpack_require__(452);
	var timetable_component_1 = __webpack_require__(455);
	var test_detail_component_1 = __webpack_require__(457);
	var question_component_1 = __webpack_require__(459);
	var answer_component_1 = __webpack_require__(462);
	exports.adminRoutes = [
	    { path: "", redirectTo: "statistic" },
	    { path: "statistic", component: statistic_component_1.StatisticComponent },
	    { path: "subject", component: subject_component_1.SubjectComponent },
	    { path: "subject/:id/test", component: test_component_1.TestComponent },
	    { path: "subject/test/:id/testDetail", component: test_detail_component_1.TestDetailComponent },
	    { path: "subject/test/:id/question", component: question_component_1.QuestionComponent },
	    { path: "subject/test/question/:id/answer", component: answer_component_1.AnswerComponent },
	    { path: "subject/:id/timeTable", component: timetable_component_1.TimeTableComponent },
	    { path: "speciality", component: speciality_component_1.SpecialityComponent },
	    { path: "faculty", component: faculty_component_1.FacultyComponent },
	    { path: "group", component: group_component_1.GroupComponent },
	    { path: "group/byFaculty", component: group_component_1.GroupComponent },
	    { path: "group/bySpeciality", component: group_component_1.GroupComponent },
	    { path: "group/groupTest", component: group_result_component_1.GroupResultComponent },
	    { path: "group/groupTestResult", component: group_test_result_component_1.GroupTestResultComponent },
	    { path: "group/groupTimetable", component: group_timetable_component_1.GroupTimetableComponent },
	    { path: "adminUser", component: admin_user_component_1.AdminUserComponent },
	    { path: "student", component: student_component_1.StudentComponent },
	    { path: "student/byGroup", component: student_component_1.StudentComponent },
	    { path: "student/student-profile", component: student_profile_component_1.StudentProfileComponent },
	    { path: "student/student-profile/:id", component: student_profile_component_1.StudentProfileComponent },
	    { path: "**", redirectTo: "/admin/statistic", pathMatch: "full" }
	];


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	__webpack_require__(113);
	var router_1 = __webpack_require__(38);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var subject_1 = __webpack_require__(134);
	var crud_service_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var SubjectComponent = (function () {
	    function SubjectComponent(crudService, _router, modalService) {
	        this.crudService = crudService;
	        this._router = _router;
	        this.modalService = modalService;
	        // common variables
	        this.entity = "subject";
	        this.headers = constant_1.headersSubject;
	        this.actions = constant_1.actionsSubject;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        // variables for pagination
	        this.limit = 5;
	        this.page = 1;
	        this.offset = 0;
	        this.maxSize = 5;
	        this.paginationSize = this.maxSize;
	        // variables for search
	        this.searchCriteria = "";
	        // varibles for addedit
	        this.configAdd = constant_1.configAddSubject;
	        this.configEdit = constant_1.configEditSubject;
	        // variables for common component
	        this.searchTitle = "Введіть дані для пошуку";
	        this.entityTitle = "Предмети";
	        this.selectLimit = "Виберіть кількість предметів на сторінці";
	        this.successEventModal = constant_1.successEventModal;
	        this.entityData = [];
	    }
	    SubjectComponent.prototype.ngOnInit = function () {
	        this.getCountSubjects();
	    };
	    SubjectComponent.prototype.deleteSubject = function (entity, id) {
	        var _this = this;
	        this.offset = (this.page - 1) * this.limit;
	        this.crudService
	            .delRecord(entity, id)
	            .subscribe(function () {
	            _this.refreshData("delete");
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    SubjectComponent.prototype.getCountSubjects = function () {
	        var _this = this;
	        this.crudService.getCountRecords(this.entity)
	            .subscribe(function (res) {
	            _this.entityDataLength = +res.numberOfRecords;
	            _this.getSubjectsRange();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    SubjectComponent.prototype.getSubjectsRange = function () {
	        var _this = this;
	        this.crudService.getRecordsRange(this.entity, this.limit, this.offset)
	            .subscribe(function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var subject = {};
	                subject.entity_id = item.subject_id;
	                subject.entityColumns = [numberOfOrder, item.subject_name, item.subject_description];
	                subject.actions = _this.actions;
	                tempArr.push(subject);
	            });
	            _this.entityData = tempArr;
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    SubjectComponent.prototype.changeLimit = function (limit) {
	        this.limit = limit;
	        this.offset = 0;
	        this.page = 1;
	        this.getSubjectsRange();
	    };
	    SubjectComponent.prototype.pageChange = function (num) {
	        if (!num) {
	            this.page = 1;
	            return;
	        }
	        this.page = num;
	        this.offset = (this.page - 1) * this.limit;
	        this.getSubjectsRange();
	    };
	    SubjectComponent.prototype.getSubjectsBySearch = function () {
	        var _this = this;
	        this.crudService.getRecordsBySearch(this.entity, this.searchCriteria)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.entityData = [];
	                return;
	            }
	            _this.page = 1;
	            var numberOfOrder;
	            var tempArr = [];
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var subject = {};
	                subject.entity_id = item.subject_id;
	                subject.entityColumns = [numberOfOrder, item.subject_name, item.subject_description];
	                subject.actions = _this.actions;
	                tempArr.push(subject);
	            });
	            _this.entityData = tempArr;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    ;
	    SubjectComponent.prototype.findEntity = function (searchTerm) {
	        this.searchCriteria = searchTerm;
	        if (this.searchCriteria.length === 0) {
	            this.offset = 0;
	            this.page = 1;
	            this.getSubjectsRange();
	            return;
	        }
	        this.getSubjectsBySearch();
	    };
	    ;
	    SubjectComponent.prototype.refreshData = function (action) {
	        var _this = this;
	        if (action === "delete" && this.entityData.length === 1 && this.entityDataLength > 1) {
	            this.offset = (this.page - 2) * this.limit;
	            this.page -= 1;
	        }
	        else if (this.entityData.length > 1) {
	            this.offset = (this.page - 1) * this.limit;
	        }
	        this.crudService.getCountRecords(this.entity)
	            .subscribe(function (data) {
	            _this.entityDataLength = +data.numberOfRecords;
	            _this.getSubjectsRange();
	        }, function (error) { return console.log(error); });
	    };
	    SubjectComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "test":
	                this._router.navigate(["/admin/subject", data.entity_id, "test"]);
	                break;
	            case "timeTable":
	                this._router.navigate(["/admin/subject", data.entity_id, "timeTable"]);
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    SubjectComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newSubject = new subject_1.Subject(data.list[0].value, data.list[1].value);
	            _this.crudService.insertData(_this.entity, newSubject)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.configAdd.list.forEach(function (item) {
	                    item.value = "";
	                });
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    SubjectComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list.forEach(function (item, i) {
	            item.value = data.entityColumns[i + 1];
	        });
	        this.configEdit.id = data.entity_id;
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedSubject = new subject_1.Subject(data.list[0].value, data.list[1].value);
	            _this.crudService.updateData(_this.entity, data.id, editedSubject)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    SubjectComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[0] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteSubject(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    SubjectComponent = __decorate([
	        core_1.Component({
	            selector: "subject-container",
	            template: __webpack_require__(136)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _c) || Object])
	    ], SubjectComponent);
	    return SubjectComponent;
	    var _a, _b, _c;
	}());
	exports.SubjectComponent = SubjectComponent;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Statics
	__webpack_require__(114);
	// Operators
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(125);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(130);


/***/ },
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(29);
	var constant_1 = __webpack_require__(76);
	var forms_1 = __webpack_require__(24);
	var ModalAddEditComponent = (function () {
	    function ModalAddEditComponent(activeModal, modalService) {
	        this.activeModal = activeModal;
	        this.modalService = modalService;
	        this.maxSizeOfPictures = 1000000;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.successEventModal = constant_1.successEventModal;
	        this.isSamePasswords = true;
	    }
	    ModalAddEditComponent.prototype.ngOnInit = function () {
	        this.addEditForm = new forms_1.FormGroup({
	            "username": new forms_1.FormControl("", [
	                forms_1.Validators.minLength(1)
	            ]),
	            "groupName": new forms_1.FormControl("", [
	                forms_1.Validators.minLength(1)
	            ]),
	            "specialityCode": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^[0-9.]*$")
	            ]),
	            "name": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^[А-Яа-яёЁЇїІіЄєҐґ ]+$")
	            ]),
	            "count": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^[0-9]*$")
	            ]),
	            "testTime/Rate": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^[0-9]*$")
	            ]),
	            "testAttempts": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$")
	            ]),
	            "startDate": new forms_1.FormControl({}, []),
	            "endDate": new forms_1.FormControl({}, []),
	            "startTime": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^(([0|1][0-9])|([2][0-3])):([0-5][0-9])$")
	            ]),
	            "endTime": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^(([0|1][0-9])|([2][0-3])):([0-5][0-9])$")
	            ]),
	            "entityDescription": new forms_1.FormControl("", [
	                forms_1.Validators.maxLength(100)
	            ]),
	            "answer": new forms_1.FormControl("", [
	                forms_1.Validators.maxLength(100)
	            ]),
	            "email": new forms_1.FormControl("", [
	                forms_1.Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
	            ]),
	            "password": new forms_1.FormControl("", [
	                forms_1.Validators.minLength(8)
	            ]),
	            "cpassword": new forms_1.FormControl("", [
	                forms_1.Validators.minLength(8)
	            ]),
	        });
	    };
	    ModalAddEditComponent.prototype.activateForm = function () {
	        if (!this.addEditForm.controls["password"]) {
	            this.activeModal.close(this.config);
	        }
	        else if (this.addEditForm.controls["password"].value === this.addEditForm.controls["cpassword"].value) {
	            this.activeModal.close(this.config);
	        }
	        else {
	            this.isSamePasswords = false;
	        }
	    };
	    ModalAddEditComponent.prototype.openFile = function ($event) {
	        var _this = this;
	        var input = $event.target;
	        if (input.files[0].size > this.maxSizeOfPictures) {
	            this.modalInfoConfig.infoString = "Перевищено максимальний розміо зображення";
	            this.successEventModal();
	        }
	        var reader = new FileReader();
	        reader.onload = function () {
	            var dataURL = reader.result;
	            _this.config.img.value = dataURL;
	        };
	        reader.readAsDataURL(input.files[0]);
	    };
	    ModalAddEditComponent.prototype.removeImage = function () {
	        this.config.img.value = "";
	    };
	    // for datepicker
	    ModalAddEditComponent.prototype.isWeekend = function (date) {
	        var d = new Date(date.year, date.month - 1, date.day);
	        return d.getDay() === 0 || d.getDay() === 6;
	    };
	    ModalAddEditComponent.prototype.isDisabled = function (date, current) {
	        return date.month !== current.month;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ModalAddEditComponent.prototype, "config", void 0);
	    ModalAddEditComponent = __decorate([
	        core_1.Component({
	            selector: "modal-add-edit",
	            template: __webpack_require__(132),
	            styles: [__webpack_require__(133)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== 'undefined' && ng_bootstrap_1.NgbActiveModal) === 'function' && _a) || Object, (typeof (_b = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _b) || Object])
	    ], ModalAddEditComponent);
	    return ModalAddEditComponent;
	    var _a, _b;
	}());
	exports.ModalAddEditComponent = ModalAddEditComponent;


/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss()\">\r\n        <span>&times;</span>\r\n    </button>\r\n    <h4 class=\"modal-title\">{{config.title}}</h4>\r\n    </div>\r\n    <div class=\"modal-body modal-body-add-edit\">\r\n        <div *ngIf=\"config.select\">\r\n            <div class=\"input-group input-group-add-edit\" *ngFor=\"let item of config.select\">\r\n                <span class=\"input-group-addon modal-span\">{{item.selectName}}:</span>\r\n                <select class=\"form-control\"\r\n                        name=\"count\"\r\n                        required\r\n                        [(ngModel)]=\"item.selected\">\r\n                    <option *ngFor=\"let option of item.selectItem\">{{option}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div [formGroup]=\"addEditForm\" class=\"input-group input-group-add-edit\" *ngFor=\"let item of config.list\">\r\n            <span *ngIf=\"item.name !=='Дата початку' && item.name !== 'Дата кінця'\" class=\"input-group-addon modal-span\">\r\n                {{item.name}}:\r\n            </span>\r\n            <input *ngIf=\"item.name !=='Дата початку' && item.name !== 'Дата кінця'\"\r\n                   [type]=\"item.type\"\r\n                   [formControlName]=\"item.formControlName\"\r\n                   class=\"form-control modalInput\"\r\n                   [placeholder]=\"item.placeholder||''\"\r\n                   [required]=\"config.action === 'create'\"\r\n                   [(ngModel)]=\"item.value\">\r\n            <div class=\"hint\"\r\n                 *ngIf=\"addEditForm.controls[item.formControlName].invalid &&\r\n                 addEditForm.controls[item.formControlName].dirty &&\r\n                 addEditForm.controls[item.formControlName].touched\">\r\n                {{item.hint}}\r\n            </div>\r\n            <div class=\"passwords-hint\" *ngIf=\"item.formControlName ==='cpassword' && !isSamePasswords\">\r\n                Введені паролі не співпадають\r\n            </div>\r\n            <div class=\"input-group\" *ngIf=\"item.name === 'Дата початку' || item.name === 'Дата кінця'\">\r\n                <span class=\"input-group-addon modal-span\">{{item.name}}:</span>\r\n                <input\r\n                        class=\"form-control\"\r\n                        placeholder={{item.placeholder}}\r\n                        name=\"dp\"\r\n                        [formControlName]=\"item.formControlName\"\r\n                        [(ngModel)]=\"item.value\"\r\n                        ngbDatepicker\r\n                        #d=\"ngbDatepicker\"\r\n                        required\r\n                        [dayTemplate]=\"customDay\"\r\n                        [markDisabled]=\"isDisabled\">\r\n                <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                    <span class=\"glyphicon glyphicon-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\">\r\n                    </span>\r\n                </div>\r\n                <template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\"\r\n                          let-disabled=\"disabled\">\r\n                     <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.bg-primary]=\"selected\"\r\n                           [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\r\n                         {{ date.day }}\r\n                     </span>\r\n                </template>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"config.img\">\r\n            <div class=\"input-group input-group-add-edit\">\r\n                <span class=\"input-group-addon modal-span\">{{config.img.imgName}}:</span>\r\n                <input [type]=\"config.img.type\" class=\"form-control modalInput\" (change)=\"openFile($event)\"\r\n                       accept='image/*'>\r\n                <div *ngIf=\"config.action == 'edit'\" class=\"input-group-addon remove-image\" title=\"Видалити зображення\">\r\n                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" (click)=\"removeImage()\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" (click)=\"activateForm()\" class=\"btn btn-secondary\"\r\n                [disabled]=\"addEditForm.invalid\">\r\n            {{config.labelBtn}}\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Відмінити</button>\r\n    </div>\r\n\r\n\r\n\r\n";

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = ".modal-body-add-edit {\r\n    background-color: #f9f9f9;\r\n}\r\n\r\n.input-group-add-edit {\r\n    margin: 10px auto;\r\n}\r\n\r\n.modal-span {\r\n    min-width: 161px;\r\n}\r\n\r\n.modalInput {\r\n    position: relative;\r\n}\r\n\r\n.open-modal-btn {\r\n    display: inline-block;\r\n}\r\n\r\n.remove-image span:hover {\r\n    color: red;\r\n}\r\n\r\n.input-group {\r\n    width: 100%;\r\n}\r\n\r\n.custom-day {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    border-radius: 0.25rem;\r\n    display: inline-block;\r\n    width: 2rem;\r\n}\r\n\r\n.custom-day:hover {\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.weekend {\r\n    background-color: #f0ad4e;\r\n    border-radius: 1rem;\r\n    color: white;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\ninput.ng-invalid.ng-dirty:not(:focus) ,\r\nselect.ng-invalid.ng-dirty {\r\n    border: 1px solid red;\r\n}\r\n\r\n.hint {\r\n    position: absolute;\r\n    bottom: 40px;\r\n    left: 130px;\r\n    min-width: 131px;\r\n    z-index: 10;\r\n    padding: 5px;\r\n    border: 1px solid #87854e;\r\n    border-radius: 5px;\r\n    background: #f7f7f7;\r\n}\r\n\r\n.hint::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50px;\r\n    margin-left: -5px;\r\n    border-width: 7px;\r\n    border-style: solid;\r\n    border-color: #87854e transparent transparent transparent;\r\n}\r\n\r\n.passwords-hint {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 130px;\r\n    min-width: 131px;\r\n    z-index: 10;\r\n    padding: 5px;\r\n    border: 1px solid #87854e;\r\n    border-radius: 5px;\r\n    background: #f7f7f7;\r\n}\r\n\r\n.passwords-hint::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50px;\r\n    margin-left: -5px;\r\n    border-width: 7px;\r\n    border-style: solid;\r\n    border-color: transparent transparent #87854e transparent;\r\n}"

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	var Subject = (function () {
	    function Subject(subject_name, subject_description) {
	        this.subject_name = subject_name;
	        this.subject_description = subject_description;
	    }
	    return Subject;
	}());
	exports.Subject = Subject;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(5);
	var constant_1 = __webpack_require__(76);
	var CRUDService = (function () {
	    function CRUDService(_http, router) {
	        var _this = this;
	        this._http = _http;
	        this.router = router;
	        this.hostUrlBase = constant_1.baseUrl;
	        this.handleError = function (error) {
	            var errMsg = (error.message) ? error.message :
	                error.status ? error.status + " - " + error.statusText : "Server error";
	            if (error.status === 403) {
	                sessionStorage.removeItem("userRole");
	                _this.router.navigate(["/login"]);
	            }
	            return Observable_1.Observable.throw(errMsg);
	        };
	        this.successResponse = function (response) { return response.json(); };
	    }
	    ;
	    CRUDService.prototype.getRecords = function (entity) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/getRecords")
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getRecordById = function (entity, id) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/getRecords/" + id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getRecordsRange = function (entity, limit, offset) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/getRecordsRange/" + limit + "/" + offset)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getCountRecords = function (entity) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/countRecords")
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.insertData = function (entity, data) {
	        return this._http
	            .post("" + this.hostUrlBase + entity + "/insertData", JSON.stringify(data))
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.updateData = function (entity, id, data) {
	        return this._http
	            .post("" + this.hostUrlBase + entity + "/update/" + id, JSON.stringify(data))
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.delRecord = function (entity, id) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/del/" + id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getEntityValues = function (data) {
	        return this._http
	            .post(this.hostUrlBase + "EntityManager/getEntityValues", JSON.stringify(data))
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getGroupsByFaculty = function (faculty_id) {
	        return this._http
	            .get(this.hostUrlBase + "group/getGroupsByFaculty/" + faculty_id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getRecordsBySearch = function (entity, search) {
	        return this._http
	            .get("" + this.hostUrlBase + entity + "/getRecordsBySearch/" + search)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getTimeTableForGroup = function (groupId) {
	        return this._http
	            .get(this.hostUrlBase + "timeTable/getTimeTablesForGroup/" + groupId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getTestsBySubject = function (groupId) {
	        return this._http
	            .get(this.hostUrlBase + "timeTable/getTimeTablesForGroup/" + groupId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getTime = function () {
	        return this._http
	            .get(this.hostUrlBase + "TestPlayer/getTimeStamp")
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getGroupsBySpeciality = function (faculty_id) {
	        return this._http
	            .get(this.hostUrlBase + "group/getGroupsBySpeciality/" + faculty_id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService.prototype.getStudentsByGroup = function (group_id) {
	        return this._http
	            .get(this.hostUrlBase + "/student/getStudentsByGroup/" + group_id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    CRUDService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], CRUDService);
	    return CRUDService;
	    var _a, _b;
	}());
	exports.CRUDService = CRUDService;


/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <entity-bar\r\n            [entityTitle]=\"entityTitle\"\r\n            [searchTitle]=\"searchTitle\"\r\n            [selectLimit]=\"selectLimit\"\r\n            [entityDataLength]=\"entityDataLength\"\r\n            (activate)=\"activate($event)\"\r\n            (searchRun)=\"findEntity($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </entity-bar>\r\n    <dt-table *ngIf=\"entityData.length>0\"\r\n              [page]=\"page\"\r\n              [limit]=\"limit\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <ngb-pagination\r\n            *ngIf=\"entityDataLength\"\r\n            [hidden]=\"searchCriteria.length || limit>=entityDataLength\"\r\n            [pageSize]=\"limit\"\r\n            [collectionSize]=\"entityDataLength\"\r\n            [(page)]=\"page\"\r\n            [rotate]=\"true\"\r\n            (pageChange)=\"pageChange($event)\"\r\n            [maxSize]=\"paginationSize\"\r\n            [ellipses]=\"true\"\r\n            [boundaryLinks]=\"true\">\r\n    </ngb-pagination>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var constant_1 = __webpack_require__(76);
	var test_1 = __webpack_require__(411);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var TestComponent = (function () {
	    function TestComponent(crudService, route, router, subjectService, location, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.location = location;
	        this.modalService = modalService;
	        // common variables
	        this.pageTitle = "\u0422\u0435\u0441\u0442\u0438 \u043F\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0443: ";
	        this.entity = "test";
	        this.subjectEntity = "subject";
	        this.page = 1;
	        this.limit = 0;
	        this.headers = constant_1.headersTest;
	        this.actions = constant_1.actionsTest;
	        this.successEventModal = constant_1.successEventModal;
	        this.config = { action: "create" };
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.noRecords = false;
	        // varibles for addedit
	        this.configAdd = constant_1.configAddTest;
	        this.configEdit = constant_1.configEditTest;
	        // variables for common component
	        this.entityTitle = "Тести";
	        this.entityData = [];
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                _this.noRecords = false;
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var test = {};
	                    test.entity_id = item.test_id;
	                    test.entityColumns = [
	                        numberOfOrder,
	                        item.test_name,
	                        item.tasks,
	                        item.time_for_test,
	                        item.attempts,
	                        item.enabled
	                    ];
	                    test.actions = _this.actions;
	                    tempArr.push(test);
	                });
	                _this.entityData = tempArr;
	                for (var i = 0; i < _this.entityData.length; i++) {
	                    _this.entityData[i].entityColumns[5] === "1" ?
	                        _this.entityData[i].entityColumns.splice(5, 1, "Доступно") :
	                        _this.entityData[i].entityColumns.splice(5, 1, "Не доступно");
	                }
	            }
	        };
	    }
	    TestComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.subject_id = +params["id"];
	        });
	        this.getTestBySubjectId();
	        this.getSubjectName();
	    };
	    TestComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    TestComponent.prototype.getSubjectName = function () {
	        var _this = this;
	        this.crudService.getRecords(this.subjectEntity)
	            .subscribe(function (data) {
	            var subjectArr = data.filter(function (item) {
	                return item.subject_id == _this.subject_id;
	            });
	            _this.nameOfSubject = subjectArr[0].subject_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TestComponent.prototype.getTestBySubjectId = function () {
	        var _this = this;
	        this.subjectService.getTestsBySubjectId(this.entity, this.subject_id)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            _this.createTableConfig(data);
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TestComponent.prototype.deleteTest = function (entity, id) {
	        var _this = this;
	        this.crudService
	            .delRecord(this.entity, id)
	            .subscribe(function () {
	            _this.getTestBySubjectId();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    TestComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "testDetail":
	                this.router.navigate(["/admin/subject/test", data.entity_id, "testDetail"], {
	                    queryParams: {
	                        token: this.subject_id
	                    }
	                });
	                break;
	            case "question":
	                this.router.navigate(["/admin/subject/test", data.entity_id, "question"], {
	                    queryParams: {
	                        subject_id: this.subject_id
	                    }
	                });
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    TestComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        this.configAdd.select[0].selected = "";
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newTest = new test_1.Test(data.list[0].value, data.list[1].value, data.list[2].value, data.list[3].value, data.select[0].selectItem.indexOf(data.select[0].selected), _this.subject_id);
	            _this.crudService.insertData(_this.entity, newTest)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.getTestBySubjectId();
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    TestComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list.forEach(function (item, i) {
	            item.value = data.entityColumns[i + 1];
	        });
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selected = data.entityColumns[5];
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedTest = new test_1.Test(data.list[0].value, data.list[1].value, data.list[2].value, data.list[3].value, data.select[0].selectItem.indexOf(data.select[0].selected));
	            _this.crudService.updateData(_this.entity, data.id, editedTest)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.getTestBySubjectId();
	            });
	        }, function () {
	            return;
	        });
	    };
	    TestComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteTest(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    TestComponent = __decorate([
	        core_1.Component({
	            selector: "test-container",
	            template: __webpack_require__(412)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object])
	    ], TestComponent);
	    return TestComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.TestComponent = TestComponent;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	var rxjs_1 = __webpack_require__(139);
	var router_1 = __webpack_require__(38);
	__webpack_require__(113);
	var constant_1 = __webpack_require__(76);
	var SubjectService = (function () {
	    function SubjectService(http, router) {
	        var _this = this;
	        this.http = http;
	        this.router = router;
	        this.headers = new http_1.Headers({ "Content-Type": "application/json" });
	        this.hostUrlBase = constant_1.baseUrl;
	        this.successResponse = function (response) { return response.json(); };
	        this.handleError = function (error) {
	            var errMsg = (error.message) ? error.message :
	                error.status ? error.status + " - " + error.statusText : "Server error";
	            if (error.status === "403") {
	                sessionStorage.removeItem("userRole");
	                _this.router.navigate(["/login"]);
	            }
	            return rxjs_1.Observable.throw(errMsg);
	        };
	    }
	    SubjectService.prototype.getTestsBySubjectId = function (entity, id) {
	        return this.http
	            .get(constant_1.getTestsBySubjectIdUrl + "/" + id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.getTimeTableForSubject = function (entity, id) {
	        return this.http.get(constant_1.getTimeTableForSubjectUrl + "/" + id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.getTestDetailsByTest = function (id) {
	        return this.http.get(constant_1.getTestDetailsByTestUrl + "/" + id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.getQuestionsByLevelRand = function (test_id, level, number) {
	        return this.http.get(constant_1.getQuestionsByLevelRandUrl + "/" + test_id + "/" + level + "/" + number)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.getRecordsRangeByTest = function (test_id, limit, offset) {
	        return this.http.get(constant_1.getRecordsRangeByTestUrl + "/" + test_id + "/" + limit + "/" + offset)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.countRecordsByTest = function (test_id) {
	        return this.http.get(constant_1.countRecordsByTestUrl + "/" + test_id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService.prototype.getAnswerByQuestion = function (question_id) {
	        return this.http.get(constant_1.getAnswerByQuestionUrl + "/" + question_id)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    SubjectService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], SubjectService);
	    return SubjectService;
	    var _a, _b;
	}());
	exports.SubjectService = SubjectService;


/***/ },
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */
/***/ function(module, exports) {

	"use strict";
	var Test = (function () {
	    function Test(test_name, tasks, time_for_test, attempts, enabled, subject_id) {
	        this.test_name = test_name;
	        this.tasks = tasks;
	        this.time_for_test = time_for_test;
	        this.attempts = attempts;
	        this.enabled = enabled;
	        this.subject_id = subject_id;
	    }
	    return Test;
	}());
	exports.Test = Test;


/***/ },
/* 412 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <test-bar\r\n            [entityName]=\"nameOfSubject\"\r\n            [pageTitle]=\"pageTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            (activate)=\"activate($event)\"\r\n    ></test-bar>\r\n    <dt-table *ngIf=\"!noRecords\"\r\n              [limit]=\"limit\"\r\n              [page]=\"page\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        Для вибраного предмету тестів на даний момент не зареєстровано\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var classes_1 = __webpack_require__(414);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var ng_bootstrap_1 = __webpack_require__(29);
	var crud_service_ts_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var common_service_1 = __webpack_require__(96);
	var FacultyComponent = (function () {
	    function FacultyComponent(crudService, _router, modalService, commonService) {
	        var _this = this;
	        this.crudService = crudService;
	        this._router = _router;
	        this.modalService = modalService;
	        this.commonService = commonService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.configAdd = constant_1.configAddFaculty;
	        this.configEdit = constant_1.configEditFaculty;
	        this.paginationSize = constant_1.maxSize;
	        this.headers = constant_1.headersFaculty;
	        this.actions = constant_1.actionsFaculty;
	        // constants for view
	        this.addTitle = constant_1.addTitle;
	        this.searchTitle = constant_1.searchTitle;
	        this.entityTitle = constant_1.entityTitle;
	        this.selectLimitTitle = constant_1.selectLimitTitle;
	        //
	        this.entityData = [];
	        this.entity = "faculty";
	        this.limit = 5;
	        this.search = "";
	        this.page = 1;
	        this.offset = 0;
	        this.changeLimit = constant_1.changeLimit;
	        this.pageChange = constant_1.pageChange;
	        this.getCountRecords = constant_1.getCountRecords;
	        this.delRecord = constant_1.delRecord;
	        this.refreshData = constant_1.refreshData;
	        this.successEventModal = constant_1.successEventModal;
	        this.getRecordsRange = constant_1.getRecordsRange;
	        this.findEntity = constant_1.findEntity;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var faculty = {};
	                faculty.entity_id = item.faculty_id + "";
	                faculty.entityColumns = [numberOfOrder, item.faculty_name, item.faculty_description];
	                tempArr.push(faculty);
	            });
	            _this.entityData = tempArr;
	        };
	    }
	    ;
	    FacultyComponent.prototype.ngOnInit = function () {
	        this.getCountRecords();
	    };
	    FacultyComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "group":
	                this._router.navigate(["/admin/group/byFaculty"], { queryParams: { facultyId: data.entity_id } });
	                break;
	            case "create":
	                this.createCase();
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	        }
	    };
	    FacultyComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newFaculty = new classes_1.Faculty(data.list[0].value, data.list[1].value);
	            _this.crudService.insertData(_this.entity, newFaculty)
	                .subscribe(function () {
	                _this.commonService.openModalInfo(data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E");
	                _this.refreshData(data.action);
	            });
	        }, null);
	    };
	    ;
	    FacultyComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list.forEach(function (item, i) {
	            item.value = data.entityColumns[i + 1];
	        });
	        this.configEdit.id = data.entity_id;
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedFaculty = new classes_1.Faculty(data.list[0].value, data.list[1].value);
	            _this.crudService.updateData(_this.entity, +data.id, editedFaculty)
	                .subscribe(function () {
	                _this.commonService.openModalInfo("\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E");
	                _this.refreshData(data.action);
	            });
	        }, null);
	    };
	    FacultyComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        var message = [("\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 " + data.entityColumns[1] + "?"), "confirm", "Попередження!"];
	        (_a = this.commonService).openModalInfo.apply(_a, message)
	            .then(function () {
	            _this.delRecord(_this.entity, +data.entity_id);
	        }, null);
	        var _a;
	    };
	    FacultyComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(426),
	            styles: [__webpack_require__(427)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_ts_1.CRUDService !== 'undefined' && crud_service_ts_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _c) || Object, (typeof (_d = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _d) || Object])
	    ], FacultyComponent);
	    return FacultyComponent;
	    var _a, _b, _c, _d;
	}());
	exports.FacultyComponent = FacultyComponent;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(415));
	__export(__webpack_require__(97));
	__export(__webpack_require__(416));
	__export(__webpack_require__(417));
	__export(__webpack_require__(418));
	__export(__webpack_require__(419));
	__export(__webpack_require__(420));
	__export(__webpack_require__(421));
	__export(__webpack_require__(422));
	__export(__webpack_require__(423));
	__export(__webpack_require__(424));
	__export(__webpack_require__(71));
	__export(__webpack_require__(425));


/***/ },
/* 415 */
/***/ function(module, exports) {

	"use strict";
	var ConfigModalAddEdit = (function () {
	    function ConfigModalAddEdit() {
	    }
	    return ConfigModalAddEdit;
	}());
	exports.ConfigModalAddEdit = ConfigModalAddEdit;


/***/ },
/* 416 */
/***/ function(module, exports) {

	"use strict";
	var ConfigTableAction = (function () {
	    function ConfigTableAction() {
	    }
	    return ConfigTableAction;
	}());
	exports.ConfigTableAction = ConfigTableAction;


/***/ },
/* 417 */
/***/ function(module, exports) {

	"use strict";
	var ConfigTableHeader = (function () {
	    function ConfigTableHeader() {
	    }
	    return ConfigTableHeader;
	}());
	exports.ConfigTableHeader = ConfigTableHeader;


/***/ },
/* 418 */
/***/ function(module, exports) {

	"use strict";
	var ConfigTableData = (function () {
	    function ConfigTableData() {
	    }
	    return ConfigTableData;
	}());
	exports.ConfigTableData = ConfigTableData;


/***/ },
/* 419 */
/***/ function(module, exports) {

	"use strict";
	var Faculty = (function () {
	    function Faculty(faculty_name, faculty_description) {
	        this.faculty_name = faculty_name;
	        this.faculty_description = faculty_description;
	    }
	    return Faculty;
	}());
	exports.Faculty = Faculty;


/***/ },
/* 420 */
/***/ function(module, exports) {

	"use strict";
	var StatisticData = (function () {
	    function StatisticData() {
	    }
	    return StatisticData;
	}());
	exports.StatisticData = StatisticData;


/***/ },
/* 421 */
/***/ function(module, exports) {

	"use strict";
	var TestPlayerAnswers = (function () {
	    function TestPlayerAnswers() {
	    }
	    return TestPlayerAnswers;
	}());
	exports.TestPlayerAnswers = TestPlayerAnswers;


/***/ },
/* 422 */
/***/ function(module, exports) {

	"use strict";
	var TestPlayerQuestions = (function () {
	    function TestPlayerQuestions() {
	    }
	    return TestPlayerQuestions;
	}());
	exports.TestPlayerQuestions = TestPlayerQuestions;


/***/ },
/* 423 */
/***/ function(module, exports) {

	"use strict";
	var TestPlayerNavButton = (function () {
	    function TestPlayerNavButton(answered, label, className, active) {
	        if (answered === void 0) { answered = false; }
	        if (label === void 0) { label = ""; }
	        if (className === void 0) { className = ""; }
	        if (active === void 0) { active = false; }
	        this.answered = answered;
	        this.label = label;
	        this.className = className;
	        this.active = active;
	    }
	    return TestPlayerNavButton;
	}());
	exports.TestPlayerNavButton = TestPlayerNavButton;


/***/ },
/* 424 */
/***/ function(module, exports) {

	"use strict";
	var TestPlayerDtapiResult = (function () {
	    function TestPlayerDtapiResult() {
	    }
	    return TestPlayerDtapiResult;
	}());
	exports.TestPlayerDtapiResult = TestPlayerDtapiResult;


/***/ },
/* 425 */
/***/ function(module, exports) {

	"use strict";
	var TestDetail = (function () {
	    function TestDetail(level, tasks, rate, test_id) {
	        this.level = level;
	        this.tasks = tasks;
	        this.rate = rate;
	        this.test_id = test_id;
	    }
	    return TestDetail;
	}());
	exports.TestDetail = TestDetail;


/***/ },
/* 426 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <entity-bar\r\n            [entityTitle]=\"entityTitle\"\r\n            [searchTitle]=\"searchTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            [selectLimit]=\"selectLimitTitle\"\r\n            [entityDataLength]=\"entityDataLength\"\r\n            (activate)=\"activate($event)\"\r\n            (searchRun)=\"findEntity($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </entity-bar>\r\n    <dt-table *ngIf=\"entityData.length\"\r\n              [page]=\"page\"\r\n              [limit]=\"limit\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <ngb-pagination *ngIf=\"entityDataLength\"\r\n                    [collectionSize]=\"entityDataLength\"\r\n                    [(page)]=\"page\"\r\n                    [maxSize]=\"paginationSize\"\r\n                    [pageSize]=\"limit\"\r\n                    [rotate]=\"true\"\r\n                    [ellipses]=\"true\"\r\n                    [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"pageChange($event)\"\r\n                    [hidden]=\"search.length || limit>=entityDataLength\">\r\n    </ngb-pagination>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 427 */
110,
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var crud_service_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var StatisticComponent = (function () {
	    function StatisticComponent(crudService) {
	        this.crudService = crudService;
	        this.entities = constant_1.entities;
	    }
	    StatisticComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.entities.forEach(function (entity) {
	            _this.crudService.getCountRecords(entity.name)
	                .subscribe(function (data) {
	                entity.count = data.numberOfRecords;
	            });
	        });
	    };
	    StatisticComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(429),
	            styles: [__webpack_require__(430)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object])
	    ], StatisticComponent);
	    return StatisticComponent;
	    var _a;
	}());
	exports.StatisticComponent = StatisticComponent;


/***/ },
/* 429 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <div class=\"container-fluid\">\r\n        <h3>Статистика системи</h3>\r\n        <ul class=\"list-group entity-list\">\r\n            <li class=\"list-group-item\" *ngFor=\"let entity of entities\">\r\n                Зареєстровано {{entity.nameForIteration}}<span class=\"badge\">{{entity.count}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 430 */
/***/ function(module, exports) {

	module.exports = ".entity-list li:first-child{\r\n    font-weight: normal;\r\n}\r\n.entity-list li:first-child:hover {\r\n    background-color: #e7e7e7;\r\n}"

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(29);
	var router_1 = __webpack_require__(38);
	var group_1 = __webpack_require__(432);
	var info_modal_component_1 = __webpack_require__(73);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var crud_service_ts_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var GroupComponent = (function () {
	    function GroupComponent(crudService, _router, route, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this._router = _router;
	        this.route = route;
	        this.modalService = modalService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.configAdd = constant_1.configAddGroup;
	        this.configEdit = constant_1.configEditGroup;
	        this.paginationSize = constant_1.maxSize;
	        this.headers = constant_1.headersGroup;
	        this.actions = constant_1.actionsGroup;
	        this.addTitle = "Створити нову групу";
	        this.searchTitle = "Введіть дані для пошуку";
	        this.entityTitle = "Групи";
	        this.selectLimit = "Виберіть кількість записів на сторінці";
	        this.entityData = [];
	        this.entity = "group";
	        this.limit = 5;
	        this.search = "";
	        this.page = 1;
	        this.offset = 0;
	        this.facultyEntity = "Faculty";
	        this.specialityEntity = "Speciality";
	        this.noRecords = false;
	        this.sortHide = false;
	        this.facultiesNamesIDs = [];
	        this.specialitiesNamesIDs = [];
	        this.defaultFacultySelect = "Виберіть факультет";
	        this.defaultSpecialitySelect = "Виберіть спеціальність";
	        this.changeLimit = constant_1.changeLimit;
	        this.pageChange = constant_1.pageChange;
	        this.getCountRecords = constant_1.getCountRecords;
	        this.delRecord = constant_1.delRecord;
	        this.successEventModal = constant_1.successEventModal;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var group = {};
	                group.entity_id = item.group_id;
	                group.entityColumns = [numberOfOrder, item.group_name, item.faculty_name, item.speciality_name];
	                tempArr.push(group);
	            });
	            _this.entityData = tempArr;
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.specialityId = data["specialityId"];
	            _this.facultyId = data["facultyId"];
	        });
	    }
	    ;
	    GroupComponent.prototype.ngOnInit = function () {
	        this.getFacultiesList();
	    };
	    GroupComponent.prototype.getFacultiesList = function () {
	        var _this = this;
	        this.crudService.getRecords(this.facultyEntity)
	            .subscribe(function (data) {
	            for (var i = 0; i < data.length; i++) {
	                _this.facultiesNamesIDs.push({ name: data[i].faculty_name, id: data[i].faculty_id });
	                if (_this.facultyId === data[i].faculty_id)
	                    _this.facultyName = data[i].faculty_name;
	            }
	            _this.getSpecialityList();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    ;
	    GroupComponent.prototype.getSpecialityList = function () {
	        var _this = this;
	        this.crudService.getRecords(this.specialityEntity)
	            .subscribe(function (data) {
	            for (var i = 0; i < data.length; i++) {
	                _this.specialitiesNamesIDs.push({ name: data[i].speciality_name, id: data[i].speciality_id });
	                if (_this.specialityId === data[i].speciality_id)
	                    _this.specialityName = data[i].speciality_name;
	            }
	            _this.formTable();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    ;
	    GroupComponent.prototype.formTable = function () {
	        if (this.specialityId) {
	            this.isSelectedBy = true;
	            this.entityTitle = "\u0413\u0440\u0443\u043F\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456: " + this.specialityName;
	            this.getGroupsBySpeciality(this.specialityId);
	        }
	        else if (this.facultyId) {
	            this.isSelectedBy = true;
	            this.entityTitle = "\u0413\u0440\u0443\u043F\u0438 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0443: " + this.facultyName;
	            this.getGroupsByFaculty(this.facultyId);
	        }
	        else {
	            this.getCountRecords();
	        }
	    };
	    GroupComponent.prototype.getRecordsRange = function () {
	        var _this = this;
	        this.noRecords = false;
	        this.crudService.getRecordsRange(this.entity, this.limit, this.offset)
	            .subscribe(function (data) {
	            _this.entityDataWithNames = data;
	            _this.getFacultyName();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    ;
	    GroupComponent.prototype.getGroupsByFaculty = function (data) {
	        var _this = this;
	        if (data === "default") {
	            this.sortHide = false;
	            this.noRecords = false;
	            this.getRecordsRange();
	        }
	        else {
	            this.sortHide = true;
	            this.noRecords = false;
	            this.crudService.getGroupsByFaculty(data)
	                .subscribe(function (data) {
	                if (data.response === "no records") {
	                    _this.noRecords = true;
	                }
	                else {
	                    _this.entityDataWithNames = data;
	                    _this.getFacultyName();
	                }
	            }, function (error) { return console.log("error: ", error); });
	        }
	    };
	    ;
	    GroupComponent.prototype.getGroupsBySpeciality = function (data) {
	        var _this = this;
	        if (data === "default") {
	            this.sortHide = false;
	            this.noRecords = false;
	            this.getRecordsRange();
	        }
	        else {
	            this.sortHide = true;
	            this.noRecords = false;
	            this.crudService.getGroupsBySpeciality(data)
	                .subscribe(function (data) {
	                if (data.response === "no records") {
	                    _this.noRecords = true;
	                }
	                else {
	                    _this.entityDataWithNames = data;
	                    _this.getFacultyName();
	                }
	            }, function (error) { return console.log("error: ", error); });
	        }
	    };
	    ;
	    GroupComponent.prototype.getFacultyName = function () {
	        for (var i in this.entityDataWithNames) {
	            for (var k in this.facultiesNamesIDs) {
	                if (this.entityDataWithNames[i].faculty_id === this.facultiesNamesIDs[k].id) {
	                    this.entityDataWithNames[i].faculty_name = this.facultiesNamesIDs[k].name;
	                }
	            }
	        }
	        this.getSpecialityName();
	    };
	    GroupComponent.prototype.getSpecialityName = function () {
	        for (var i in this.entityDataWithNames) {
	            for (var k in this.specialitiesNamesIDs) {
	                if (this.entityDataWithNames[i].speciality_id === this.specialitiesNamesIDs[k].id) {
	                    this.entityDataWithNames[i].speciality_name = this.specialitiesNamesIDs[k].name;
	                }
	            }
	        }
	        this.createTableConfig(this.entityDataWithNames);
	    };
	    GroupComponent.prototype.findEntity = function (searchTerm) {
	        var _this = this;
	        this.search = searchTerm;
	        if (this.search.length === 0) {
	            this.offset = 0;
	            this.page = 1;
	            this.getCountRecords();
	        }
	        else {
	            this.crudService.getRecordsBySearch(this.entity, this.search)
	                .subscribe(function (data) {
	                if (data.response === "no records") {
	                    _this.noRecords = true;
	                    return;
	                }
	                else {
	                    _this.noRecords = false;
	                    _this.page = 1;
	                    for (var i in data) {
	                        for (var k in _this.specialitiesNamesIDs) {
	                            if (data[i].speciality_id === _this.specialitiesNamesIDs[k].id) {
	                                data[i].speciality_name = _this.specialitiesNamesIDs[k].name;
	                            }
	                        }
	                        for (var k in _this.facultiesNamesIDs) {
	                            if (data[i].faculty_id === _this.facultiesNamesIDs[k].id) {
	                                data[i].faculty_name = _this.facultiesNamesIDs[k].name;
	                            }
	                        }
	                    }
	                }
	                _this.createTableConfig(data);
	            }, function (error) { return console.log("error: ", error); });
	        }
	    };
	    ;
	    GroupComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "viewResult":
	                this._router.navigate(["/admin/group/groupTest"], { queryParams: { groupId: data.entity_id } });
	                break;
	            case "viewTimetable":
	                this._router.navigate(["/admin/group/groupTimetable"], { queryParams: { groupId: data.entity_id } });
	                break;
	            case "viewStudents":
	                this._router.navigate(["/admin/student/byGroup"], { queryParams: { groupId: data.entity_id } });
	                break;
	            case "create":
	                this.createCase();
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	        }
	    };
	    GroupComponent.prototype.substituteFacultiesNamesOnId = function (data) {
	        this.facultiesNamesIDs.forEach(function (item) {
	            if (item.name === data.select[0].selected) {
	                data.select[0].selected = item.id;
	            }
	        });
	    };
	    GroupComponent.prototype.substituteSpecialitiesNamesOnId = function (data) {
	        this.specialitiesNamesIDs.forEach(function (item) {
	            if (item.name === data.select[1].selected) {
	                data.select[1].selected = item.id;
	            }
	        });
	    };
	    GroupComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        this.configAdd.select[0].selected = "";
	        this.configAdd.select[0].selectItem = [];
	        this.facultiesNamesIDs.forEach(function (item) {
	            _this.configAdd.select[0].selectItem.push(item.name);
	        });
	        this.configAdd.select[1].selected = "";
	        this.configAdd.select[1].selectItem = [];
	        this.specialitiesNamesIDs.forEach(function (item) {
	            _this.configAdd.select[1].selectItem.push(item.name);
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            _this.substituteSpecialitiesNamesOnId(data);
	            _this.substituteFacultiesNamesOnId(data);
	            var newGroup = new group_1.Group(data.list[0].value, data.select[0].selected, data.select[1].selected);
	            _this.crudService.insertData(_this.entity, newGroup)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    GroupComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list[0].value = data.entityColumns[1];
	        this.configEdit.select[0].selected = data.entityColumns[2];
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selectItem = [];
	        this.facultiesNamesIDs.forEach(function (item) {
	            _this.configEdit.select[0].selectItem.push(item.name);
	        });
	        this.configEdit.select[1].selected = data.entityColumns[3];
	        this.configEdit.select[1].selectItem = [];
	        this.specialitiesNamesIDs.forEach(function (item) {
	            _this.configEdit.select[1].selectItem.push(item.name);
	        });
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            _this.substituteSpecialitiesNamesOnId(data);
	            _this.substituteFacultiesNamesOnId(data);
	            var newGroup = new group_1.Group(data.list[0].value, data.select[0].selected, data.select[1].selected);
	            _this.crudService.updateData(_this.entity, data.id, newGroup)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    GroupComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.delRecord(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    GroupComponent.prototype.refreshData = function (action) {
	        var _this = this;
	        if (this.specialityId) {
	            this.isSelectedBy = true;
	            this.entityTitle = "\u0413\u0440\u0443\u043F\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456: " + this.specialityName;
	            this.getGroupsBySpeciality(this.specialityId);
	        }
	        else if (this.facultyId) {
	            this.isSelectedBy = true;
	            this.entityTitle = "\u0413\u0440\u0443\u043F\u0438 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0443: " + this.facultyName;
	            this.getGroupsByFaculty(this.facultyId);
	        }
	        else {
	            if (action === "delete" && this.entityData.length === 1 && this.entityDataLength > 1) {
	                this.offset = (this.page - 2) * this.limit;
	                this.page -= 1;
	            }
	            else if (this.entityData.length > 1) {
	                this.offset = (this.page - 1) * this.limit;
	            }
	            this.crudService.getCountRecords(this.entity)
	                .subscribe(function (data) {
	                _this.entityDataLength = +data.numberOfRecords;
	                _this.getRecordsRange();
	            }, function (error) { return console.log(error); });
	        }
	    };
	    ;
	    GroupComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    GroupComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(433)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_ts_1.CRUDService !== 'undefined' && crud_service_ts_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _d) || Object])
	    ], GroupComponent);
	    return GroupComponent;
	    var _a, _b, _c, _d;
	}());
	exports.GroupComponent = GroupComponent;


/***/ },
/* 432 */
/***/ function(module, exports) {

	"use strict";
	var Group = (function () {
	    function Group(group_name, faculty_id, speciality_id) {
	        this.group_name = group_name;
	        this.faculty_id = faculty_id;
	        this.speciality_id = speciality_id;
	    }
	    return Group;
	}());
	exports.Group = Group;


/***/ },
/* 433 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <entity-bar\r\n            [entityTitle]=\"entityTitle\"\r\n            [searchTitle]=\"searchTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            [selectLimit]=\"selectLimit\"\r\n            [entityDataLength]=\"entityDataLength\"\r\n            [listOfOptions1]=\"facultiesNamesIDs\"\r\n            [listOfOptions2]=\"specialitiesNamesIDs\"\r\n            [isSelectedBy]=\"isSelectedBy\"\r\n            [defaultOption1]=\"defaultFacultySelect\"\r\n            [defaultOption2]=\"defaultSpecialitySelect\"\r\n            (activate)=\"activate($event)\"\r\n            (sortByField1)=\"getGroupsByFaculty($event)\"\r\n            (sortByField2)=\"getGroupsBySpeciality($event)\"\r\n            (searchRun)=\"findEntity($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </entity-bar>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        За даними критеріями груп не знайдено\r\n    </div>\r\n    <dt-table *ngIf=\"!noRecords\"\r\n              [page]=\"page\"\r\n              [limit]=\"limit\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <ngb-pagination *ngIf=\"!sortHide\"\r\n                    [collectionSize]=\"entityDataLength\"\r\n                    [(page)]=\"page\"\r\n                    [maxSize]=\"paginationSize\"\r\n                    [pageSize]=\"limit\"\r\n                    [rotate]=\"true\"\r\n                    [ellipses]=\"true\"\r\n                    [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"pageChange($event)\"\r\n                    [hidden]=\"search.length || limit>=entityDataLength\">\r\n    </ngb-pagination>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var common_1 = __webpack_require__(22);
	var ng_bootstrap_1 = __webpack_require__(29);
	var crud_service_1 = __webpack_require__(135);
	var group_service_1 = __webpack_require__(435);
	var timetable_1 = __webpack_require__(436);
	var info_modal_component_1 = __webpack_require__(73);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var constant_1 = __webpack_require__(76);
	var GroupTimetableComponent = (function () {
	    function GroupTimetableComponent(route, crudService, groupService, location, modalService) {
	        var _this = this;
	        this.route = route;
	        this.crudService = crudService;
	        this.groupService = groupService;
	        this.location = location;
	        this.modalService = modalService;
	        this.entity = "timeTable";
	        this.noRecords = false;
	        this.entityData = [];
	        this.groupEntity = "Group";
	        this.subjectEntity = "subject";
	        this.page = 1;
	        this.limit = 0;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.headers = constant_1.headersGroupTimeTable;
	        this.actions = constant_1.actionsGroupTimeTable;
	        this.configAdd = constant_1.configAddGroupTimeTable;
	        this.configEdit = constant_1.configEditGroupTimeTable;
	        this.refreshData = constant_1.refreshData;
	        this.successEventModal = constant_1.successEventModal;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var groupTimetable = {};
	                    groupTimetable.entity_id = item.timetable_id;
	                    groupTimetable.entityColumns = [
	                        numberOfOrder,
	                        item.subject_name,
	                        item.start_date,
	                        item.start_time.slice(0, 5),
	                        item.end_date,
	                        item.end_time.slice(0, 5)];
	                    tempArr.push(groupTimetable);
	                });
	                _this.entityData = tempArr;
	            }
	            else {
	                _this.noRecords = true;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.groupId = data["groupId"];
	        });
	    }
	    ;
	    GroupTimetableComponent.prototype.ngOnInit = function () {
	        this.createTitle();
	        this.getRecords();
	    };
	    GroupTimetableComponent.prototype.createTitle = function () {
	        var _this = this;
	        this.crudService.getRecordById(this.groupEntity, this.groupId)
	            .subscribe(function (data) {
	            _this.groupName = data[0].group_name;
	            _this.pageTitle = "\u0420\u043E\u0437\u043A\u043B\u0430\u0434 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u0438 " + _this.groupName;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTimetableComponent.prototype.getGroupTimeTables = function () {
	        var _this = this;
	        this.groupService.getTimeTablesForGroup(this.groupId)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	                return;
	            }
	            else {
	                _this.noRecords = false;
	                for (var i in data) {
	                    for (var k in _this.subjects) {
	                        if (data[i].subject_id === _this.subjects[k].subject_id) {
	                            data[i].subject_name = _this.subjects[k].subject_name;
	                        }
	                    }
	                }
	                _this.createTableConfig(data);
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTimetableComponent.prototype.getRecords = function () {
	        var _this = this;
	        this.crudService.getRecords(this.subjectEntity)
	            .subscribe(function (data) {
	            _this.subjects = data;
	            _this.getGroupTimeTables();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTimetableComponent.prototype.deleteGroupTimeTable = function (entity, id) {
	        var _this = this;
	        this.crudService
	            .delRecord(this.entity, id)
	            .subscribe(function () {
	            _this.getGroupTimeTables();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTimetableComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    GroupTimetableComponent.prototype.substituteNameSubjectsWithId = function (data) {
	        this.subjects.forEach(function (item) {
	            if (item.subject_name === data.select[0].selected) {
	                data.select[0].selected = item.subject_id;
	            }
	        });
	    };
	    GroupTimetableComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        this.configAdd.select[0].selected = "";
	        this.configAdd.select[0].selectItem = [];
	        this.subjects.forEach(function (item) {
	            _this.configAdd.select[0].selectItem.push(item.subject_name);
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            _this.substituteNameSubjectsWithId(data);
	            var newGroupTimeTable = new timetable_1.TimeTable(_this.groupId, data.list[0].value = data.list[0].value.year + "-" + data.list[0].value.month + "-" + data.list[0].value.day, data.list[1].value, data.list[2].value = data.list[2].value.year + "-" + data.list[2].value.month + "-" + data.list[2].value.day, data.list[3].value, data.select[0].selected);
	            _this.crudService.insertData(_this.entity, newGroupTimeTable)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = "\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.getGroupTimeTables();
	            });
	        }, function () {
	            return;
	        });
	    };
	    GroupTimetableComponent.prototype.editCase = function (data) {
	        var _this = this;
	        var nDate = new Date(data.entityColumns[2]);
	        var startDate = {
	            "year": nDate.getFullYear(),
	            "month": nDate.getMonth() + 1,
	            "day": nDate.getDate()
	        };
	        nDate = new Date(data.entityColumns[4]);
	        var endDate = {
	            "year": nDate.getFullYear(),
	            "month": nDate.getMonth() + 1,
	            "day": nDate.getDate()
	        };
	        this.configEdit.list[0].value = startDate;
	        this.configEdit.list[1].value = data.entityColumns[3];
	        this.configEdit.list[2].value = endDate;
	        this.configEdit.list[3].value = data.entityColumns[5];
	        this.configEdit.select[0].selected = data.entityColumns[1];
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selectItem = [];
	        this.subjects.forEach(function (item) {
	            _this.configEdit.select[0].selectItem.push(item.subject_name);
	        });
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            _this.substituteNameSubjectsWithId(data);
	            var editedGroupTimeTable = new timetable_1.TimeTable(_this.groupId, data.list[0].value = data.list[0].value.year + "-" + data.list[0].value.month + "-" + data.list[0].value.day, data.list[1].value, data.list[2].value = data.list[2].value.year + "-" + data.list[2].value.month + "-" + data.list[2].value.day, data.list[3].value, data.select[0].selected);
	            _this.crudService.updateData(_this.entity, data.id, editedGroupTimeTable)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.getGroupTimeTables();
	            });
	        }, function () {
	            return;
	        });
	    };
	    GroupTimetableComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteGroupTimeTable(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    GroupTimetableComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    GroupTimetableComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    GroupTimetableComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(437)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _b) || Object, (typeof (_c = typeof group_service_1.GroupService !== 'undefined' && group_service_1.GroupService) === 'function' && _c) || Object, (typeof (_d = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _d) || Object, (typeof (_e = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _e) || Object])
	    ], GroupTimetableComponent);
	    return GroupTimetableComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.GroupTimetableComponent = GroupTimetableComponent;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(5);
	var constant_1 = __webpack_require__(76);
	var GroupService = (function () {
	    function GroupService(http, router) {
	        var _this = this;
	        this.http = http;
	        this.router = router;
	        this.hostUrlBase = constant_1.baseUrl;
	        this.successResponse = function (response) { return response.json(); };
	        this.handleError = function (error) {
	            var errMsg = (error.message) ? error.message :
	                error.status ? error.status + " - " + error.statusText : "Server error";
	            if (error.status === 403) {
	                sessionStorage.removeItem("userRole");
	                _this.router.navigate(["/login"]);
	            }
	            return Observable_1.Observable.throw(errMsg);
	        };
	    }
	    GroupService.prototype.getTimeTablesForGroup = function (groupId) {
	        return this.http
	            .get(this.hostUrlBase + "timeTable/getTimeTablesForGroup/" + groupId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    GroupService.prototype.getTestByGroup = function (groupId) {
	        return this.http
	            .get(this.hostUrlBase + "Result/getResultTestIdsByGroup/" + groupId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    GroupService.prototype.getTestResult = function (testId, groupId) {
	        return this.http
	            .get(this.hostUrlBase + "Result/getRecordsByTestGroupDate/" + testId + "/" + groupId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    GroupService.prototype.toNationalRate = function (resultInPercentage) {
	        if (resultInPercentage >= 0 && resultInPercentage < 60) {
	            return "Незадовільно";
	        }
	        else if (resultInPercentage >= 60 && resultInPercentage < 74) {
	            return "Задовільно";
	        }
	        else if (resultInPercentage >= 74 && resultInPercentage < 90) {
	            return "Добре";
	        }
	        else if (resultInPercentage >= 90 && resultInPercentage <= 100) {
	            return "Відмінно";
	        }
	        else {
	            return "Неправильні дані";
	        }
	    };
	    GroupService.prototype.toECTSRate = function (resultInPercentage) {
	        if (resultInPercentage >= 0 && resultInPercentage < 40) {
	            return "F";
	        }
	        else if (resultInPercentage >= 40 && resultInPercentage < 60) {
	            return "FX";
	        }
	        else if (resultInPercentage >= 60 && resultInPercentage < 64) {
	            return "E";
	        }
	        else if (resultInPercentage >= 64 && resultInPercentage < 74) {
	            return "D";
	        }
	        else if (resultInPercentage >= 74 && resultInPercentage < 82) {
	            return "C";
	        }
	        else if (resultInPercentage >= 82 && resultInPercentage < 90) {
	            return "B";
	        }
	        else if (resultInPercentage >= 90 && resultInPercentage <= 100) {
	            return "A";
	        }
	        else {
	            return "Неправильні дані";
	        }
	    };
	    GroupService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], GroupService);
	    return GroupService;
	    var _a, _b;
	}());
	exports.GroupService = GroupService;


/***/ },
/* 436 */
/***/ function(module, exports) {

	"use strict";
	var TimeTable = (function () {
	    function TimeTable(group_id, start_date, start_time, end_date, end_time, subject_id) {
	        this.group_id = group_id;
	        this.subject_id = subject_id;
	        this.start_date = start_date;
	        this.start_time = start_time;
	        this.end_date = end_date;
	        this.end_time = end_time;
	    }
	    return TimeTable;
	}());
	exports.TimeTable = TimeTable;


/***/ },
/* 437 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-text\">{{pageTitle}}</div>\n            <form class=\"navbar-form navbar-right\">\n                <div class=\"form-group\">\n                    <a class=\"btn btn-default\" (click)=\"createCase()\" [title]=\"addTitle\">Додати </a>\n                </div>\n                <button type=\"button\" class=\"btn btn-secondary\"\n                        (click)=\"goBack()\">Назад\n                </button>\n            </form>\n        </div>\n    </nav>\n    <dt-table *ngIf=\"!noRecords\"\n              [limit]=\"limit\"\n              [page]=\"page\"\n              [headers]=\"headers\"\n              [actions]=\"actions\"\n              [tableData]=\"entityData\"\n              (activate)=\"activate($event)\">\n    </dt-table>\n    <div *ngIf=\"noRecords\" class=\"text-center\">\n        Для даної групи розклад не сформований\n    </div>\n</div>\n<template ngbModalContainer></template>";

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var common_1 = __webpack_require__(22);
	var crud_service_1 = __webpack_require__(135);
	var group_service_1 = __webpack_require__(435);
	var constant_1 = __webpack_require__(76);
	var entity_manager_body_1 = __webpack_require__(439);
	var GroupResultComponent = (function () {
	    function GroupResultComponent(_router, route, location, groupService, crudService) {
	        var _this = this;
	        this._router = _router;
	        this.route = route;
	        this.location = location;
	        this.groupService = groupService;
	        this.crudService = crudService;
	        this.page = 1;
	        this.limit = 0;
	        this.noRecords = false;
	        this.subjectEntity = "Subject";
	        this.testEntity = "Test";
	        this.groupEntity = "Group";
	        this.entityData = [];
	        this.headers = constant_1.headersGroupResult;
	        this.actions = constant_1.actionsGroupResult;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var groupResult = {};
	                    groupResult.entity_id = item.test_id;
	                    groupResult.subject_id = item.subject_id;
	                    groupResult.entityColumns = [numberOfOrder, item.subject_name, item.test_name];
	                    tempArr.push(groupResult);
	                });
	                _this.entityData = tempArr;
	            }
	            else {
	                _this.noRecords = true;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.groupId = data["groupId"];
	        });
	    }
	    ;
	    GroupResultComponent.prototype.ngOnInit = function () {
	        this.createTitle();
	        this.getRecords();
	    };
	    GroupResultComponent.prototype.createTitle = function () {
	        var _this = this;
	        this.crudService.getRecordById(this.groupEntity, this.groupId)
	            .subscribe(function (data) {
	            _this.groupName = data[0].group_name;
	            _this.pageTitle = "\u041F\u0435\u0440\u0435\u043B\u0456\u043A \u0442\u0435\u0441\u0442\u0456\u0432 \u0437\u0434\u0430\u043D\u0438\u0445 \u0433\u0440\u0443\u043F\u043E\u044E " + _this.groupName;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupResultComponent.prototype.getRecords = function () {
	        var _this = this;
	        this.groupService.getTestByGroup(this.groupId)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            else {
	                _this.noRecords = false;
	                var ids_1 = [];
	                data.forEach(function (item) {
	                    ids_1.push(item.test_id);
	                });
	                var entityManagerTests = new entity_manager_body_1.EntityManagerBody(_this.testEntity, ids_1);
	                _this.getTestsDetails(entityManagerTests);
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupResultComponent.prototype.getTestsDetails = function (param) {
	        var _this = this;
	        this.crudService.getEntityValues(param)
	            .subscribe(function (data) {
	            _this.entityDataWithNames = data;
	            var ids = [];
	            data.forEach(function (item) {
	                ids.push(item.subject_id);
	            });
	            var entityManagerSubjects = new entity_manager_body_1.EntityManagerBody(_this.subjectEntity, ids);
	            _this.getSubjectNames(entityManagerSubjects);
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupResultComponent.prototype.getSubjectNames = function (param) {
	        var _this = this;
	        this.crudService.getEntityValues(param)
	            .subscribe(function (data) {
	            _this.getNamesByIds(data);
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupResultComponent.prototype.getNamesByIds = function (data) {
	        for (var i in this.entityDataWithNames) {
	            for (var k in data) {
	                if (this.entityDataWithNames[i].subject_id === data[k].subject_id) {
	                    this.entityDataWithNames[i].subject_name = data[k].subject_name;
	                }
	            }
	        }
	        this.createTableConfig(this.entityDataWithNames);
	    };
	    GroupResultComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "viewTestResult":
	                this._router.navigate(["/admin/group/groupTestResult"], { queryParams: { testId: data.entity_id, groupId: this.groupId, subjectId: data.subject_id } });
	                break;
	        }
	    };
	    GroupResultComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    GroupResultComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    GroupResultComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(440)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _c) || Object, (typeof (_d = typeof group_service_1.GroupService !== 'undefined' && group_service_1.GroupService) === 'function' && _d) || Object, (typeof (_e = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _e) || Object])
	    ], GroupResultComponent);
	    return GroupResultComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.GroupResultComponent = GroupResultComponent;


/***/ },
/* 439 */
/***/ function(module, exports) {

	"use strict";
	var EntityManagerBody = (function () {
	    function EntityManagerBody(entity, ids) {
	        this.entity = entity;
	        this.ids = ids;
	    }
	    return EntityManagerBody;
	}());
	exports.EntityManagerBody = EntityManagerBody;


/***/ },
/* 440 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-text\">{{pageTitle}}</div>\n            <form class=\"navbar-form navbar-right\">\n                <button type=\"button\" class=\"btn btn-secondary\"\n                        (click)=\"goBack()\">Назад\n                </button>\n            </form>\n        </div>\n    </nav>\n    <dt-table *ngIf=\"!noRecords\"\n              [limit]=\"limit\"\n              [page]=\"page\"\n              [headers]=\"headers\"\n              [actions]=\"actions\"\n              [tableData]=\"entityData\"\n              (activate)=\"activate($event)\">\n    </dt-table>\n    <div *ngIf=\"noRecords\" class=\"text-center\">\n        Немає результатів тестування для даної групи\n    </div>\n</div>";

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var common_1 = __webpack_require__(22);
	var group_service_1 = __webpack_require__(435);
	var entity_manager_body_1 = __webpack_require__(439);
	var constant_1 = __webpack_require__(76);
	var crud_service_1 = __webpack_require__(135);
	var GroupTestResultComponent = (function () {
	    function GroupTestResultComponent(location, route, groupService, crudService) {
	        var _this = this;
	        this.location = location;
	        this.route = route;
	        this.groupService = groupService;
	        this.crudService = crudService;
	        this.page = 1;
	        this.limit = 0;
	        this.noRecords = false;
	        this.entityData = [];
	        this.headers = constant_1.headersGroupTestResult;
	        this.maxResult = 100;
	        this.testEntity = "Test";
	        this.groupEntity = "Group";
	        this.subjectEntity = "Subject";
	        this.studentEntity = "Student";
	        this.createTableConfig = function (data) {
	            console.log(data);
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var groupResult = {};
	                    groupResult.entity_id = item.test_id;
	                    groupResult.entityColumns = [
	                        numberOfOrder,
	                        item.student_name,
	                        item.result,
	                        (item.resultInPercentage.toFixed(2) + "%"),
	                        item.resultNational,
	                        item.resultECTS];
	                    tempArr.push(groupResult);
	                });
	                _this.entityData = tempArr;
	            }
	            else {
	                _this.noRecords = true;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.groupId = data["groupId"];
	            _this.testId = data["testId"];
	            _this.subjectId = data["subjectId"];
	        });
	    }
	    ;
	    GroupTestResultComponent.prototype.ngOnInit = function () {
	        this.getRecords();
	        this.getGroupName();
	        this.getTestName();
	        this.getSubjectName();
	    };
	    GroupTestResultComponent.prototype.getGroupName = function () {
	        var _this = this;
	        this.crudService.getRecordById(this.groupEntity, this.groupId)
	            .subscribe(function (data) {
	            _this.groupName = data[0].group_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTestResultComponent.prototype.getTestName = function () {
	        var _this = this;
	        this.crudService.getRecordById(this.testEntity, this.testId)
	            .subscribe(function (data) {
	            _this.testName = data[0].test_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTestResultComponent.prototype.getSubjectName = function () {
	        var _this = this;
	        this.crudService.getRecordById(this.subjectEntity, this.subjectId)
	            .subscribe(function (data) {
	            _this.subjectName = data[0].subject_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTestResultComponent.prototype.getRecords = function () {
	        var _this = this;
	        this.groupService.getTestResult(this.testId, this.groupId)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            else {
	                _this.entityDataWithNames = data;
	                _this.noRecords = false;
	                var ids_1 = [];
	                _this.maxResult = +data[0].answers;
	                data.forEach(function (item) {
	                    ids_1.push(item.student_id);
	                    item.resultInPercentage = (+item.result / _this.maxResult) * 100;
	                    item.resultNational = _this.groupService.toNationalRate(item.resultInPercentage);
	                    item.resultECTS = _this.groupService.toECTSRate(item.resultInPercentage);
	                });
	                var entityManagerStudent = new entity_manager_body_1.EntityManagerBody(_this.studentEntity, ids_1);
	                _this.getStudentName(entityManagerStudent);
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    GroupTestResultComponent.prototype.getStudentName = function (param) {
	        var _this = this;
	        this.crudService.getEntityValues(param)
	            .subscribe(function (data) {
	            _this.getNamesByIds(data);
	        });
	    };
	    GroupTestResultComponent.prototype.getNamesByIds = function (data) {
	        for (var i in this.entityDataWithNames) {
	            for (var k in data) {
	                if (this.entityDataWithNames[i].student_id === data[k].user_id) {
	                    this.entityDataWithNames[i].student_name = data[k].student_surname + " " + data[k].student_name;
	                }
	            }
	        }
	        this.createTableConfig(this.entityDataWithNames);
	    };
	    GroupTestResultComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    GroupTestResultComponent.prototype.Print = function () {
	        window.print();
	    };
	    GroupTestResultComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    GroupTestResultComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(442),
	            styles: [__webpack_require__(443)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof group_service_1.GroupService !== 'undefined' && group_service_1.GroupService) === 'function' && _c) || Object, (typeof (_d = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _d) || Object])
	    ], GroupTestResultComponent);
	    return GroupTestResultComponent;
	    var _a, _b, _c, _d;
	}());
	exports.GroupTestResultComponent = GroupTestResultComponent;


/***/ },
/* 442 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-text\">\n                Група:&nbsp;{{groupName}}&nbsp; &nbsp;Предмет:&nbsp;\"{{subjectName}}\"&nbsp; &nbsp;Тест:&nbsp;\"{{testName}}\"\n            </div>\n            <form class=\"navbar-form navbar-right\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"Print()\">Друк</button>\n                <button type=\"button\" class=\"btn btn-secondary\"\n                        (click)=\"goBack()\">Назад\n                </button>\n            </form>\n        </div>\n    </nav>\n    <div class=\"print-show print\">\n        <h5>Відомість про результати тестування</h5>\n        <div class=\"custom-table\">\n            <div class=\"table-row\">\n                <div class=\"table-cell\">Назва предмету: {{subjectName}}</div>\n                <div class=\"table-cell\">Назва тесту: {{testName}}</div>\n            </div>\n            <div class=\"table-row\">\n                <div class=\"table-cell\">Група: {{groupName}}</div>\n                <div class=\"table-cell\">Максимальна кількість балів: {{maxResult}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid print\">\n        <ul class=\"list-group entity-list\">\n            <li class=\"list-group-item row\">\n                <div *ngFor=\"let item of headers\" [ngClass]=\"item.className\">{{item.name}}</div>\n            </li>\n            <li class=\"list-group-item row\" *ngFor=\"let entity of entityData; let i=index\">\n                <div *ngFor=\"let item of entity.entityColumns; let j=index\" [ngClass]=\"headers[j].className\">\n                    <span class=\"\">{{item}}</span>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"print-show print\"><br>\n        <span class=\"left\">\"___\" __________ 20__ р.</span>\n        <span class=\"right\"> Підпис ____________ </span>\n    </div>\n    <div *ngIf=\"noRecords\" class=\"text-center\">\n        Немає результатів тестування для даної групи\n    </div>\n</div>";

/***/ },
/* 443 */
/***/ function(module, exports) {

	module.exports = ".print-show {\n    display: none;\n}\n\n.print-hide {\n    display: inherit;\n}\n\n@media print {\n    .print-show {\n        display: inherit;\n    }\n\n    .print-hide {\n        display: none;\n    }\n\n    .print h5 {\n        text-align: center;\n        font-size: large;\n    }\n\n    .print span.right {\n        float: right;\n    }\n\n    .custom-table {\n        display: table;\n    }\n\n    .table-row {\n        display: table-row;\n    }\n\n    .table-cell {\n        display: table-cell;\n        padding: 0 1cm 0.3cm 0;\n    }\n\n    div.print ul li {\n        padding: 0;\n        border: 1px solid;\n        border-radius: 0;\n    }\n\n    div.print ul li div {\n        box-sizing: border-box;\n        float: left;\n    }\n\n    div.print ul li div:not(:first-child) {\n        border-left: 1px solid;\n    }\n\n    div.print ul li div:nth-child(1){\n        width: 7%;\n    }\n\n    div.print ul li div:nth-child(2){\n        width: 43%;\n    }\n\n    div.print ul li div:nth-child(3){\n        width: 16%;\n    }\n\n    div.print ul li div:nth-child(5){\n        width: 20%;\n    }\n\n    div.print ul li div:nth-child(6){\n        width: 14%;\n    }\n}"

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var info_modal_component_1 = __webpack_require__(73);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var ng_bootstrap_1 = __webpack_require__(29);
	var user_1 = __webpack_require__(71);
	var crud_service_ts_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var AdminUserComponent = (function () {
	    function AdminUserComponent(crudService, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.modalService = modalService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.configAdd = constant_1.configAddAdminUser;
	        this.configEdit = constant_1.configEditAdminUser;
	        this.paginationSize = constant_1.maxSize;
	        this.headers = constant_1.headersAdminUser;
	        this.actions = constant_1.actionsAdminUser;
	        this.addTitle = "Додати адміністратора";
	        this.searchTitle = "Введіть дані для пошуку";
	        this.entityTitle = "Адміністратори";
	        this.selectLimit = "Виберіть кількість записів на сторінці";
	        this.entityData = [];
	        this.entity = "AdminUser";
	        this.limit = 5;
	        this.search = "";
	        this.page = 1;
	        this.offset = 0;
	        this.changeLimit = constant_1.changeLimit;
	        this.pageChange = constant_1.pageChange;
	        this.getCountRecords = constant_1.getCountRecords;
	        this.delRecord = constant_1.delRecord;
	        this.refreshData = constant_1.refreshData;
	        this.successEventModal = constant_1.successEventModal;
	        this.getRecordsRange = constant_1.getRecordsRange;
	        this.findEntity = constant_1.findEntity;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var adminUser = {};
	                adminUser.entity_id = item.id;
	                adminUser.entityColumns = [numberOfOrder, item.username, item.email];
	                tempArr.push(adminUser);
	            });
	            _this.entityData = tempArr;
	        };
	    }
	    ;
	    AdminUserComponent.prototype.ngOnInit = function () {
	        this.getCountRecords();
	    };
	    AdminUserComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "create":
	                this.createCase();
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	        }
	    };
	    AdminUserComponent.prototype.createCase = function (userToChange) {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        if (userToChange) {
	            this.configAdd.list[0].value = userToChange.username;
	            this.configAdd.list[1].value = userToChange.email;
	            this.configAdd.list[2].value = userToChange.password;
	            this.configAdd.list[3].value = userToChange.password_confirm;
	        }
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newAdminUser = new user_1.User(data.list[0].value, data.list[1].value, data.list[2].value, data.list[3].value);
	            _this.crudService.insertData(_this.entity, newAdminUser)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.configAdd.list.forEach(function (item) {
	                    item.value = "";
	                });
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            }, function (error) {
	                _this.modalInfoConfig.infoString = "\u041F\u0430\u0440\u043E\u043B\u044C \u0442\u0430 \u043B\u043E\u0433\u0456\u043D \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0431\u0443\u0442\u0438 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u043C\u0438";
	                _this.createCase(newAdminUser);
	                _this.successEventModal();
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    AdminUserComponent.prototype.editCase = function (data) {
	        var _this = this;
	        var editData = data;
	        this.configEdit.list.forEach(function (item, i) {
	            item.value = data.entityColumns[i + 1];
	        });
	        this.configEdit.id = data.entity_id;
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedAdminUser = new user_1.User(data.list[0].value, data.list[1].value, data.list[2].value, data.list[3].value);
	            _this.crudService.updateData(_this.entity, data.id, editedAdminUser)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            }, function (error) {
	                _this.modalInfoConfig.infoString = "\u041F\u0430\u0440\u043E\u043B\u044C \u0442\u0430 \u043B\u043E\u0433\u0456\u043D \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0431\u0443\u0442\u0438 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u043C\u0438";
	                _this.editCase(editData);
	                _this.successEventModal();
	            });
	        }, function () {
	            return;
	        });
	    };
	    AdminUserComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.delRecord(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    AdminUserComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(445)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_ts_1.CRUDService !== 'undefined' && crud_service_ts_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _b) || Object])
	    ], AdminUserComponent);
	    return AdminUserComponent;
	    var _a, _b;
	}());
	exports.AdminUserComponent = AdminUserComponent;


/***/ },
/* 445 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\n    <entity-bar\n            [entityTitle]=\"entityTitle\"\n            [searchTitle]=\"searchTitle\"\n            [addTitle]=\"addTitle\"\n            [selectLimit]=\"selectLimitTitle\"\n            [entityDataLength]=\"entityDataLength\"\n            (activate)=\"activate($event)\"\n            (searchRun)=\"findEntity($event)\"\n            (selectRun)=\"changeLimit($event)\">\n    </entity-bar>\n    <dt-table *ngIf=\"entityData.length\"\n              [page]=\"page\"\n              [limit]=\"limit\"\n              [headers]=\"headers\"\n              [actions]=\"actions\"\n              [tableData]=\"entityData\"\n              (activate)=\"activate($event)\">\n    </dt-table>\n    <ngb-pagination *ngIf=\"entityDataLength\"\n                    [collectionSize]=\"entityDataLength\"\n                    [(page)]=\"page\"\n                    [maxSize]=\"paginationSize\"\n                    [pageSize]=\"limit\"\n                    [rotate]=\"true\"\n                    [ellipses]=\"true\"\n                    [boundaryLinks]=\"true\"\n                    (pageChange)=\"pageChange($event)\"\n                    [hidden]=\"search.length || limit>=entityDataLength\">\n    </ngb-pagination>\n</div>\n<template ngbModalContainer></template>\n\n";

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var info_modal_component_1 = __webpack_require__(73);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var ng_bootstrap_1 = __webpack_require__(29);
	var speciality_1 = __webpack_require__(447);
	var crud_service_1 = __webpack_require__(135);
	var constant_1 = __webpack_require__(76);
	var SpecialityComponent = (function () {
	    function SpecialityComponent(crudService, _router, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this._router = _router;
	        this.modalService = modalService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.configAdd = constant_1.configAddSpeciality;
	        this.configEdit = constant_1.configEditSpeciality;
	        this.paginationSize = constant_1.maxSize;
	        this.headers = constant_1.headersSpeciality;
	        this.actions = constant_1.actionsSpeciality;
	        this.addTitle = "Створити новий факультет";
	        this.searchTitle = "Введіть дані для пошуку";
	        this.entityTitle = "Спеціальності";
	        this.selectLimit = "Виберіть кількість записів на сторінці";
	        this.entityData = [];
	        this.entity = "speciality";
	        this.limit = 5;
	        this.offset = 0;
	        this.search = "";
	        this.page = 1;
	        this.changeLimit = constant_1.changeLimit;
	        this.pageChange = constant_1.pageChange;
	        this.getCountRecords = constant_1.getCountRecords;
	        this.delRecord = constant_1.delRecord;
	        this.refreshData = constant_1.refreshData;
	        this.successEventModal = constant_1.successEventModal;
	        this.getRecordsRange = constant_1.getRecordsRange;
	        this.findEntity = constant_1.findEntity;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var speciality = {};
	                speciality.entity_id = item.speciality_id;
	                speciality.entityColumns = [numberOfOrder, item.speciality_code, item.speciality_name];
	                tempArr.push(speciality);
	            });
	            _this.entityData = tempArr;
	        };
	    }
	    ;
	    SpecialityComponent.prototype.ngOnInit = function () {
	        this.getCountRecords();
	    };
	    SpecialityComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "viewGroup":
	                this._router.navigate(["/admin/group/bySpeciality"], { queryParams: { specialityId: data.entity_id } });
	                break;
	            case "create":
	                this.createCase();
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	        }
	    };
	    SpecialityComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newSpeciality = new speciality_1.Speciality(data.list[0].value, data.list[1].value);
	            _this.crudService.insertData(_this.entity, newSpeciality)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = data.list[1].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    SpecialityComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list.forEach(function (item, i) {
	            item.value = data.entityColumns[i + 1];
	        });
	        this.configEdit.id = data.entity_id;
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedSpeciality = new speciality_1.Speciality(data.list[0].value, data.list[1].value);
	            _this.crudService.updateData(_this.entity, data.id, editedSpeciality)
	                .subscribe(function (response) {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    SpecialityComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[0] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.delRecord(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    SpecialityComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(448)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _c) || Object])
	    ], SpecialityComponent);
	    return SpecialityComponent;
	    var _a, _b, _c;
	}());
	exports.SpecialityComponent = SpecialityComponent;


/***/ },
/* 447 */
/***/ function(module, exports) {

	"use strict";
	var Speciality = (function () {
	    function Speciality(speciality_code, speciality_name) {
	        this.speciality_code = speciality_code;
	        this.speciality_name = speciality_name;
	    }
	    return Speciality;
	}());
	exports.Speciality = Speciality;


/***/ },
/* 448 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <entity-bar\r\n            [entityTitle]=\"entityTitle\"\r\n            [searchTitle]=\"searchTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            [selectLimit]=\"selectLimit\"\r\n            [entityDataLength]=\"entityDataLength\"\r\n            (activate)=\"activate($event)\"\r\n            (searchRun)=\"findEntity($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </entity-bar>\r\n    <dt-table *ngIf=\"entityData.length>0\"\r\n              [page]=\"page\"\r\n              [limit]=\"limit\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <ngb-pagination *ngIf=\"entityDataLength\"\r\n                    [collectionSize]=\"entityDataLength\"\r\n                    [(page)]=\"page\"\r\n                    [maxSize]=\"paginationSize\"\r\n                    [pageSize]=\"limit\"\r\n                    [rotate]=\"true\"\r\n                    [ellipses]=\"true\"\r\n                    [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"pageChange($event)\"\r\n                    [hidden]=\"search.length || limit>=entityDataLength\">\r\n    </ngb-pagination>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var crud_service_ts_1 = __webpack_require__(135);
	var entity_manager_body_1 = __webpack_require__(439);
	__webpack_require__(113);
	var constant_1 = __webpack_require__(76);
	var StudentComponent = (function () {
	    function StudentComponent(crudService, route, _router, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this._router = _router;
	        this.modalService = modalService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.paginationSize = constant_1.maxSize;
	        this.headers = constant_1.headersStudentAdmin;
	        this.actions = constant_1.actionsStudentAdmin;
	        // constants for view
	        this.addTitle = "Додати нового студента";
	        this.searchTitle = "Введіть дані для пошуку";
	        this.entityTitle = "Студенти";
	        this.selectLimit = "Виберіть кількість студентів на сторінці";
	        //
	        this.entityData = [];
	        this.entity = "student";
	        this.limit = 5;
	        this.search = "";
	        this.page = 1;
	        this.offset = 0;
	        this.noRecords = false;
	        this.groupEntity = "Group";
	        this.groups = [];
	        this.changeLimit = constant_1.changeLimit;
	        this.pageChange = constant_1.pageChange;
	        this.delRecord = constant_1.delRecord;
	        this.getCountRecords = constant_1.getCountRecords;
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            data.forEach(function (item, i) {
	                numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                var student = {};
	                student.entity_id = item.user_id;
	                student.entityColumns = [numberOfOrder, (item.student_surname + " " + item.student_name + " " + item.student_fname), item.gradebook_id, item.group_name];
	                tempArr.push(student);
	            });
	            _this.entityData = tempArr;
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.groupId = data["groupId"];
	        });
	    }
	    StudentComponent.prototype.ngOnInit = function () {
	        if (this.groupId) {
	            this.showStudentsByGroup(this.groupId);
	        }
	        else {
	            this.getCountRecords();
	        }
	    };
	    StudentComponent.prototype.showStudentsByGroup = function (groupId) {
	        var _this = this;
	        this.crudService.getRecordById(this.groupEntity, groupId)
	            .subscribe(function (res) {
	            _this.groupName = res[0].group_name;
	            _this.entityTitle = "\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0438 \u0433\u0440\u0443\u043F\u0438: " + _this.groupName;
	        }, function (error) { return console.log("error: ", error); });
	        this.getStudentsByGroup();
	    };
	    StudentComponent.prototype.getRecordsRange = function () {
	        var _this = this;
	        this.noRecords = false;
	        this.crudService.getRecordsRange(this.entity, this.limit, this.offset)
	            .subscribe(function (data) {
	            _this.studentDataForView = data;
	            _this.getGroupName();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentComponent.prototype.getStudentsByGroup = function () {
	        var _this = this;
	        this.crudService.getStudentsByGroup(this.groupId)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	                return;
	            }
	            _this.noRecords = false;
	            _this.page = 1;
	            _this.studentDataForView = data;
	            _this.getGroupName();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentComponent.prototype.getGroupName = function () {
	        var _this = this;
	        var groupId = [];
	        var data2 = this.studentDataForView;
	        for (var i in data2) {
	            groupId.push(data2[i].group_id);
	        }
	        var dataEnt = new entity_manager_body_1.EntityManagerBody(this.groupEntity, groupId);
	        this.crudService.getEntityValues(dataEnt)
	            .subscribe(function (groups) {
	            _this.groups = groups;
	            for (var j in _this.studentDataForView) {
	                for (var i in _this.groups) {
	                    if (_this.studentDataForView[j].group_id === _this.groups[i].group_id) {
	                        _this.studentDataForView[j].group_name = _this.groups[i].group_name;
	                    }
	                }
	            }
	            _this.createTableConfig(_this.studentDataForView);
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentComponent.prototype.findEntity = function (searchTerm) {
	        var _this = this;
	        this.search = searchTerm;
	        if (!this.search.length) {
	            this.offset = 0;
	            this.page = 1;
	            this.getCountRecords();
	            return;
	        }
	        this.crudService.getRecordsBySearch(this.entity, this.search)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	                _this.entityData = [];
	                return;
	            }
	            _this.page = 1;
	            _this.studentDataForView = data;
	            _this.getGroupName();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    ;
	    StudentComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "create":
	                this._router.navigate(["/admin/student/student-profile"]);
	                break;
	            case "view":
	                this._router.navigate(["/admin/student/student-profile", data.entity_id]);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	        }
	    };
	    StudentComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.delRecord(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    StudentComponent.prototype.refreshData = function (action) {
	        var _this = this;
	        if (this.groupId) {
	            this.entityTitle = "\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0438 \u0433\u0440\u0443\u043F\u0438: " + this.groupName;
	            this.getStudentsByGroup();
	        }
	        else {
	            if (action === "delete" && this.entityData.length === 1 && this.entityDataLength > 1) {
	                this.offset = (this.page - 2) * this.limit;
	                this.page -= 1;
	            }
	            else if (this.entityData.length > 1) {
	                this.offset = (this.page - 1) * this.limit;
	            }
	            this.crudService.getCountRecords(this.entity)
	                .subscribe(function (data) {
	                _this.entityDataLength = +data.numberOfRecords;
	                _this.getRecordsRange();
	            }, function (error) { return console.log(error); });
	        }
	    };
	    ;
	    StudentComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    StudentComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(450),
	            styles: [__webpack_require__(451)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_ts_1.CRUDService !== 'undefined' && crud_service_ts_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _d) || Object])
	    ], StudentComponent);
	    return StudentComponent;
	    var _a, _b, _c, _d;
	}());
	exports.StudentComponent = StudentComponent;


/***/ },
/* 450 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <entity-bar\r\n            [entityTitle]=\"entityTitle\"\r\n            [searchTitle]=\"searchTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            [selectLimit]=\"selectLimitTitle\"\r\n            [isSelectedBy]=\"!!groupId\"\r\n            [entityDataLength]=\"entityDataLength\"\r\n            (activate)=\"activate($event)\"\r\n            (searchRun)=\"findEntity($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </entity-bar>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        Для даної групи студентів не знайдено\r\n    </div>\r\n    <dt-table *ngIf=\"!noRecords\"\r\n              [page]=\"page\"\r\n              [limit]=\"limit\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <ngb-pagination *ngIf=\"entityDataLength\"\r\n                    [collectionSize]=\"entityDataLength\"\r\n                    [(page)]=\"page\"\r\n                    [maxSize]=\"paginationSize\"\r\n                    [pageSize]=\"limit\"\r\n                    [rotate]=\"true\"\r\n                    [ellipses]=\"true\"\r\n                    [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"pageChange($event)\"\r\n                    [hidden]=\"search.length || limit>=entityDataLength\">\r\n    </ngb-pagination>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 451 */
/***/ function(module, exports) {

	module.exports = ".student-container {\n    max-width: 1024px;\n    margin: 0px auto 0px auto;\n    padding: 10px 10px 0 10px;\n    min-width: 412px;\n}\n\n.student-profile-title{\n    font-size: 150%;\n    padding: 10px 0 10px 0;\n    border: 1px solid #e7e7e7;\n    border-radius: 4px;\n    margin-bottom: 15px;\n    background-color: #F8F8F8;\n    text-align: center;\n}\n\n.student-datas{\n    border: 1px solid #e7e7e7;\n    border-radius: 4px;\n    margin: 15px 0 15px 0;\n    padding: 10px 0 10px 0;\n    background-color: #F8F8F8;\n    display: inline-block;\n    width: 100%;\n}\n\n.student-foto{\n    display: inline-block;\n    float: left;\n}\n\n.student-data1{\n    display: inline-block;\n    float:\tleft;\n    text-align:right;\n    padding: 10px;\n}\n\n.student-data2{\n    display: inline-block;\n    float:\tleft;\n    text-align:right;\n    padding: 10px;\n}\n\n.input-student-data {\n    margin: 10px 20px 10px 0;\n}\n\n.button-create-refresh {\n    margin: auto;\n    text-align: center;\n    width: 100%;\n    clear:both;\n}\n\n.position-left {\n    float: right;\n    margin-right: 10px;\n}\n\n.select-group {\n    clear:both;\n    padding: 2px;\n    height: 24px;\n    width: 50%;\n}\n\ndiv.student-datas input{\n    width: 50%;\n}\n\ndiv.input-foto input{\n    width: 100%;\n}\n\n.field-error-message{\n    text-align: center;\n    margin: 0 20px 0 0;\n}\n\ninput.ng-invalid{\n    border-left: 5px solid red;\n}\n\ninput.ng-valid{\n    border-left: 5px solid green;\n}\n\nselect.ng-invalid{\n    border-left: 5px solid red;\n}\n\nselect.ng-valid{\n    border-left: 5px solid green;\n}\n\n.data-field{\n    width: 50%;\n    display: inline-block;\n    float: right;\n    text-align: left;\n    margin: 10px 20px 10px 0;\n}\n\n.password-eye-input{\n    margin: 10px 0 10px 0;\n}\n\n.password-eye{\n    display: inline-block;\n    cursor: pointer;\n    width: 20px;\n    position: relative;\n    right: 25px;\n    color: #000000;\n    margin: 10px 0 10px 0;\n}\n\nlabel {\n    display: block;\n    float:left;\n    clear: right;\n    margin: 10px 0 10px 0;\n}\n\n.password-field{\n    min-height: 22px\n}\n\n"

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var student_1 = __webpack_require__(453);
	var crud_service_1 = __webpack_require__(135);
	var entity_manager_body_1 = __webpack_require__(439);
	var Rx_1 = __webpack_require__(139);
	var ng_bootstrap_1 = __webpack_require__(29);
	var info_modal_component_1 = __webpack_require__(73);
	// import {ImageCropperComponent, CropperSettings} from "ng2-img-cropper";
	var constant_1 = __webpack_require__(76);
	var StudentProfileComponent = (function () {
	    function StudentProfileComponent(route, _commonService, location, modalService, validationTooltipConfig, validationTooltipModule) {
	        this.route = route;
	        this._commonService = _commonService;
	        this.location = location;
	        this.modalService = modalService;
	        this.validationTooltipConfig = validationTooltipConfig;
	        this.validationTooltipModule = validationTooltipModule;
	        this.entity = "student";
	        this.entityUser = "AdminUser";
	        this.groupEntity = "Group";
	        this.groups = [];
	        this.groupError = ["Для даного факультету не зареєстровано жодної групи!"];
	        this.facultyEntity = "Faculty";
	        this.facultys = [];
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.successEventModal = constant_1.successEventModal;
	        this.maxFileSize = 5000000;
	        this.statusView = true;
	        this.passwordStatus = true;
	        this.passwordStatusText = "password";
	        this.editSaveButtonName = "Редагувати дані";
	    }
	    StudentProfileComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.user_id = Number(params["id"]);
	        });
	        if (this.user_id) {
	            this.action = false;
	            this.getData();
	            this.getFacultyName();
	        }
	        else {
	            this.statusView = false;
	            this.action = true;
	            this.newStudent();
	        }
	    };
	    StudentProfileComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    StudentProfileComponent.prototype.newStudent = function () {
	        this.student = new student_1.Student;
	        this.student.photo = "assets/profile.png";
	        this.newFotoSrc.nativeElement.src = "assets/profile.png";
	        this.getFacultyName();
	    };
	    StudentProfileComponent.prototype.createNewStudent = function () {
	        var _this = this;
	        var dataForRequest = new student_1.Student;
	        dataForRequest.username = this.student.username;
	        dataForRequest.password = this.student.plain_password;
	        dataForRequest.password_confirm = this.student.plain_password;
	        dataForRequest.email = this.student.email;
	        dataForRequest.gradebook_id = this.student.gradebook_id;
	        dataForRequest.student_surname = this.student.student_surname;
	        dataForRequest.student_name = this.student.student_name;
	        dataForRequest.student_fname = this.student.student_fname;
	        dataForRequest.group_id = this.student.group_id;
	        dataForRequest.plain_password = this.student.plain_password;
	        dataForRequest.photo = this.newFotoSrc.nativeElement.src;
	        this._commonService.insertData(this.entity, dataForRequest)
	            .subscribe(function (data) {
	            if (data.response === "ok") {
	                _this.modalInfoConfig.infoString = "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 " + dataForRequest.student_surname + " " + dataForRequest.student_name + " " + dataForRequest.student_fname;
	                _this.successEventModal();
	                _this.newStudent();
	            }
	            if (data.response === "Failed to validate array") {
	                _this.modalInfoConfig.infoString = "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445";
	                _this.successEventModal();
	            }
	            console.log("ERROR");
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentProfileComponent.prototype.getFacultyName = function () {
	        var _this = this;
	        this._commonService.getRecords(this.facultyEntity)
	            .subscribe(function (facultyData) {
	            _this.facultys = facultyData;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentProfileComponent.prototype.getGroupByFaculty = function (value) {
	        var _this = this;
	        this.groups = [];
	        this._commonService.getGroupsByFaculty(value)
	            .subscribe(function (groupData) {
	            if (groupData.response === "no records") {
	                _this.groups.splice(0, _this.groups.length, { group_name: "Для даного факультету не зареєстровано жодної групи!", group_id: 0 });
	            }
	            else {
	                _this.groups = groupData;
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentProfileComponent.prototype.studGroupId = function (data) {
	        this.student.group_id = data;
	    };
	    StudentProfileComponent.prototype.getData = function () {
	        var _this = this;
	        this.student = new student_1.Student();
	        Rx_1.Observable.forkJoin(this._commonService.getRecordById(this.entity, this.user_id), this._commonService.getRecordById(this.entityUser, this.user_id)).subscribe(function (data) {
	            _this.student.user_id = _this.user_id;
	            _this.student.username = data[1][0].username;
	            _this.student.plain_password = data[0][0].plain_password;
	            _this.student.password = data[0][0].plain_password;
	            _this.student.password_confirm = data[0][0].plain_password;
	            _this.student.email = data[1][0].email;
	            _this.student.gradebook_id = data[0][0].gradebook_id;
	            _this.student.student_surname = data[0][0].student_surname;
	            _this.student.student_name = data[0][0].student_name;
	            _this.student.student_fname = data[0][0].student_fname;
	            _this.student.group_id = data[0][0].group_id;
	            _this.student.photo = data[0][0].photo;
	            var studGroupId = [];
	            studGroupId.push(_this.student.group_id);
	            var dataEnt = new entity_manager_body_1.EntityManagerBody(_this.groupEntity, studGroupId);
	            _this._commonService.getEntityValues(dataEnt)
	                .subscribe(function (data) {
	                _this.student.group_name = data[0].group_name;
	                var studFacultyId = [];
	                studFacultyId.push(data[0].faculty_id);
	                var dataEnt = new entity_manager_body_1.EntityManagerBody(_this.facultyEntity, studFacultyId);
	                _this._commonService.getEntityValues(dataEnt)
	                    .subscribe(function (data) {
	                    _this.student.faculty_id = data[0].faculty_id;
	                    _this.student.faculty_name = data[0].faculty_name;
	                    _this._commonService.getGroupsByFaculty(_this.student.faculty_id)
	                        .subscribe(function (groupData) {
	                        _this.groups = groupData;
	                    }, function (error) { return console.log("error: ", error); });
	                }, function (error) { return console.log("error: ", error); });
	            }, function (error) { return console.log("error: ", error); });
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentProfileComponent.prototype.updateStudent = function () {
	        var _this = this;
	        var dataForUpdateStudent = new student_1.Student;
	        dataForUpdateStudent.username = this.student.username;
	        dataForUpdateStudent.password = this.student.plain_password;
	        dataForUpdateStudent.password_confirm = this.student.plain_password;
	        dataForUpdateStudent.email = this.student.email;
	        dataForUpdateStudent.gradebook_id = this.student.gradebook_id;
	        dataForUpdateStudent.student_surname = this.student.student_surname;
	        dataForUpdateStudent.student_name = this.student.student_name;
	        dataForUpdateStudent.student_fname = this.student.student_fname;
	        dataForUpdateStudent.group_id = this.student.group_id;
	        dataForUpdateStudent.plain_password = this.student.plain_password;
	        dataForUpdateStudent.photo = this.newFotoSrc.nativeElement.src;
	        this._commonService.updateData(this.entity, this.student.user_id, dataForUpdateStudent)
	            .subscribe(function (data) {
	            if (data.response === "ok") {
	                _this.modalInfoConfig.infoString = "\u0414\u0430\u043D\u0456 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 " + dataForUpdateStudent.student_surname + " " + dataForUpdateStudent.student_name + " " + dataForUpdateStudent.student_fname + " \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E";
	                _this.successEventModal();
	            }
	            else {
	                _this.modalInfoConfig.infoString = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0434\u0430\u043D\u0456";
	                _this.successEventModal();
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    StudentProfileComponent.prototype.changeFile = function (event) {
	        var input = event.target;
	        if (input.files[0].size > this.maxFileSize) {
	            this.modalInfoConfig.infoString = "\u0420\u043E\u0437\u043C\u0456\u0440 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0431\u0443\u0442\u0438 \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 5\u041C\u0431";
	            this.successEventModal();
	            return;
	        }
	        var reader = new FileReader();
	        reader.onload = function () {
	            var mysrc = document.getElementById("output");
	            mysrc.src = reader.result;
	        };
	        reader.readAsDataURL(input.files[0]);
	    };
	    StudentProfileComponent.prototype.showPassword = function () {
	        if (this.passwordStatus) {
	            this.passwordStatusText = "text";
	        }
	        else {
	            this.passwordStatusText = "password";
	        }
	        this.passwordStatus = !this.passwordStatus;
	    };
	    StudentProfileComponent.prototype.editSaveStudentProfile = function () {
	        if (this.statusView) {
	            this.editSaveButtonName = "Зберегти дані";
	        }
	        else {
	            this.updateStudent();
	            this.editSaveButtonName = "Редагувати дані";
	        }
	        this.statusView = !this.statusView;
	    };
	    StudentProfileComponent.prototype.deleteStudent = function () {
	        var _this = this;
	        var delRecord = function (entity, id) {
	            _this._commonService.delRecord(entity, id)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E.";
	                _this.modalInfoConfig.action = "info";
	                var modalRef = _this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	                modalRef.componentInstance.config = _this.modalInfoConfig;
	                modalRef.result.then(function () {
	                    return;
	                }, function () {
	                    _this.goBack();
	                });
	            });
	        };
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 " + this.student.student_surname + " " + this.student.student_name + " " + this.student.student_fname + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            delRecord(_this.entity, _this.student.user_id);
	        }, function () {
	            return;
	        });
	    };
	    __decorate([
	        core_1.ViewChild("newFotoSrc"), 
	        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
	    ], StudentProfileComponent.prototype, "newFotoSrc", void 0);
	    __decorate([
	        core_1.ViewChild("inputFile"), 
	        __metadata('design:type', (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object)
	    ], StudentProfileComponent.prototype, "inputFile", void 0);
	    StudentProfileComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(454),
	            styles: [__webpack_require__(451)],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object, (typeof (_g = typeof ng_bootstrap_1.NgbTooltipConfig !== 'undefined' && ng_bootstrap_1.NgbTooltipConfig) === 'function' && _g) || Object, (typeof (_h = typeof ng_bootstrap_1.NgbTooltipModule !== 'undefined' && ng_bootstrap_1.NgbTooltipModule) === 'function' && _h) || Object])
	    ], StudentProfileComponent);
	    return StudentProfileComponent;
	    var _a, _b, _c, _d, _e, _f, _g, _h;
	}());
	exports.StudentProfileComponent = StudentProfileComponent;


/***/ },
/* 453 */
/***/ function(module, exports) {

	"use strict";
	var Student = (function () {
	    function Student() {
	    }
	    return Student;
	}());
	exports.Student = Student;


/***/ },
/* 454 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\n    <div class=\"student-profile-title\">ПРОФІЛЬ СТУДЕНТА\n        <button type=\"button\" class=\"btn btn-default position-left\"\n                (click)=\"goBack()\">Назад\n        </button>\n    </div>\n    <form #myform=\"ngForm\" novalidate>\n        <div class=\"student-datas row\">\n            <div class=\"input-foto student-foto col-xs-12 col-sm-3 col-md-3\">\n                <img class=\"img-responsive img-rounded profile-foto\" [src]=\"student.photo\" alt=\"Фото студента\"\n                     id=\"output\" #newFotoSrc/>\n                <input type=\"file\" name=\"file\" (change)=\"changeFile($event)\" #inputFile [disabled]=\"statusView\" ngModel>\n            </div>\n            <div>\n                <div class=\"student-data1 col-xs-12 col-sm-4 col-md-4\">\n                    <div><label for=\"surname\">Прізвище:</label>\n                        <div *ngIf=\"!statusView\">\n                            <input id=\"surname\" name=\"surname\" class=\"input-student-data\"\n                                   [(ngModel)]=\"student.student_surname\" required maxlength=\"20\"\n                                   #surname=\"ngModel\" pattern=\"([A-Za-z\\-]*|[ЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ\\-]*)\"\n                                   ngModel ngbTooltip=\"Дозволено літери укр. або анг. алфавітів\"\n                                   #surnameTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                   (change)=\"!surname.valid? surnameTooltip.open() : surnameTooltip.close()\">\n                        </div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_surname}}\n                        </div>\n                    </div>\n                    <div><label for=\"name\">Ім'я:</label>\n                        <div *ngIf=\"!statusView\"><input id=\"name\" name=\"name\" class=\"input-student-data\"\n                                    [(ngModel)]=\"student.student_name\" required maxlength=\"20\"\n                                    #name=\"ngModel\" pattern=\"([A-Za-z\\-]*|[ЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ\\-]*)\"\n                                    ngModel ngbTooltip=\"Дозволено літери укр. або анг. алфавітів\"\n                                    #nameTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                    (change)=\"!name.valid? nameTooltip.open() : nameTooltip.close()\"></div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_name}}\n                        </div>\n                        <!-- <div class=\"alert alert-danger\" *ngIf=\"name.errors?.pattern && (name.dirty || name.touched)\">\n                            Дозволено літери укр. або анг. алфавітів\n                        </div>-->\n                    </div>\n                    <div><label for=\"fname\">По-батькові:</label>\n                        <div *ngIf=\"!statusView\"><input id=\"fname\" name=\"fname\" class=\"input-student-data\"\n                                                        [(ngModel)]=\"student.student_fname\" required maxlength=\"20\"\n                                                        #fname=\"ngModel\" pattern=\"([A-Za-z\\-]*|[ЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ\\-]*)\"\n                                                        ngModel ngbTooltip=\"Дозволено літери укр. або анг. алфавітів\"\n                                                        #fnameTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                                        (change)=\"!fname.valid? fnameTooltip.open() : fnameTooltip.close()\"></div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_fname}}\n                        </div>\n                        <!-- <div class=\"alert alert-danger\" *ngIf=\"name.errors?.pattern && (name.dirty || name.touched)\">\n                            Дозволено літери укр. або анг. алфавітів\n                        </div>-->\n                    </div>\n                    <div><label for=\"faculty\">Факультет:</label>\n                        <div *ngIf=\"!statusView\">\n                            <select *ngIf=\"facultys\" id=\"faculty\" class=\"input-student-data select-group\" name=\"faculty\"\n                                    required [disabled]=\"statusView\" [(ngModel)]=\"student.faculty_id\" #faculty\n                                    (change)=\"getGroupByFaculty(faculty.value)\" ngModel>\n                                <option *ngFor=\"let item of facultys\" class=\"input-student-data\" [value]=\"item.faculty_id\"\n                                        [selected]=\"item.faculty_id === student.faculty_id\">\n                                    {{item.faculty_name}}\n                                </option>\n                            </select></div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.faculty_name}}\n                        </div>\n                    </div>\n                    <div><label for=\"group\">Група:</label>\n                        <div [hidden]=\"statusView\">\n                            <select id=\"group\" class=\"input-student-data select-group\" name=\"group\"\n                                    [(ngModel)]=\"student.group_id\" #group (change)=\"studGroupId(group.value)\" ngModel\n                                    required>\n                                <option *ngFor=\"let item of groups\" class=\"input-student-data\" [value]=\"item.group_id\"\n                                        [selected]=\"item.group_id === student.group_id\">\n                                    {{item.group_name}}\n                                </option>\n                            </select>\n                            <!-- <select id=\"group\" class=\"input-student-data select-group\" name=\"group\"\n                                [(ngModel)]=\"student.group_id\" #group ngModel required\n                                (change)=\"studGroupId(group.value)\"></select> -->\n                        </div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.group_name}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"student-data2 col-xs-12 col-sm-5 col-md-5\">\n                    <div><label for=\"userLogin\">Логін:</label>\n                        <div *ngIf=\"!statusView\"><input id=\"userLogin\" name=\"userLogin\" class=\"input-student-data\"\n                                    [(ngModel)]=\"student.username\" required minlength=\"4\" maxlength=\"20\"\n                                    #userLogin=\"ngModel\" pattern=\"[A-Za-z0-9_-]*\" ngModel\n                                    ngbTooltip=\"Дозволено літери анг. алфавіту і цифри, мін.довжина 4 символи, макс. 20 символів\"\n                                    #userLoginTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                    (change)=\"!userLogin.valid ? userLoginTooltip.open() : userLoginTooltip.close()\"></div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.username}}</div>\n                    </div>\n                    <div><label for=\"userPassword\">Пароль:</label>\n                        <div *ngIf=\"!statusView\"><input id=\"userPassword\" name=\"userPassword\" class=\"input-student-data password-eye-input\"\n                                    [type]=\"passwordStatusText\" [(ngModel)]=\"student.plain_password\" required minlength=\"8\"\n                                    maxlength=\"20\" #userPassword=\"ngModel\" ngModel\n                                    ngbTooltip=\"Довжина пароля повинна бути від 8 до 20 символів\"\n                                    #userPasswordTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                    (change)=\"!userPassword.valid ? userPasswordTooltip.open() : userPasswordTooltip.close()\"><span\n                                class=\"glyphicon glyphicon-eye-open password-eye\" (click)=\"showPassword()\"></span>\n                        </div>\n                        <div *ngIf=\"statusView\" class=\"data-field password-field\" disabled=\"true\"></div>\n                    </div>\n                    <div><label for=\"gradebook_id\">№ залікової книжки:</label>\n                        <div *ngIf=\"!statusView\"><input id=\"gradebook_id\" name=\"gradebook\" class=\"input-student-data\"\n                                    [(ngModel)]=\"student.gradebook_id\" required minlength=\"5\" maxlength=\"20\"\n                                    #gradebook=\"ngModel\" ngModel\n                                    pattern=\"([a-zA-Z0-9_-]*|[ЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ0-9_-]*)\"\n                                    ngbTooltip=\"Довжина поля повинна бути від 8 до 20 символів і укр. або анг.літери\"\n                                    #gradebookTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                    (change)=\"!gradebook.valid ? gradebookTooltip.open() : gradebookTooltip.close()\">\n                        </div>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.gradebook_id}}\n                        </div>\n                    </div>\n                    <div><label for=\"email\" required>Електронна адреса:</label>\n                    <div *ngIf=\"!statusView\"><input id=\"email\" name=\"email\" class=\"input-student-data\"\n                                                    [(ngModel)]=\"student.email\" required\n                                                    maxlength=\"20\" #email=\"ngModel\" ngModel\n                                                    pattern=\"^[a-zA-ZЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ0-9-]+(?:\\.[a-zA-ZЄЇІїіА-ЩЬЮ-Яєа-щью-яҐґ0-9-]+)*$\"\n                                                    ngbTooltip=\"Довжина поля повинна бути від 8 до 20 символів і укр. або анг.літери\"\n                                                    #emailTooltip=\"ngbTooltip\" placement=\"top\" triggers=\"manual\"\n                                                    (change)=\"!email.valid ? emailTooltip.open() : emailTooltip.close()\">\n                    </div>\n\n                    <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                        {{student?.email}}\n                    </div>\n                </div>\n                </div>\n            </div>\n            <!-- <div *ngIf=\"statusView\">\n                <div class=\"student-data1 col-xs-12 col-sm-4 col-md-4\">\n                    <div><label>Прізвище:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_surname}}\n                        </div>\n                    </div>\n                    <div><label>Ім'я:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_name}}\n                        </div>\n                    </div>\n\n                    <div><label>По-батькові:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.student_fname}}\n                        </div>\n                    </div>\n\n                    <div><label>Факультет:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.faculty_name}}\n                        </div>\n                    </div>\n\n                    <div><label>Група:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.group_name}}\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"student-data2 col-xs-12 col-sm-5 col-md-5\">\n\n                    <div><label>Логін:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.username}}</div>\n                    </div>\n\n                    <div><label>Пароль:</label><div *ngIf=\"statusView\" class=\"data-field password-field\" disabled=\"true\"></div>\n                     </div>\n\n                    <div><label>№ залікової книжки:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.gradebook_id}}\n                        </div>\n                    </div>\n\n                    <div><label>Електронна адреса:</label>\n                        <div *ngIf=\"statusView\" class=\"data-field\" disabled=\"true\">\n                            {{student?.email}}\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n\n            <div class=\"button-create-refresh\">\n                <button *ngIf=\"!action\" class=\"btn btn-default\" type=\"submit\" (click)=\"editSaveStudentProfile()\"\n                        role=\"button\">\n                    {{editSaveButtonName}}\n                </button>\n                <button *ngIf=\"!action\" class=\"btn btn-danger\" type=\"submit\" (click)=deleteStudent() role=\"button\">\n                    Видалити студента\n                </button>\n                <button *ngIf=\"action\" class=\"btn btn-default\" type=\"submit\" (click)=\"createNewStudent()\" role=\"button\"\n                        [disabled]=\"!(myform.valid && (group.value>0))\">Зберегти дані\n                </button>\n                <button *ngIf=\"action\" class=\"btn btn-default\" type=\"submit\" (click)=\"newStudent()\" role=\"button\">\n                    Очистити форму\n                </button>\n            </div>\n        </div>\n    </form>\n\n    <div *ngIf=\"!action\" class=\"student-profile-title\">\n        <ngbd-tabset-tests\n                [groupName]=\"student.group_name\"\n                [groupId]=\"student.group_id\">\n        </ngbd-tabset-tests>\n    </div>\n\n</div>\n<div>\n<h3>Form value:</h3>\n    {{myform.value | json}}\n    <h3>Student form.valid:</h3>\n    {{myform.valid | json}}\n\n      <h3>group.value:</h3>\n    {{group.value | json}}\n<!--\n<h3>Student form.valid:</h3>\n    {{myform.valid | json}}\n    <h3>Student JSON:</h3>\n    {{student | json}}\n    <h3>Group debug:</h3>\n    group.value: {{group?.value | json}},{{groupError | json}}, {{group?.value > 0 }}\n    <h3>student.photo:</h3>\n    {{student.photo | json}}-->\n</div>\n\n<template ngbModalContainer></template>";

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var constant_1 = __webpack_require__(76);
	var timetable_1 = __webpack_require__(436);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var TimeTableComponent = (function () {
	    function TimeTableComponent(crudService, route, router, subjectService, location, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.location = location;
	        this.modalService = modalService;
	        // common variables
	        this.entity = "timeTable";
	        this.subjectEntity = "subject";
	        this.pageTitle = "Розклад тестів по предмету: ";
	        this.page = 1;
	        this.limit = 0;
	        this.headers = constant_1.headersTimeTable;
	        this.actions = constant_1.actionsTimeTable;
	        this.successEventModal = constant_1.successEventModal;
	        this.config = { action: "create" };
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.noRecords = false;
	        // varibles for addedit
	        this.configAdd = constant_1.configAddTimeTable;
	        this.configEdit = constant_1.configEditTimeTable;
	        // variables for common component
	        this.entityTitle = "Розклад тестів";
	        this.entityData = [];
	        this.groups = [];
	        this.entityGroup = "group";
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var timetable = {};
	                    timetable.entity_id = item.timetable_id;
	                    timetable.entityColumns =
	                        [numberOfOrder,
	                            item.group_name,
	                            item.start_date,
	                            item.start_time.substr(0, item.start_time.length - 3),
	                            item.end_date,
	                            item.end_time.substr(0, item.end_time.length - 3)
	                        ];
	                    timetable.actions = _this.actions;
	                    tempArr.push(timetable);
	                });
	                _this.entityData = tempArr;
	            }
	        };
	    }
	    TimeTableComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.subject_id = +params["id"];
	        });
	        this.getGroups();
	        this.getSubjectName();
	    };
	    TimeTableComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    TimeTableComponent.prototype.getSubjectName = function () {
	        var _this = this;
	        this.crudService.getRecords(this.subjectEntity)
	            .subscribe(function (data) {
	            var subjectArr = data.filter(function (item) {
	                return item.subject_id == _this.subject_id;
	            });
	            _this.nameOfSubject = subjectArr[0].subject_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TimeTableComponent.prototype.getTimeTableForSubject = function () {
	        var _this = this;
	        this.subjectService.getTimeTableForSubject(this.entity, this.subject_id)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            if (data.length) {
	                _this.noRecords = false;
	                for (var i = 0; i < data.length; i++) {
	                    for (var j = 0; j < _this.groups.length; j++) {
	                        if (data[i].group_id === _this.groups[j].group_id) {
	                            data[i].group_name = _this.groups[j].group_name;
	                        }
	                    }
	                }
	                _this.createTableConfig(data);
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TimeTableComponent.prototype.getGroups = function () {
	        var _this = this;
	        this.crudService.getRecords(this.entityGroup)
	            .subscribe(function (data) {
	            _this.groups = data;
	            _this.getTimeTableForSubject();
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TimeTableComponent.prototype.deleteTimeTable = function (entity, id) {
	        var _this = this;
	        this.crudService
	            .delRecord(this.entity, id)
	            .subscribe(function () {
	            _this.getTimeTableForSubject();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    TimeTableComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    TimeTableComponent.prototype.substituteNameGroupWithId = function (data) {
	        this.groups.forEach(function (item) {
	            if (item.group_name === data.select[0].selected) {
	                data.select[0].selected = item.group_id;
	            }
	        });
	    };
	    TimeTableComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        this.configAdd.select[0].selected = "";
	        this.configAdd.select[0].selectItem = [];
	        this.groups.forEach(function (item) {
	            _this.configAdd.select[0].selectItem.push(item.group_name);
	        });
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            _this.substituteNameGroupWithId(data);
	            var newTimeTable = new timetable_1.TimeTable(data.select[0].selected, data.list[0].value = data.list[0].value.year + "-" + data.list[0].value.month + "-" + data.list[0].value.day, data.list[1].value, data.list[2].value = data.list[2].value.year + "-" + data.list[2].value.month + "-" + data.list[2].value.day, data.list[3].value, _this.subject_id);
	            _this.crudService.insertData(_this.entity, newTimeTable)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.getTimeTableForSubject();
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    TimeTableComponent.prototype.editCase = function (data) {
	        var _this = this;
	        var nDate = new Date(data.entityColumns[2]);
	        var startDate = {
	            "year": nDate.getFullYear(),
	            "month": nDate.getMonth() + 1,
	            "day": nDate.getDate()
	        };
	        nDate = new Date(data.entityColumns[4]);
	        var endDate = {
	            "year": nDate.getFullYear(),
	            "month": nDate.getMonth() + 1,
	            "day": nDate.getDate()
	        };
	        this.configEdit.list[0].value = startDate;
	        this.configEdit.list[1].value = data.entityColumns[3];
	        this.configEdit.list[2].value = endDate;
	        this.configEdit.list[3].value = data.entityColumns[5];
	        this.configEdit.select[0].selected = data.entityColumns[1];
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selectItem = [];
	        this.groups.forEach(function (item) {
	            _this.configEdit.select[0].selectItem.push(item.group_name);
	        });
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            _this.substituteNameGroupWithId(data);
	            var editedTimeTable = new timetable_1.TimeTable(data.select[0].selected, data.list[0].value = data.list[0].value.year + "-" + data.list[0].value.month + "-" + data.list[0].value.day, data.list[1].value, data.list[2].value = data.list[2].value.year + "-" + data.list[2].value.month + "-" + data.list[2].value.day, data.list[3].value);
	            _this.crudService.updateData(_this.entity, data.id, editedTimeTable)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.getTimeTableForSubject();
	            });
	        }, function () {
	            return;
	        });
	    };
	    TimeTableComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 " + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteTimeTable(_this.entity, data.entity_id);
	            _this.getTimeTableForSubject();
	        }, function () {
	            return;
	        });
	    };
	    TimeTableComponent = __decorate([
	        core_1.Component({
	            selector: "timetable-container",
	            template: __webpack_require__(456)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object])
	    ], TimeTableComponent);
	    return TimeTableComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.TimeTableComponent = TimeTableComponent;


/***/ },
/* 456 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <test-bar\r\n            [entityName]=\"nameOfSubject\"\r\n            [pageTitle]=\"pageTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            (activate)=\"activate($event)\"\r\n    ></test-bar>\r\n    <dt-table *ngIf=\"!noRecords\"\r\n              [limit]=\"limit\"\r\n              [page]=\"page\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        Для вибраного предмету розклад не сформований\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var constant_1 = __webpack_require__(76);
	var test_detail_1 = __webpack_require__(425);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var TestDetailComponent = (function () {
	    function TestDetailComponent(crudService, route, router, subjectService, location, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.location = location;
	        this.modalService = modalService;
	        // common variables
	        this.entity = "testDetail";
	        this.entityTestName = "test";
	        this.pageTitle = "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435 \u043F\u0440\u043E \u0442\u0435\u0441\u0442: ";
	        this.page = 1;
	        this.limit = 0;
	        this.headers = constant_1.headersTestDetail;
	        this.actions = constant_1.actionsTestDetail;
	        this.successEventModal = constant_1.successEventModal;
	        this.config = { action: "create" };
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.noRecords = false;
	        // varibles for addedit
	        this.configAdd = constant_1.configAddTestDetail;
	        this.configEdit = constant_1.configEditTestDetail;
	        // variables for common component
	        this.entityTitle = "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435 \u043F\u0440\u043E \u0442\u0435\u0441\u0442";
	        this.entityData = [];
	        this.tasksTestDetail = 0;
	        this.countTask = 0;
	        this.testDetails = [];
	        this.entityTest = [];
	        this.level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                _this.noRecords = false;
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var testDetail = {};
	                    testDetail.entity_id = item.id;
	                    testDetail.entityColumns = [
	                        numberOfOrder,
	                        item.level,
	                        item.tasks,
	                        item.rate
	                    ];
	                    testDetail.actions = _this.actions;
	                    tempArr.push(testDetail);
	                });
	                _this.entityData = tempArr;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.subject_id = data["token"];
	        });
	    }
	    TestDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.test_id = +params["id"];
	        });
	        this.getTasks();
	        this.getTestDetailsByTest();
	        this.getTestBySubjectId();
	    };
	    TestDetailComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    TestDetailComponent.prototype.getTasks = function () {
	        var _this = this;
	        this.subject_id = +this.subject_id;
	        this.subjectService.getTestsBySubjectId(this.entityTestName, this.subject_id)
	            .subscribe(function (data) {
	            if (data.length) {
	                data.forEach(function (item) {
	                    if (+item.test_id === _this.test_id) {
	                        _this.tasksTest = item.tasks;
	                    }
	                });
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TestDetailComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    TestDetailComponent.prototype.getTestBySubjectId = function () {
	        var _this = this;
	        this.subjectService.getTestsBySubjectId(this.entityTestName, this.subject_id)
	            .subscribe(function (data) {
	            var testArr = data.filter(function (item) {
	                return item.test_id == _this.test_id;
	            });
	            _this.nameOfTest = testArr[0].test_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TestDetailComponent.prototype.getTestDetailsByTest = function () {
	        var _this = this;
	        this.subjectService.getTestDetailsByTest(this.test_id)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            _this.createTableConfig(data);
	        }, function (error) { return console.log("error: ", error); });
	    };
	    TestDetailComponent.prototype.deleteTestDetail = function (entity, id) {
	        var _this = this;
	        this.crudService
	            .delRecord(this.entity, id)
	            .subscribe(function () {
	            _this.getTestDetailsByTest();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    TestDetailComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    TestDetailComponent.prototype.getSumOfTasks = function () {
	        var _this = this;
	        this.subjectService.getTestDetailsByTest(this.test_id)
	            .subscribe(function (res) {
	            if (res.length) {
	                _this.testDetails = res;
	                _this.testDetails.forEach(function (item) {
	                    _this.tasksTestDetail += (+item.tasks);
	                });
	            }
	        }, function (error) { return _this.errorMessage = error; });
	        return this.tasksTestDetail;
	    };
	    TestDetailComponent.prototype.getRestLevels = function (restLevels) {
	        var addedLevels = [];
	        if (this.entityData.length) {
	            this.entityData.forEach(function (item) {
	                addedLevels.push(+item.entityColumns[1]);
	            });
	        }
	        restLevels = this.level.filter(function (item) {
	            return !addedLevels.some(function (num) {
	                return num == item;
	            });
	        });
	        return restLevels;
	    };
	    TestDetailComponent.prototype.createCase = function () {
	        var _this = this;
	        var restLevels = [];
	        this.configAdd.list.forEach(function (item) {
	            item.value = "";
	        });
	        this.configAdd.select[0].selected = "";
	        restLevels = this.getRestLevels(restLevels);
	        this.configAdd.select[0].selectItem = restLevels;
	        this.tasksTestDetail = 0;
	        this.getSumOfTasks();
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            if (+_this.tasksTest >= +(_this.tasksTestDetail + +data.list[0].value)) {
	                var newTestDetail = new test_detail_1.TestDetail(data.select[0].selected, data.list[0].value, data.list[1].value, _this.test_id);
	                _this.crudService.insertData(_this.entity, newTestDetail)
	                    .subscribe(function () {
	                    _this.modalInfoConfig.infoString = "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0442\u0435\u0441\u0442\u0443 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                    _this.successEventModal();
	                    _this.getTestDetailsByTest();
	                });
	            }
	            else {
	                _this.modalInfoConfig.infoString = "\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u0432\u0434\u0430\u043D\u044C";
	                _this.successEventModal();
	            }
	        }, function () {
	            return;
	        });
	    };
	    ;
	    TestDetailComponent.prototype.editCase = function (data) {
	        var _this = this;
	        var restLevels = [];
	        this.configEdit.list[0].value = data.entityColumns[2];
	        this.configEdit.list[1].value = data.entityColumns[3];
	        this.configEdit.select[0].selected = data.entityColumns[1];
	        restLevels = this.getRestLevels(restLevels);
	        restLevels.push(+this.configEdit.select[0].selected);
	        this.configEdit.select[0].selectItem = restLevels;
	        this.tasksTestDetail = 0;
	        this.getSumOfTasks();
	        this.configEdit.id = data.entity_id;
	        this.tasksTestDetail -= data.entityColumns[2];
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            if (+_this.tasksTest >= +(_this.tasksTestDetail + +data.list[0].value)) {
	                var editedTestDetail = new test_detail_1.TestDetail(data.select[0].selected, data.list[0].value, data.list[1].value);
	                _this.crudService.updateData(_this.entity, data.id, editedTestDetail)
	                    .subscribe(function () {
	                    _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                    _this.successEventModal();
	                    _this.getTestDetailsByTest();
	                });
	            }
	            else {
	                _this.modalInfoConfig.infoString = "\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u0432\u0434\u0430\u043D\u044C";
	                _this.successEventModal();
	            }
	        }, function () {
	            return;
	        });
	    };
	    TestDetailComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0443 \u0442\u0435\u0441\u0442\u0443";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteTestDetail(_this.entity, data.entity_id);
	            _this.getTestDetailsByTest();
	        }, function () {
	            return;
	        });
	    };
	    TestDetailComponent = __decorate([
	        core_1.Component({
	            selector: "test-detail-container",
	            template: __webpack_require__(458)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object])
	    ], TestDetailComponent);
	    return TestDetailComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.TestDetailComponent = TestDetailComponent;


/***/ },
/* 458 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <test-bar\r\n            [entityName]=\"nameOfTest\"\r\n            [pageTitle]=\"pageTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            (activate)=\"activate($event)\"\r\n    ></test-bar>\r\n    <dt-table *ngIf=\"!noRecords\"\r\n              [limit]=\"limit\"\r\n              [page]=\"page\"\r\n              [headers]=\"headers\"\r\n              [actions]=\"actions\"\r\n              [tableData]=\"entityData\"\r\n              (activate)=\"activate($event)\">\r\n    </dt-table>\r\n    <div *ngIf=\"!noRecords\">\r\n        Загальна кількість завдань в тесті: {{tasksTest}} <br>\r\n    </div>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        Для вибраного тесту немає детальнішого опису\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var constant_1 = __webpack_require__(76);
	var question_1 = __webpack_require__(460);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var QuestionComponent = (function () {
	    function QuestionComponent(crudService, route, router, subjectService, location, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.location = location;
	        this.modalService = modalService;
	        // common variables
	        this.entity = "question";
	        this.entityTitle = "Завдання для тесту: ";
	        this.noRecords = false;
	        this.headers = constant_1.headersQuestion;
	        this.actions = constant_1.actionsQuestion;
	        this.successEventModal = constant_1.successEventModal;
	        this.config = { action: "create" };
	        this.isSelect = true;
	        // variable for pagination
	        this.page = 1;
	        this.limit = 5;
	        this.offset = 0;
	        this.maxSize = 5;
	        this.selectLimit = "Виберіть кількість завдань на сторінці";
	        // varibles for addedit
	        this.configAdd = constant_1.configAddQuestion;
	        this.configEdit = constant_1.configEditQuestion;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	        this.selectTypes = ["Простий вибір", "Мультивибір"];
	        this.selectType = {
	            "0": "Простий вибір",
	            "1": "Мультивибір"
	        };
	        // variables for common component
	        this.entityData = [];
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            var numberOfOrder;
	            if (data.length) {
	                _this.noRecords = false;
	                data.forEach(function (item, i) {
	                    numberOfOrder = i + 1 + (_this.page - 1) * _this.limit;
	                    var question = {};
	                    question.entity_id = item.question_id;
	                    question.entityColumns = [
	                        numberOfOrder,
	                        item.question_text,
	                        item.level,
	                        _this.selectType[+item.type - 1],
	                        item.attachment
	                    ];
	                    tempArr.push(question);
	                });
	                _this.entityData = tempArr;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.subject_id = +data["subject_id"];
	        });
	    }
	    QuestionComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.test_id = +params["id"];
	        });
	        this.getCountRecordsByTest();
	        this.getTestBySubjectId();
	    };
	    QuestionComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    QuestionComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    QuestionComponent.prototype.getTestBySubjectId = function () {
	        var _this = this;
	        this.subjectService.getTestsBySubjectId(this.entityTestName, this.subject_id)
	            .subscribe(function (data) {
	            var testArr = data.filter(function (item) {
	                return item.test_id == _this.test_id;
	            });
	            _this.nameOfTest = testArr[0].test_name;
	        }, function (error) { return console.log("error: ", error); });
	    };
	    QuestionComponent.prototype.deleteQuestion = function (entity, id) {
	        var _this = this;
	        this.offset = (this.page - 1) * this.limit;
	        this.crudService
	            .delRecord(entity, id)
	            .subscribe(function () {
	            _this.refreshData("delete");
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    QuestionComponent.prototype.getCountRecordsByTest = function () {
	        var _this = this;
	        this.subjectService.countRecordsByTest(this.test_id)
	            .subscribe(function (res) {
	            _this.entityDataLength = +res.numberOfRecords;
	            _this.getRecordsRangeByTest();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    QuestionComponent.prototype.getRecordsRangeByTest = function () {
	        var _this = this;
	        this.subjectService.getRecordsRangeByTest(this.test_id, this.limit, this.offset)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            _this.createTableConfig(data);
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    QuestionComponent.prototype.changeLimit = function (limit) {
	        this.limit = limit;
	        this.offset = 0;
	        this.page = 1;
	        this.getRecordsRangeByTest();
	    };
	    QuestionComponent.prototype.pageChange = function (num) {
	        if (!num) {
	            this.page = 1;
	            return;
	        }
	        this.page = num;
	        this.offset = (this.page - 1) * this.limit;
	        this.getRecordsRangeByTest();
	    };
	    QuestionComponent.prototype.refreshData = function (action) {
	        if (action === "delete" && this.entityData.length === 1 && this.entityDataLength > 1) {
	            this.offset = (this.page - 2) * this.limit;
	            this.page -= 1;
	        }
	        else if (this.entityData.length > 1) {
	            this.offset = (this.page - 1) * this.limit;
	        }
	        this.getCountRecordsByTest();
	    };
	    QuestionComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "answer":
	                this.router.navigate(["/admin/subject/test/question", data.entity_id, "answer"], {
	                    queryParams: {
	                        test_id: this.test_id
	                    }
	                });
	                break;
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    QuestionComponent.prototype.createCase = function () {
	        var _this = this;
	        this.configAdd.list[0].value = "";
	        this.configAdd.img.value = "";
	        this.configAdd.select[0].selected = "";
	        this.configAdd.select[1].selected = "";
	        this.configAdd.select[0].selectItem = this.levels;
	        this.configAdd.select[1].selectItem = this.selectTypes;
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            var newQuestion = new question_1.Question(data.list[0].value, data.select[0].selected, data.select[1].selectItem.indexOf(data.select[1].selected), data.img.value, _this.test_id);
	            _this.crudService.insertData(_this.entity, newQuestion)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = data.list[0].value + " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    ;
	    QuestionComponent.prototype.editCase = function (data) {
	        var _this = this;
	        this.configEdit.list[0].value = data.entityColumns[1];
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selected = data.entityColumns[2];
	        this.configEdit.select[1].selected = data.entityColumns[3];
	        this.configEdit.select[0].selectItem = this.levels;
	        this.configEdit.select[1].selectItem = this.selectTypes;
	        this.configEdit.img.value = data.entityColumns[4];
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            var editedQuestion = new question_1.Question(data.list[0].value, data.select[0].selected, data.select[1].selectItem.indexOf(data.select[1].selected) + 1, data.img.value, _this.test_id);
	            _this.crudService.updateData(_this.entity, data.id, editedQuestion)
	                .subscribe(function () {
	                _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                _this.successEventModal();
	                _this.refreshData(data.action);
	            });
	        }, function () {
	            return;
	        });
	    };
	    QuestionComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 " + data.entityColumns[0] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteQuestion(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    QuestionComponent = __decorate([
	        core_1.Component({
	            selector: "question-container",
	            template: __webpack_require__(461)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object])
	    ], QuestionComponent);
	    return QuestionComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.QuestionComponent = QuestionComponent;


/***/ },
/* 460 */
/***/ function(module, exports) {

	"use strict";
	var Question = (function () {
	    function Question(question_text, level, type, attachment, test_id) {
	        this.question_text = question_text;
	        this.level = level;
	        this.type = type;
	        this.attachment = attachment;
	        this.test_id = test_id;
	    }
	    return Question;
	}());
	exports.Question = Question;


/***/ },
/* 461 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <test-bar\r\n            [pageTitle]=\"entityTitle\"\r\n            [entityName]=\"nameOfTest\"\r\n            [isSelect]=\"isSelect\"\r\n            [noRecords]=\"noRecords\"\r\n            [selectLimit]=\"selectLimit\"\r\n            (activate)=\"activate($event)\"\r\n            (selectRun)=\"changeLimit($event)\">\r\n    </test-bar>\r\n    <div *ngIf=\"!noRecords\">\r\n        <dt-table *ngIf=\"!noRecords\"\r\n                  [headers]=\"headers\"\r\n                  [actions]=\"actions\"\r\n                  [tableData]=\"entityData\"\r\n                  (activate)=\"activate($event)\">\r\n        </dt-table>\r\n    </div>\r\n    <ngb-pagination\r\n            *ngIf=\"!noRecords\"\r\n            [hidden]=\"limit>=entityDataLength\"\r\n            [pageSize]=\"limit\"\r\n            [collectionSize]=\"entityDataLength\"\r\n            [(page)]=\"page\"\r\n            [rotate]=\"true\"\r\n            (pageChange)=\"pageChange($event)\"\r\n            [maxSize]=\"maxSize\"\r\n            [ellipses]=\"true\"\r\n            [boundaryLinks]=\"true\">\r\n    </ngb-pagination>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\">\r\n        Для вибраного тесту завдань немає\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var constant_1 = __webpack_require__(76);
	var answer_1 = __webpack_require__(463);
	var modal_add_edit_component_1 = __webpack_require__(131);
	var info_modal_component_1 = __webpack_require__(73);
	var ng_bootstrap_1 = __webpack_require__(29);
	var AnswerComponent = (function () {
	    function AnswerComponent(crudService, route, router, subjectService, location, modalService) {
	        var _this = this;
	        this.crudService = crudService;
	        this.route = route;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.location = location;
	        this.modalService = modalService;
	        // common variables
	        this.entity = "answer";
	        this.entityTitle = "Відповіді до завдання: ";
	        this.noRecords = false;
	        this.page = 1;
	        this.limit = 20;
	        this.offset = 0;
	        this.questionEntity = "question";
	        this.questionArr = [];
	        this.headers = constant_1.headersAnswer;
	        this.actions = constant_1.actionsAnswer;
	        this.successEventModal = constant_1.successEventModal;
	        this.config = { action: "create" };
	        // varibles for addedit
	        this.configAdd = constant_1.configAddAnswer;
	        this.configEdit = constant_1.configEditAnswer;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        // variables for table
	        this.entityData = [];
	        this.answer = {
	            "0": "Не правильно",
	            "1": "Правильно"
	        };
	        this.selectAnswer = ["Не правильно", "Правильно"];
	        this.createTableConfig = function (data) {
	            var tempArr = [];
	            if (data.length) {
	                _this.noRecords = false;
	                data.forEach(function (item) {
	                    var answer = {};
	                    answer.entity_id = item.answer_id;
	                    answer.entityColumns = [
	                        item.answer_text,
	                        item.attachment,
	                        _this.answer[item.true_answer]
	                    ];
	                    tempArr.push(answer);
	                });
	                _this.entityData = tempArr;
	            }
	        };
	        this.subscription = route.queryParams.subscribe(function (data) {
	            _this.test_id = data["test_id"];
	        });
	    }
	    AnswerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            _this.question_id = +params["id"];
	        });
	        this.getAnswerByQuestion();
	        this.getQuestionRangeByTest();
	    };
	    AnswerComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	    };
	    AnswerComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    AnswerComponent.prototype.getQuestionRangeByTest = function () {
	        var _this = this;
	        this.subjectService.getRecordsRangeByTest(this.test_id, this.limit, this.offset)
	            .subscribe(function (data) {
	            _this.questionArr = data.filter(function (item) {
	                return item.question_id == _this.question_id;
	            });
	            _this.nameOfQuestion = _this.questionArr[0].question_text;
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    AnswerComponent.prototype.deleteAnswer = function (entity, id) {
	        var _this = this;
	        this.crudService
	            .delRecord(entity, id)
	            .subscribe(function () {
	            _this.getAnswerByQuestion();
	        }, function (error) { return _this.errorMessage = error; });
	    };
	    AnswerComponent.prototype.getAnswerByQuestion = function () {
	        var _this = this;
	        this.subjectService.getAnswerByQuestion(this.question_id)
	            .subscribe(function (data) {
	            if (data.response === "no records") {
	                _this.noRecords = true;
	            }
	            if (data.length) {
	                _this.createTableConfig(data);
	                _this.noRecords = false;
	            }
	        }, function (error) { return console.log("error: ", error); });
	    };
	    AnswerComponent.prototype.activate = function (data) {
	        switch (data.action) {
	            case "edit":
	                this.editCase(data);
	                break;
	            case "delete":
	                this.deleteCase(data);
	                break;
	            case "create":
	                this.createCase();
	                break;
	        }
	    };
	    AnswerComponent.prototype.createCase = function () {
	        var _this = this;
	        var isTrue = this.entityData.some(function (item) {
	            return _this.selectAnswer.indexOf(item.entityColumns[2]) === 1;
	        });
	        this.configAdd.list[0].value = "";
	        this.configAdd.select[0].selected = "";
	        this.configAdd.img.value = "";
	        this.configAdd.select[0].selectItem = this.selectAnswer;
	        var modalRefAdd = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefAdd.componentInstance.config = this.configAdd;
	        modalRefAdd.result
	            .then(function (data) {
	            if (_this.questionArr[0].type == "0"
	                && !isTrue
	                || _this.questionArr[0].type == "1"
	                || data.select[0].selectItem.indexOf(data.select[0].selected) == 0) {
	                var newAnswer = new answer_1.Answer(data.img.value, data.list[0].value, data.select[0].selectItem.indexOf(data.select[0].selected), _this.question_id);
	                _this.crudService.insertData(_this.entity, newAnswer)
	                    .subscribe(function () {
	                    _this.modalInfoConfig.infoString = "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E";
	                    _this.successEventModal();
	                    _this.getAnswerByQuestion();
	                });
	            }
	            else {
	                _this.modalInfoConfig.infoString = "\u0414\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u043E \u0432\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u043E\u0434\u043D\u0443 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C";
	                _this.successEventModal();
	            }
	        }, function () {
	            return;
	        });
	    };
	    ;
	    AnswerComponent.prototype.editCase = function (data) {
	        var _this = this;
	        var isTrue = this.entityData.some(function (item) {
	            return _this.selectAnswer.indexOf(item.entityColumns[2]) === 1;
	        });
	        this.configEdit.list[0].value = data.entityColumns[0];
	        this.configEdit.select[0].selected = data.entityColumns[2];
	        this.configEdit.img.value = data.entityColumns[1];
	        this.configEdit.id = data.entity_id;
	        this.configEdit.select[0].selectItem = this.selectAnswer;
	        var modalRefEdit = this.modalService.open(modal_add_edit_component_1.ModalAddEditComponent);
	        modalRefEdit.componentInstance.config = this.configEdit;
	        modalRefEdit.result
	            .then(function (data) {
	            if (_this.questionArr[0].type == "0"
	                && !isTrue
	                || _this.questionArr[0].type == "1"
	                || data.select[0].selectItem.indexOf(data.select[0].selected) == 0) {
	                var editedAnswer = new answer_1.Answer(data.img.value, data.list[0].value, data.select[0].selectItem.indexOf(data.select[0].selected), _this.question_id);
	                _this.crudService.updateData(_this.entity, data.id, editedAnswer)
	                    .subscribe(function () {
	                    _this.modalInfoConfig.infoString = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E";
	                    _this.successEventModal();
	                    _this.getAnswerByQuestion();
	                });
	            }
	            else {
	                _this.modalInfoConfig.infoString = "\u0414\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u043E \u0432\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u043E\u0434\u043D\u0443 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C";
	                _this.successEventModal();
	            }
	        }, function () {
	            return;
	        });
	    };
	    AnswerComponent.prototype.deleteCase = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Видалення";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this.deleteAnswer(_this.entity, data.entity_id);
	        }, function () {
	            return;
	        });
	    };
	    AnswerComponent = __decorate([
	        core_1.Component({
	            selector: "answer-container",
	            template: __webpack_require__(464)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object, (typeof (_f = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _f) || Object])
	    ], AnswerComponent);
	    return AnswerComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.AnswerComponent = AnswerComponent;


/***/ },
/* 463 */
/***/ function(module, exports) {

	"use strict";
	var Answer = (function () {
	    function Answer(attachment, answer_text, true_answer, question_id) {
	        this.question_id = question_id;
	        this.true_answer = true_answer;
	        this.answer_text = answer_text;
	        this.attachment = attachment;
	    }
	    return Answer;
	}());
	exports.Answer = Answer;


/***/ },
/* 464 */
/***/ function(module, exports) {

	module.exports = "<div class=\"entity-container\">\r\n    <test-bar\r\n            [entityName]=\"nameOfQuestion\"\r\n            [pageTitle]=\"entityTitle\"\r\n            [addTitle]=\"addTitle\"\r\n            (activate)=\"activate($event)\">\r\n\r\n    </test-bar>\r\n    <div *ngIf=\"!noRecords\">\r\n        <dt-table *ngIf=\"!noRecords\"\r\n                  [headers]=\"headers\"\r\n                  [actions]=\"actions\"\r\n                  [tableData]=\"entityData\"\r\n                  (activate)=\"activate($event)\">\r\n        </dt-table>\r\n    </div>\r\n    <div *ngIf=\"noRecords\" class=\"text-center\" role=\"alert\">\r\n        Для вибраного завдання відповіді немає\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var user_profile_component_1 = __webpack_require__(466);
	var test_player_component_1 = __webpack_require__(469);
	var test_player_guard_1 = __webpack_require__(473);
	exports.studentRoutes = [
	    { path: "", redirectTo: "profile" },
	    { path: "profile", component: user_profile_component_1.UserProfileComponent },
	    { path: "test-player", component: test_player_component_1.TestPlayerComponent, canDeactivate: [test_player_guard_1.TestPlayerGuard] }
	];


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var login_service_1 = __webpack_require__(72);
	var UserProfileComponent = (function () {
	    function UserProfileComponent(_loginService, _router, _commonService) {
	        this._loginService = _loginService;
	        this._router = _router;
	        this._commonService = _commonService;
	        this.user = {
	            student_surname: "loading...",
	            student_name: "loading...",
	            group_id: ""
	        };
	        this.userGroup = {
	            speciality_id: "",
	            faculty_id: ""
	        };
	        this.userFaculty = {};
	        this.userSpeciality = {};
	    }
	    UserProfileComponent.prototype.success = function (response) {
	        if (response.response === "non logged") {
	            this._router.navigate(["/login"]);
	        }
	    };
	    UserProfileComponent.prototype.ngOnInit = function () {
	        var userId = +sessionStorage.getItem("userId");
	        this.getStudentProfile(userId);
	    };
	    UserProfileComponent.prototype.logout = function () {
	        this._loginService.logout();
	    };
	    UserProfileComponent.prototype.getStudentProfile = function (userId) {
	        var _this = this;
	        this._commonService.getRecordById("Student", userId)
	            .subscribe(function (data) {
	            _this.user = data[0];
	            _this._commonService.getRecordById("Group", _this.user.group_id)
	                .subscribe(function (dataGroup) {
	                _this.userGroup = dataGroup[0];
	                _this._commonService.getRecordById("Faculty", _this.userGroup.faculty_id)
	                    .subscribe(function (dataFaculty) { return _this.userFaculty = dataFaculty[0]; });
	                _this._commonService.getRecordById("Speciality", _this.userGroup.speciality_id)
	                    .subscribe(function (dataSpeciality) { return _this.userSpeciality = dataSpeciality[0]; });
	            });
	        });
	    };
	    UserProfileComponent = __decorate([
	        core_1.Component({
	            selector: 'user-profile-component',
	            template: __webpack_require__(467),
	            styles: [__webpack_require__(104)],
	            providers: [login_service_1.LoginService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof login_service_1.LoginService !== 'undefined' && login_service_1.LoginService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _c) || Object])
	    ], UserProfileComponent);
	    return UserProfileComponent;
	    var _a, _b, _c;
	}());
	exports.UserProfileComponent = UserProfileComponent;


/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12 col-md-8 info\">\r\n            <ngbd-tabset-tests\r\n            [groupName] = \"userGroup.group_name\"\r\n\t\t\t[groupId] = \"userGroup.group_id\">\r\n            </ngbd-tabset-tests>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-4 info text-center\">\r\n\r\n            <h3>Профайл студента</h3>\r\n            <img *ngIf=\"user.photo\" [src]=\"user.photo\" class=\"img-responsive img-circle center-block\" alt=\"Ваше фото\">\r\n            <img *ngIf=\"!user.photo\" src=\"" + __webpack_require__(468) + "\" class=\"img-responsive img-circle center-block\" alt=\"Ваше фото не завантажене\">\r\n\r\n            <h4> {{user.student_surname+\" \"+user.student_name}} </h4>\r\n            <p class=\"text-left\"><b>Факультет:</b> {{userFaculty.faculty_name}}</p>\r\n            <p class=\"text-left\"><b>Спеціальність:</b> {{userSpeciality.speciality_name}}</p>\r\n            <p class=\"text-left\"><b>Група:</b>\r\n                {{userGroup.group_name}}\r\n\r\n            </p>\r\n            <p class=\"text-left\"><b>№ залікової книжки:</b> {{user.gradebook_id}}</p>\r\n\r\n            <button class=\"btn btn-default btn-lg\" role=\"button\" (click)=\"logout()\">\r\n\t\t\t\t\t<span aria-hidden=\"true\" class=\"glyphicon glyphicon-log-out\">\r\n\t\t\t\t\t\tВихід\r\n\t\t\t\t\t</span>\r\n            </button>\r\n\r\n            <br><br>\r\n        </div>\r\n\r\n    </div>\r\n</div>";

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/profile.2e72398604d85b12ede3348de8441eb7.png";

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var test_player_service_1 = __webpack_require__(470);
	var common_service_1 = __webpack_require__(96);
	var rxjs_1 = __webpack_require__(139);
	var constant_1 = __webpack_require__(76);
	var TestPlayerComponent = (function () {
	    function TestPlayerComponent(testPlayerService, route, commonService) {
	        var _this = this;
	        this.testPlayerService = testPlayerService;
	        this.route = route;
	        this.commonService = commonService;
	        this.activeQuestion = 0;
	        this.questions = [];
	        this.tasksCount = 0;
	        this.unAnsweredQuestionCount = 0;
	        this.unAnsweredQuestionPercent = 100;
	        this.leftTimePercent = 100;
	        this.timer = {};
	        this.show = false;
	        this.disableSkip = false;
	        this.maxUserRate = 0;
	        this.informedUserAboutAllQuestionAnswered = false;
	        this.finishedTest = true;
	        this.modalParams = constant_1.modalInfoParams;
	        this.finishCheckTimer = function (data, continueTest) {
	            if (!data.restOfTime) {
	                _this.testPlayerService.failTestByTimer(_this.questions, data.startTime, data.endTime);
	            }
	            else if (continueTest) {
	                _this.restOfTime = data.restOfTime;
	                _this.timer = _this.testPlayerService.createTimeForView(_this.restOfTime);
	                _this.timerId = setInterval(function () {
	                    _this.startTimer();
	                }, 1000);
	                _this.finishedTest = false;
	                _this.show = true;
	            }
	            else {
	                _this.testPlayerService.checkSAnswers(_this.questions, data.startTime, data.endTime);
	            }
	        };
	    }
	    TestPlayerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.queryParams.forEach(function (data) {
	            _this.testId = +data["testId"];
	        });
	        this.studentId = +sessionStorage.getItem("userId");
	        if (localStorage.getItem("dTester")) {
	            this.continueTest();
	        }
	        else {
	            this.testPlayerService.setBaseTestData(this.testId, this.studentId, this.maxUserRate);
	            this.getNewTest();
	        }
	    };
	    ;
	    TestPlayerComponent.prototype.canDeactivate = function () {
	        var _this = this;
	        return rxjs_1.Observable.create(function (observer) {
	            if (!_this.finishedTest) {
	                (_a = _this.commonService).openModalInfo.apply(_a, _this.modalParams.canDeactivateMessage)
	                    .then(function () {
	                    observer.next(true);
	                }, function () {
	                    observer.next(false);
	                });
	            }
	            else {
	                observer.next(true);
	            }
	            var _a;
	        });
	    };
	    TestPlayerComponent.prototype.startTimer = function () {
	        this.restOfTime--;
	        if (this.restOfTime === 0) {
	            this.finishedTest = true;
	            this.leftTimePercent = 0;
	            this.timer = this.testPlayerService.createTimeForView(this.restOfTime);
	            clearInterval(this.timerId);
	            this.checkTimer(false);
	            return;
	        }
	        else {
	            this.leftTimePercent = Math.round(this.restOfTime / this.timeForTest * 100);
	        }
	        this.timer = this.testPlayerService.createTimeForView(this.restOfTime);
	    };
	    TestPlayerComponent.prototype.skipQuestion = function () {
	        var activeQuestion = this.testPlayerService.findUnAsweredQuestion(this.activeQuestion, this.navButtons);
	        this.changeActiveQuestion(activeQuestion);
	    };
	    TestPlayerComponent.prototype.answerQuestion = function () {
	        this.createQuestionsProgressbarData();
	        this.questions[this.activeQuestion].answered = true;
	        var allAnswered = this.allAnswered();
	        if (!allAnswered) {
	            var activeQuestion = this.testPlayerService.findUnAsweredQuestion(this.activeQuestion, this.navButtons);
	            this.changeActiveQuestion(activeQuestion);
	        }
	        else if (!this.informedUserAboutAllQuestionAnswered) {
	            this.disableSkip = true;
	            this.informedUserAboutAllQuestionAnswered = true;
	            this.testPlayerService.createBackup(this.questions);
	            (_a = this.commonService).openModalInfo.apply(_a, this.modalParams.youAsweredAllQuestion);
	        }
	        else {
	            var activeQuestion = this.testPlayerService.findUnAsweredQuestion(this.activeQuestion, this.navButtons);
	            this.changeActiveQuestion(activeQuestion);
	        }
	        var _a;
	    };
	    TestPlayerComponent.prototype.allAnswered = function () {
	        return this.navButtons.every(function (question) {
	            return question.answered;
	        });
	    };
	    TestPlayerComponent.prototype.createQuestionsProgressbarData = function () {
	        if (!this.navButtons[this.activeQuestion].answered) {
	            this.navButtons[this.activeQuestion].answered = true;
	            this.unAnsweredQuestionCount--;
	            this.unAnsweredQuestionPercent = Math.round(this.unAnsweredQuestionCount / this.tasksCount * 100);
	        }
	    };
	    TestPlayerComponent.prototype.changeActiveQuestion = function (num) {
	        if (num === this.activeQuestion)
	            return;
	        this.questions[this.activeQuestion].active = false;
	        this.activeQuestion = this.testPlayerService.changeNavButtons(num, this.navButtons, this.activeQuestion);
	        this.questions[this.activeQuestion].active = true;
	        this.testPlayerService.createBackup(this.questions);
	    };
	    TestPlayerComponent.prototype.toggleAnswer = function (answerId, numberOfQuestion) {
	        var question = this.questions[numberOfQuestion];
	        var chosenAnswer = this.questions[numberOfQuestion].chosenAnswer[answerId];
	        if (question.type === "checkbox") {
	            question.chosenAnswer[answerId] = !chosenAnswer;
	        }
	        else if (!chosenAnswer) {
	            for (var key in question.chosenAnswer) {
	                question.chosenAnswer[key] = false;
	            }
	            question.chosenAnswer[answerId] = true;
	        }
	    };
	    TestPlayerComponent.prototype.finishTest = function () {
	        var _this = this;
	        (_a = this.commonService).openModalInfo.apply(_a, this.modalParams.doYouWantFinishTest)
	            .then(function () {
	            _this.finishedTest = true;
	            _this.checkTimer(false);
	        }, null);
	        var _a;
	    };
	    TestPlayerComponent.prototype.checkTimer = function (continueTest) {
	        var _this = this;
	        this.testPlayerService.checkTimer()
	            .subscribe(function (data) {
	            _this.finishCheckTimer(data, continueTest);
	        });
	    };
	    TestPlayerComponent.prototype.getNewTest = function () {
	        var _this = this;
	        this.testPlayerService.getNewTest()
	            .subscribe(function (testData) {
	            _this.questions = testData.questions;
	            _this.navButtons = testData.navButtons;
	            _this.timeForTest = _this.restOfTime = testData.timeForTest;
	            _this.tasksCount = _this.unAnsweredQuestionCount = testData.tasksCount;
	            _this.maxUserRate = testData.maxUserRate;
	            _this.timer = testData.timer;
	            _this.show = true;
	            _this.timerId = setInterval(function () {
	                _this.startTimer();
	            }, 1000);
	            _this.finishedTest = false;
	            _this.testPlayerService.createBackup(_this.questions);
	        });
	    };
	    TestPlayerComponent.prototype.continueTest = function () {
	        var _this = this;
	        this.testPlayerService.recoverTestData()
	            .subscribe(function (testData) {
	            _this.questions = testData.questions;
	            _this.navButtons = testData.navButtons;
	            _this.timeForTest = _this.restOfTime = testData.timeForTest;
	            _this.tasksCount = _this.unAnsweredQuestionCount = testData.tasksCount;
	            _this.maxUserRate = testData.maxUserRate;
	            _this.timer = testData.timer;
	            _this.navButtons.forEach(function (button, i) {
	                if (button.active) {
	                    _this.activeQuestion = i;
	                }
	                if (button.answered) {
	                    _this.unAnsweredQuestionCount--;
	                }
	            });
	            _this.unAnsweredQuestionPercent = Math.round(_this.unAnsweredQuestionCount / _this.tasksCount * 100);
	            _this.checkTimer(true);
	        });
	    };
	    TestPlayerComponent.prototype.ngOnDestroy = function () {
	        clearInterval(this.timerId);
	    };
	    TestPlayerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(471),
	            styles: [__webpack_require__(472)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof test_player_service_1.TestPlayerService !== 'undefined' && test_player_service_1.TestPlayerService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _c) || Object])
	    ], TestPlayerComponent);
	    return TestPlayerComponent;
	    var _a, _b, _c;
	}());
	exports.TestPlayerComponent = TestPlayerComponent;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	var router_1 = __webpack_require__(38);
	var rxjs_1 = __webpack_require__(139);
	var constant_1 = __webpack_require__(76);
	var classes_1 = __webpack_require__(414);
	var subject_service_1 = __webpack_require__(138);
	var crud_service_1 = __webpack_require__(135);
	var common_service_1 = __webpack_require__(96);
	var TestPlayerService = (function () {
	    function TestPlayerService(http, router, subjectService, crudService, commonService) {
	        var _this = this;
	        this.http = http;
	        this.router = router;
	        this.subjectService = subjectService;
	        this.crudService = crudService;
	        this.commonService = commonService;
	        this.getAnswersByQuestionUrl = constant_1.getAnswersByQuestionTestPlayerUrl;
	        this.checkSAnswerUrl = constant_1.checkSAnswerUrl;
	        this.getTimeStampUrl = constant_1.getTimeStampUrl;
	        this.saveEndTimeUrl = constant_1.saveEndTimeUrl;
	        this.getEndTimeUrl = constant_1.getEndTimeUrl;
	        this.getTestRecordUrl = constant_1.getTestRecordUrl;
	        this.resetSessionDataUrl = constant_1.resetSessionDataUrl;
	        this.countTestPassesByStudentUrl = constant_1.countTestPassesByStudentUrl;
	        this.navButtonConstClassName = constant_1.navButtonConstClassName;
	        this.headersCheckSAnswer = new http_1.Headers({ "content-type": "application/json" });
	        this.modalParams = constant_1.modalInfoParams;
	        this.questions = [];
	        this.tasksCount = 0;
	        this.timer = {};
	        this.maxUserRate = 0;
	        this.userRate = 0;
	        this.precisionTime = 5;
	        this.handleError = function (error) {
	            var errMsg = (error.message) ? error.message :
	                error.status ? error.status + " - " + error.statusText : "Server error";
	            if (error.status === 403) {
	                sessionStorage.removeItem("userRole");
	                _this.router.navigate(["/login"]);
	            }
	            return rxjs_1.Observable.throw(errMsg);
	        };
	        this.successResponse = function (response) { return response.json(); };
	        this.getTestRecord = rxjs_1.Observable.create(function (observer) {
	            _this.http
	                .get(_this.getTestRecordUrl + "/" + _this.testId)
	                .map(_this.successResponse)
	                .catch(_this.handleError)
	                .subscribe(function (testRecord) {
	                _this.timeForTest = +testRecord[0].time_for_test * 60;
	                _this.tasksCount = +testRecord[0].tasks;
	                _this.timer = _this.createTimeForView(_this.timeForTest);
	                observer.next(testRecord);
	            });
	        });
	        this.countTestPassesByStudent = function (testRecord) {
	            return _this.http
	                .get(_this.countTestPassesByStudentUrl + "/" + _this.studentId + "/" + _this.testId)
	                .map(_this.successResponse)
	                .catch(_this.handleError)
	                .do(function (countTestPassed) {
	                if (+countTestPassed.numberOfRecords >= +testRecord[0].attempts) {
	                    (_a = _this.commonService).openModalInfo.apply(_a, _this.modalParams.youUsedAllAtempts)
	                        .then(null, function () {
	                        _this.router.navigate(["/student"]);
	                    });
	                    _this.getTestRecord.unsubscribe();
	                }
	                var _a;
	            });
	        };
	        this.getTestDetails = function () {
	            _this.maxUserRate = 0;
	            return _this.subjectService.getTestDetailsByTest(_this.testId)
	                .map(function (testDetails) {
	                testDetails.forEach(function (data) {
	                    _this.maxUserRate += +data.tasks * +data.rate;
	                });
	                return testDetails;
	            });
	        };
	        this.getQuestions = function (testDetails) {
	            _this.questions = [];
	            var forkJoinBatch = testDetails.map(function (item) {
	                return _this.subjectService.getQuestionsByLevelRand(item.test_id, item.level, item.tasks);
	            });
	            return rxjs_1.Observable.forkJoin(forkJoinBatch)
	                .map(function (questions) {
	                _this.questions = _this.prepareQuestionForTest(questions, testDetails);
	                _this.randomSortArrayOfObjects(_this.questions, "question_id");
	                _this.navButtons = _this.createNavButtons(_this.questions.length);
	                return _this.questions;
	            });
	        };
	        this.getAnswers = function (questions) {
	            var forkJoinBatch = questions.map(function (question) {
	                return _this.getAnswersByQuestion(question.question_id);
	            });
	            return rxjs_1.Observable.forkJoin(forkJoinBatch)
	                .do(function (answers) {
	                answers.forEach(function (item, i) {
	                    _this.randomSortArrayOfObjects(item, "answer_id");
	                    questions[i].answers = item;
	                });
	            });
	        };
	        this.createTimeStamp = function () {
	            return _this.getTimeStamp()
	                .do(function (timeStamp) {
	                timeStamp.curtime = +timeStamp.unix_timestamp + _this.timeForTest;
	                _this.saveEndTime(timeStamp);
	            });
	        };
	        this.returnTestData = function () {
	            var testData = {
	                navButtons: _this.navButtons,
	                questions: _this.questions,
	                tasksCount: _this.tasksCount,
	                timeForTest: _this.timeForTest,
	                maxUserRate: _this.maxUserRate,
	                timer: _this.timer
	            };
	            return rxjs_1.Observable.create(function (observer) {
	                observer.next(testData);
	            });
	        };
	        this.recoverQuestions = function (testDetails) {
	            var forkJoinBatch = _this.questions.map(function (item) {
	                return _this.crudService.getRecordById("question", item.question_id);
	            });
	            return rxjs_1.Observable.forkJoin(forkJoinBatch)
	                .do(function (questions) {
	                _this.prepareQuestionsForContinueTest(questions, testDetails);
	                _this.recoverNavButtons();
	            });
	        };
	        this.recoverAnswers = function () {
	            var forkJoinBatch = _this.questions.map(function (item) {
	                return _this.getAnswersByQuestion(item.question_id);
	            });
	            return rxjs_1.Observable.forkJoin(forkJoinBatch)
	                .do(function (answers) {
	                _this.prepareAnswersForContinueTest(answers);
	            });
	        };
	        this.getSavedTime = function (timeEndOfTest) {
	            return rxjs_1.Observable.create(function (observer) {
	                _this.getEndTime()
	                    .subscribe(function (savedEndOfTest) {
	                    observer.next({ timeEndOfTest: timeEndOfTest, savedEndOfTest: savedEndOfTest });
	                }, _this.errorSavedTime);
	            });
	        };
	        this.errorSavedTime = function () {
	            (_a = _this.commonService).openModalInfo.apply(_a, _this.modalParams.impossibleRecoverTest)
	                .then(null, function () {
	                localStorage.removeItem("dTester");
	                _this.router.navigate(["/student"]);
	            });
	            var _a;
	        };
	        this.compareTime = function (times) {
	            var startTime = +times.savedEndOfTest.unix_timestamp;
	            var endTime = +times.timeEndOfTest.unix_timestamp;
	            return rxjs_1.Observable.create(function (observer) {
	                if (+times.savedEndOfTest.curtime + _this.precisionTime > endTime) {
	                    var restOfTime = +times.savedEndOfTest.curtime - +times.timeEndOfTest.unix_timestamp;
	                    observer.next({ startTime: startTime, endTime: endTime, restOfTime: restOfTime });
	                }
	                else {
	                    observer.next({ startTime: startTime, endTime: endTime });
	                }
	            });
	        };
	    }
	    ;
	    TestPlayerService.prototype.getAnswersByQuestion = function (questionId) {
	        return this.http
	            .get(this.getAnswersByQuestionUrl + "/" + questionId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    TestPlayerService.prototype.checkSAnswers = function (questions, startTime, endTime) {
	        var _this = this;
	        var body = this.createBodyCheck(questions);
	        this.http
	            .post(this.checkSAnswerUrl, JSON.stringify(body), { headers: this.headersCheckSAnswer })
	            .map(this.successResponse)
	            .catch(this.handleError)
	            .subscribe(function (results) {
	            _this.userRate = _this.getUserRate(results, questions);
	            var saveResConfig = {
	                userRate: _this.userRate,
	                startTime: startTime,
	                endTime: endTime,
	                questions: questions,
	                results: results
	            };
	            _this.saveResults(saveResConfig);
	        });
	    };
	    TestPlayerService.prototype.failTestByTimer = function (questions, startTime, endTime) {
	        var userRate = 0;
	        var results = [{ question_id: "-1", true: 0 }];
	        var saveResConfig = { userRate: userRate, startTime: startTime, endTime: endTime, questions: questions, results: results };
	        questions.forEach(function (question) {
	            question.chosenAnswer = {};
	        });
	        this.saveResults(saveResConfig);
	    };
	    TestPlayerService.prototype.saveResults = function (saveResConfig) {
	        var _this = this;
	        var message;
	        var bodyResultParams = {
	            studentId: this.studentId,
	            testId: this.testId,
	            startTime: saveResConfig.startTime,
	            endTime: saveResConfig.endTime,
	            results: saveResConfig.results,
	            userRate: saveResConfig.userRate,
	            questions: saveResConfig.questions,
	            maxUserRate: this.maxUserRate
	        };
	        var bodyResult = this.createBodyResult(bodyResultParams);
	        localStorage.removeItem("dTester");
	        if (saveResConfig.results[0].question_id === "-1") {
	            message = "\u0422\u0435\u0441\u0442 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043E \u043F\u043E\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u0432\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443. \u0412\u0430\u0448\u0430 \u043E\u0446\u0456\u043D\u043A\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 0 \u0431\u0430\u043B\u0456\u0432.";
	        }
	        else {
	            message = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0430\u0431\u0440\u0430\u043D\u0438\u0445 \u0412\u0430\u043C\u0438 \u0431\u0430\u043B\u0456\u0432 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C: " + this.userRate + " \u0437 " + this.maxUserRate + " \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u0445";
	        }
	        this.crudService.insertData("result", bodyResult)
	            .subscribe(function () {
	            _this.commonService.openModalInfo(message, "info", "Результат тестування!")
	                .then(null, function () {
	                _this.resetSessionData();
	                _this.router.navigate(["/student"]);
	            });
	        }, function () {
	            (_a = _this.commonService).openModalInfo.apply(_a, _this.modalParams.mistakeDuringSaveResult);
	            var _a;
	        });
	    };
	    TestPlayerService.prototype.setBaseTestData = function (testId, studentId, maxUserRate) {
	        this.testId = testId;
	        this.studentId = studentId;
	        this.maxUserRate = maxUserRate;
	    };
	    TestPlayerService.prototype.prepareQuestionForTest = function (questions, testDetails) {
	        var tempArr = [];
	        questions.forEach(function (elem) {
	            tempArr.push.apply(tempArr, elem);
	        });
	        return tempArr.map(function (question, i) {
	            question.chosenAnswer = {};
	            for (var i_1 = 0; i_1 < testDetails.length; i_1++) {
	                if (question.level === testDetails[i_1].level) {
	                    question.rate = testDetails[i_1].rate + "";
	                    break;
	                }
	            }
	            question.type = question.type === "1" ? "radio" : "checkbox";
	            question.answered = false;
	            question.active = i === 0 ? true : false;
	            return question;
	        });
	    };
	    TestPlayerService.prototype.getNewTest = function () {
	        return this.getTestRecord
	            .flatMap(this.countTestPassesByStudent)
	            .flatMap(this.getTestDetails)
	            .flatMap(this.getQuestions)
	            .flatMap(this.getAnswers)
	            .flatMap(this.createTimeStamp)
	            .flatMap(this.returnTestData);
	    };
	    TestPlayerService.prototype.prepareQuestionsForContinueTest = function (questions, testDetails) {
	        this.questions.forEach(function (item, j) {
	            item.question_text = questions[j][0].question_text;
	            item.attachment = questions[j][0].attachment;
	            item.level = questions[j][0].level;
	            item.type = questions[j][0].type === "1" ? "radio" : "checkbox";
	            testDetails.forEach(function (elem) {
	                if (elem.level === item.level) {
	                    item.rate = elem.rate + "";
	                    return;
	                }
	            });
	        });
	    };
	    TestPlayerService.prototype.recoverNavButtons = function () {
	        var _this = this;
	        this.navButtons = this.questions.map(function (question, i) {
	            var button = {};
	            button.active = question.active;
	            button.answered = question.answered;
	            button.label = _this.commonService.leftPad(i + 1);
	            button.className = button.active ?
	                constant_1.navButtonConstClassName + " btn-warning" :
	                button.answered ?
	                    constant_1.navButtonConstClassName + " btn-success" :
	                    constant_1.navButtonConstClassName + " btn-primary";
	            return button;
	        });
	    };
	    TestPlayerService.prototype.prepareAnswersForContinueTest = function (answers) {
	        this.questions.forEach(function (question, j) {
	            question.answers.forEach(function (answer) {
	                answers[j].forEach(function (elem) {
	                    if (answer.answer_id === elem.answer_id) {
	                        answer.answer_text = elem.answer_text;
	                        answer.attachment = elem.attachment;
	                    }
	                });
	            });
	        });
	    };
	    TestPlayerService.prototype.recoverTestData = function () {
	        var dTester = JSON.parse(localStorage.getItem("dTester"));
	        this.studentId = +sessionStorage.getItem("userId");
	        this.testId = dTester.testId;
	        this.questions = dTester.questions;
	        return this.getTestRecord
	            .flatMap(this.getTestDetails)
	            .flatMap(this.recoverQuestions)
	            .flatMap(this.recoverAnswers)
	            .flatMap(this.returnTestData);
	    };
	    TestPlayerService.prototype.randomSortArrayOfObjects = function (arr, property) {
	        arr.sort(function (a, b) {
	            return Math.random() > 0.5 ? +a[property] - +b[property] : +b[property] - +a[property];
	        });
	    };
	    TestPlayerService.prototype.getTimeStamp = function () {
	        return this.http
	            .get("" + this.getTimeStampUrl)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    TestPlayerService.prototype.saveEndTime = function (body) {
	        this.http
	            .post(this.saveEndTimeUrl, JSON.stringify(body), { headers: this.headersCheckSAnswer })
	            .map(this.successResponse)
	            .catch(this.handleError)
	            .subscribe();
	    };
	    TestPlayerService.prototype.getEndTime = function () {
	        return this.http
	            .get("" + this.getEndTimeUrl)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    TestPlayerService.prototype.resetSessionData = function () {
	        this.http
	            .get("" + this.resetSessionDataUrl)
	            .map(this.successResponse)
	            .catch(this.handleError)
	            .subscribe();
	    };
	    TestPlayerService.prototype.createNavButtons = function (countOfButtons) {
	        var navButtons = [
	            { answered: false, label: "01", active: true, className: constant_1.navButtonConstClassName + " btn-warning" }];
	        for (var i = 1; i < countOfButtons; i++) {
	            navButtons.push(new classes_1.TestPlayerNavButton());
	            navButtons[i].label = this.commonService.leftPad(i + 1);
	            navButtons[i].className = constant_1.navButtonConstClassName + " btn-primary";
	        }
	        return navButtons;
	    };
	    TestPlayerService.prototype.changeNavButtons = function (num, navButtons, activeQuestion) {
	        navButtons[activeQuestion].active = false;
	        navButtons[activeQuestion].className = navButtons[activeQuestion].answered ?
	            constant_1.navButtonConstClassName + " btn-success" :
	            constant_1.navButtonConstClassName + " btn-primary";
	        activeQuestion = num;
	        navButtons[activeQuestion].className = constant_1.navButtonConstClassName + " btn-warning";
	        navButtons[activeQuestion].active = true;
	        return activeQuestion;
	    };
	    TestPlayerService.prototype.getUserRate = function (results, questions) {
	        var userRate = 0;
	        results.forEach(function (result) {
	            if (!result.true)
	                return;
	            questions.forEach(function (question) {
	                if (result.question_id === question.question_id) {
	                    userRate += +question.rate;
	                }
	            });
	        });
	        return userRate;
	    };
	    TestPlayerService.prototype.createBodyCheck = function (questions) {
	        var bodyCheck = questions.map(function (question) {
	            var data = {};
	            data.question_id = question.question_id;
	            data.answer_ids = [];
	            for (var key in question.chosenAnswer) {
	                if (question.chosenAnswer[key]) {
	                    data.answer_ids.push(key);
	                }
	            }
	            return data;
	        });
	        return bodyCheck;
	    };
	    ;
	    TestPlayerService.prototype.createTimeForView = function (restOfTime) {
	        restOfTime = restOfTime <= 0 ? 0 : restOfTime;
	        var hours = restOfTime / 3600 ^ 0;
	        var min = (restOfTime - hours * 60) / 60 ^ 0;
	        var sec = (restOfTime - hours * 3600 - min * 60);
	        return {
	            hours: this.commonService.leftPad(hours),
	            min: this.commonService.leftPad(min),
	            sec: this.commonService.leftPad(sec)
	        };
	    };
	    TestPlayerService.prototype.findUnAsweredQuestion = function (activeQuestion, navButtons) {
	        var k = activeQuestion + 1;
	        for (var j = 0; j < navButtons.length; j++) {
	            k = k === navButtons.length ? 0 : k;
	            if (!navButtons[k].answered) {
	                return k;
	            }
	            else {
	                k++;
	            }
	        }
	    };
	    TestPlayerService.prototype.createBodyResult = function (bodyResultParams) {
	        var bodyResult = {};
	        var date = new Date(bodyResultParams.startTime * 1000);
	        var dateEnd = new Date(bodyResultParams.endTime * 1000);
	        bodyResult.true_answers = "";
	        bodyResult.answers = bodyResultParams.maxUserRate;
	        bodyResult.student_id = bodyResultParams.studentId;
	        bodyResult.test_id = bodyResultParams.testId;
	        bodyResult.session_date = this.commonService.createSQLDate(date, "date", "-");
	        bodyResult.start_time = this.commonService.createSQLDate(date, "time", ":");
	        bodyResult.end_time = this.commonService.createSQLDate(dateEnd, "time", ":");
	        bodyResult.result = bodyResultParams.userRate;
	        bodyResult.questions = [];
	        if (!bodyResultParams.results.length) {
	            bodyResult.questions = bodyResultParams.questions.map(function (item) {
	                return { question_id: item.question_id };
	            });
	        }
	        else {
	            bodyResult.questions = bodyResultParams.questions.map(function (item) {
	                var question = {};
	                question.question_id = item.question_id;
	                question.answers = [];
	                for (var key in item.chosenAnswer) {
	                    if (item.chosenAnswer[key]) {
	                        question.answers.push(key);
	                    }
	                }
	                bodyResultParams.results.forEach(function (result) {
	                    if (result.question_id === item.question_id) {
	                        question.true = result.true;
	                    }
	                });
	                return question;
	            });
	        }
	        bodyResult.questions = JSON.stringify(bodyResult.questions);
	        return bodyResult;
	    };
	    TestPlayerService.prototype.createBackup = function (questions) {
	        var dTester = {};
	        dTester.testId = this.testId;
	        dTester.userId = this.commonService.cryptData(this.studentId);
	        dTester.questions = questions.map(function (question) {
	            var backupQuestion = {};
	            backupQuestion.active = question.active;
	            backupQuestion.question_id = question.question_id;
	            backupQuestion.answered = question.answered;
	            backupQuestion.chosenAnswer = question.chosenAnswer;
	            backupQuestion.answers = question.answers.map(function (answer) {
	                return { answer_id: answer.answer_id };
	            });
	            return backupQuestion;
	        });
	        localStorage.setItem("dTester", JSON.stringify(dTester));
	    };
	    TestPlayerService.prototype.checkTimer = function () {
	        return this.getTimeStamp()
	            .flatMap(this.getSavedTime)
	            .flatMap(this.compareTime);
	    };
	    TestPlayerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _c) || Object, (typeof (_d = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _d) || Object, (typeof (_e = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _e) || Object])
	    ], TestPlayerService);
	    return TestPlayerService;
	    var _a, _b, _c, _d, _e;
	}());
	exports.TestPlayerService = TestPlayerService;


/***/ },
/* 471 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" *ngIf=\"show\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-6 info\">\r\n            Залишилось запитань: {{unAnsweredQuestionCount}} з {{tasksCount}} ({{unAnsweredQuestionPercent+'%'}})\r\n            <div class=\"progress hidden-xs\">\r\n                <div class=\"progress-bar\" [ngStyle]=\"{'width': unAnsweredQuestionPercent+'%'}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-6 info\">\r\n            Залишилось часу: <b class=\"time\">{{timer.hours}}:{{timer.min}}:{{timer.sec}}</b> ({{leftTimePercent+'%'}})\r\n            <div class=\"progress hidden-xs\">\r\n                <div class=\"progress-bar progress-bar-warning\" [ngStyle]=\"{'width': leftTimePercent+'%'}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"show\">\r\n    <div class=\"row\">\r\n        <ng-container *ngFor=\"let question of questions; let i=index\">\r\n            <div class=\"col-xs-12 col-md-10 info\" *ngIf=\"i===activeQuestion\">\r\n                <div>\r\n                    <h4 class=\"text-right\">Запитання №{{i+1}}</h4>\r\n                    <div class=\"question-img\">\r\n                        <img *ngIf=\"question.attachment\" [src]=\"question.attachment\"\r\n                             alt=\"Картинка для питання\">\r\n                    </div>\r\n                    <h3 class=\"question-text\">{{question.question_text}}</h3>\r\n                    <ul class=\"answers\">\r\n                        <li *ngFor=\"let answer of question.answers\">\r\n                            <label>\r\n                                <input [type]=\"question.type\" name=\"answer\"\r\n                                       [value]=\"answer.answer_id\"\r\n                                       (click)=\"toggleAnswer(answer.answer_id, i)\"\r\n                                       [checked]=\"question.chosenAnswer[answer.answer_id]\">\r\n                                <img *ngIf=\"answer.attachment\"\r\n                                     [src]=\"answer.attachment\"\r\n                                     alt=\"картинка для відповіді\">{{answer.answer_text}}\r\n                            </label>\r\n                        </li>\r\n                    </ul>\r\n                    <p class=\"text-left\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"skipQuestion()\"\r\n                                [disabled]=\"disableSkip\">\r\n                            Пропустити\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"answerQuestion()\">\r\n                            Відповісти\r\n                        </button>\r\n                    </p>\r\n                    <p class=\"text-right\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"finishTest()\">\r\n                            Завершити тест\r\n                        </button>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <div class=\"col-xs-12 col-md-2 info text-center nav-buttons\">\r\n            <h3>Навігація</h3>\r\n            <button *ngFor=\"let button of navButtons; let j=index\"\r\n                    type=\"button\"\r\n                    [ngClass]=\"button.className\"\r\n                    (click)=\"changeActiveQuestion(j)\">{{button.label}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<template ngbModalContainer></template>";

/***/ },
/* 472 */
/***/ function(module, exports) {

	module.exports = ".nav-buttons button {\r\n    margin: 1px 2px;\r\n}\r\n\r\n.row div.info {\r\n    padding: 5px 15px;\r\n    background-color:#f9f9f9;\r\n    border: 5px solid #fff;\r\n}\r\n\r\n.nom-qua{\r\n    margin-top:2px;\r\n    margin-bottom:2px;\r\n}\r\n\r\n.answers li {\r\n    list-style: none;\r\n}\r\n\r\n.answers img{\r\n    max-height: 160px;\r\n}\r\n\r\n.question-img {\r\n    text-align: center;\r\n}\r\n\r\n.question-img img {\r\n    max-height: 180px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.question-text {\r\n    border-bottom: 2px solid #bbb;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.text-left, .text-right {\r\n    display: inline-block;\r\n}\r\n.text-left {\r\n    float: left;\r\n}\r\n.text-right {\r\n    float: right;\r\n}"

/***/ },
/* 473 */
/***/ function(module, exports) {

	"use strict";
	var TestPlayerGuard = (function () {
	    function TestPlayerGuard() {
	    }
	    TestPlayerGuard.prototype.canDeactivate = function (component) {
	        return component.canDeactivate ? component.canDeactivate() : true;
	    };
	    return TestPlayerGuard;
	}());
	exports.TestPlayerGuard = TestPlayerGuard;


/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: "my-app",
	            template: "<router-outlet></router-outlet>",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var rxjs_1 = __webpack_require__(139);
	var EntityBarComponent = (function () {
	    function EntityBarComponent(location) {
	        this.location = location;
	        this.activate = new core_1.EventEmitter();
	        this.searchRun = new core_1.EventEmitter();
	        this.selectRun = new core_1.EventEmitter();
	        this.sortByField1 = new core_1.EventEmitter();
	        this.sortByField2 = new core_1.EventEmitter();
	        this.config = { action: "create" };
	        this.searchTerms = new rxjs_1.Subject();
	    }
	    EntityBarComponent.prototype.find = function (term) {
	        this.searchTerms.next(term);
	    };
	    EntityBarComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.searchTerms
	            .debounceTime(300)
	            .distinctUntilChanged()
	            .subscribe(function (newValue) {
	            _this.searchRun.emit(newValue);
	        });
	    };
	    EntityBarComponent.prototype.onSelect1 = function (data) {
	        this.sortByField1.emit(data);
	    };
	    EntityBarComponent.prototype.onSelect2 = function (data) {
	        this.sortByField2.emit(data);
	    };
	    EntityBarComponent.prototype.modal = function (data) {
	        this.activate.emit(data);
	    };
	    EntityBarComponent.prototype.changeLimit = function (limit) {
	        this.selectRun.emit(limit);
	    };
	    EntityBarComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "addTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "entityTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "searchTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "selectLimit", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], EntityBarComponent.prototype, "entityDataLength", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], EntityBarComponent.prototype, "listOfOptions1", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], EntityBarComponent.prototype, "listOfOptions2", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], EntityBarComponent.prototype, "isSelectedBy", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "defaultOption1", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], EntityBarComponent.prototype, "defaultOption2", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], EntityBarComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], EntityBarComponent.prototype, "searchRun", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], EntityBarComponent.prototype, "selectRun", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], EntityBarComponent.prototype, "sortByField1", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], EntityBarComponent.prototype, "sortByField2", void 0);
	    EntityBarComponent = __decorate([
	        core_1.Component({
	            selector: "entity-bar",
	            template: __webpack_require__(476),
	            styles: [__webpack_require__(477)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
	    ], EntityBarComponent);
	    return EntityBarComponent;
	    var _a;
	}());
	exports.EntityBarComponent = EntityBarComponent;


/***/ },
/* 476 */
/***/ function(module, exports) {

	module.exports = "<nav *ngIf=\"!isSelectedBy\" class=\"navbar navbar-default entity-bar\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-text\">{{entityTitle}}</div>\r\n        <form class=\"navbar-form navbar-left\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"пошук\" name=\"inputSearch\"\r\n                       #inputSearch\r\n                       [title]=\"searchTitle\"\r\n                       (input)=\"find(inputSearch.value)\">\r\n            </div>\r\n        </form>\r\n        <form *ngIf=\"listOfOptions1 && listOfOptions2\" class=\"navbar-form navbar-left\">\r\n            <div class=\"form-group\">\r\n                <select *ngIf=\"listOfOptions1\"\r\n                        #select1\r\n                        class=\"form-control\"\r\n                        name=\"select1\"\r\n                        (input)=\"onSelect1(select1.value)\">\r\n                    <option value=\"default\">{{defaultOption1}}</option>\r\n                    <option *ngFor=\"let item of listOfOptions1\" [value]=\"item.id\">{{item.name}}</option>\r\n                </select>\r\n                <select *ngIf=\"listOfOptions2\"\r\n                        #select2\r\n                        class=\"form-control\"\r\n                        name=\"select2\"\r\n                        (input)=\"onSelect2(select2.value)\">>\r\n                    <option value=\"default\">{{defaultOption2}}</option>\r\n                    <option *ngFor=\"let item of listOfOptions2\" [value]=\"item.id\">{{item.name}}</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n        <form class=\"navbar-form navbar-right\">\r\n            <div class=\"form-group\">\r\n                <a class=\"btn btn-default\" (click)=\"modal(config)\" [title]=\"addTitle\">Додати </a>\r\n                <select class=\"form-control\" name=\"count\"\r\n                        #select\r\n                        [title]=\"selectLimit\"\r\n                        (input)=\"changeLimit(select.value)\"\r\n                        [disabled]=\"inputSearch.value.length\">\r\n                    <option value=\"5\">5</option>\r\n                    <option value=\"10\">10</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option [value]=\"entityDataLength\">Всі</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<nav *ngIf=\"isSelectedBy\" class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-text\">{{entityTitle}}</div>\r\n        <form class=\"navbar-form navbar-right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Назад</button>\r\n        </form>\r\n    </div>\r\n</nav>";

/***/ },
/* 477 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var TableComponent = (function () {
	    function TableComponent() {
	        this.activate = new core_1.EventEmitter();
	        this.isImage = false;
	    }
	    TableComponent.prototype.ngOnInit = function () {
	    };
	    TableComponent.prototype.run = function (entityData, action) {
	        entityData.action = action;
	        this.activate.emit(entityData);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TableComponent.prototype, "tableData", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TableComponent.prototype, "headers", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TableComponent.prototype, "actions", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TableComponent.prototype, "page", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TableComponent.prototype, "limit", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TableComponent.prototype, "activate", void 0);
	    TableComponent = __decorate([
	        core_1.Component({
	            selector: "dt-table",
	            template: __webpack_require__(479),
	            styles: [__webpack_require__(480)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TableComponent);
	    return TableComponent;
	}());
	exports.TableComponent = TableComponent;


/***/ },
/* 479 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\n    <ul class=\"list-group entity-list\">\n        <li class=\"list-group-item row hidden-xs\">\n            <div *ngFor=\"let item of headers\" [ngClass]=\"item.className\">{{item.name}}</div>\n        </li>\n        <li class=\"list-group-item row\"\n            *ngFor=\"let entity of tableData; let i=index\">\n            <div *ngFor=\"let item of entity.entityColumns; let j=index\" [ngClass]=\"headers[j].className\">\n                <span class=\"visible-xs-inline-block\">{{headers[j].name+\": \"}}</span>\n                <span class=\"align-xs\" *ngIf=\"headers[j].name !== 'Вкладення'\">{{item}}</span>\n                <span class=\"align-xs\" *ngIf=\"headers[j].name == 'Вкладення'\">\n                <img [src]=\"item\" alt=\"Зображення для тесту\" width=\"200px\">\n                </span>\n            </div>\n            <div [ngClass]=\"headers[headers.length-1].className\">\n                <a\n                        *ngFor=\"let button of actions\"\n                        [ngClass]=\"button.btnClassName\"\n                        [title]=\"button.title+': ' + entity.entityColumns[1]\"\n                        (click)=\"run(entity, button.action)\">\n                    <span [ngClass]=\"button.glyphicon\"></span>\n                </a>\n            </div>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 480 */
477,
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var TestsTabsetComponent = (function () {
	    function TestsTabsetComponent() {
	    }
	    TestsTabsetComponent.prototype.ngOnInit = function () {
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TestsTabsetComponent.prototype, "groupName", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TestsTabsetComponent.prototype, "groupId", void 0);
	    TestsTabsetComponent = __decorate([
	        core_1.Component({
	            selector: "ngbd-tabset-tests",
	            template: __webpack_require__(482)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TestsTabsetComponent);
	    return TestsTabsetComponent;
	}());
	exports.TestsTabsetComponent = TestsTabsetComponent;


/***/ },
/* 482 */
/***/ function(module, exports) {

	module.exports = "<ngb-tabset>\r\n    <ngb-tab title=\"Доступні\">\r\n        <template ngbTabContent>\r\n\t\t  <div class=\"row\"><div class=\"col-xs-12\">\r\n            <h3>Cписок доступних тестувань для групи \"{{groupName}}\"</h3>\r\n            <test-list\r\n                    [groupId] = \"groupId\">\r\n\r\n            </test-list>\r\n\t\t\t</div></div>\r\n        </template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Заплановані\">\r\n        <template ngbTabContent>\r\n\t\t <div class=\"row\"><div class=\"col-xs-12\">\r\n            <h3>Cписок тестувань які плануються для групи \"{{groupName}}\"</h3>\r\n           \r\n                <test-list-shedule\r\n                        [groupId] = \"groupId\">\r\n                </test-list-shedule>\r\n\t\t\t</div></div>\r\n        </template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Пройдені\">\r\n        <template ngbTabContent>\r\n\t\t<div class=\"row\"><div class=\"col-xs-12\">\r\n            <h3>Результати тестувань</h3>\r\n            <test-results>\r\n\t\t\t</test-results>\r\n\t\t</div></div>\r\n        </template>\r\n    </ngb-tab>\r\n</ngb-tabset>";

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ng_bootstrap_1 = __webpack_require__(29);
	var router_1 = __webpack_require__(38);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var student_page_service_1 = __webpack_require__(484);
	var info_modal_component_1 = __webpack_require__(73);
	var student_test_list_1 = __webpack_require__(485);
	var constant_1 = __webpack_require__(76);
	var TestListComponent = (function () {
	    function TestListComponent(_commonService, _router, _subjectService, _studentService, modalService) {
	        this._commonService = _commonService;
	        this._router = _router;
	        this._subjectService = _subjectService;
	        this._studentService = _studentService;
	        this.modalService = modalService;
	        this.modalInfoConfig = constant_1.modalInfoConfig;
	        this.activeTests = student_test_list_1.activeTests;
	        this.activeTimeTable = student_test_list_1.activeTimeTable;
	        this.dateNow = { date: "", time: "" };
	        this.countOfTests = 0;
	        this.headers = student_test_list_1.headersStudentTestList;
	        this.actions = student_test_list_1.actionsStudentTestList;
	        this.entityData = [];
	        this.userRole = sessionStorage.getItem("userRole");
	    }
	    TestListComponent.prototype.ngOnChanges = function () {
	        if (this.groupId) {
	            this.getTimeTable();
	        }
	    };
	    TestListComponent.prototype.activate = function (data) {
	        this.runTest(data);
	    };
	    TestListComponent.prototype.getTimeTable = function () {
	        var _this = this;
	        this.entityData.length = 0;
	        this._commonService.getTime()
	            .subscribe(function (date) {
	            var today = date;
	            _this.dateNow = _this._studentService.getTimeStamp(+today.curtime - today.offset);
	            _this._commonService.getTimeTableForGroup(_this.groupId)
	                .subscribe(function (data) {
	                _this.activeTimeTable = data;
	                for (var i = 0; i < _this.activeTimeTable.length; i++) {
	                    var eventDateTime = {
	                        startDate: _this.activeTimeTable[i].start_date,
	                        startTime: _this.activeTimeTable[i].start_time,
	                        endDate: _this.activeTimeTable[i].end_date,
	                        endTime: _this.activeTimeTable[i].end_time
	                    };
	                    if ((_this.dateNow.date >= eventDateTime.startDate) &&
	                        (_this.dateNow.date <= eventDateTime.endDate) &&
	                        (_this.dateNow.time >= eventDateTime.startTime) &&
	                        (_this.dateNow.time <= eventDateTime.endTime)) {
	                        _this.getTestsForToday(_this.activeTimeTable[i].subject_id, eventDateTime);
	                    }
	                }
	            });
	        });
	    };
	    TestListComponent.prototype.getTestsForToday = function (subId, eventDateTime) {
	        var _this = this;
	        this._commonService.getRecordById("subject", subId)
	            .subscribe(function (subject) {
	            var newSubjectName = subject[0].subject_name;
	            _this._subjectService.getTestsBySubjectId("subject", +subId)
	                .subscribe(function (dataTests) {
	                _this.activeTests = dataTests;
	                for (var j = 0; j < _this.activeTests.length; j++) {
	                    if (_this.activeTests[j].enabled === "1") {
	                        _this.countOfTests++;
	                        _this.entityData.push({
	                            entityColumns: [
	                                newSubjectName,
	                                _this.activeTests[j].test_name,
	                                eventDateTime.startDate.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') + " / " +
	                                    eventDateTime.startTime,
	                                eventDateTime.endDate.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') + " / " +
	                                    eventDateTime.endTime,
	                            ],
	                            entity_id: _this.activeTests[j].test_id
	                        });
	                    }
	                }
	            });
	        });
	    };
	    TestListComponent.prototype.runTest = function (data) {
	        var _this = this;
	        this.modalInfoConfig.infoString = "Ви дійсно хочете пройти тест:\n" + data.entityColumns[1] + "?";
	        this.modalInfoConfig.action = "confirm";
	        this.modalInfoConfig.title = "Початок тестування";
	        var modalRefDel = this.modalService.open(info_modal_component_1.InfoModalComponent, { size: "sm" });
	        modalRefDel.componentInstance.config = this.modalInfoConfig;
	        modalRefDel.result
	            .then(function () {
	            _this._router.navigate(["/student/test-player"], { queryParams: { testId: data.entity_id } });
	        }, function () {
	            return;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TestListComponent.prototype, "groupId", void 0);
	    TestListComponent = __decorate([
	        core_1.Component({
	            selector: "test-list",
	            template: __webpack_require__(486),
	            providers: [student_page_service_1.StudentPageService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _c) || Object, (typeof (_d = typeof student_page_service_1.StudentPageService !== 'undefined' && student_page_service_1.StudentPageService) === 'function' && _d) || Object, (typeof (_e = typeof ng_bootstrap_1.NgbModal !== 'undefined' && ng_bootstrap_1.NgbModal) === 'function' && _e) || Object])
	    ], TestListComponent);
	    return TestListComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.TestListComponent = TestListComponent;


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(5);
	var constant_1 = __webpack_require__(76);
	var StudentPageService = (function () {
	    function StudentPageService(http, router) {
	        var _this = this;
	        this.http = http;
	        this.router = router;
	        this.hostUrlBase = constant_1.baseUrl;
	        this.successResponse = function (response) { return response.json(); };
	        this.handleError = function (error) {
	            var errMsg = (error.message) ? error.message :
	                error.status ? error.status + " - " + error.statusText : "Server error";
	            if (error.status === 403) {
	                sessionStorage.removeItem("userRole");
	                _this.router.navigate(["/login"]);
	            }
	            return Observable_1.Observable.throw(errMsg);
	        };
	    }
	    ;
	    StudentPageService.prototype.getStudentTestResults = function (studentId) {
	        return this.http
	            .get(this.hostUrlBase + "Result/getRecordsbyStudent/" + studentId)
	            .map(this.successResponse)
	            .catch(this.handleError);
	    };
	    StudentPageService.prototype.getTimeStamp = function (mili) {
	        mili = +mili * 1000;
	        var myDate = new Date(mili);
	        var formatDate = {
	            date: myDate.getFullYear() + "-" + ("0" + (myDate.getMonth() + 1)).slice(-2) +
	                "-" + ("0" + myDate.getDate()).slice(-2),
	            time: ("0" + (myDate.getHours() + 1)).slice(-2) + "-" + ("0" + (myDate.getMinutes() + 1)).slice(-2) +
	                "-" + ("0" + myDate.getSeconds()).slice(-2)
	        };
	        return formatDate;
	    };
	    StudentPageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], StudentPageService);
	    return StudentPageService;
	    var _a, _b;
	}());
	exports.StudentPageService = StudentPageService;


/***/ },
/* 485 */
/***/ function(module, exports) {

	// Constants for table.component
	"use strict";
	exports.headersStudentTestList = [
	    // {name: "№", className: "col-xs-12 col-sm-1"},
	    { name: "Предмет", className: "col-xs-12 col-sm-3" },
	    { name: "Назва тесту", className: "col-xs-12 col-sm-4" },
	    { name: "Час початку", className: "col-xs-12 col-sm-2" },
	    { name: "Час кінця", className: "col-xs-12 col-sm-2" },
	    { name: "", className: "col-xs-12 col-sm-1" }
	];
	exports.headersStudentTestResults = [
	    // {name: "№", className: "col-xs-12 col-sm-1"},
	    { name: "Назва тесту", className: "col-xs-12 col-sm-5" },
	    { name: "Дата тестування", className: "col-xs-12 col-sm-5" },
	    { name: "Результат", className: "col-xs-12 col-sm-2" }
	];
	exports.actionsStudentTestList = [
	    {
	        title: "Запустити тест",
	        action: "start",
	        glyphicon: "glyphicon glyphicon-play",
	        btnClassName: "btn btn-default btn-sm"
	    }
	];
	exports.activeTests = [{
	        test_name: "",
	        subject_id: "",
	        subjectName: "",
	        test_id: "",
	        enabled: ""
	    }];
	exports.activeTimeTable = [{
	        group_id: this.groupId,
	        subject_id: "",
	        start_date: ""
	    }];


/***/ },
/* 486 */
/***/ function(module, exports) {

	module.exports = "<dt-table *ngIf=\"entityData.length && userRole ==='student'\"\r\n\t\t  [headers]=\"headers\"\r\n\t\t  [actions]=\"actions\"\r\n\t\t  [tableData]=\"entityData\"\r\n\t\t  (activate)=\"activate($event)\">\r\n</dt-table>\r\n\r\n<dt-table *ngIf=\"entityData.length && userRole ==='admin'\"\r\n\t\t  [headers]=\"headers\"\r\n\t\t  [tableData]=\"entityData\">\r\n</dt-table>\r\n\r\n\t<ngbd-alert-selfclosing\r\n\t\t[countOfTests] = \"countOfTests\">\r\n\t</ngbd-alert-selfclosing>\r\n\r\n<template ngbModalContainer></template>\r\n\r\n";

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var crud_service_1 = __webpack_require__(135);
	var subject_service_1 = __webpack_require__(138);
	var student_page_service_1 = __webpack_require__(484);
	var student_test_list_1 = __webpack_require__(485);
	var TestListSheduleComponent = (function () {
	    function TestListSheduleComponent(_commonService, _subjectService, _studentService) {
	        this._commonService = _commonService;
	        this._subjectService = _subjectService;
	        this._studentService = _studentService;
	        this.activeTests = student_test_list_1.activeTests;
	        this.activeTimeTable = student_test_list_1.activeTimeTable;
	        this.headers = student_test_list_1.headersStudentTestList;
	        this.entityData = [];
	        this.dateUser = "today";
	    }
	    TestListSheduleComponent.prototype.ngOnInit = function () {
	        this.setDate(this.dateUser);
	    };
	    TestListSheduleComponent.prototype.getTimeTable = function (startDay, endDay) {
	        var _this = this;
	        this.entityData.length = 0;
	        this._commonService.getTimeTableForGroup(this.groupId)
	            .subscribe(function (data) {
	            _this.activeTimeTable = data;
	            var _loop_1 = function(i) {
	                if ((_this.activeTimeTable[i].start_date >= startDay) &&
	                    (_this.activeTimeTable[i].start_date <= endDay)) {
	                    _this._commonService.getRecordById("subject", _this.activeTimeTable[i].subject_id)
	                        .subscribe(function (subject) {
	                        var newSubjectName = subject[0].subject_name;
	                        _this._subjectService.getTestsBySubjectId("subject", +_this.activeTimeTable[i].subject_id)
	                            .subscribe(function (dataTests) {
	                            _this.activeTests = dataTests;
	                            for (var j = 0; j < _this.activeTests.length; j++) {
	                                if (_this.activeTests[j].enabled === "1") {
	                                    _this.entityData.push({
	                                        entityColumns: [
	                                            newSubjectName,
	                                            _this.activeTests[j].test_name,
	                                            _this.activeTimeTable[i].start_date.
	                                                replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') + " / " +
	                                                _this.activeTimeTable[i].start_time,
	                                            _this.activeTimeTable[i].end_date.
	                                                replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') + " / " +
	                                                _this.activeTimeTable[i].end_time] });
	                                }
	                            }
	                        });
	                    });
	                }
	            };
	            for (var i = 0; i < _this.activeTimeTable.length; i++) {
	                _loop_1(i);
	            }
	        });
	    };
	    TestListSheduleComponent.prototype.setDate = function (userDay) {
	        var _this = this;
	        this.dateUser = userDay;
	        this._commonService.getTime()
	            .subscribe(function (date) {
	            var today = date;
	            today = +today.curtime - today.offset;
	            _this.dateNow = _this._studentService.getTimeStamp(today).date;
	            var startDay = _this.dateNow;
	            var endDay = _this.dateNow;
	            switch (_this.dateUser) {
	                case "today":
	                    startDay = _this.dateNow;
	                    endDay = _this.dateNow;
	                    break;
	                case "tomorrow":
	                    startDay = _this._studentService.getTimeStamp(today + 86400).date;
	                    endDay = _this._studentService.getTimeStamp(today + 86400).date;
	                    break;
	                case "week":
	                    startDay = _this._studentService.getTimeStamp(today + 86400).date;
	                    endDay = _this._studentService.getTimeStamp(today + 7 * 86400).date;
	                    break;
	                case "month":
	                    startDay = _this._studentService.getTimeStamp(today + 86400).date;
	                    endDay = _this._studentService.getTimeStamp(today + 30 * 86400).date;
	                    break;
	                default:
	                    startDay = _this._studentService.getTimeStamp(today + 86400).date;
	                    endDay = _this._studentService.getTimeStamp(today + 365 * 86400).date;
	            }
	            _this.getTimeTable(startDay, endDay);
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TestListSheduleComponent.prototype, "groupId", void 0);
	    TestListSheduleComponent = __decorate([
	        core_1.Component({
	            selector: "test-list-shedule",
	            template: __webpack_require__(488),
	            providers: [student_page_service_1.StudentPageService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof subject_service_1.SubjectService !== 'undefined' && subject_service_1.SubjectService) === 'function' && _b) || Object, (typeof (_c = typeof student_page_service_1.StudentPageService !== 'undefined' && student_page_service_1.StudentPageService) === 'function' && _c) || Object])
	    ], TestListSheduleComponent);
	    return TestListSheduleComponent;
	    var _a, _b, _c;
	}());
	exports.TestListSheduleComponent = TestListSheduleComponent;


/***/ },
/* 488 */
/***/ function(module, exports) {

	module.exports = "<div class=\"text-right\"> Тестування з початком:\r\n    <div class=\"btn-group\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"setDate('today')\">сьогодні</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"setDate('tomorrow')\">завтра</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"setDate('week')\">протягом тижня</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"setDate('month')\">протягом місяця</button>\r\n    </div>\r\n</div>\r\n<br>\r\n<dt-table *ngIf=\"entityData.length\"\r\n          [headers]=\"headers\"\r\n          [actions]=\"actions\"\r\n          [tableData]=\"entityData\">\r\n</dt-table>";

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var TestBarComponent = (function () {
	    function TestBarComponent(location) {
	        this.location = location;
	        this.activate = new core_1.EventEmitter();
	        this.selectRun = new core_1.EventEmitter();
	        this.config = { action: "create" };
	    }
	    TestBarComponent.prototype.ngOnInit = function () {
	    };
	    TestBarComponent.prototype.addEntity = function (data) {
	        this.activate.emit(data);
	    };
	    TestBarComponent.prototype.goBack = function () {
	        this.location.back();
	    };
	    TestBarComponent.prototype.setupLimit = function (limit) {
	        this.selectRun.emit(limit);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TestBarComponent.prototype, "addTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TestBarComponent.prototype, "pageTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TestBarComponent.prototype, "entityName", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TestBarComponent.prototype, "isSelect", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TestBarComponent.prototype, "selectLimit", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TestBarComponent.prototype, "noRecords", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TestBarComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TestBarComponent.prototype, "selectRun", void 0);
	    TestBarComponent = __decorate([
	        core_1.Component({
	            selector: "test-bar",
	            template: __webpack_require__(490),
	            styles: [__webpack_require__(491)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
	    ], TestBarComponent);
	    return TestBarComponent;
	    var _a;
	}());
	exports.TestBarComponent = TestBarComponent;


/***/ },
/* 490 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-text\">{{pageTitle}}{{entityName}}</div>\r\n        <form class=\"navbar-form navbar-right\">\r\n            <div class=\"form-group\">\r\n                <a class=\"btn btn-default\" (click)=\"addEntity(config)\" [title]=\"addTitle\">Додати </a>\r\n            </div>\r\n            <div *ngIf=\"isSelect\" class=\"form-group\">\r\n                <select class=\"form-control\" name=\"count\"\r\n                        #select\r\n                        [title]=\"selectLimit\"\r\n                        (input)=\"setupLimit(select.value)\"\r\n                        [disabled]=\"noRecords\">\r\n                    <option value=\"5\">5</option>\r\n                    <option value=\"10\">10</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option [value]=\"entityDataLength\">Всі</option>\r\n                </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\"\r\n                    (click)=\"goBack()\">Назад\r\n            </button>\r\n        </form>\r\n    </div>\r\n</nav>";

/***/ },
/* 491 */
477,
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(4);
	var NgbdAlertSelfclosing = (function () {
	    function NgbdAlertSelfclosing() {
	        this._success = new Subject_1.Subject();
	        this.staticAlertClosed = false;
	    }
	    NgbdAlertSelfclosing.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
	        this._success.subscribe(function (message) { return _this.successMessage = message; });
	        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbdAlertSelfclosing.prototype, "countOfTests", void 0);
	    NgbdAlertSelfclosing = __decorate([
	        core_1.Component({
	            selector: 'ngbd-alert-selfclosing',
	            template: __webpack_require__(493)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbdAlertSelfclosing);
	    return NgbdAlertSelfclosing;
	}());
	exports.NgbdAlertSelfclosing = NgbdAlertSelfclosing;


/***/ },
/* 493 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"countOfTests\">\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\n        <b>Увага!</b> У Вас сьогодні {{countOfTests}} тестувань!\n    </ngb-alert>\n</div>";

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var crud_service_1 = __webpack_require__(135);
	var student_page_service_1 = __webpack_require__(484);
	var student_test_list_1 = __webpack_require__(485);
	var StudentTestResultsComponent = (function () {
	    function StudentTestResultsComponent(_commonService, _studentService) {
	        this._commonService = _commonService;
	        this._studentService = _studentService;
	        this.userId = +sessionStorage.getItem("userId");
	        this.activeTests = student_test_list_1.activeTests;
	        this.activeTimeTable = student_test_list_1.activeTimeTable;
	        this.headers = student_test_list_1.headersStudentTestResults;
	        this.entityData = [];
	        this.dateUser = "";
	    }
	    StudentTestResultsComponent.prototype.ngOnInit = function () {
	        var userId = +sessionStorage.getItem("userId");
	        this.getStudentResults(userId);
	    };
	    StudentTestResultsComponent.prototype.getStudentResults = function (userId) {
	        var _this = this;
	        this._studentService.getStudentTestResults(userId)
	            .subscribe(function (data) {
	            var testResult = data;
	            var _loop_1 = function(i) {
	                _this._commonService.getRecordById("Test", testResult[i].test_id)
	                    .subscribe(function (dataTests) {
	                    var testResults = dataTests[0];
	                    _this.entityData.push({
	                        entityColumns: [
	                            testResults.test_name,
	                            testResult[i].session_date.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') + " з (" +
	                                testResult[i].start_time + " до " +
	                                testResult[i].end_time + ")",
	                            testResult[i].result / testResult[i].answers * 100 + "% (" +
	                                testResult[i].result + " з " +
	                                testResult[i].answers + ")"]
	                    });
	                });
	            };
	            for (var i = 0; i < testResult.length; i++) {
	                _loop_1(i);
	            }
	        });
	    };
	    StudentTestResultsComponent = __decorate([
	        core_1.Component({
	            selector: "test-results",
	            template: __webpack_require__(495),
	            providers: [student_page_service_1.StudentPageService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof crud_service_1.CRUDService !== 'undefined' && crud_service_1.CRUDService) === 'function' && _a) || Object, (typeof (_b = typeof student_page_service_1.StudentPageService !== 'undefined' && student_page_service_1.StudentPageService) === 'function' && _b) || Object])
	    ], StudentTestResultsComponent);
	    return StudentTestResultsComponent;
	    var _a, _b;
	}());
	exports.StudentTestResultsComponent = StudentTestResultsComponent;


/***/ },
/* 495 */
/***/ function(module, exports) {

	module.exports = "<dt-table *ngIf=\"entityData.length\"\r\n\t\t  [headers]=\"headers\"\r\n\t\t  [tableData]=\"entityData\">\r\n</dt-table>";

/***/ },
/* 496 */
760
]);
//# sourceMappingURL=app.js.map