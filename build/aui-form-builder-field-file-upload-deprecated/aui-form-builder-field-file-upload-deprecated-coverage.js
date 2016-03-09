if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-file-upload-deprecated/aui-form-builder-field-file-upload-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-file-upload-deprecated/aui-form-builder-field-file-upload-deprecated.js'] = {"path":"build/aui-form-builder-field-file-upload-deprecated/aui-form-builder-field-file-upload-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":76}}},"2":{"name":"(anonymous_2)","line":58,"loc":{"start":{"line":58,"column":21},"end":{"line":58,"column":32}}},"3":{"name":"(anonymous_3)","line":91,"loc":{"start":{"line":91,"column":17},"end":{"line":91,"column":28}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":113,"column":79}},"2":{"start":{"line":10,"column":0},"end":{"line":20,"column":57}},"3":{"start":{"line":31,"column":0},"end":{"line":106,"column":3}},"4":{"start":{"line":59,"column":16},"end":{"line":59,"column":39}},"5":{"start":{"line":92,"column":12},"end":{"line":92,"column":32}},"6":{"start":{"line":94,"column":12},"end":{"line":101,"column":14}},"7":{"start":{"line":108,"column":0},"end":{"line":108,"column":58}},"8":{"start":{"line":110,"column":0},"end":{"line":110,"column":67}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-file-upload-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-upload"," */","","var L = A.Lang,","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_FILE_UPLOAD = '<input id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE].join(' ') +","        '\" name=\"{name}\" type=\"file\" value=\"{value}\" />';","","/**"," * A base class for `A.FormBuilderFileUploadField`."," *"," * @class A.FormBuilderFileUploadField"," * @extends A.FormBuilderField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderFileUploadField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-file-upload-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderFileUploadField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_FILE_UPLOAD;","            }","        }","","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderField,","","    prototype: {","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this;","","            return L.sub(","                instance.get('template'), {","                    id: AEscape.html(instance.get('id')),","                    label: AEscape.html(instance.get('label')),","                    name: AEscape.html(instance.get('name')),","                    value: AEscape.html(instance.get('predefinedValue'))","                }","            );","        }","","    }","","});","","A.FormBuilderFileUploadField = FormBuilderFileUploadField;","","A.FormBuilderField.types.fileupload = A.FormBuilderFileUploadField;","","","}, '3.0.3-deprecated.21', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_uo6vidC2ZN6EbyyjmnB9Uw = __coverage__['build/aui-form-builder-field-file-upload-deprecated/aui-form-builder-field-file-upload-deprecated.js'];
__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['1']++;YUI.add('aui-form-builder-field-file-upload-deprecated',function(A,NAME){__cov_uo6vidC2ZN6EbyyjmnB9Uw.f['1']++;__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['2']++;var L=A.Lang,AEscape=A.Escape,getCN=A.getClassName,CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_FILE_UPLOAD='<input id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE].join(' ')+'" name="{name}" type="file" value="{value}" />';__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['3']++;var FormBuilderFileUploadField=A.Component.create({NAME:'form-builder-file-upload-field',ATTRS:{template:{valueFn:function(){__cov_uo6vidC2ZN6EbyyjmnB9Uw.f['2']++;__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['4']++;return TPL_FILE_UPLOAD;}}},CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderField,prototype:{getHTML:function(){__cov_uo6vidC2ZN6EbyyjmnB9Uw.f['3']++;__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['5']++;var instance=this;__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['6']++;return L.sub(instance.get('template'),{id:AEscape.html(instance.get('id')),label:AEscape.html(instance.get('label')),name:AEscape.html(instance.get('name')),value:AEscape.html(instance.get('predefinedValue'))});}}});__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['7']++;A.FormBuilderFileUploadField=FormBuilderFileUploadField;__cov_uo6vidC2ZN6EbyyjmnB9Uw.s['8']++;A.FormBuilderField.types.fileupload=A.FormBuilderFileUploadField;},'3.0.3-deprecated.21',{'requires':['aui-form-builder-field-deprecated']});
