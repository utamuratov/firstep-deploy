import{$ as ct,I as ut,S as le,_ as ue,ba as dt,ea as j,fa as ce,ha as de,ia as he,ja as pe}from"./chunk-ZKNP4OTC.js";import{$ as I,Cc as ne,Da as Zt,Dc as Ft,Eb as N,Fb as P,Gb as M,Hb as rt,Ib as st,Jb as Yt,Lc as oe,Nb as T,Nc as ie,Ob as _,Oc as re,Pb as at,Pc as se,Qb as lt,Rb as W,Sc as It,Tb as q,Ub as Q,Vc as ae,W as nt,Wb as Kt,X as C,Xb as Jt,Y as E,Ya as h,Z as F,ab as xt,bb as a,ca as D,cc as f,ec as Et,f as Lt,hb as O,ia as w,ib as $,jb as c,l as zt,la as Qt,lb as l,na as p,nb as k,pb as Xt,q as Wt,sa as v,tb as y,tc as te,ub as u,vc as d,w as qt,wb as ot,wc as ee,xa as L,xc as A,ya as z,yb as it,yc as B}from"./chunk-63MFA3PC.js";import{a as g,b as m}from"./chunk-RJNTS35V.js";var Ve=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,o){this._renderer=e,this._elementRef=o}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(o){return new(o||t)(a(xt),a(L))};static \u0275dir=c({type:t})}return t})(),De=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275dir=c({type:t,features:[l]})}return t})(),tt=new I("");var Ye={provide:tt,useExisting:C(()=>we),multi:!0};function Ke(){let t=Ft()?Ft().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Je=new I(""),we=(()=>{class t extends Ve{_compositionMode;_composing=!1;constructor(e,o,i){super(e,o),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Ke())}writeValue(e){let o=e??"";this.setProperty("value",o)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(o){return new(o||t)(a(xt),a(L),a(Je,8))};static \u0275dir=c({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,i){o&1&&T("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[f([Ye]),l]})}return t})();function Pt(t){return t==null||Tt(t)===0}function Tt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var S=new I(""),U=new I(""),tn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fe=class{static min(n){return en(n)}static max(n){return Me(n)}static required(n){return nn(n)}static requiredTrue(n){return on(n)}static email(n){return rn(n)}static minLength(n){return sn(n)}static maxLength(n){return an(n)}static pattern(n){return ln(n)}static nullValidator(n){return pt()}static compose(n){return $e(n)}static composeAsync(n){return Se(n)}};function en(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Me(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function nn(t){return Pt(t.value)?{required:!0}:null}function on(t){return t.value===!0?null:{required:!0}}function rn(t){return Pt(t.value)||tn.test(t.value)?null:{email:!0}}function sn(t){return n=>{let e=n.value?.length??Tt(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function an(t){return n=>{let e=n.value?.length??Tt(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function ln(t){if(!t)return pt;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),o=>{if(Pt(o.value))return null;let i=o.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function pt(t){return null}function Ae(t){return t!=null}function xe(t){return Xt(t)?zt(t):t}function Ee(t){let n={};return t.forEach(e=>{n=e!=null?g(g({},n),e):n}),Object.keys(n).length===0?null:n}function Fe(t,n){return n.map(e=>e(t))}function un(t){return!t.validate}function Ie(t){return t.map(n=>un(n)?n:e=>n.validate(e))}function $e(t){if(!t)return null;let n=t.filter(Ae);return n.length==0?null:function(e){return Ee(Fe(e,n))}}function ke(t){return t!=null?$e(Ie(t)):null}function Se(t){if(!t)return null;let n=t.filter(Ae);return n.length==0?null:function(e){let o=Fe(e,n).map(xe);return qt(o).pipe(Wt(Ee))}}function Oe(t){return t!=null?Se(Ie(t)):null}function ge(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Ne(t){return t._rawValidators}function Pe(t){return t._rawAsyncValidators}function $t(t){return t?Array.isArray(t)?t:[t]:[]}function ft(t,n){return Array.isArray(t)?t.includes(n):t===n}function be(t,n){let e=$t(n);return $t(t).forEach(i=>{ft(e,i)||e.push(i)}),e}function me(t,n){return $t(n).filter(e=>!ft(t,e))}var gt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ke(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},b=class extends gt{name;get formDirective(){return null}get path(){return null}},V=class extends gt{_parent=null;name=null;valueAccessor=null},bt=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},cn={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},xo=m(g({},cn),{"[class.ng-submitted]":"isSubmitted"}),Eo=(()=>{class t extends bt{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(a(V,2))};static \u0275dir=c({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,i){o&2&&ot("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[l]})}return t})(),Fo=(()=>{class t extends bt{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(a(b,10))};static \u0275dir=c({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,i){o&2&&ot("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[l]})}return t})();var Z="VALID",ht="INVALID",R="PENDING",X="DISABLED",x=class{},mt=class extends x{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Y=class extends x{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},K=class extends x{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},G=class extends x{status;source;constructor(n,e){super(),this.status=n,this.source=e}},kt=class extends x{source;constructor(n){super(),this.source=n}},St=class extends x{source;constructor(n){super(),this.source=n}};function Bt(t){return(wt(t)?t.validators:t)||null}function dn(t){return Array.isArray(t)?ke(t):t||null}function jt(t,n){return(wt(n)?n.asyncValidators:t)||null}function hn(t){return Array.isArray(t)?Oe(t):t||null}function wt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Te(t,n,e){let o=t.controls;if(!(n?Object.keys(o):o).length)throw new nt(1e3,"");if(!o[e])throw new nt(1001,"")}function Be(t,n,e){t._forEachChild((o,i)=>{if(e[i]===void 0)throw new nt(1002,"")})}var H=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return A(this.statusReactive)}set status(n){A(()=>this.statusReactive.set(n))}_status=B(()=>this.statusReactive());statusReactive=z(void 0);get valid(){return this.status===Z}get invalid(){return this.status===ht}get pending(){return this.status==R}get disabled(){return this.status===X}get enabled(){return this.status!==X}errors;get pristine(){return A(this.pristineReactive)}set pristine(n){A(()=>this.pristineReactive.set(n))}_pristine=B(()=>this.pristineReactive());pristineReactive=z(!0);get dirty(){return!this.pristine}get touched(){return A(this.touchedReactive)}set touched(n){A(()=>this.touchedReactive.set(n))}_touched=B(()=>this.touchedReactive());touchedReactive=z(!1);get untouched(){return!this.touched}_events=new Lt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(be(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(be(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(me(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(me(n,this._rawAsyncValidators))}hasValidator(n){return ft(this._rawValidators,n)}hasAsyncValidator(n){return ft(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(m(g({},n),{sourceControl:o})),e&&n.emitEvent!==!1&&this._events.next(new K(!0,o))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:o})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,o),e&&n.emitEvent!==!1&&this._events.next(new K(!1,o))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let o=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(m(g({},n),{sourceControl:o})),e&&n.emitEvent!==!1&&this._events.next(new Y(!1,o))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,o),e&&n.emitEvent!==!1&&this._events.next(new Y(!0,o))}markAsPending(n={}){this.status=R;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new G(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(m(g({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=X,this.errors=null,this._forEachChild(i=>{i.disable(m(g({},n),{onlySelf:!0}))}),this._updateValue();let o=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new mt(this.value,o)),this._events.next(new G(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Z,this._forEachChild(o=>{o.enable(m(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(m(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Z||this.status===R)&&this._runAsyncValidator(o,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new mt(this.value,e)),this._events.next(new G(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(m(g({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?X:Z}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=R,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let o=xe(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((o,i)=>o&&o._find(i),this)}getError(n,e){let o=e?this.get(e):this;return o&&o.errors?o.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,o){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||o)&&this._events.next(new G(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,o)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?X:this.errors?ht:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(R)?R:this._anyControlsHaveStatus(ht)?ht:Z}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let o=!this._anyControlsDirty(),i=this.pristine!==o;this.pristine=o,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),i&&this._events.next(new Y(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new K(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){wt(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=dn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=hn(this._rawAsyncValidators)}},vt=class extends H{constructor(n,e,o){super(Bt(e),jt(o,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,o={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,o={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Be(this,!0,n),Object.keys(n).forEach(o=>{Te(this,!0,o),this.controls[o].setValue(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(o=>{let i=this.controls[o];i&&i.patchValue(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((o,i)=>{o.reset(n?n[i]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,o)=>(n[o]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,o)=>o._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let o=this.controls[e];o&&n(o,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,o]of Object.entries(this.controls))if(this.contains(e)&&n(o))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,o,i)=>((o.enabled||this.disabled)&&(e[i]=o.value),e))}_reduceChildren(n,e){let o=n;return this._forEachChild((i,r)=>{o=e(o,i,r)}),o}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Ot=class extends vt{};var et=new I("",{providedIn:"root",factory:()=>Mt}),Mt="always";function At(t,n){return[...n.path,t]}function yt(t,n,e=Mt){Rt(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),fn(t,n),bn(t,n),gn(t,n),pn(t,n)}function _t(t,n,e=!0){let o=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(o),n.valueAccessor.registerOnTouched(o)),Vt(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ct(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function pn(t,n){if(n.valueAccessor.setDisabledState){let e=o=>{n.valueAccessor.setDisabledState(o)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Rt(t,n){let e=Ne(t);n.validator!==null?t.setValidators(ge(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let o=Pe(t);n.asyncValidator!==null?t.setAsyncValidators(ge(o,n.asyncValidator)):typeof o=="function"&&t.setAsyncValidators([o]);let i=()=>t.updateValueAndValidity();Ct(n._rawValidators,i),Ct(n._rawAsyncValidators,i)}function Vt(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=Ne(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.validator);r.length!==i.length&&(e=!0,t.setValidators(r))}}if(n.asyncValidator!==null){let i=Pe(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.asyncValidator);r.length!==i.length&&(e=!0,t.setAsyncValidators(r))}}}let o=()=>{};return Ct(n._rawValidators,o),Ct(n._rawAsyncValidators,o),e}function fn(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&je(t,n)})}function gn(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&je(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function je(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function bn(t,n){let e=(o,i)=>{n.valueAccessor.writeValue(o),i&&n.viewToModelUpdate(o)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function mn(t,n){t==null,Rt(t,n)}function vn(t,n){return Vt(t,n)}function Gt(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function yn(t){return Object.getPrototypeOf(t.constructor)===De}function _n(t,n){t._syncPendingControls(),n.forEach(e=>{let o=e.control;o.updateOn==="submit"&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function Ht(t,n){if(!n)return null;Array.isArray(n);let e,o,i;return n.forEach(r=>{r.constructor===we?e=r:yn(r)?o=r:i=r}),i||o||e||null}function Cn(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ve(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ye(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var J=class extends H{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,o){super(Bt(e),jt(o,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),wt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ye(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){ve(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){ve(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ye(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Vn=t=>t instanceof J,Dn=(()=>{class t extends b{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275dir=c({type:t,standalone:!1,features:[l]})}return t})();var wn={provide:V,useExisting:C(()=>Mn)},_e=Promise.resolve(),Mn=(()=>{class t extends V{_changeDetectorRef;callSetDisabledState;control=new J;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new v;constructor(e,o,i,r,s,Xe){super(),this._changeDetectorRef=s,this.callSetDisabledState=Xe,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Ht(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let o=e.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Gt(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){yt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){_e.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let o=e.isDisabled.currentValue,i=o!==0&&d(o);_e.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?At(e,this._parent):[e]}static \u0275fac=function(o){return new(o||t)(a(b,9),a(S,10),a(U,10),a(tt,10),a(te,8),a(et,8))};static \u0275dir=c({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[f([wn]),l,w]})}return t})();var $o=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=c({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),An={provide:tt,useExisting:C(()=>xn),multi:!0},xn=(()=>{class t extends De{writeValue(e){let o=e??"";this.setProperty("value",o)}registerOnChange(e){this.onChange=o=>{e(o==""?null:parseFloat(o))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275dir=c({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(o,i){o&1&&T("input",function(s){return i.onChange(s.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[f([An]),l]})}return t})();var Ut=new I(""),En={provide:V,useExisting:C(()=>Fn)},Fn=(()=>{class t extends V{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new v;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,o,i,r,s){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(o),this.valueAccessor=Ht(this,i)}ngOnChanges(e){if(this._isControlChanged(e)){let o=e.form.previousValue;o&&_t(o,this,!1),yt(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Gt(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&_t(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(o){return new(o||t)(a(S,10),a(U,10),a(tt,10),a(Ut,8),a(et,8))};static \u0275dir=c({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[f([En]),l,w]})}return t})(),In={provide:b,useExisting:C(()=>Re)},Re=(()=>{class t extends b{callSetDisabledState;get submitted(){return A(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=B(()=>this._submittedReactive());_submittedReactive=z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new v;constructor(e,o,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(o)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Vt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let o=this.form.get(e.path);return yt(o,e,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),o}getControl(e){return this.form.get(e.path)}removeControl(e){_t(e.control||null,e,!1),Cn(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,o){this.form.get(e.path).setValue(o)}onSubmit(e){return this._submittedReactive.set(!0),_n(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new kt(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new St(this.form))}_updateDomValue(){this.directives.forEach(e=>{let o=e.control,i=this.form.get(e.path);o!==i&&(_t(o||null,e),Vn(i)&&(yt(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let o=this.form.get(e.path);mn(o,e),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let o=this.form.get(e.path);o&&vn(o,e)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Rt(this.form,this),this._oldForm&&Vt(this._oldForm,this)}static \u0275fac=function(o){return new(o||t)(a(S,10),a(U,10),a(et,8))};static \u0275dir=c({type:t,selectors:[["","formGroup",""]],hostBindings:function(o,i){o&1&&T("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[f([In]),l,w]})}return t})(),$n={provide:b,useExisting:C(()=>Ge)},Ge=(()=>{class t extends Dn{name=null;constructor(e,o,i){super(),this._parent=e,this._setValidators(o),this._setAsyncValidators(i)}_checkParentType(){Ue(this._parent)}static \u0275fac=function(o){return new(o||t)(a(b,13),a(S,10),a(U,10))};static \u0275dir=c({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[f([$n]),l]})}return t})(),kn={provide:b,useExisting:C(()=>He)},He=(()=>{class t extends b{_parent;name=null;constructor(e,o,i){super(),this._parent=e,this._setValidators(o),this._setAsyncValidators(i)}ngOnInit(){Ue(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(o){return new(o||t)(a(b,13),a(S,10),a(U,10))};static \u0275dir=c({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[f([kn]),l]})}return t})();function Ue(t){return!(t instanceof Ge)&&!(t instanceof Re)&&!(t instanceof He)}var Sn={provide:V,useExisting:C(()=>On)},On=(()=>{class t extends V{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new v;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,o,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Ht(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Gt(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(o){return new(o||t)(a(b,13),a(S,10),a(U,10),a(tt,10),a(Ut,8))};static \u0275dir=c({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[f([Sn]),l,w]})}return t})();function Nn(t){return typeof t=="number"?t:parseFloat(t)}var Pn=(()=>{class t{_validator=pt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let o=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(o),this._validator=this._enabled?this.createValidator(o):pt,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(o){return new(o||t)};static \u0275dir=c({type:t,features:[w]})}return t})(),Tn={provide:S,useExisting:C(()=>Bn),multi:!0},Bn=(()=>{class t extends Pn{max;inputName="max";normalizeInput=e=>Nn(e);createValidator=e=>Me(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275dir=c({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(o,i){o&2&&y("max",i._enabled?i.max:null)},inputs:{max:"max"},standalone:!1,features:[f([Tn]),l]})}return t})();var Le=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=F({})}return t})(),Nt=class extends H{constructor(n,e,o){super(Bt(e),jt(o,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,o={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(n,e={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,o={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Be(this,!1,n),n.forEach((o,i)=>{Te(this,!1,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((o,i)=>{o.reset(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,o)=>o._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,o)=>{n(e,o)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function Ce(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var jn=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,o=null){let i=this._reduceControls(e),r={};return Ce(o)?r=o:o!==null&&(r.validators=o.validator,r.asyncValidators=o.asyncValidator),new vt(i,r)}record(e,o=null){let i=this._reduceControls(e);return new Ot(i,o)}control(e,o,i){let r={};return this.useNonNullable?(Ce(o)?r=o:(r.validators=o,r.asyncValidators=i),new J(e,m(g({},r),{nonNullable:!0}))):new J(e,o,i)}array(e,o,i){let r=e.map(s=>this._createControl(s));return new Nt(r,o,i)}_reduceControls(e){let o={};return Object.keys(e).forEach(i=>{o[i]=this._createControl(e[i])}),o}_createControl(e){if(e instanceof J)return e;if(e instanceof H)return e;if(Array.isArray(e)){let o=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(o,i,r)}else return this.control(e)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275prov=E({token:t,factory:()=>D(jn).nonNullable,providedIn:"root"})}return t})();var So=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:et,useValue:e.callSetDisabledState??Mt}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=F({imports:[Le]})}return t})(),Oo=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ut,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:et,useValue:e.callSetDisabledState??Mt}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=F({imports:[Le]})}return t})();var ze=(()=>{class t extends j{autofocus=!1;_autofocus=!1;focused=!1;platformId=D(Zt);document=D(ne);host=D(L);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ae(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ce.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275dir=c({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",d],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[l]})}return t})();var Rn=["*"],Gn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Hn=(()=>{class t extends dt{name="baseicon";inlineStyles=Gn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var We=(()=>{class t extends j{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ut(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",d],styleClass:"styleClass"},features:[f([Hn]),l],ngContentSelectors:Rn,decls:1,vars:0,template:function(o,i){o&1&&(at(),lt(0))},encapsulation:2,changeDetection:0})}return t})();var qe=(()=>{class t extends We{pathId;ngOnInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275cmp=O({type:t,selectors:[["SpinnerIcon"]],features:[l],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(Qt(),N(0,"svg",0)(1,"g"),M(2,"path",1),P(),N(3,"defs")(4,"clipPath",2),M(5,"rect",3),P()()()),o&2&&(it(i.getClassNames()),y("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),h(),y("clip-path",i.pathId),h(3),u("id",i.pathId))},encapsulation:2})}return t})();var Un=["content"],Ln=["loading"],zn=["icon"],Wn=["*"],Ze=t=>({class:t});function qn(t,n){t&1&&Yt(0)}function Qn(t,n){if(t&1&&M(0,"span",8),t&2){let e=_(3);u("ngClass",e.iconClass()),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zn(t,n){if(t&1&&M(0,"SpinnerIcon",9),t&2){let e=_(3);u("styleClass",e.spinnerIconClass())("spin",!0),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xn(t,n){if(t&1&&(rt(0),k(1,Qn,1,3,"span",6)(2,Zn,1,4,"SpinnerIcon",7),st()),t&2){let e=_(2);h(),u("ngIf",e.loadingIcon),h(),u("ngIf",!e.loadingIcon)}}function Yn(t,n){}function Kn(t,n){if(t&1&&k(0,Yn,0,0,"ng-template",10),t&2){let e=_(2);u("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Jn(t,n){if(t&1&&(rt(0),k(1,Xn,3,2,"ng-container",2)(2,Kn,1,1,null,5),st()),t&2){let e=_();h(),u("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),h(),u("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Et(3,Ze,e.iconClass()))}}function to(t,n){if(t&1&&M(0,"span",8),t&2){let e=_(2);it(e.icon),u("ngClass",e.iconClass()),y("data-pc-section","icon")}}function eo(t,n){}function no(t,n){if(t&1&&k(0,eo,0,0,"ng-template",10),t&2){let e=_(2);u("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function oo(t,n){if(t&1&&(rt(0),k(1,to,1,4,"span",11)(2,no,1,1,null,5),st()),t&2){let e=_();h(),u("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),h(),u("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Et(3,Ze,e.iconClass()))}}function io(t,n){if(t&1&&(N(0,"span",12),Kt(1),P()),t&2){let e=_();y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),h(),Jt(e.label)}}function ro(t,n){if(t&1&&M(0,"p-badge",13),t&2){let e=_();u("value",e.badge)("severity",e.badgeSeverity)}}var so=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ao={root:({instance:t,props:n})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Qe=(()=>{class t extends dt{name="button";theme=so;classes=ao;static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var lo=(()=>{class t extends j{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new v;onFocus=new v;onBlur=new v;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([o,i])=>this[`_${o}`]!==i&&(this[`_${o}`]=i))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return ut(this.fluid)?!!o:this.fluid}_componentStyle=D(Qe);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:o}=e;if(o){let i=o.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[o])=>e+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=p(t)))(i||t)}})();static \u0275cmp=O({type:t,selectors:[["p-button"]],contentQueries:function(o,i,r){if(o&1&&(W(r,Un,5),W(r,Ln,5),W(r,zn,5),W(r,ue,4)),o&2){let s;q(s=Q())&&(i.contentTemplate=s.first),q(s=Q())&&(i.loadingIconTemplate=s.first),q(s=Q())&&(i.iconTemplate=s.first),q(s=Q())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",d],loading:[2,"loading","loading",d],loadingIcon:"loadingIcon",raised:[2,"raised","raised",d],rounded:[2,"rounded","rounded",d],text:[2,"text","text",d],plain:[2,"plain","plain",d],severity:"severity",outlined:[2,"outlined","outlined",d],link:[2,"link","link",d],tabindex:[2,"tabindex","tabindex",ee],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",d],fluid:[2,"fluid","fluid",d],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[f([Qe]),l,w],ngContentSelectors:Wn,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,i){o&1&&(at(),N(0,"button",0),T("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),lt(1),k(2,qn,1,0,"ng-container",1)(3,Jn,3,5,"ng-container",2)(4,oo,3,5,"ng-container",2)(5,io,2,3,"span",3)(6,ro,1,2,"p-badge",4),P()),o&2&&(u("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),y("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),h(2),u("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),u("ngIf",i.loading),h(),u("ngIf",!i.loading),h(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),h(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[It,oe,ie,se,re,pe,ze,qe,he,de,ct],encapsulation:2,changeDetection:0})}return t})(),$i=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=F({imports:[It,lo,ct,ct]})}return t})();export{tt as a,we as b,fe as c,b as d,V as e,Eo as f,Fo as g,vt as h,J as i,Mn as j,$o as k,xn as l,Fn as m,Re as n,Ge as o,He as p,On as q,Bn as r,Nt as s,ko as t,So as u,Oo as v,ze as w,We as x,qe as y,lo as z,$i as A};
