(self["webpackChunkkekw"] = self["webpackChunkkekw"] || []).push([["npm.xmldom"],{

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties, including NodeList.
 *
 * @template {unknown} T
 * @param {Array<T> | ({length:number, [number]: T})} list
 * @param {function (item: T, index: number, list:Array<T> | ({length:number, [number]: T})):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac `Array.prototype` by default,
 * 				allows injecting a custom implementation in tests
 * @returns {T | undefined}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (Object.prototype.hasOwnProperty.call(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object')
	}
	for (var key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key]
		}
	}
	return target
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
	return input
		.replace(/\r[\n\u0085]/g, '\n')
		.replace(/[\r\u0085\u2028]/g, '\n')
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	var normalize = options.normalizeLineEndings || normalizeLineEndings;
	if (source && typeof source === 'string') {
		sax.parse(
			normalize(source),
			defaultNSMap,
			entityMap
		)
	} else {
		sax.errorHandler.error('invalid doc source')
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var find = conventions.find;
var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		if (Object.prototype.hasOwnProperty.call(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0,
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
	 */
	item: function(index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * @private
	 * @param {function (Node):boolean} predicate
	 * @returns {Node[]}
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * @private
	 * @param {Node} item
	 * @returns {number}
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list,'length',ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (Object.prototype.hasOwnProperty.call(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i] || null;
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw new DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;


	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises
		_insertBefore(this, newChild,oldChild, assertPreReplacementValidityInDocument);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
						if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
							return n;
						}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(Object.prototype.hasOwnProperty.call(map, prefix)){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
	this.ownerDocument = this;
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild (doc, el, newChild) {
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
			delete cs[cs.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild (parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(isElementNode(node) ||
			isTextNode(node) ||
			isDocTypeNode(node) ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * @private
 * Steps 1-5 of the checks before inserting and before replacing a child are the same.
 *
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * @private
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if(cp){
		cp.removeChild(node);//remove and update
	}
	if(node.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	}else{
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;


	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parent.firstChild = newFirst;
	}
	if(child == null){
		parent.lastChild = newLast;
	}else{
		child.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parent;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parent.ownerDocument||parent, parent);
	//console.log(parent.lastChild.nextSibling == null)
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}
	return node;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild (parentNode, newChild) {
	if (newChild.parentNode) {
		newChild.parentNode.removeChild(newChild);
	}
	newChild.parentNode = parentNode;
	newChild.previousSibling = parentNode.lastChild;
	newChild.nextSibling = null;
	if (newChild.previousSibling) {
		newChild.previousSibling.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
}

Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},

	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;

		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);

	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;

		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}

		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
		 */
		return buf.push(node.data
			.replace(/[<&>]/g,_xmlEncoder)
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for (var n in node) {
		if (Object.prototype.hasOwnProperty.call(node, n)) {
			var v = node[n];
			if (typeof v != "object") {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})

		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var NAMESPACE = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE);

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if (Object.hasOwnProperty.call(entityMap, k)) {
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){

	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for (var prefix in localNSMap) {
							if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }

				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;


				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer),
			startIndex
		)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start, p);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start, p);
				addAttribute(attrName, value, start);
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
				break;
				case S_ATTR_SPACE:
					el.closed = true;
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value, start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start, p);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for (prefix in localNSMap) {
				if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//}
}

function _copy (source, target) {
	for (var n in source) {
		if (Object.prototype.hasOwnProperty.call(source, n)) {
			target[n] = source[n];
		}
	}
}

function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLnhtbGRvbS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixXQUFXLGFBQWEsMkJBQTJCLEdBQUc7QUFDdEQsV0FBVyxvREFBb0QsMkJBQTJCLFlBQVk7QUFDdEcsV0FBVyx1REFBdUQ7QUFDbEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyw0Q0FBNEM7QUFDdkQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGNBQWM7QUFDZCxZQUFZO0FBQ1osY0FBYztBQUNkLGlCQUFpQjtBQUNqQixpQkFBaUI7Ozs7Ozs7Ozs7O0FDMU1qQixrQkFBa0IsbUJBQU8sQ0FBQyx1RUFBZTtBQUN6QyxVQUFVLG1CQUFPLENBQUMsdURBQU87QUFDekIsZUFBZSxtQkFBTyxDQUFDLGlFQUFZO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQyx1REFBTzs7QUFFekI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCLGNBQWMsVUFBVTtBQUN4QixjQUFjLG9CQUFvQjtBQUNsQztBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLENBQUM7O0FBRUQsbUhBQW1IO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQkFBb0I7QUFDcEIsNEJBQTRCO0FBQzVCLGlCQUFpQjs7Ozs7Ozs7Ozs7QUNqVWpCLGtCQUFrQixtQkFBTyxDQUFDLHVFQUFlOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG9CQUFvQixZQUFZLFFBQVE7QUFDaEYsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLFFBQVE7QUFDcEIsWUFBWSxtQkFBbUI7QUFDL0IsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLEVBQUU7QUFDRiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0IsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxTQUFTO0FBQ1Q7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGtCQUFrQjtBQUM3QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGtCQUFrQjtBQUM3QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRLGdFQUFnRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQ0FBK0M7QUFDNUUsSUFBSTtBQUNKLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTs7QUFFQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsNEVBQTRFO0FBQzVFLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsU0FBUztBQUNWOztBQUVBO0FBQ0EsQ0FBQyxvQkFBb0I7QUFDckIsQ0FBQyxvQkFBb0I7QUFDckIsQ0FBQyx5QkFBeUI7QUFDMUIsQ0FBQyxlQUFlO0FBQ2hCLENBQUMsWUFBWTtBQUNiLENBQUMsZ0JBQWdCO0FBQ2pCLENBQUMscUJBQXFCO0FBQ3RCOzs7Ozs7Ozs7Ozs7QUMveURhOztBQUViLGFBQWEscUdBQStCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUNybkVqQixVQUFVLG1CQUFPLENBQUMsdURBQU87QUFDekIseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQix3SEFBcUQ7Ozs7Ozs7Ozs7O0FDSHJELGdCQUFnQix3R0FBa0M7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkg7QUFDN0g7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLFdBQVc7QUFDWCxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksR0FBRyxLQUFLO0FBQ1osZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsS0FBSztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsRUFBRTtBQUNGO0FBQ0EsMEJBQTBCLHlCQUF5QjtBQUNuRCx3QkFBd0IsdUJBQXVCO0FBQy9DLHNCQUFzQixxQkFBcUI7QUFDM0Msb0JBQW9CLG1CQUFtQjtBQUN2QyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osdUJBQXVCLDBEQUEwRDtBQUNqRjtBQUNBLHdCQUF3QjtBQUN4Qjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvY29udmVudGlvbnMuanMiLCJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZG9tLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9rZWt3Ly4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvc2F4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFBvbnlmaWxsIGZvciBgQXJyYXkucHJvdG90eXBlLmZpbmRgIHdoaWNoIGlzIG9ubHkgYXZhaWxhYmxlIGluIEVTNiBydW50aW1lcy5cbiAqXG4gKiBXb3JrcyB3aXRoIGFueXRoaW5nIHRoYXQgaGFzIGEgYGxlbmd0aGAgcHJvcGVydHkgYW5kIGluZGV4IGFjY2VzcyBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgTm9kZUxpc3QuXG4gKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0ge0FycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pfSBsaXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9uIChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBsaXN0OkFycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pKTpib29sZWFufSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7UGFydGlhbDxQaWNrPEFycmF5Q29uc3RydWN0b3JbJ3Byb3RvdHlwZSddLCAnZmluZCc+Pj99IGFjIGBBcnJheS5wcm90b3R5cGVgIGJ5IGRlZmF1bHQsXG4gKiBcdFx0XHRcdGFsbG93cyBpbmplY3RpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gaW4gdGVzdHNcbiAqIEByZXR1cm5zIHtUIHwgdW5kZWZpbmVkfVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZFxuICogQHNlZSBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi9tdWx0aXBhZ2UvaW5kZXhlZC1jb2xsZWN0aW9ucy5odG1sI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICovXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSwgYWMpIHtcblx0aWYgKGFjID09PSB1bmRlZmluZWQpIHtcblx0XHRhYyA9IEFycmF5LnByb3RvdHlwZTtcblx0fVxuXHRpZiAobGlzdCAmJiB0eXBlb2YgYWMuZmluZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBhYy5maW5kLmNhbGwobGlzdCwgcHJlZGljYXRlKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxpc3QsIGkpKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0XHRpZiAocHJlZGljYXRlLmNhbGwodW5kZWZpbmVkLCBpdGVtLCBpLCBsaXN0KSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBcIlNoYWxsb3cgZnJlZXplc1wiIGFuIG9iamVjdCB0byByZW5kZXIgaXQgaW1tdXRhYmxlLlxuICogVXNlcyBgT2JqZWN0LmZyZWV6ZWAgaWYgYXZhaWxhYmxlLFxuICogb3RoZXJ3aXNlIHRoZSBpbW11dGFiaWxpdHkgaXMgb25seSBpbiB0aGUgdHlwZS5cbiAqXG4gKiBJcyB1c2VkIHRvIGNyZWF0ZSBcImVudW0gbGlrZVwiIG9iamVjdHMuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gb2JqZWN0IHRoZSBvYmplY3QgdG8gZnJlZXplXG4gKiBAcGFyYW0ge1BpY2s8T2JqZWN0Q29uc3RydWN0b3IsICdmcmVlemUnPiA9IE9iamVjdH0gb2MgYE9iamVjdGAgYnkgZGVmYXVsdCxcbiAqIFx0XHRcdFx0YWxsb3dzIHRvIGluamVjdCBjdXN0b20gb2JqZWN0IGNvbnN0cnVjdG9yIGZvciB0ZXN0c1xuICogQHJldHVybnMge1JlYWRvbmx5PFQ+fVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2ZyZWV6ZVxuICovXG5mdW5jdGlvbiBmcmVlemUob2JqZWN0LCBvYykge1xuXHRpZiAob2MgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9jID0gT2JqZWN0XG5cdH1cblx0cmV0dXJuIG9jICYmIHR5cGVvZiBvYy5mcmVlemUgPT09ICdmdW5jdGlvbicgPyBvYy5mcmVlemUob2JqZWN0KSA6IG9iamVjdFxufVxuXG4vKipcbiAqIFNpbmNlIHdlIGNhbiBub3QgcmVseSBvbiBgT2JqZWN0LmFzc2lnbmAgd2UgcHJvdmlkZSBhIHNpbXBsaWZpZWQgdmVyc2lvblxuICogdGhhdCBpcyBzdWZmaWNpZW50IGZvciBvdXIgbmVlZHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBzb3VyY2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAqIEB0aHJvd3MgVHlwZUVycm9yIGlmIHRhcmdldCBpcyBub3QgYW4gb2JqZWN0XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKiBAc2VlIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9mdW5kYW1lbnRhbC1vYmplY3RzLmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cbiAqL1xuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICh0YXJnZXQgPT09IG51bGwgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgaXMgbm90IGFuIG9iamVjdCcpXG5cdH1cblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBBbGwgbWltZSB0eXBlcyB0aGF0IGFyZSBhbGxvd2VkIGFzIGlucHV0IHRvIGBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nYFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcjQXJndW1lbnQwMiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tcGFyc2Vyc3VwcG9ydGVkdHlwZSBXSEFUV0cgSFRNTCBTcGVjXG4gKiBAc2VlIERPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nXG4gKi9cbnZhciBNSU1FX1RZUEUgPSBmcmVlemUoe1xuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIHRoZSBvbmx5IG1pbWUgdHlwZSB0aGF0IHRyaWdnZXJzIHRyZWF0aW5nIGFuIFhNTCBkb2N1bWVudCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBAc2VlIERPTVBhcnNlci5TdXBwb3J0ZWRUeXBlLmlzSFRNTFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgV0hBVFdHIEhUTUwgU3BlY1xuXHQgKi9cblx0SFRNTDogJ3RleHQvaHRtbCcsXG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2hlY2sgYSBtaW1lIHR5cGUgaWYgaXQgaW5kaWNhdGVzIGFuIEhUTUwgZG9jdW1lbnRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC9odG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFRNTCBXaWtpcGVkaWFcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyBNRE5cblx0ICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tZG9tcGFyc2VyLXBhcnNlZnJvbXN0cmluZyBcdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gTUlNRV9UWVBFLkhUTUxcblx0fSxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3htbGAsIHRoZSBzdGFuZGFyZCBtaW1lIHR5cGUgZm9yIFhNTCBkb2N1bWVudHMuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvYXBwbGljYXRpb24veG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzczMDMjc2VjdGlvbi05LjEgUkZDIDczMDNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfQVBQTElDQVRJT046ICdhcHBsaWNhdGlvbi94bWwnLFxuXG5cdC8qKlxuXHQgKiBgdGV4dC9odG1sYCwgYW4gYWxpYXMgZm9yIGBhcHBsaWNhdGlvbi94bWxgLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4yIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC94bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfVEVYVDogJ3RleHQveG1sJyxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3hodG1sK3htbGAsIGluZGljYXRlcyBhbiBYTUwgZG9jdW1lbnQgdGhhdCBoYXMgdGhlIGRlZmF1bHQgSFRNTCBuYW1lc3BhY2UsXG5cdCAqIGJ1dCBpcyBwYXJzZWQgYXMgYW4gWE1MIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3hodG1sK3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50IFdIQVRXRyBET00gU3BlY1xuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hIVE1MIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1hIVE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcblxuXHQvKipcblx0ICogYGltYWdlL3N2Zyt4bWxgLFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2ltYWdlL3N2Zyt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMTEvIFczQyBTVkcgMS4xXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NhbGFibGVfVmVjdG9yX0dyYXBoaWNzIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1NWR19JTUFHRTogJ2ltYWdlL3N2Zyt4bWwnLFxufSlcblxuLyoqXG4gKiBOYW1lc3BhY2VzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyBjb2RlIGJhc2UuXG4gKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzXG4gKi9cbnZhciBOQU1FU1BBQ0UgPSBmcmVlemUoe1xuXHQvKipcblx0ICogVGhlIFhIVE1MIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXG5cdCAqL1xuXHRIVE1MOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsXG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdXJpYCBlcXVhbHMgYE5BTUVTUEFDRS5IVE1MYC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1cmldXG5cdCAqXG5cdCAqIEBzZWUgTkFNRVNQQUNFLkhUTUxcblx0ICovXG5cdGlzSFRNTDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdHJldHVybiB1cmkgPT09IE5BTUVTUEFDRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBTVkcgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXG5cdCAqL1xuXHRTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sOmAgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVxuXHQgKi9cblx0WE1MOiAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJyxcblxuXHQvKipcblx0ICogVGhlIGB4bWxuczpgIG5hbWVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1xuXHQgKi9cblx0WE1MTlM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsXG59KVxuXG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuTUlNRV9UWVBFID0gTUlNRV9UWVBFO1xuZXhwb3J0cy5OQU1FU1BBQ0UgPSBOQU1FU1BBQ0U7XG4iLCJ2YXIgY29udmVudGlvbnMgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKTtcbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG52YXIgc2F4ID0gcmVxdWlyZSgnLi9zYXgnKTtcblxudmFyIERPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uO1xuXG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG52YXIgUGFyc2VFcnJvciA9IHNheC5QYXJzZUVycm9yO1xudmFyIFhNTFJlYWRlciA9IHNheC5YTUxSZWFkZXI7XG5cbi8qKlxuICogTm9ybWFsaXplcyBsaW5lIGVuZGluZyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNzZWMtbGluZS1lbmRzOlxuICpcbiAqID4gWE1MIHBhcnNlZCBlbnRpdGllcyBhcmUgb2Z0ZW4gc3RvcmVkIGluIGNvbXB1dGVyIGZpbGVzIHdoaWNoLFxuICogPiBmb3IgZWRpdGluZyBjb252ZW5pZW5jZSwgYXJlIG9yZ2FuaXplZCBpbnRvIGxpbmVzLlxuICogPiBUaGVzZSBsaW5lcyBhcmUgdHlwaWNhbGx5IHNlcGFyYXRlZCBieSBzb21lIGNvbWJpbmF0aW9uXG4gKiA+IG9mIHRoZSBjaGFyYWN0ZXJzIENBUlJJQUdFIFJFVFVSTiAoI3hEKSBhbmQgTElORSBGRUVEICgjeEEpLlxuICogPlxuICogPiBUbyBzaW1wbGlmeSB0aGUgdGFza3Mgb2YgYXBwbGljYXRpb25zLCB0aGUgWE1MIHByb2Nlc3NvciBtdXN0IGJlaGF2ZVxuICogPiBhcyBpZiBpdCBub3JtYWxpemVkIGFsbCBsaW5lIGJyZWFrcyBpbiBleHRlcm5hbCBwYXJzZWQgZW50aXRpZXMgKGluY2x1ZGluZyB0aGUgZG9jdW1lbnQgZW50aXR5KVxuICogPiBvbiBpbnB1dCwgYmVmb3JlIHBhcnNpbmcsIGJ5IHRyYW5zbGF0aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nIHRvIGEgc2luZ2xlICN4QSBjaGFyYWN0ZXI6XG4gKiA+XG4gKiA+IDEuIHRoZSB0d28tY2hhcmFjdGVyIHNlcXVlbmNlICN4RCAjeEFcbiAqID4gMi4gdGhlIHR3by1jaGFyYWN0ZXIgc2VxdWVuY2UgI3hEICN4ODVcbiAqID4gMy4gdGhlIHNpbmdsZSBjaGFyYWN0ZXIgI3g4NVxuICogPiA0LiB0aGUgc2luZ2xlIGNoYXJhY3RlciAjeDIwMjhcbiAqID4gNS4gYW55ICN4RCBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgI3hBIG9yICN4ODUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVMaW5lRW5kaW5ncyhpbnB1dCkge1xuXHRyZXR1cm4gaW5wdXRcblx0XHQucmVwbGFjZSgvXFxyW1xcblxcdTAwODVdL2csICdcXG4nKVxuXHRcdC5yZXBsYWNlKC9bXFxyXFx1MDA4NVxcdTIwMjhdL2csICdcXG4nKVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIExvY2F0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29sdW1uTnVtYmVyXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtsaW5lTnVtYmVyXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgRE9NUGFyc2VyT3B0aW9uc1xuICogQHByb3BlcnR5IHtET01IYW5kbGVyfSBbZG9tQnVpbGRlcl1cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtlcnJvckhhbmRsZXJdXG4gKiBAcHJvcGVydHkgeyhzdHJpbmcpID0+IHN0cmluZ30gW25vcm1hbGl6ZUxpbmVFbmRpbmdzXSB1c2VkIHRvIHJlcGxhY2UgbGluZSBlbmRpbmdzIGJlZm9yZSBwYXJzaW5nXG4gKiBcdFx0XHRcdFx0XHRkZWZhdWx0cyB0byBgbm9ybWFsaXplTGluZUVuZGluZ3NgXG4gKiBAcHJvcGVydHkge0xvY2F0b3J9IFtsb2NhdG9yXVxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBbeG1sbnNdXG4gKlxuICogQHNlZSBub3JtYWxpemVMaW5lRW5kaW5nc1xuICovXG5cbi8qKlxuICogVGhlIERPTVBhcnNlciBpbnRlcmZhY2UgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcGFyc2UgWE1MIG9yIEhUTUwgc291cmNlIGNvZGVcbiAqIGZyb20gYSBzdHJpbmcgaW50byBhIERPTSBgRG9jdW1lbnRgLlxuICpcbiAqIF94bWxkb20gaXMgZGlmZmVyZW50IGZyb20gdGhlIHNwZWMgaW4gdGhhdCBpdCBhbGxvd3MgYW4gYG9wdGlvbnNgIHBhcmFtZXRlcixcbiAqIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yLl9cbiAqXG4gKiBAcGFyYW0ge0RPTVBhcnNlck9wdGlvbnN9IFtvcHRpb25zXVxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbS1wYXJzaW5nLWFuZC1zZXJpYWxpemF0aW9uXG4gKi9cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKXtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fHtsb2NhdG9yOnt9fTtcbn1cblxuRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbihzb3VyY2UsbWltZVR5cGUpe1xuXHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0dmFyIHNheCA9ICBuZXcgWE1MUmVhZGVyKCk7XG5cdHZhciBkb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IG5ldyBET01IYW5kbGVyKCk7Ly9jb250ZW50SGFuZGxlciBhbmQgTGV4aWNhbEhhbmRsZXJcblx0dmFyIGVycm9ySGFuZGxlciA9IG9wdGlvbnMuZXJyb3JIYW5kbGVyO1xuXHR2YXIgbG9jYXRvciA9IG9wdGlvbnMubG9jYXRvcjtcblx0dmFyIGRlZmF1bHROU01hcCA9IG9wdGlvbnMueG1sbnN8fHt9O1xuXHR2YXIgaXNIVE1MID0gL1xcL3g/aHRtbD8kLy50ZXN0KG1pbWVUeXBlKTsvL21pbWVUeXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHRtbCcpID4gLTE7XG4gIFx0dmFyIGVudGl0eU1hcCA9IGlzSFRNTCA/IGVudGl0aWVzLkhUTUxfRU5USVRJRVMgOiBlbnRpdGllcy5YTUxfRU5USVRJRVM7XG5cdGlmKGxvY2F0b3Ipe1xuXHRcdGRvbUJ1aWxkZXIuc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpXG5cdH1cblxuXHRzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLGRvbUJ1aWxkZXIsbG9jYXRvcik7XG5cdHNheC5kb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IGRvbUJ1aWxkZXI7XG5cdGlmKGlzSFRNTCl7XG5cdFx0ZGVmYXVsdE5TTWFwWycnXSA9IE5BTUVTUEFDRS5IVE1MO1xuXHR9XG5cdGRlZmF1bHROU01hcC54bWwgPSBkZWZhdWx0TlNNYXAueG1sIHx8IE5BTUVTUEFDRS5YTUw7XG5cdHZhciBub3JtYWxpemUgPSBvcHRpb25zLm5vcm1hbGl6ZUxpbmVFbmRpbmdzIHx8IG5vcm1hbGl6ZUxpbmVFbmRpbmdzO1xuXHRpZiAoc291cmNlICYmIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG5cdFx0c2F4LnBhcnNlKFxuXHRcdFx0bm9ybWFsaXplKHNvdXJjZSksXG5cdFx0XHRkZWZhdWx0TlNNYXAsXG5cdFx0XHRlbnRpdHlNYXBcblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0c2F4LmVycm9ySGFuZGxlci5lcnJvcignaW52YWxpZCBkb2Mgc291cmNlJylcblx0fVxuXHRyZXR1cm4gZG9tQnVpbGRlci5kb2M7XG59XG5mdW5jdGlvbiBidWlsZEVycm9ySGFuZGxlcihlcnJvckltcGwsZG9tQnVpbGRlcixsb2NhdG9yKXtcblx0aWYoIWVycm9ySW1wbCl7XG5cdFx0aWYoZG9tQnVpbGRlciBpbnN0YW5jZW9mIERPTUhhbmRsZXIpe1xuXHRcdFx0cmV0dXJuIGRvbUJ1aWxkZXI7XG5cdFx0fVxuXHRcdGVycm9ySW1wbCA9IGRvbUJ1aWxkZXIgO1xuXHR9XG5cdHZhciBlcnJvckhhbmRsZXIgPSB7fVxuXHR2YXIgaXNDYWxsYmFjayA9IGVycm9ySW1wbCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXHRsb2NhdG9yID0gbG9jYXRvcnx8e31cblx0ZnVuY3Rpb24gYnVpbGQoa2V5KXtcblx0XHR2YXIgZm4gPSBlcnJvckltcGxba2V5XTtcblx0XHRpZighZm4gJiYgaXNDYWxsYmFjayl7XG5cdFx0XHRmbiA9IGVycm9ySW1wbC5sZW5ndGggPT0gMj9mdW5jdGlvbihtc2cpe2Vycm9ySW1wbChrZXksbXNnKX06ZXJyb3JJbXBsO1xuXHRcdH1cblx0XHRlcnJvckhhbmRsZXJba2V5XSA9IGZuICYmIGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRmbignW3htbGRvbSAnK2tleSsnXVxcdCcrbXNnK19sb2NhdG9yKGxvY2F0b3IpKTtcblx0XHR9fHxmdW5jdGlvbigpe307XG5cdH1cblx0YnVpbGQoJ3dhcm5pbmcnKTtcblx0YnVpbGQoJ2Vycm9yJyk7XG5cdGJ1aWxkKCdmYXRhbEVycm9yJyk7XG5cdHJldHVybiBlcnJvckhhbmRsZXI7XG59XG5cbi8vY29uc29sZS5sb2coJyNcXG5cXG5cXG5cXG5cXG5cXG5cXG4jIyMjJylcbi8qKlxuICogK0NvbnRlbnRIYW5kbGVyK0Vycm9ySGFuZGxlclxuICogK0xleGljYWxIYW5kbGVyK0VudGl0eVJlc29sdmVyMlxuICogLURlY2xIYW5kbGVyLURUREhhbmRsZXJcbiAqXG4gKiBEZWZhdWx0SGFuZGxlcjpFbnRpdHlSZXNvbHZlciwgRFRESGFuZGxlciwgQ29udGVudEhhbmRsZXIsIEVycm9ySGFuZGxlclxuICogRGVmYXVsdEhhbmRsZXIyOkRlZmF1bHRIYW5kbGVyLExleGljYWxIYW5kbGVyLCBEZWNsSGFuZGxlciwgRW50aXR5UmVzb2x2ZXIyXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9oZWxwZXJzL0RlZmF1bHRIYW5kbGVyLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NSGFuZGxlcigpIHtcbiAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5mdW5jdGlvbiBwb3NpdGlvbihsb2NhdG9yLG5vZGUpe1xuXHRub2RlLmxpbmVOdW1iZXIgPSBsb2NhdG9yLmxpbmVOdW1iZXI7XG5cdG5vZGUuY29sdW1uTnVtYmVyID0gbG9jYXRvci5jb2x1bW5OdW1iZXI7XG59XG4vKipcbiAqIEBzZWUgb3JnLnhtbC5zYXguQ29udGVudEhhbmRsZXIjc3RhcnREb2N1bWVudFxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvQ29udGVudEhhbmRsZXIuaHRtbFxuICovXG5ET01IYW5kbGVyLnByb3RvdHlwZSA9IHtcblx0c3RhcnREb2N1bWVudCA6IGZ1bmN0aW9uKCkge1xuICAgIFx0dGhpcy5kb2MgPSBuZXcgRE9NSW1wbGVtZW50YXRpb24oKS5jcmVhdGVEb2N1bWVudChudWxsLCBudWxsLCBudWxsKTtcbiAgICBcdGlmICh0aGlzLmxvY2F0b3IpIHtcbiAgICAgICAgXHR0aGlzLmRvYy5kb2N1bWVudFVSSSA9IHRoaXMubG9jYXRvci5zeXN0ZW1JZDtcbiAgICBcdH1cblx0fSxcblx0c3RhcnRFbGVtZW50OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSwgYXR0cnMpIHtcblx0XHR2YXIgZG9jID0gdGhpcy5kb2M7XG5cdCAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcU5hbWV8fGxvY2FsTmFtZSk7XG5cdCAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG5cdCAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWw7XG5cblx0XHR0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGVsKVxuXHQgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICB2YXIgbmFtZXNwYWNlVVJJID0gYXR0cnMuZ2V0VVJJKGkpO1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJzLmdldFZhbHVlKGkpO1xuXHQgICAgICAgIHZhciBxTmFtZSA9IGF0dHJzLmdldFFOYW1lKGkpO1xuXHRcdFx0dmFyIGF0dHIgPSBkb2MuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxTmFtZSk7XG5cdFx0XHR0aGlzLmxvY2F0b3IgJiZwb3NpdGlvbihhdHRycy5nZXRMb2NhdG9yKGkpLGF0dHIpO1xuXHRcdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gdmFsdWU7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdCAgICB9XG5cdH0sXG5cdGVuZEVsZW1lbnQ6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50XG5cdFx0dmFyIHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWU7XG5cdFx0dGhpcy5jdXJyZW50RWxlbWVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcblx0fSxcblx0c3RhcnRQcmVmaXhNYXBwaW5nOmZ1bmN0aW9uKHByZWZpeCwgdXJpKSB7XG5cdH0sXG5cdGVuZFByZWZpeE1hcHBpbmc6ZnVuY3Rpb24ocHJlZml4KSB7XG5cdH0sXG5cdHByb2Nlc3NpbmdJbnN0cnVjdGlvbjpmdW5jdGlvbih0YXJnZXQsIGRhdGEpIHtcblx0ICAgIHZhciBpbnMgPSB0aGlzLmRvYy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsaW5zKVxuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBpbnMpO1xuXHR9LFxuXHRpZ25vcmFibGVXaGl0ZXNwYWNlOmZ1bmN0aW9uKGNoLCBzdGFydCwgbGVuZ3RoKSB7XG5cdH0sXG5cdGNoYXJhY3RlcnM6ZnVuY3Rpb24oY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcblx0XHRjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLGFyZ3VtZW50cylcblx0XHQvL2NvbnNvbGUubG9nKGNoYXJzKVxuXHRcdGlmKGNoYXJzKXtcblx0XHRcdGlmICh0aGlzLmNkYXRhKSB7XG5cdFx0XHRcdHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihjaGFycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjaGFycyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRFbGVtZW50KXtcblx0XHRcdFx0dGhpcy5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG5cdFx0XHR9ZWxzZSBpZigvXlxccyokLy50ZXN0KGNoYXJzKSl7XG5cdFx0XHRcdHRoaXMuZG9jLmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcblx0XHRcdFx0Ly9wcm9jZXNzIHhtbFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixjaGFyTm9kZSlcblx0XHR9XG5cdH0sXG5cdHNraXBwZWRFbnRpdHk6ZnVuY3Rpb24obmFtZSkge1xuXHR9LFxuXHRlbmREb2N1bWVudDpmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRvYy5ub3JtYWxpemUoKTtcblx0fSxcblx0c2V0RG9jdW1lbnRMb2NhdG9yOmZ1bmN0aW9uIChsb2NhdG9yKSB7XG5cdCAgICBpZih0aGlzLmxvY2F0b3IgPSBsb2NhdG9yKXsvLyAmJiAhKCdsaW5lTnVtYmVyJyBpbiBsb2NhdG9yKSl7XG5cdCAgICBcdGxvY2F0b3IubGluZU51bWJlciA9IDA7XG5cdCAgICB9XG5cdH0sXG5cdC8vTGV4aWNhbEhhbmRsZXJcblx0Y29tbWVudDpmdW5jdGlvbihjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuXHRcdGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsYXJndW1lbnRzKVxuXHQgICAgdmFyIGNvbW0gPSB0aGlzLmRvYy5jcmVhdGVDb21tZW50KGNoYXJzKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsY29tbSlcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgY29tbSk7XG5cdH0sXG5cblx0c3RhcnRDREFUQTpmdW5jdGlvbigpIHtcblx0ICAgIC8vdXNlZCBpbiBjaGFyYWN0ZXJzKCkgbWV0aG9kc1xuXHQgICAgdGhpcy5jZGF0YSA9IHRydWU7XG5cdH0sXG5cdGVuZENEQVRBOmZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xuXHR9LFxuXG5cdHN0YXJ0RFREOmZ1bmN0aW9uKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuXHRcdHZhciBpbXBsID0gdGhpcy5kb2MuaW1wbGVtZW50YXRpb247XG5cdCAgICBpZiAoaW1wbCAmJiBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZSkge1xuXHQgICAgICAgIHZhciBkdCA9IGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCk7XG5cdCAgICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixkdClcblx0ICAgICAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGR0KTtcblx0XHRcdFx0XHR0aGlzLmRvYy5kb2N0eXBlID0gZHQ7XG5cdCAgICB9XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2VlIG9yZy54bWwuc2F4LkVycm9ySGFuZGxlclxuXHQgKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9FcnJvckhhbmRsZXIuaHRtbFxuXHQgKi9cblx0d2FybmluZzpmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUud2FybignW3htbGRvbSB3YXJuaW5nXVxcdCcrZXJyb3IsX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG5cdH0sXG5cdGVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW3htbGRvbSBlcnJvcl1cXHQnK2Vycm9yLF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuXHR9LFxuXHRmYXRhbEVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IFBhcnNlRXJyb3IoZXJyb3IsIHRoaXMubG9jYXRvcik7XG5cdH1cbn1cbmZ1bmN0aW9uIF9sb2NhdG9yKGwpe1xuXHRpZihsKXtcblx0XHRyZXR1cm4gJ1xcbkAnKyhsLnN5c3RlbUlkIHx8JycpKycjW2xpbmU6JytsLmxpbmVOdW1iZXIrJyxjb2w6JytsLmNvbHVtbk51bWJlcisnXSdcblx0fVxufVxuZnVuY3Rpb24gX3RvU3RyaW5nKGNoYXJzLHN0YXJ0LGxlbmd0aCl7XG5cdGlmKHR5cGVvZiBjaGFycyA9PSAnc3RyaW5nJyl7XG5cdFx0cmV0dXJuIGNoYXJzLnN1YnN0cihzdGFydCxsZW5ndGgpXG5cdH1lbHNley8vamF2YSBzYXggY29ubmVjdCB3aWR0aCB4bWxkb20gb24gcmhpbm8od2hhdCBhYm91dDogXCI/ICYmICEoY2hhcnMgaW5zdGFuY2VvZiBTdHJpbmcpXCIpXG5cdFx0aWYoY2hhcnMubGVuZ3RoID49IHN0YXJ0K2xlbmd0aCB8fCBzdGFydCl7XG5cdFx0XHRyZXR1cm4gbmV3IGphdmEubGFuZy5TdHJpbmcoY2hhcnMsc3RhcnQsbGVuZ3RoKSsnJztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYXJzO1xuXHR9XG59XG5cbi8qXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvTGV4aWNhbEhhbmRsZXIuaHRtbFxuICogdXNlZCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkxleGljYWxIYW5kbGVyOlxuICogICNjb21tZW50KGNoYXJzLCBzdGFydCwgbGVuZ3RoKVxuICogICNzdGFydENEQVRBKClcbiAqICAjZW5kQ0RBVEEoKVxuICogICNzdGFydERURChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKlxuICpcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5MZXhpY2FsSGFuZGxlcjpcbiAqICAjZW5kRFREKClcbiAqICAjc3RhcnRFbnRpdHkobmFtZSlcbiAqICAjZW5kRW50aXR5KG5hbWUpXG4gKlxuICpcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9EZWNsSGFuZGxlci5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuRGVjbEhhbmRsZXJcbiAqIFx0I2F0dHJpYnV0ZURlY2woZU5hbWUsIGFOYW1lLCB0eXBlLCBtb2RlLCB2YWx1ZSlcbiAqICAjZWxlbWVudERlY2wobmFtZSwgbW9kZWwpXG4gKiAgI2V4dGVybmFsRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2ludGVybmFsRW50aXR5RGVjbChuYW1lLCB2YWx1ZSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9FbnRpdHlSZXNvbHZlcjIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguRW50aXR5UmVzb2x2ZXIyXG4gKiAgI3Jlc29sdmVFbnRpdHkoU3RyaW5nIG5hbWUsU3RyaW5nIHB1YmxpY0lkLFN0cmluZyBiYXNlVVJJLFN0cmluZyBzeXN0ZW1JZClcbiAqICAjcmVzb2x2ZUVudGl0eShwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2dldEV4dGVybmFsU3Vic2V0KG5hbWUsIGJhc2VVUkkpXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9EVERIYW5kbGVyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LkRUREhhbmRsZXJcbiAqICAjbm90YXRpb25EZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge307XG4gKiAgI3VucGFyc2VkRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQsIG5vdGF0aW9uTmFtZSkge307XG4gKi9cblwiZW5kRFRELHN0YXJ0RW50aXR5LGVuZEVudGl0eSxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wscmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsXCIucmVwbGFjZSgvXFx3Ky9nLGZ1bmN0aW9uKGtleSl7XG5cdERPTUhhbmRsZXIucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpe3JldHVybiBudWxsfVxufSlcblxuLyogUHJpdmF0ZSBzdGF0aWMgaGVscGVycyB0cmVhdGVkIGJlbG93IGFzIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcywgc28gZG9uJ3QgbmVlZCB0byBhZGQgdGhlc2UgdG8gdGhlIHB1YmxpYyBBUEk7IHdlIG1pZ2h0IHVzZSBhIFJlbGF0b3IgdG8gYWxzbyBnZXQgcmlkIG9mIG5vbi1zdGFuZGFyZCBwdWJsaWMgcHJvcGVydGllcyAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudCAoaGFuZGVyLG5vZGUpIHtcbiAgICBpZiAoIWhhbmRlci5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICBoYW5kZXIuZG9jLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRlci5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59Ly9hcHBlbmRDaGlsZCBhbmQgc2V0QXR0cmlidXRlTlMgYXJlIHByZWZvcm1hbmNlIGtleVxuXG5leHBvcnRzLl9fRE9NSGFuZGxlciA9IERPTUhhbmRsZXI7XG5leHBvcnRzLm5vcm1hbGl6ZUxpbmVFbmRpbmdzID0gbm9ybWFsaXplTGluZUVuZGluZ3M7XG5leHBvcnRzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcbiIsInZhciBjb252ZW50aW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpO1xuXG52YXIgZmluZCA9IGNvbnZlbnRpb25zLmZpbmQ7XG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG4vKipcbiAqIEEgcHJlcmVxdWlzaXRlIGZvciBgW10uZmlsdGVyYCwgdG8gZHJvcCBlbGVtZW50cyB0aGF0IGFyZSBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm90RW1wdHlTdHJpbmcgKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dCAhPT0gJydcbn1cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jc3BsaXQtb24tYXNjaWktd2hpdGVzcGFjZVxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfSAoY2FuIGJlIGVtcHR5KVxuICovXG5mdW5jdGlvbiBzcGxpdE9uQVNDSUlXaGl0ZXNwYWNlKGlucHV0KSB7XG5cdC8vIFUrMDAwOSBUQUIsIFUrMDAwQSBMRiwgVSswMDBDIEZGLCBVKzAwMEQgQ1IsIFUrMDAyMCBTUEFDRVxuXHRyZXR1cm4gaW5wdXQgPyBpbnB1dC5zcGxpdCgvW1xcdFxcblxcZlxcciBdKy8pLmZpbHRlcihub3RFbXB0eVN0cmluZykgOiBbXVxufVxuXG4vKipcbiAqIEFkZHMgZWxlbWVudCBhcyBhIGtleSB0byBjdXJyZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn0gY3VycmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn1cbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFNldFJlZHVjZXIgKGN1cnJlbnQsIGVsZW1lbnQpIHtcblx0aWYgKCFjdXJyZW50Lmhhc093blByb3BlcnR5KGVsZW1lbnQpKSB7XG5cdFx0Y3VycmVudFtlbGVtZW50XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jb3JkZXJlZC1zZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5mdW5jdGlvbiB0b09yZGVyZWRTZXQoaW5wdXQpIHtcblx0aWYgKCFpbnB1dCkgcmV0dXJuIFtdO1xuXHR2YXIgbGlzdCA9IHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobGlzdC5yZWR1Y2Uob3JkZXJlZFNldFJlZHVjZXIsIHt9KSlcbn1cblxuLyoqXG4gKiBVc2VzIGBsaXN0LmluZGV4T2ZgIHRvIGltcGxlbWVudCBzb21ldGhpbmcgbGlrZSBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCxcbiAqIHdoaWNoIHdlIGNhbiBub3QgcmVseSBvbiBiZWluZyBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHthbnlbXX0gbGlzdFxuICogQHJldHVybnMge2Z1bmN0aW9uKGFueSk6IGJvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMgKGxpc3QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbGlzdCAmJiBsaXN0LmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvcHkoc3JjLGRlc3Qpe1xuXHRmb3IodmFyIHAgaW4gc3JjKXtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNyYywgcCkpIHtcblx0XHRcdGRlc3RbcF0gPSBzcmNbcF07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuXlxcdytcXC5wcm90b3R5cGVcXC4oW19cXHddKylcXHMqPVxccyooKD86LipcXHtcXHMqP1tcXHJcXG5dW1xcc1xcU10qP159KXxcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKihcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRzKENsYXNzLFN1cGVyKXtcblx0dmFyIHB0ID0gQ2xhc3MucHJvdG90eXBlO1xuXHRpZighKHB0IGluc3RhbmNlb2YgU3VwZXIpKXtcblx0XHRmdW5jdGlvbiB0KCl7fTtcblx0XHR0LnByb3RvdHlwZSA9IFN1cGVyLnByb3RvdHlwZTtcblx0XHR0ID0gbmV3IHQoKTtcblx0XHRjb3B5KHB0LHQpO1xuXHRcdENsYXNzLnByb3RvdHlwZSA9IHB0ID0gdDtcblx0fVxuXHRpZihwdC5jb25zdHJ1Y3RvciAhPSBDbGFzcyl7XG5cdFx0aWYodHlwZW9mIENsYXNzICE9ICdmdW5jdGlvbicpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcInVua25vd24gQ2xhc3M6XCIrQ2xhc3MpXG5cdFx0fVxuXHRcdHB0LmNvbnN0cnVjdG9yID0gQ2xhc3Ncblx0fVxufVxuXG4vLyBOb2RlIFR5cGVzXG52YXIgTm9kZVR5cGUgPSB7fVxudmFyIEVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gTm9kZVR5cGUuQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gMjtcbnZhciBURVhUX05PREUgICAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5URVhUX05PREUgICAgICAgICAgICAgICAgICAgPSAzO1xudmFyIENEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkNEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IDQ7XG52YXIgRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gTm9kZVR5cGUuRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gNTtcbnZhciBFTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSA2O1xudmFyIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IE5vZGVUeXBlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IDc7XG52YXIgQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gODtcbnZhciBET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSA5O1xudmFyIERPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IDEwO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLk5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IDEyO1xuXG4vLyBFeGNlcHRpb25Db2RlXG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9XG52YXIgRXhjZXB0aW9uTWVzc2FnZSA9IHt9O1xudmFyIElOREVYX1NJWkVfRVJSICAgICAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzFdPVwiSW5kZXggc2l6ZSBlcnJvclwiKSwxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVsyXT1cIkRPTVN0cmluZyBzaXplIGVycm9yXCIpLDIpO1xudmFyIEhJRVJBUkNIWV9SRVFVRVNUX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzNdPVwiSGllcmFyY2h5IHJlcXVlc3QgZXJyb3JcIiksMyk7XG52YXIgV1JPTkdfRE9DVU1FTlRfRVJSICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5XUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNF09XCJXcm9uZyBkb2N1bWVudFwiKSw0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgICAgICAgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs1XT1cIkludmFsaWQgY2hhcmFjdGVyXCIpLDUpO1xudmFyIE5PX0RBVEFfQUxMT1dFRF9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzZdPVwiTm8gZGF0YSBhbGxvd2VkXCIpLDYpO1xudmFyIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gKChFeGNlcHRpb25NZXNzYWdlWzddPVwiTm8gbW9kaWZpY2F0aW9uIGFsbG93ZWRcIiksNyk7XG52YXIgTk9UX0ZPVU5EX0VSUiAgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOF09XCJOb3QgZm91bmRcIiksOCk7XG52YXIgTk9UX1NVUFBPUlRFRF9FUlIgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOV09XCJOb3Qgc3VwcG9ydGVkXCIpLDkpO1xudmFyIElOVVNFX0FUVFJJQlVURV9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzEwXT1cIkF0dHJpYnV0ZSBpbiB1c2VcIiksMTApO1xuLy9sZXZlbDJcbnZhciBJTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTFdPVwiSW52YWxpZCBzdGF0ZVwiKSwxMSk7XG52YXIgU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgICAgICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEyXT1cIlN5bnRheCBlcnJvclwiKSwxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEzXT1cIkludmFsaWQgbW9kaWZpY2F0aW9uXCIpLDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuTkFNRVNQQUNFX0VSUiAgICAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNF09XCJJbnZhbGlkIG5hbWVzcGFjZVwiKSwxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfQUNDRVNTX0VSUiAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTVdPVwiSW52YWxpZCBhY2Nlc3NcIiksMTUpO1xuXG4vKipcbiAqIERPTSBMZXZlbCAyXG4gKiBPYmplY3QgRE9NRXhjZXB0aW9uXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9lY21hLXNjcmlwdC1sYW5ndWFnZS1iaW5kaW5nLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NRXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UpIHtcblx0aWYobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKXtcblx0XHR2YXIgZXJyb3IgPSBtZXNzYWdlO1xuXHR9ZWxzZXtcblx0XHRlcnJvciA9IHRoaXM7XG5cdFx0RXJyb3IuY2FsbCh0aGlzLCBFeGNlcHRpb25NZXNzYWdlW2NvZGVdKTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBFeGNlcHRpb25NZXNzYWdlW2NvZGVdO1xuXHRcdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBET01FeGNlcHRpb24pO1xuXHR9XG5cdGVycm9yLmNvZGUgPSBjb2RlO1xuXHRpZihtZXNzYWdlKSB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSxET01FeGNlcHRpb24pXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC01MzYyOTcxNzdcbiAqIFRoZSBOb2RlTGlzdCBpbnRlcmZhY2UgcHJvdmlkZXMgdGhlIGFic3RyYWN0aW9uIG9mIGFuIG9yZGVyZWQgY29sbGVjdGlvbiBvZiBub2Rlcywgd2l0aG91dCBkZWZpbmluZyBvciBjb25zdHJhaW5pbmcgaG93IHRoaXMgY29sbGVjdGlvbiBpcyBpbXBsZW1lbnRlZC4gTm9kZUxpc3Qgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogVGhlIGl0ZW1zIGluIHRoZSBOb2RlTGlzdCBhcmUgYWNjZXNzaWJsZSB2aWEgYW4gaW50ZWdyYWwgaW5kZXgsIHN0YXJ0aW5nIGZyb20gMC5cbiAqL1xuZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG59O1xuTm9kZUxpc3QucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdC4gVGhlIHJhbmdlIG9mIHZhbGlkIGNoaWxkIG5vZGUgaW5kaWNlcyBpcyAwIHRvIGxlbmd0aC0xIGluY2x1c2l2ZS5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKi9cblx0bGVuZ3RoOjAsXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBpbmRleHRoIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24uIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LCB0aGlzIHJldHVybnMgbnVsbC5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKiBAcGFyYW0gaW5kZXggIHVuc2lnbmVkIGxvbmdcblx0ICogICBJbmRleCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuXHQgKiBAcmV0dXJuIE5vZGVcblx0ICogXHRUaGUgbm9kZSBhdCB0aGUgaW5kZXh0aCBwb3NpdGlvbiBpbiB0aGUgTm9kZUxpc3QsIG9yIG51bGwgaWYgdGhhdCBpcyBub3QgYSB2YWxpZCBpbmRleC5cblx0ICovXG5cdGl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxlbmd0aCA/IHRoaXNbaW5kZXhdIDogbnVsbDtcblx0fSxcblx0dG9TdHJpbmc6ZnVuY3Rpb24oaXNIVE1MLG5vZGVGaWx0ZXIpe1xuXHRcdGZvcih2YXIgYnVmID0gW10sIGkgPSAwO2k8dGhpcy5sZW5ndGg7aSsrKXtcblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXNbaV0sYnVmLGlzSFRNTCxub2RlRmlsdGVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24gKE5vZGUpOmJvb2xlYW59IHByZWRpY2F0ZVxuXHQgKiBAcmV0dXJucyB7Tm9kZVtdfVxuXHQgKi9cblx0ZmlsdGVyOiBmdW5jdGlvbiAocHJlZGljYXRlKSB7XG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLCBwcmVkaWNhdGUpO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOb2RlfSBpdGVtXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRpbmRleE9mOiBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIGl0ZW0pO1xuXHR9LFxufTtcblxuZnVuY3Rpb24gTGl2ZU5vZGVMaXN0KG5vZGUscmVmcmVzaCl7XG5cdHRoaXMuX25vZGUgPSBub2RlO1xuXHR0aGlzLl9yZWZyZXNoID0gcmVmcmVzaFxuXHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG59XG5mdW5jdGlvbiBfdXBkYXRlTGl2ZUxpc3QobGlzdCl7XG5cdHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG5cdGlmIChsaXN0Ll9pbmMgIT09IGluYykge1xuXHRcdHZhciBscyA9IGxpc3QuX3JlZnJlc2gobGlzdC5fbm9kZSk7XG5cdFx0X19zZXRfXyhsaXN0LCdsZW5ndGgnLGxzLmxlbmd0aCk7XG5cdFx0aWYgKCFsaXN0LiQkbGVuZ3RoIHx8IGxzLmxlbmd0aCA8IGxpc3QuJCRsZW5ndGgpIHtcblx0XHRcdGZvciAodmFyIGkgPSBscy5sZW5ndGg7IGkgaW4gbGlzdDsgaSsrKSB7XG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlzdCwgaSkpIHtcblx0XHRcdFx0XHRkZWxldGUgbGlzdFtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb3B5KGxzLGxpc3QpO1xuXHRcdGxpc3QuX2luYyA9IGluYztcblx0fVxufVxuTGl2ZU5vZGVMaXN0LnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oaSl7XG5cdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn1cblxuX2V4dGVuZHMoTGl2ZU5vZGVMaXN0LE5vZGVMaXN0KTtcblxuLyoqXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGUgTmFtZWROb2RlTWFwIGludGVyZmFjZSBhcmUgdXNlZFxuICogdG8gcmVwcmVzZW50IGNvbGxlY3Rpb25zIG9mIG5vZGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IG5hbWUuXG4gKiBOb3RlIHRoYXQgTmFtZWROb2RlTWFwIGRvZXMgbm90IGluaGVyaXQgZnJvbSBOb2RlTGlzdDtcbiAqIE5hbWVkTm9kZU1hcHMgYXJlIG5vdCBtYWludGFpbmVkIGluIGFueSBwYXJ0aWN1bGFyIG9yZGVyLlxuICogT2JqZWN0cyBjb250YWluZWQgaW4gYW4gb2JqZWN0IGltcGxlbWVudGluZyBOYW1lZE5vZGVNYXAgbWF5IGFsc28gYmUgYWNjZXNzZWQgYnkgYW4gb3JkaW5hbCBpbmRleCxcbiAqIGJ1dCB0aGlzIGlzIHNpbXBseSB0byBhbGxvdyBjb252ZW5pZW50IGVudW1lcmF0aW9uIG9mIHRoZSBjb250ZW50cyBvZiBhIE5hbWVkTm9kZU1hcCxcbiAqIGFuZCBkb2VzIG5vdCBpbXBseSB0aGF0IHRoZSBET00gc3BlY2lmaWVzIGFuIG9yZGVyIHRvIHRoZXNlIE5vZGVzLlxuICogTmFtZWROb2RlTWFwIG9iamVjdHMgaW4gdGhlIERPTSBhcmUgbGl2ZS5cbiAqIHVzZWQgZm9yIGF0dHJpYnV0ZXMgb3IgRG9jdW1lbnRUeXBlIGVudGl0aWVzXG4gKi9cbmZ1bmN0aW9uIE5hbWVkTm9kZU1hcCgpIHtcbn07XG5cbmZ1bmN0aW9uIF9maW5kTm9kZUluZGV4KGxpc3Qsbm9kZSl7XG5cdHZhciBpID0gbGlzdC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0aWYobGlzdFtpXSA9PT0gbm9kZSl7cmV0dXJuIGl9XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZE5hbWVkTm9kZShlbCxsaXN0LG5ld0F0dHIsb2xkQXR0cil7XG5cdGlmKG9sZEF0dHIpe1xuXHRcdGxpc3RbX2ZpbmROb2RlSW5kZXgobGlzdCxvbGRBdHRyKV0gPSBuZXdBdHRyO1xuXHR9ZWxzZXtcblx0XHRsaXN0W2xpc3QubGVuZ3RoKytdID0gbmV3QXR0cjtcblx0fVxuXHRpZihlbCl7XG5cdFx0bmV3QXR0ci5vd25lckVsZW1lbnQgPSBlbDtcblx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRpZihkb2Mpe1xuXHRcdFx0b2xkQXR0ciAmJiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG9sZEF0dHIpO1xuXHRcdFx0X29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIF9yZW1vdmVOYW1lZE5vZGUoZWwsbGlzdCxhdHRyKXtcblx0Ly9jb25zb2xlLmxvZygncmVtb3ZlIGF0dHI6JythdHRyKVxuXHR2YXIgaSA9IF9maW5kTm9kZUluZGV4KGxpc3QsYXR0cik7XG5cdGlmKGk+PTApe1xuXHRcdHZhciBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aC0xXG5cdFx0d2hpbGUoaTxsYXN0SW5kZXgpe1xuXHRcdFx0bGlzdFtpXSA9IGxpc3RbKytpXVxuXHRcdH1cblx0XHRsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcblx0XHRpZihlbCl7XG5cdFx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRcdGlmKGRvYyl7XG5cdFx0XHRcdF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsYXR0cik7XG5cdFx0XHRcdGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1lbHNle1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oTk9UX0ZPVU5EX0VSUixuZXcgRXJyb3IoZWwudGFnTmFtZSsnQCcrYXR0cikpXG5cdH1cbn1cbk5hbWVkTm9kZU1hcC5wcm90b3R5cGUgPSB7XG5cdGxlbmd0aDowLFxuXHRpdGVtOk5vZGVMaXN0LnByb3RvdHlwZS5pdGVtLFxuXHRnZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuLy9cdFx0aWYoa2V5LmluZGV4T2YoJzonKT4wIHx8IGtleSA9PSAneG1sbnMnKXtcbi8vXHRcdFx0cmV0dXJuIG51bGw7XG4vL1x0XHR9XG5cdFx0Ly9jb25zb2xlLmxvZygpXG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIGF0dHIgPSB0aGlzW2ldO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhhdHRyLm5vZGVOYW1lLGtleSlcblx0XHRcdGlmKGF0dHIubm9kZU5hbWUgPT0ga2V5KXtcblx0XHRcdFx0cmV0dXJuIGF0dHI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGF0dHIpIHtcblx0XHR2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcblx0XHRpZihlbCAmJiBlbCE9dGhpcy5fb3duZXJFbGVtZW50KXtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG5cdFx0fVxuXHRcdHZhciBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oYXR0ci5ub2RlTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0c2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKGF0dHIpIHsvLyByYWlzZXM6IFdST05HX0RPQ1VNRU5UX0VSUixOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIsSU5VU0VfQVRUUklCVVRFX0VSUlxuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50LCBvbGRBdHRyO1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0b2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMoYXR0ci5uYW1lc3BhY2VVUkksYXR0ci5sb2NhbE5hbWUpO1xuXHRcdF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cixvbGRBdHRyKTtcblx0XHRyZXR1cm4gb2xkQXR0cjtcblx0fSxcblxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0cmVtb3ZlTmFtZWRJdGVtOiBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGtleSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblxuXG5cdH0sLy8gcmFpc2VzOiBOT1RfRk9VTkRfRVJSLE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUlxuXG5cdC8vZm9yIGxldmVsMlxuXHRyZW1vdmVOYW1lZEl0ZW1OUzpmdW5jdGlvbihuYW1lc3BhY2VVUkksbG9jYWxOYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLGxvY2FsTmFtZSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblx0fSxcblx0Z2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIG5vZGUgPSB0aGlzW2ldO1xuXHRcdFx0aWYobm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lICYmIG5vZGUubmFtZXNwYWNlVVJJID09IG5hbWVzcGFjZVVSSSl7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuLyoqXG4gKiBUaGUgRE9NSW1wbGVtZW50YXRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHByb3ZpZGluZyBtZXRob2RzXG4gKiB3aGljaCBhcmUgbm90IGRlcGVuZGVudCBvbiBhbnkgcGFydGljdWxhciBkb2N1bWVudC5cbiAqIFN1Y2ggYW4gb2JqZWN0IGlzIHJldHVybmVkIGJ5IHRoZSBgRG9jdW1lbnQuaW1wbGVtZW50YXRpb25gIHByb3BlcnR5LlxuICpcbiAqIF9fVGhlIGluZGl2aWR1YWwgbWV0aG9kcyBkZXNjcmliZSB0aGUgZGlmZmVyZW5jZXMgY29tcGFyZWQgdG8gdGhlIHNwZWNzLl9fXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24gTUROXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvbGV2ZWwtb25lLWNvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDEgQ29yZSAoSW5pdGlhbClcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMiBDb3JlXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDMgQ29yZVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbWltcGxlbWVudGF0aW9uIERPTSBMaXZpbmcgU3RhbmRhcmRcbiAqL1xuZnVuY3Rpb24gRE9NSW1wbGVtZW50YXRpb24oKSB7XG59XG5cbkRPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIFRoZSBET01JbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCkgbWV0aG9kIHJldHVybnMgYSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiBhIGdpdmVuIGZlYXR1cmUgaXMgc3VwcG9ydGVkLlxuXHQgKiBUaGUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBmYWlybHkgZGl2ZXJnZWQgaW4gd2hhdCBraW5kIG9mIGZlYXR1cmVzIHdlcmUgcmVwb3J0ZWQuXG5cdCAqIFRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgc3BlYyBzZXR0bGVkIHRvIGZvcmNlIHRoaXMgbWV0aG9kIHRvIGFsd2F5cyByZXR1cm4gdHJ1ZSwgd2hlcmUgdGhlIGZ1bmN0aW9uYWxpdHkgd2FzIGFjY3VyYXRlIGFuZCBpbiB1c2UuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIEl0IGlzIGRlcHJlY2F0ZWQgYW5kIG1vZGVybiBicm93c2VycyByZXR1cm4gdHJ1ZSBpbiBhbGwgY2FzZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdmVyc2lvbl1cblx0ICogQHJldHVybnMge2Jvb2xlYW59IGFsd2F5cyB0cnVlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2hhc0ZlYXR1cmUgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9sZXZlbC1vbmUtY29yZS5odG1sI0lELTVDRUQ5NEQ3IERPTSBMZXZlbCAxIENvcmVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlIERPTSBMaXZpbmcgU3RhbmRhcmRcblx0ICovXG5cdGhhc0ZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBYTUwgRG9jdW1lbnQgb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSB3aXRoIGl0cyBkb2N1bWVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBfX0l0IGJlaGF2ZXMgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlIGRlc2NyaXB0aW9uIGluIHRoZSBsaXZpbmcgc3RhbmRhcmRfXzpcblx0ICogLSBUaGVyZSBpcyBubyBpbnRlcmZhY2UvY2xhc3MgYFhNTERvY3VtZW50YCwgaXQgcmV0dXJucyBhIGBEb2N1bWVudGAgaW5zdGFuY2UuXG5cdCAqIC0gYGNvbnRlbnRUeXBlYCwgYGVuY29kaW5nYCwgYG1vZGVgLCBgb3JpZ2luYCwgYHVybGAgZmllbGRzIGFyZSBjdXJyZW50bHkgbm90IGRlY2xhcmVkLlxuXHQgKiAtIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IHZhbGlkYXRpbmcgbmFtZXMgb3IgcXVhbGlmaWVkIG5hbWVzXG5cdCAqICAgKHdoZW4gcGFyc2luZyBYTUwgc3RyaW5ncywgdGhlIFNBWCBwYXJzZXIgdGFrZXMgY2FyZSBvZiB0aGF0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcblx0ICogQHBhcmFtIHtEb2N1bWVudFR5cGU9bnVsbH0gZG9jdHlwZVxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZURvY3VtZW50IE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY3VtZW50IERPTSBMZXZlbCAyIENvcmUgKGluaXRpYWwpXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnQgIERPTSBMZXZlbCAyIENvcmVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3ZhbGlkYXRlLWFuZC1leHRyYWN0IERPTTogVmFsaWRhdGUgYW5kIGV4dHJhY3Rcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1OYW1lU3RhcnRDaGFyIFhNTCBTcGVjOiBOYW1lc1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMvI25zLXF1YWxuYW1lcyBYTUwgTmFtZXNwYWNlczogUXVhbGlmaWVkIG5hbWVzXG5cdCAqL1xuXHRjcmVhdGVEb2N1bWVudDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCAgcXVhbGlmaWVkTmFtZSwgZG9jdHlwZSl7XG5cdFx0dmFyIGRvYyA9IG5ldyBEb2N1bWVudCgpO1xuXHRcdGRvYy5pbXBsZW1lbnRhdGlvbiA9IHRoaXM7XG5cdFx0ZG9jLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRkb2MuZG9jdHlwZSA9IGRvY3R5cGUgfHwgbnVsbDtcblx0XHRpZiAoZG9jdHlwZSl7XG5cdFx0XHRkb2MuYXBwZW5kQ2hpbGQoZG9jdHlwZSk7XG5cdFx0fVxuXHRcdGlmIChxdWFsaWZpZWROYW1lKXtcblx0XHRcdHZhciByb290ID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKHJvb3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jO1xuXHR9LFxuXHQvKipcblx0ICogUmV0dXJucyBhIGRvY3R5cGUsIHdpdGggdGhlIGdpdmVuIGBxdWFsaWZpZWROYW1lYCwgYHB1YmxpY0lkYCwgYW5kIGBzeXN0ZW1JZGAuXG5cdCAqXG5cdCAqIF9fVGhpcyBiZWhhdmlvciBpcyBzbGlnaHRseSBkaWZmZXJlbnQgZnJvbSB0aGUgaW4gdGhlIHNwZWNzX186XG5cdCAqIC0gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgdmFsaWRhdGluZyBuYW1lcyBvciBxdWFsaWZpZWQgbmFtZXNcblx0ICogICAod2hlbiBwYXJzaW5nIFhNTCBzdHJpbmdzLCB0aGUgU0FYIHBhcnNlciB0YWtlcyBjYXJlIG9mIHRoYXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcHVibGljSWRdXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbc3lzdGVtSWRdXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudFR5cGV9IHdoaWNoIGNhbiBlaXRoZXIgYmUgdXNlZCB3aXRoIGBET01JbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudGAgdXBvbiBkb2N1bWVudCBjcmVhdGlvblxuXHQgKiBcdFx0XHRcdCAgb3IgY2FuIGJlIHB1dCBpbnRvIHRoZSBkb2N1bWVudCB2aWEgbWV0aG9kcyBsaWtlIGBOb2RlLmluc2VydEJlZm9yZSgpYCBvciBgTm9kZS5yZXBsYWNlQ2hpbGQoKWBcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlRG9jdW1lbnRUeXBlIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY1R5cGUgRE9NIExldmVsIDIgQ29yZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50dHlwZSBET00gTGl2aW5nIFN0YW5kYXJkXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyN2YWxpZGF0ZS1hbmQtZXh0cmFjdCBET006IFZhbGlkYXRlIGFuZCBleHRyYWN0XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtTmFtZVN0YXJ0Q2hhciBYTUwgU3BlYzogTmFtZXNcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzLyNucy1xdWFsbmFtZXMgWE1MIE5hbWVzcGFjZXM6IFF1YWxpZmllZCBuYW1lc1xuXHQgKi9cblx0Y3JlYXRlRG9jdW1lbnRUeXBlOiBmdW5jdGlvbihxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpe1xuXHRcdHZhciBub2RlID0gbmV3IERvY3VtZW50VHlwZSgpO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5wdWJsaWNJZCA9IHB1YmxpY0lkIHx8ICcnO1xuXHRcdG5vZGUuc3lzdGVtSWQgPSBzeXN0ZW1JZCB8fCAnJztcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC0xOTUwNjQxMjQ3XG4gKi9cblxuZnVuY3Rpb24gTm9kZSgpIHtcbn07XG5cbk5vZGUucHJvdG90eXBlID0ge1xuXHRmaXJzdENoaWxkIDogbnVsbCxcblx0bGFzdENoaWxkIDogbnVsbCxcblx0cHJldmlvdXNTaWJsaW5nIDogbnVsbCxcblx0bmV4dFNpYmxpbmcgOiBudWxsLFxuXHRhdHRyaWJ1dGVzIDogbnVsbCxcblx0cGFyZW50Tm9kZSA6IG51bGwsXG5cdGNoaWxkTm9kZXMgOiBudWxsLFxuXHRvd25lckRvY3VtZW50IDogbnVsbCxcblx0bm9kZVZhbHVlIDogbnVsbCxcblx0bmFtZXNwYWNlVVJJIDogbnVsbCxcblx0cHJlZml4IDogbnVsbCxcblx0bG9jYWxOYW1lIDogbnVsbCxcblx0Ly8gTW9kaWZpZWQgaW4gRE9NIExldmVsIDI6XG5cdGluc2VydEJlZm9yZTpmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzXG5cdFx0cmV0dXJuIF9pbnNlcnRCZWZvcmUodGhpcyxuZXdDaGlsZCxyZWZDaGlsZCk7XG5cdH0sXG5cdHJlcGxhY2VDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCwgb2xkQ2hpbGQpey8vcmFpc2VzXG5cdFx0X2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCxvbGRDaGlsZCwgYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQpO1xuXHRcdGlmKG9sZENoaWxkKXtcblx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuXHRcdH1cblx0fSxcblx0cmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcyxvbGRDaGlsZCk7XG5cdH0sXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHRyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsbnVsbCk7XG5cdH0sXG5cdGhhc0NoaWxkTm9kZXM6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5maXJzdENoaWxkICE9IG51bGw7XG5cdH0sXG5cdGNsb25lTm9kZTpmdW5jdGlvbihkZWVwKXtcblx0XHRyZXR1cm4gY2xvbmVOb2RlKHRoaXMub3duZXJEb2N1bWVudHx8dGhpcyx0aGlzLGRlZXApO1xuXHR9LFxuXHQvLyBNb2RpZmllZCBpbiBET00gTGV2ZWwgMjpcblx0bm9ybWFsaXplOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNoaWxkID0gdGhpcy5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRpZihuZXh0ICYmIG5leHQubm9kZVR5cGUgPT0gVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlID09IFRFWFRfTk9ERSl7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQobmV4dCk7XG5cdFx0XHRcdGNoaWxkLmFwcGVuZERhdGEobmV4dC5kYXRhKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRjaGlsZC5ub3JtYWxpemUoKTtcblx0XHRcdFx0Y2hpbGQgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcbiAgXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRpc1N1cHBvcnRlZDpmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKXtcblx0XHRyZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoZmVhdHVyZSx2ZXJzaW9uKTtcblx0fSxcbiAgICAvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuICAgIGhhc0F0dHJpYnV0ZXM6ZnVuY3Rpb24oKXtcbiAgICBcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoPjA7XG4gICAgfSxcblx0LyoqXG5cdCAqIExvb2sgdXAgdGhlIHByZWZpeCBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBuYW1lc3BhY2UgVVJJLCBzdGFydGluZyBmcm9tIHRoaXMgbm9kZS5cblx0ICogKipUaGUgZGVmYXVsdCBuYW1lc3BhY2UgZGVjbGFyYXRpb25zIGFyZSBpZ25vcmVkIGJ5IHRoaXMgbWV0aG9kLioqXG5cdCAqIFNlZSBOYW1lc3BhY2UgUHJlZml4IExvb2t1cCBmb3IgZGV0YWlscyBvbiB0aGUgYWxnb3JpdGhtIHVzZWQgYnkgdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIF9Ob3RlOiBUaGUgaW1wbGVtZW50YXRpb24gc2VlbXMgdG8gYmUgaW5jb21wbGV0ZSB3aGVuIGNvbXBhcmVkIHRvIHRoZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluIHRoZSBzcGVjcy5fXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gbmFtZXNwYWNlVVJJXG5cdCAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNOb2RlMy1sb29rdXBOYW1lc3BhY2VQcmVmaXhcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9uYW1lc3BhY2VzLWFsZ29yaXRobXMuaHRtbCNsb29rdXBOYW1lc3BhY2VQcmVmaXhBbGdvXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1sb29rdXBwcmVmaXhcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMzIyXG5cdCAqL1xuICAgIGxvb2t1cFByZWZpeDpmdW5jdGlvbihuYW1lc3BhY2VVUkkpe1xuICAgIFx0dmFyIGVsID0gdGhpcztcbiAgICBcdHdoaWxlKGVsKXtcbiAgICBcdFx0dmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICBcdFx0Ly9jb25zb2xlLmRpcihtYXApXG4gICAgXHRcdGlmKG1hcCl7XG4gICAgXHRcdFx0Zm9yKHZhciBuIGluIG1hcCl7XG5cdFx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgbikgJiYgbWFwW25dID09PSBuYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgbG9va3VwTmFtZXNwYWNlVVJJOmZ1bmN0aW9uKHByZWZpeCl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCBwcmVmaXgpKXtcbiAgICBcdFx0XHRcdHJldHVybiBtYXBbcHJlZml4XSA7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgaXNEZWZhdWx0TmFtZXNwYWNlOmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICBcdHJldHVybiBwcmVmaXggPT0gbnVsbDtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIF94bWxFbmNvZGVyKGMpe1xuXHRyZXR1cm4gYyA9PSAnPCcgJiYgJyZsdDsnIHx8XG4gICAgICAgICBjID09ICc+JyAmJiAnJmd0OycgfHxcbiAgICAgICAgIGMgPT0gJyYnICYmICcmYW1wOycgfHxcbiAgICAgICAgIGMgPT0gJ1wiJyAmJiAnJnF1b3Q7JyB8fFxuICAgICAgICAgJyYjJytjLmNoYXJDb2RlQXQoKSsnOydcbn1cblxuXG5jb3B5KE5vZGVUeXBlLE5vZGUpO1xuY29weShOb2RlVHlwZSxOb2RlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogQHBhcmFtIGNhbGxiYWNrIHJldHVybiB0cnVlIGZvciBjb250aW51ZSxmYWxzZSBmb3IgYnJlYWtcbiAqIEByZXR1cm4gYm9vbGVhbiB0cnVlOiBicmVhayB2aXNpdDtcbiAqL1xuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKXtcblx0aWYoY2FsbGJhY2sobm9kZSkpe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQpe1xuXHRcdGRve1xuXHRcdFx0aWYoX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKSl7cmV0dXJuIHRydWV9XG4gICAgICAgIH13aGlsZShub2RlPW5vZGUubmV4dFNpYmxpbmcpXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gRG9jdW1lbnQoKXtcblx0dGhpcy5vd25lckRvY3VtZW50ID0gdGhpcztcbn1cblxuZnVuY3Rpb24gX29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXSA9IG5ld0F0dHIudmFsdWVcblx0fVxufVxuXG5mdW5jdGlvbiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIscmVtb3ZlKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZGVsZXRlIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeD9uZXdBdHRyLmxvY2FsTmFtZTonJ11cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgYGVsLmNoaWxkTm9kZXNgLCB1cGRhdGluZyB0aGUgaW5kZXhlZCBpdGVtcyBhbmQgaXQncyBgbGVuZ3RoYC5cbiAqIFBhc3NpbmcgYG5ld0NoaWxkYCBtZWFucyBpdCB3aWxsIGJlIGFwcGVuZGVkLlxuICogT3RoZXJ3aXNlIGl0J3MgYXNzdW1lZCB0aGF0IGFuIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZCxcbiAqIGFuZCBgZWwuZmlyc3ROb2RlYCBhbmQgaXQncyBgLm5leHRTaWJsaW5nYCBhcmUgdXNlZFxuICogdG8gd2FsayB0aGUgY3VycmVudCBsaXN0IG9mIGNoaWxkIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY1xuICogQHBhcmFtIHtOb2RlfSBlbFxuICogQHBhcmFtIHtOb2RlfSBbbmV3Q2hpbGRdXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfb25VcGRhdGVDaGlsZCAoZG9jLCBlbCwgbmV3Q2hpbGQpIHtcblx0aWYoZG9jICYmIGRvYy5faW5jKXtcblx0XHRkb2MuX2luYysrO1xuXHRcdC8vdXBkYXRlIGNoaWxkTm9kZXNcblx0XHR2YXIgY3MgPSBlbC5jaGlsZE5vZGVzO1xuXHRcdGlmIChuZXdDaGlsZCkge1xuXHRcdFx0Y3NbY3MubGVuZ3RoKytdID0gbmV3Q2hpbGQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHR3aGlsZSAoY2hpbGQpIHtcblx0XHRcdFx0Y3NbaSsrXSA9IGNoaWxkO1xuXHRcdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdFx0Y3MubGVuZ3RoID0gaTtcblx0XHRcdGRlbGV0ZSBjc1tjcy5sZW5ndGhdO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbm5lY3Rpb25zIGJldHdlZW4gYHBhcmVudE5vZGVgIGFuZCBgY2hpbGRgXG4gKiBhbmQgYW55IGV4aXN0aW5nIGBjaGlsZC5wcmV2aW91c1NpYmxpbmdgIG9yIGBjaGlsZC5uZXh0U2libGluZ2AuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTM1XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xNDVcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudE5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRcbiAqIEByZXR1cm5zIHtOb2RlfSB0aGUgY2hpbGQgdGhhdCB3YXMgcmVtb3ZlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDaGlsZCAocGFyZW50Tm9kZSwgY2hpbGQpIHtcblx0dmFyIHByZXZpb3VzID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuXHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRpZiAocHJldmlvdXMpIHtcblx0XHRwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV4dDtcblx0fVxuXHRpZiAobmV4dCkge1xuXHRcdG5leHQucHJldmlvdXNTaWJsaW5nID0gcHJldmlvdXM7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBwcmV2aW91cztcblx0fVxuXHRjaGlsZC5wYXJlbnROb2RlID0gbnVsbDtcblx0Y2hpbGQucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcblx0Y2hpbGQubmV4dFNpYmxpbmcgPSBudWxsO1xuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUpO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5vZGVgIGNhbiBiZSBhIHBhcmVudCBmb3IgaW5zZXJ0aW9uLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzVmFsaWRQYXJlbnROb2RlVHlwZShub2RlKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZSAmJlxuXHRcdChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuXHQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBub2RlYCBjYW4gYmUgaW5zZXJ0ZWQgYWNjb3JkaW5nIHRvIGl0J3MgYG5vZGVUeXBlYC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc0luc2VydGFibGVOb2RlVHlwZShub2RlKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZSAmJlxuXHRcdChpc0VsZW1lbnROb2RlKG5vZGUpIHx8XG5cdFx0XHRpc1RleHROb2RlKG5vZGUpIHx8XG5cdFx0XHRpc0RvY1R5cGVOb2RlKG5vZGUpIHx8XG5cdFx0XHRub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFIHx8XG5cdFx0XHRub2RlLm5vZGVUeXBlID09PSBOb2RlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSlcblx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYG5vZGVgIGlzIGEgRE9DVFlQRSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RvY1R5cGVOb2RlKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBub2RlIGlzIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudE5vZGUobm9kZSkge1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIHRleHQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNUZXh0Tm9kZShub2RlKSB7XG5cdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGVuIGVsZW1lbnQgbm9kZSBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGBjaGlsZGAsIG9yIGF0IHRoZSBlbmQgaWYgY2hpbGQgaXMgZmFsc3ksXG4gKiBhY2NvcmRpbmcgdG8gdGhlIHByZXNlbmNlIGFuZCBwb3NpdGlvbiBvZiBhIGRvY3R5cGUgbm9kZSBvbiB0aGUgc2FtZSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2MgVGhlIGRvY3VtZW50IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgdGhlIG5vZGUgdGhhdCB3b3VsZCBiZWNvbWUgdGhlIG5leHRTaWJsaW5nIGlmIHRoZSBlbGVtZW50IHdvdWxkIGJlIGluc2VydGVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGFuIGVsZW1lbnQgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBjaGlsZFxuICogQHByaXZhdGVcbiAqIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKGRvYywgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBkb2MuY2hpbGROb2RlcyB8fCBbXTtcblx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSkgfHwgaXNEb2NUeXBlTm9kZShjaGlsZCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dmFyIGRvY1R5cGVOb2RlID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKTtcblx0cmV0dXJuICEoY2hpbGQgJiYgZG9jVHlwZU5vZGUgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGRvY1R5cGVOb2RlKSA+IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGVuIGVsZW1lbnQgbm9kZSBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGBjaGlsZGAsIG9yIGF0IHRoZSBlbmQgaWYgY2hpbGQgaXMgZmFsc3ksXG4gKiBhY2NvcmRpbmcgdG8gdGhlIHByZXNlbmNlIGFuZCBwb3NpdGlvbiBvZiBhIGRvY3R5cGUgbm9kZSBvbiB0aGUgc2FtZSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGRvYyBUaGUgZG9jdW1lbnQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHdvdWxkIGJlY29tZSB0aGUgbmV4dFNpYmxpbmcgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgaW5zZXJ0ZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgYW4gZWxlbWVudCBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGNoaWxkXG4gKiBAcHJpdmF0ZVxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50UmVwbGFjZW1lbnRQb3NzaWJsZShkb2MsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gZG9jLmNoaWxkTm9kZXMgfHwgW107XG5cblx0ZnVuY3Rpb24gaGFzRWxlbWVudENoaWxkVGhhdElzTm90Q2hpbGQobm9kZSkge1xuXHRcdHJldHVybiBpc0VsZW1lbnROb2RlKG5vZGUpICYmIG5vZGUgIT09IGNoaWxkO1xuXHR9XG5cblx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaGFzRWxlbWVudENoaWxkVGhhdElzTm90Q2hpbGQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHZhciBkb2NUeXBlTm9kZSA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNEb2NUeXBlTm9kZSk7XG5cdHJldHVybiAhKGNoaWxkICYmIGRvY1R5cGVOb2RlICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihkb2NUeXBlTm9kZSkgPiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogU3RlcHMgMS01IG9mIHRoZSBjaGVja3MgYmVmb3JlIGluc2VydGluZyBhbmQgYmVmb3JlIHJlcGxhY2luZyBhIGNoaWxkIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGU9fSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLXJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHkxdG81KHBhcmVudCwgbm9kZSwgY2hpbGQpIHtcblx0Ly8gMS4gSWYgYHBhcmVudGAgaXMgbm90IGEgRG9jdW1lbnQsIERvY3VtZW50RnJhZ21lbnQsIG9yIEVsZW1lbnQgbm9kZSwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRpZiAoIWhhc1ZhbGlkUGFyZW50Tm9kZVR5cGUocGFyZW50KSkge1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnVW5leHBlY3RlZCBwYXJlbnQgbm9kZSB0eXBlICcgKyBwYXJlbnQubm9kZVR5cGUpO1xuXHR9XG5cdC8vIDIuIElmIGBub2RlYCBpcyBhIGhvc3QtaW5jbHVkaW5nIGluY2x1c2l2ZSBhbmNlc3RvciBvZiBgcGFyZW50YCwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHQvLyBub3QgaW1wbGVtZW50ZWQhXG5cdC8vIDMuIElmIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGl0cyBwYXJlbnQgaXMgbm90IGBwYXJlbnRgLCB0aGVuIHRocm93IGEgXCJOb3RGb3VuZEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRpZiAoY2hpbGQgJiYgY2hpbGQucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLCAnY2hpbGQgbm90IGluIHBhcmVudCcpO1xuXHR9XG5cdGlmIChcblx0XHQvLyA0LiBJZiBgbm9kZWAgaXMgbm90IGEgRG9jdW1lbnRGcmFnbWVudCwgRG9jdW1lbnRUeXBlLCBFbGVtZW50LCBvciBDaGFyYWN0ZXJEYXRhIG5vZGUsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0XHQhaGFzSW5zZXJ0YWJsZU5vZGVUeXBlKG5vZGUpIHx8XG5cdFx0Ly8gNS4gSWYgZWl0aGVyIGBub2RlYCBpcyBhIFRleHQgbm9kZSBhbmQgYHBhcmVudGAgaXMgYSBkb2N1bWVudCxcblx0XHQvLyB0aGUgc2F4IHBhcnNlciBjdXJyZW50bHkgYWRkcyB0b3AgbGV2ZWwgdGV4dCBub2RlcywgdGhpcyB3aWxsIGJlIGZpeGVkIGluIDAuOS4wXG5cdFx0Ly8gfHwgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxuXHRcdC8vIG9yIGBub2RlYCBpcyBhIGRvY3R5cGUgYW5kIGBwYXJlbnRgIGlzIG5vdCBhIGRvY3VtZW50LCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdFx0KGlzRG9jVHlwZU5vZGUobm9kZSkgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSBOb2RlLkRPQ1VNRU5UX05PREUpXG5cdCkge1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oXG5cdFx0XHRISUVSQVJDSFlfUkVRVUVTVF9FUlIsXG5cdFx0XHQnVW5leHBlY3RlZCBub2RlIHR5cGUgJyArIG5vZGUubm9kZVR5cGUgKyAnIGZvciBwYXJlbnQgbm9kZSB0eXBlICcgKyBwYXJlbnQubm9kZVR5cGVcblx0XHQpO1xuXHR9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIFN0ZXAgNiBvZiB0aGUgY2hlY2tzIGJlZm9yZSBpbnNlcnRpbmcgYW5kIGJlZm9yZSByZXBsYWNpbmcgYSBjaGlsZCBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGUgfCB1bmRlZmluZWR9IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eUluRG9jdW1lbnQocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzIHx8IFtdO1xuXHR2YXIgbm9kZUNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cblx0Ly8gRG9jdW1lbnRGcmFnbWVudFxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0dmFyIG5vZGVDaGlsZEVsZW1lbnRzID0gbm9kZUNoaWxkTm9kZXMuZmlsdGVyKGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIElmIG5vZGUgaGFzIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBjaGlsZCBvciBoYXMgYSBUZXh0IG5vZGUgY2hpbGQuXG5cdFx0aWYgKG5vZGVDaGlsZEVsZW1lbnRzLmxlbmd0aCA+IDEgfHwgZmluZChub2RlQ2hpbGROb2RlcywgaXNUZXh0Tm9kZSkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnTW9yZSB0aGFuIG9uZSBlbGVtZW50IG9yIHRleHQgaW4gZnJhZ21lbnQnKTtcblx0XHR9XG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBgbm9kZWAgaGFzIG9uZSBlbGVtZW50IGNoaWxkIGFuZCBlaXRoZXIgYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQsXG5cdFx0Ly8gYGNoaWxkYCBpcyBhIGRvY3R5cGUsIG9yIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID09PSAxICYmICFpc0VsZW1lbnRJbnNlcnRpb25Qb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdFbGVtZW50IGluIGZyYWdtZW50IGNhbiBub3QgYmUgaW5zZXJ0ZWQgYmVmb3JlIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRWxlbWVudFxuXHRpZiAoaXNFbGVtZW50Tm9kZShub2RlKSkge1xuXHRcdC8vIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkLCBgY2hpbGRgIGlzIGEgZG9jdHlwZSxcblx0XHQvLyBvciBgY2hpbGRgIGlzIG5vbi1udWxsIGFuZCBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKCFpc0VsZW1lbnRJbnNlcnRpb25Qb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBlbGVtZW50IGNhbiBiZSBhZGRlZCBhbmQgb25seSBhZnRlciBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIERvY3VtZW50VHlwZVxuXHRpZiAoaXNEb2NUeXBlTm9kZShub2RlKSkge1xuXHRcdC8vIGBwYXJlbnRgIGhhcyBhIGRvY3R5cGUgY2hpbGQsXG5cdFx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNEb2NUeXBlTm9kZSkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZG9jdHlwZSBpcyBhbGxvd2VkJyk7XG5cdFx0fVxuXHRcdHZhciBwYXJlbnRFbGVtZW50Q2hpbGQgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGFuIGVsZW1lbnQgaXMgcHJlY2VkaW5nIGBjaGlsZGAsXG5cdFx0aWYgKGNoaWxkICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihwYXJlbnRFbGVtZW50Q2hpbGQpIDwgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdEb2N0eXBlIGNhbiBvbmx5IGJlIGluc2VydGVkIGJlZm9yZSBhbiBlbGVtZW50Jyk7XG5cdFx0fVxuXHRcdC8vIG9yIGBjaGlsZGAgaXMgbnVsbCBhbmQgYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQuXG5cdFx0aWYgKCFjaGlsZCAmJiBwYXJlbnRFbGVtZW50Q2hpbGQpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRG9jdHlwZSBjYW4gbm90IGJlIGFwcGVuZGVkIHNpbmNlIGVsZW1lbnQgaXMgcHJlc2VudCcpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBTdGVwIDYgb2YgdGhlIGNoZWNrcyBiZWZvcmUgaW5zZXJ0aW5nIGFuZCBiZWZvcmUgcmVwbGFjaW5nIGEgY2hpbGQgYXJlIGRpZmZlcmVudC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlIHwgdW5kZWZpbmVkfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLXJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzIHx8IFtdO1xuXHR2YXIgbm9kZUNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cblx0Ly8gRG9jdW1lbnRGcmFnbWVudFxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0dmFyIG5vZGVDaGlsZEVsZW1lbnRzID0gbm9kZUNoaWxkTm9kZXMuZmlsdGVyKGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIElmIGBub2RlYCBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkIG9yIGhhcyBhIFRleHQgbm9kZSBjaGlsZC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID4gMSB8fCBmaW5kKG5vZGVDaGlsZE5vZGVzLCBpc1RleHROb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdNb3JlIHRoYW4gb25lIGVsZW1lbnQgb3IgdGV4dCBpbiBmcmFnbWVudCcpO1xuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIGlmIGBub2RlYCBoYXMgb25lIGVsZW1lbnQgY2hpbGQgYW5kIGVpdGhlciBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgIG9yIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID09PSAxICYmICFpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0VsZW1lbnQgaW4gZnJhZ21lbnQgY2FuIG5vdCBiZSBpbnNlcnRlZCBiZWZvcmUgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBFbGVtZW50XG5cdGlmIChpc0VsZW1lbnROb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQgdGhhdCBpcyBub3QgYGNoaWxkYCBvciBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKCFpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGVsZW1lbnQgY2FuIGJlIGFkZGVkIGFuZCBvbmx5IGFmdGVyIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRG9jdW1lbnRUeXBlXG5cdGlmIChpc0RvY1R5cGVOb2RlKG5vZGUpKSB7XG5cdFx0ZnVuY3Rpb24gaGFzRG9jdHlwZUNoaWxkVGhhdElzTm90Q2hpbGQobm9kZSkge1xuXHRcdFx0cmV0dXJuIGlzRG9jVHlwZU5vZGUobm9kZSkgJiYgbm9kZSAhPT0gY2hpbGQ7XG5cdFx0fVxuXG5cdFx0Ly8gYHBhcmVudGAgaGFzIGEgZG9jdHlwZSBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgLFxuXHRcdGlmIChmaW5kKHBhcmVudENoaWxkTm9kZXMsIGhhc0RvY3R5cGVDaGlsZFRoYXRJc05vdENoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBkb2N0eXBlIGlzIGFsbG93ZWQnKTtcblx0XHR9XG5cdFx0dmFyIHBhcmVudEVsZW1lbnRDaGlsZCA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gb3IgYW4gZWxlbWVudCBpcyBwcmVjZWRpbmcgYGNoaWxkYC5cblx0XHRpZiAoY2hpbGQgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKHBhcmVudEVsZW1lbnRDaGlsZCkgPCBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0RvY3R5cGUgY2FuIG9ubHkgYmUgaW5zZXJ0ZWQgYmVmb3JlIGFuIGVsZW1lbnQnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlPX0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICovXG5mdW5jdGlvbiBfaW5zZXJ0QmVmb3JlKHBhcmVudCwgbm9kZSwgY2hpbGQsIF9pbkRvY3VtZW50QXNzZXJ0aW9uKSB7XG5cdC8vIFRvIGVuc3VyZSBwcmUtaW5zZXJ0aW9uIHZhbGlkaXR5IG9mIGEgbm9kZSBpbnRvIGEgcGFyZW50IGJlZm9yZSBhIGNoaWxkLCBydW4gdGhlc2Ugc3RlcHM6XG5cdGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5MXRvNShwYXJlbnQsIG5vZGUsIGNoaWxkKTtcblxuXHQvLyBJZiBwYXJlbnQgaXMgYSBkb2N1bWVudCwgYW5kIGFueSBvZiB0aGUgc3RhdGVtZW50cyBiZWxvdywgc3dpdGNoZWQgb24gdGhlIGludGVyZmFjZSBub2RlIGltcGxlbWVudHMsXG5cdC8vIGFyZSB0cnVlLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmIChwYXJlbnQubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuXHRcdChfaW5Eb2N1bWVudEFzc2VydGlvbiB8fCBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eUluRG9jdW1lbnQpKHBhcmVudCwgbm9kZSwgY2hpbGQpO1xuXHR9XG5cblx0dmFyIGNwID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZihjcCl7XG5cdFx0Y3AucmVtb3ZlQ2hpbGQobm9kZSk7Ly9yZW1vdmUgYW5kIHVwZGF0ZVxuXHR9XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdHZhciBuZXdGaXJzdCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRpZiAobmV3Rmlyc3QgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXHRcdHZhciBuZXdMYXN0ID0gbm9kZS5sYXN0Q2hpbGQ7XG5cdH1lbHNle1xuXHRcdG5ld0ZpcnN0ID0gbmV3TGFzdCA9IG5vZGU7XG5cdH1cblx0dmFyIHByZSA9IGNoaWxkID8gY2hpbGQucHJldmlvdXNTaWJsaW5nIDogcGFyZW50Lmxhc3RDaGlsZDtcblxuXHRuZXdGaXJzdC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG5cdG5ld0xhc3QubmV4dFNpYmxpbmcgPSBjaGlsZDtcblxuXG5cdGlmKHByZSl7XG5cdFx0cHJlLm5leHRTaWJsaW5nID0gbmV3Rmlyc3Q7XG5cdH1lbHNle1xuXHRcdHBhcmVudC5maXJzdENoaWxkID0gbmV3Rmlyc3Q7XG5cdH1cblx0aWYoY2hpbGQgPT0gbnVsbCl7XG5cdFx0cGFyZW50Lmxhc3RDaGlsZCA9IG5ld0xhc3Q7XG5cdH1lbHNle1xuXHRcdGNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0xhc3Q7XG5cdH1cblx0ZG97XG5cdFx0bmV3Rmlyc3QucGFyZW50Tm9kZSA9IHBhcmVudDtcblx0fXdoaWxlKG5ld0ZpcnN0ICE9PSBuZXdMYXN0ICYmIChuZXdGaXJzdD0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKVxuXHRfb25VcGRhdGVDaGlsZChwYXJlbnQub3duZXJEb2N1bWVudHx8cGFyZW50LCBwYXJlbnQpO1xuXHQvL2NvbnNvbGUubG9nKHBhcmVudC5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbClcblx0aWYgKG5vZGUubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuXHRcdG5vZGUuZmlyc3RDaGlsZCA9IG5vZGUubGFzdENoaWxkID0gbnVsbDtcblx0fVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIGBuZXdDaGlsZGAgdG8gYHBhcmVudE5vZGVgLlxuICogSWYgYG5ld0NoaWxkYCBpcyBhbHJlYWR5IGNvbm5lY3RlZCB0byBhIGBwYXJlbnROb2RlYCBpdCBpcyBmaXJzdCByZW1vdmVkIGZyb20gaXQuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTM1XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xNDVcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICogQHBhcmFtIHtOb2RlfSBuZXdDaGlsZFxuICogQHJldHVybnMge05vZGV9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfYXBwZW5kU2luZ2xlQ2hpbGQgKHBhcmVudE5vZGUsIG5ld0NoaWxkKSB7XG5cdGlmIChuZXdDaGlsZC5wYXJlbnROb2RlKSB7XG5cdFx0bmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG5cdH1cblx0bmV3Q2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXHRuZXdDaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG5cdGlmIChuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcpIHtcblx0XHRuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcblx0fVxuXHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQsIHBhcmVudE5vZGUsIG5ld0NoaWxkKTtcblx0cmV0dXJuIG5ld0NoaWxkO1xufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUgPSB7XG5cdC8vaW1wbGVtZW50YXRpb24gOiBudWxsLFxuXHRub2RlTmFtZSA6ICAnI2RvY3VtZW50Jyxcblx0bm9kZVR5cGUgOiAgRE9DVU1FTlRfTk9ERSxcblx0LyoqXG5cdCAqIFRoZSBEb2N1bWVudFR5cGUgbm9kZSBvZiB0aGUgZG9jdW1lbnQuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAdHlwZSBEb2N1bWVudFR5cGVcblx0ICovXG5cdGRvY3R5cGUgOiAgbnVsbCxcblx0ZG9jdW1lbnRFbGVtZW50IDogIG51bGwsXG5cdF9pbmMgOiAxLFxuXG5cdGluc2VydEJlZm9yZSA6ICBmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzXG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0XHR2YXIgY2hpbGQgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuXHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR0aGlzLmluc2VydEJlZm9yZShjaGlsZCxyZWZDaGlsZCk7XG5cdFx0XHRcdGNoaWxkID0gbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdDaGlsZDtcblx0XHR9XG5cdFx0X2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgcmVmQ2hpbGQpO1xuXHRcdG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdGlmICh0aGlzLmRvY3VtZW50RWxlbWVudCA9PT0gbnVsbCAmJiBuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50RWxlbWVudCA9IG5ld0NoaWxkO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXdDaGlsZDtcblx0fSxcblx0cmVtb3ZlQ2hpbGQgOiAgZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdGlmKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKXtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0cmVwbGFjZUNoaWxkOiBmdW5jdGlvbiAobmV3Q2hpbGQsIG9sZENoaWxkKSB7XG5cdFx0Ly9yYWlzZXNcblx0XHRfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCBvbGRDaGlsZCwgYXNzZXJ0UHJlUmVwbGFjZW1lbnRWYWxpZGl0eUluRG9jdW1lbnQpO1xuXHRcdG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdGlmIChvbGRDaGlsZCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHRcdGlmIChpc0VsZW1lbnROb2RlKG5ld0NoaWxkKSkge1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcblx0XHR9XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGltcG9ydE5vZGUgOiBmdW5jdGlvbihpbXBvcnRlZE5vZGUsZGVlcCl7XG5cdFx0cmV0dXJuIGltcG9ydE5vZGUodGhpcyxpbXBvcnRlZE5vZGUsZGVlcCk7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGdldEVsZW1lbnRCeUlkIDpcdGZ1bmN0aW9uKGlkKXtcblx0XHR2YXIgcnR2ID0gbnVsbDtcblx0XHRfdmlzaXROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0aWYobm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpe1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCl7XG5cdFx0XHRcdFx0cnR2ID0gbm9kZTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJ0djtcblx0fSxcblxuXHQvKipcblx0ICogVGhlIGBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lYCBtZXRob2Qgb2YgYERvY3VtZW50YCBpbnRlcmZhY2UgcmV0dXJucyBhbiBhcnJheS1saWtlIG9iamVjdFxuXHQgKiBvZiBhbGwgY2hpbGQgZWxlbWVudHMgd2hpY2ggaGF2ZSAqKmFsbCoqIG9mIHRoZSBnaXZlbiBjbGFzcyBuYW1lKHMpLlxuXHQgKlxuXHQgKiBSZXR1cm5zIGFuIGVtcHR5IGxpc3QgaWYgYGNsYXNzZU5hbWVzYCBpcyBhbiBlbXB0eSBzdHJpbmcgb3Igb25seSBjb250YWlucyBIVE1MIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMuXG5cdCAqXG5cdCAqXG5cdCAqIFdhcm5pbmc6IFRoaXMgaXMgYSBsaXZlIExpdmVOb2RlTGlzdC5cblx0ICogQ2hhbmdlcyBpbiB0aGUgRE9NIHdpbGwgcmVmbGVjdCBpbiB0aGUgYXJyYXkgYXMgdGhlIGNoYW5nZXMgb2NjdXIuXG5cdCAqIElmIGFuIGVsZW1lbnQgc2VsZWN0ZWQgYnkgdGhpcyBhcnJheSBubyBsb25nZXIgcXVhbGlmaWVzIGZvciB0aGUgc2VsZWN0b3IsXG5cdCAqIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSByZW1vdmVkLiBCZSBhd2FyZSBvZiB0aGlzIGZvciBpdGVyYXRpb24gcHVycG9zZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVzIGlzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY2xhc3MgbmFtZShzKSB0byBtYXRjaDsgbXVsdGlwbGUgY2xhc3MgbmFtZXMgYXJlIHNlcGFyYXRlZCBieSAoQVNDSUktKXdoaXRlc3BhY2Vcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvZ2V0RWxlbWVudHNCeUNsYXNzTmFtZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1nZXRlbGVtZW50c2J5Y2xhc3NuYW1lXG5cdCAqL1xuXHRnZXRFbGVtZW50c0J5Q2xhc3NOYW1lOiBmdW5jdGlvbihjbGFzc05hbWVzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXNTZXQgPSB0b09yZGVyZWRTZXQoY2xhc3NOYW1lcylcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbihiYXNlKSB7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdGlmIChjbGFzc05hbWVzU2V0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3Zpc2l0Tm9kZShiYXNlLmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0XHR2YXIgbm9kZUNsYXNzTmFtZXMgPSBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKVxuXHRcdFx0XHRcdFx0Ly8gY2FuIGJlIG51bGwgaWYgdGhlIGF0dHJpYnV0ZSBkb2VzIG5vdCBleGlzdFxuXHRcdFx0XHRcdFx0aWYgKG5vZGVDbGFzc05hbWVzKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGJlZm9yZSBzcGxpdHRpbmcgYW5kIGl0ZXJhdGluZyBqdXN0IGNvbXBhcmUgdGhlbSBmb3IgdGhlIG1vc3QgY29tbW9uIGNhc2Vcblx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoZXMgPSBjbGFzc05hbWVzID09PSBub2RlQ2xhc3NOYW1lcztcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5vZGVDbGFzc05hbWVzU2V0ID0gdG9PcmRlcmVkU2V0KG5vZGVDbGFzc05hbWVzKVxuXHRcdFx0XHRcdFx0XHRcdG1hdGNoZXMgPSBjbGFzc05hbWVzU2V0LmV2ZXJ5KGFycmF5SW5jbHVkZXMobm9kZUNsYXNzTmFtZXNTZXQpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblxuXHQvL2RvY3VtZW50IGZhY3RvcnkgbWV0aG9kOlxuXHRjcmVhdGVFbGVtZW50IDpcdGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgOlx0ZnVuY3Rpb24oKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlVGV4dE5vZGUgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgVGV4dCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUNvbW1lbnQgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQ29tbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUNEQVRBU2VjdGlvbiA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBDREFUQVNlY3Rpb24oKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gOlx0ZnVuY3Rpb24odGFyZ2V0LGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS50YWdOYW1lID0gbm9kZS5ub2RlTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdG5vZGUubm9kZVZhbHVlID0gbm9kZS5kYXRhID0gZGF0YTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQXR0cmlidXRlIDpcdGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEF0dHIoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5hbWUgPSBuYW1lO1xuXHRcdG5vZGUubm9kZU5hbWVcdD0gbmFtZTtcblx0XHRub2RlLmxvY2FsTmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVFbnRpdHlSZWZlcmVuY2UgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRW50aXR5UmVmZXJlbmNlKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50XHQ9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVFbGVtZW50TlMgOlx0ZnVuY3Rpb24obmFtZXNwYWNlVVJJLHF1YWxpZmllZE5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHR2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVBdHRyaWJ1dGVOUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdGlmKHBsLmxlbmd0aCA9PSAyKXtcblx0XHRcdG5vZGUucHJlZml4ID0gcGxbMF07XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9lbC5wcmVmaXggPSBudWxsO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxufTtcbl9leHRlbmRzKERvY3VtZW50LE5vZGUpO1xuXG5cbmZ1bmN0aW9uIEVsZW1lbnQoKSB7XG5cdHRoaXMuX25zTWFwID0ge307XG59O1xuRWxlbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVUeXBlIDogRUxFTUVOVF9OT0RFLFxuXHRoYXNBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpIT1udWxsO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcblx0XHRyZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0obmFtZSk7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHR9LFxuXHRyZW1vdmVBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKVxuXHRcdGF0dHIgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuXHR9LFxuXG5cdC8vZm91ciByZWFsIG9wZWFydGlvbiBtZXRob2Rcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxudWxsKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBfYXBwZW5kU2luZ2xlQ2hpbGQodGhpcyxuZXdDaGlsZCk7XG5cdFx0fVxuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24obmV3QXR0cil7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW0obmV3QXR0cik7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5vZGVOUyA6IGZ1bmN0aW9uKG5ld0F0dHIpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtTlMobmV3QXR0cik7XG5cdH0sXG5cdHJlbW92ZUF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihvbGRBdHRyKXtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMgPT0gb2xkQXR0ci5vd25lckVsZW1lbnQpXG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0ob2xkQXR0ci5ub2RlTmFtZSk7XG5cdH0sXG5cdC8vZ2V0IHJlYWwgYXR0cmlidXRlIG5hbWUsYW5kIHJlbW92ZSBpdCBieSByZW1vdmVBdHRyaWJ1dGVOb2RlXG5cdHJlbW92ZUF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHZhciBvbGQgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdFx0b2xkICYmIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShvbGQpO1xuXHR9LFxuXG5cdGhhc0F0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0fSxcblxuXHRnZXRFbGVtZW50c0J5VGFnTmFtZSA6IGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsZnVuY3Rpb24oYmFzZSl7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdF92aXNpdE5vZGUoYmFzZSxmdW5jdGlvbihub2RlKXtcblx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSAmJiAodGFnTmFtZSA9PT0gJyonIHx8IG5vZGUudGFnTmFtZSA9PSB0YWdOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0fSk7XG5cdH0sXG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiAobmFtZXNwYWNlVVJJID09PSAnKicgfHwgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSkgJiYgKGxvY2FsTmFtZSA9PT0gJyonIHx8IG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSkpe1xuXHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxzO1xuXG5cdFx0fSk7XG5cdH1cbn07XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUztcblxuXG5fZXh0ZW5kcyhFbGVtZW50LE5vZGUpO1xuZnVuY3Rpb24gQXR0cigpIHtcbn07XG5BdHRyLnByb3RvdHlwZS5ub2RlVHlwZSA9IEFUVFJJQlVURV9OT0RFO1xuX2V4dGVuZHMoQXR0cixOb2RlKTtcblxuXG5mdW5jdGlvbiBDaGFyYWN0ZXJEYXRhKCkge1xufTtcbkNoYXJhY3RlckRhdGEucHJvdG90eXBlID0ge1xuXHRkYXRhIDogJycsXG5cdHN1YnN0cmluZ0RhdGEgOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQrY291bnQpO1xuXHR9LFxuXHRhcHBlbmREYXRhOiBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0dGV4dCA9IHRoaXMuZGF0YSt0ZXh0O1xuXHRcdHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHR9LFxuXHRpbnNlcnREYXRhOiBmdW5jdGlvbihvZmZzZXQsdGV4dCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LDAsdGV4dCk7XG5cblx0fSxcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdHRocm93IG5ldyBFcnJvcihFeGNlcHRpb25NZXNzYWdlW0hJRVJBUkNIWV9SRVFVRVNUX0VSUl0pXG5cdH0sXG5cdGRlbGV0ZURhdGE6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQpIHtcblx0XHR0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCxjb3VudCxcIlwiKTtcblx0fSxcblx0cmVwbGFjZURhdGE6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQsIHRleHQpIHtcblx0XHR2YXIgc3RhcnQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKDAsb2Zmc2V0KTtcblx0XHR2YXIgZW5kID0gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQrY291bnQpO1xuXHRcdHRleHQgPSBzdGFydCArIHRleHQgKyBlbmQ7XG5cdFx0dGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdH1cbn1cbl9leHRlbmRzKENoYXJhY3RlckRhdGEsTm9kZSk7XG5mdW5jdGlvbiBUZXh0KCkge1xufTtcblRleHQucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI3RleHRcIixcblx0bm9kZVR5cGUgOiBURVhUX05PREUsXG5cdHNwbGl0VGV4dCA6IGZ1bmN0aW9uKG9mZnNldCkge1xuXHRcdHZhciB0ZXh0ID0gdGhpcy5kYXRhO1xuXHRcdHZhciBuZXdUZXh0ID0gdGV4dC5zdWJzdHJpbmcob2Zmc2V0KTtcblx0XHR0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLm5vZGVWYWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0XHR2YXIgbmV3Tm9kZSA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdUZXh0KTtcblx0XHRpZih0aGlzLnBhcmVudE5vZGUpe1xuXHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld05vZGU7XG5cdH1cbn1cbl9leHRlbmRzKFRleHQsQ2hhcmFjdGVyRGF0YSk7XG5mdW5jdGlvbiBDb21tZW50KCkge1xufTtcbkNvbW1lbnQucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI2NvbW1lbnRcIixcblx0bm9kZVR5cGUgOiBDT01NRU5UX05PREVcbn1cbl9leHRlbmRzKENvbW1lbnQsQ2hhcmFjdGVyRGF0YSk7XG5cbmZ1bmN0aW9uIENEQVRBU2VjdGlvbigpIHtcbn07XG5DREFUQVNlY3Rpb24ucHJvdG90eXBlID0ge1xuXHRub2RlTmFtZSA6IFwiI2NkYXRhLXNlY3Rpb25cIixcblx0bm9kZVR5cGUgOiBDREFUQV9TRUNUSU9OX05PREVcbn1cbl9leHRlbmRzKENEQVRBU2VjdGlvbixDaGFyYWN0ZXJEYXRhKTtcblxuXG5mdW5jdGlvbiBEb2N1bWVudFR5cGUoKSB7XG59O1xuRG9jdW1lbnRUeXBlLnByb3RvdHlwZS5ub2RlVHlwZSA9IERPQ1VNRU5UX1RZUEVfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50VHlwZSxOb2RlKTtcblxuZnVuY3Rpb24gTm90YXRpb24oKSB7XG59O1xuTm90YXRpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gTk9UQVRJT05fTk9ERTtcbl9leHRlbmRzKE5vdGF0aW9uLE5vZGUpO1xuXG5mdW5jdGlvbiBFbnRpdHkoKSB7XG59O1xuRW50aXR5LnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5LE5vZGUpO1xuXG5mdW5jdGlvbiBFbnRpdHlSZWZlcmVuY2UoKSB7XG59O1xuRW50aXR5UmVmZXJlbmNlLnByb3RvdHlwZS5ub2RlVHlwZSA9IEVOVElUWV9SRUZFUkVOQ0VfTk9ERTtcbl9leHRlbmRzKEVudGl0eVJlZmVyZW5jZSxOb2RlKTtcblxuZnVuY3Rpb24gRG9jdW1lbnRGcmFnbWVudCgpIHtcbn07XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlTmFtZSA9XHRcIiNkb2N1bWVudC1mcmFnbWVudFwiO1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPVx0RE9DVU1FTlRfRlJBR01FTlRfTk9ERTtcbl9leHRlbmRzKERvY3VtZW50RnJhZ21lbnQsTm9kZSk7XG5cblxuZnVuY3Rpb24gUHJvY2Vzc2luZ0luc3RydWN0aW9uKCkge1xufVxuUHJvY2Vzc2luZ0luc3RydWN0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTtcbl9leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbixOb2RlKTtcbmZ1bmN0aW9uIFhNTFNlcmlhbGl6ZXIoKXt9XG5YTUxTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVUb1N0cmluZyA9IGZ1bmN0aW9uKG5vZGUsaXNIdG1sLG5vZGVGaWx0ZXIpe1xuXHRyZXR1cm4gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nLmNhbGwobm9kZSxpc0h0bWwsbm9kZUZpbHRlcik7XG59XG5Ob2RlLnByb3RvdHlwZS50b1N0cmluZyA9IG5vZGVTZXJpYWxpemVUb1N0cmluZztcbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsbm9kZUZpbHRlcil7XG5cdHZhciBidWYgPSBbXTtcblx0dmFyIHJlZk5vZGUgPSB0aGlzLm5vZGVUeXBlID09IDkgJiYgdGhpcy5kb2N1bWVudEVsZW1lbnQgfHwgdGhpcztcblx0dmFyIHByZWZpeCA9IHJlZk5vZGUucHJlZml4O1xuXHR2YXIgdXJpID0gcmVmTm9kZS5uYW1lc3BhY2VVUkk7XG5cblx0aWYodXJpICYmIHByZWZpeCA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHByZWZpeClcblx0XHR2YXIgcHJlZml4ID0gcmVmTm9kZS5sb29rdXBQcmVmaXgodXJpKTtcblx0XHRpZihwcmVmaXggPT0gbnVsbCl7XG5cdFx0XHQvL2lzSFRNTCA9IHRydWU7XG5cdFx0XHR2YXIgdmlzaWJsZU5hbWVzcGFjZXM9W1xuXHRcdFx0e25hbWVzcGFjZTp1cmkscHJlZml4Om51bGx9XG5cdFx0XHQvL3tuYW1lc3BhY2U6dXJpLHByZWZpeDonJ31cblx0XHRcdF1cblx0XHR9XG5cdH1cblx0c2VyaWFsaXplVG9TdHJpbmcodGhpcyxidWYsaXNIdG1sLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHQvL2NvbnNvbGUubG9nKCcjIyMnLHRoaXMubm9kZVR5cGUsdXJpLHByZWZpeCxidWYuam9pbignJykpXG5cdHJldHVybiBidWYuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuXHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG5cdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0Ly8gQWNjb3JkaW5nIHRvIFtOYW1lc3BhY2VzIGluIFhNTCAxLjBdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNucy11c2luZykgLFxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI25zYy1Ob1ByZWZpeFVuZGVjbCA6XG5cdC8vID4gSW4gYSBuYW1lc3BhY2UgZGVjbGFyYXRpb24gZm9yIGEgcHJlZml4IFsuLi5dLCB0aGUgYXR0cmlidXRlIHZhbHVlIE1VU1QgTk9UIGJlIGVtcHR5LlxuXHQvLyBpbiBhIHNpbWlsYXIgbWFubmVyIFtOYW1lc3BhY2VzIGluIFhNTCAxLjFdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMxMS8jbnMtdXNpbmcpXG5cdC8vIGFuZCBtb3JlIHNwZWNpZmljYWxseSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zYy1OU0RlY2xhcmVkIDpcblx0Ly8gPiBbLi4uXSBGdXJ0aGVybW9yZSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBbLi4uXSBtdXN0IG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXG5cdC8vIHNvIHNlcmlhbGl6aW5nIGVtcHR5IG5hbWVzcGFjZSB2YWx1ZSBsaWtlIHhtbG5zOmRzPVwiXCIgd291bGQgcHJvZHVjZSBhbiBpbnZhbGlkIFhNTCBkb2N1bWVudC5cblx0aWYgKCF1cmkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IE5BTUVTUEFDRS5YTUwgfHwgdXJpID09PSBOQU1FU1BBQ0UuWE1MTlMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aFxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG5cdFx0Ly8gZ2V0IG5hbWVzcGFjZSBwcmVmaXhcblx0XHRpZiAobnMucHJlZml4ID09PSBwcmVmaXgpIHtcblx0XHRcdHJldHVybiBucy5uYW1lc3BhY2UgIT09IHVyaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFdlbGwtZm9ybWVkIGNvbnN0cmFpbnQ6IE5vIDwgaW4gQXR0cmlidXRlIFZhbHVlc1xuICogPiBUaGUgcmVwbGFjZW1lbnQgdGV4dCBvZiBhbnkgZW50aXR5IHJlZmVycmVkIHRvIGRpcmVjdGx5IG9yIGluZGlyZWN0bHlcbiAqID4gaW4gYW4gYXR0cmlidXRlIHZhbHVlIG11c3Qgbm90IGNvbnRhaW4gYSA8LlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI0NsZWFuQXR0clZhbHNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNOVC1BdHRWYWx1ZVxuICpcbiAqIExpdGVyYWwgd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNwYWNlIHRoYXQgYXBwZWFyIGluIGF0dHJpYnV0ZSB2YWx1ZXNcbiAqIGFyZSBzZXJpYWxpemVkIGFzIHRoZWlyIGVudGl0eSByZWZlcmVuY2VzLCBzbyB0aGV5IHdpbGwgYmUgcHJlc2VydmVkLlxuICogKEluIGNvbnRyYXN0IHRvIHdoaXRlc3BhY2UgbGl0ZXJhbHMgaW4gdGhlIGlucHV0IHdoaWNoIGFyZSBub3JtYWxpemVkIHRvIHNwYWNlcylcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNBVk5vcm1hbGl6ZVxuICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3NlcmlhbGl6aW5nLWFuLWVsZW1lbnQtcy1hdHRyaWJ1dGVzXG4gKi9cbmZ1bmN0aW9uIGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuXHRidWYucHVzaCgnICcsIHF1YWxpZmllZE5hbWUsICc9XCInLCB2YWx1ZS5yZXBsYWNlKC9bPD4mXCJcXHRcXG5cXHJdL2csIF94bWxFbmNvZGVyKSwgJ1wiJylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpe1xuXHRpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB7XG5cdFx0dmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcblx0fVxuXG5cdGlmKG5vZGVGaWx0ZXIpe1xuXHRcdG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuXHRcdGlmKG5vZGUpe1xuXHRcdFx0aWYodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRidWYucHVzaChub2RlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL2J1Zi5zb3J0LmFwcGx5KGF0dHJzLCBhdHRyaWJ1dGVTb3J0ZXIpO1xuXHR9XG5cblx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0dmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuXG5cdFx0aXNIVE1MID0gTkFNRVNQQUNFLmlzSFRNTChub2RlLm5hbWVzcGFjZVVSSSkgfHwgaXNIVE1MXG5cblx0XHR2YXIgcHJlZml4ZWROb2RlTmFtZSA9IG5vZGVOYW1lXG5cdFx0aWYgKCFpc0hUTUwgJiYgIW5vZGUucHJlZml4ICYmIG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHR2YXIgZGVmYXVsdE5TXG5cdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGZyb20gYHhtbG5zYCBhdHRyaWJ1dGVcblx0XHRcdGZvciAodmFyIGFpID0gMDsgYWkgPCBhdHRycy5sZW5ndGg7IGFpKyspIHtcblx0XHRcdFx0aWYgKGF0dHJzLml0ZW0oYWkpLm5hbWUgPT09ICd4bWxucycpIHtcblx0XHRcdFx0XHRkZWZhdWx0TlMgPSBhdHRycy5pdGVtKGFpKS52YWx1ZVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghZGVmYXVsdE5TKSB7XG5cdFx0XHRcdC8vIGxvb2t1cCBjdXJyZW50IGRlZmF1bHQgbnMgaW4gdmlzaWJsZU5hbWVzcGFjZXNcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLnByZWZpeCA9PT0gJycgJiYgbmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHROUyA9IG5hbWVzcGFjZS5uYW1lc3BhY2Vcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGVmYXVsdE5TICE9PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRmb3IgKHZhciBuc2kgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggLSAxOyBuc2kgPj0gMDsgbnNpLS0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gdmlzaWJsZU5hbWVzcGFjZXNbbnNpXVxuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UubmFtZXNwYWNlID09PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXgpIHtcblx0XHRcdFx0XHRcdFx0cHJlZml4ZWROb2RlTmFtZSA9IG5hbWVzcGFjZS5wcmVmaXggKyAnOicgKyBub2RlTmFtZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRidWYucHVzaCgnPCcsIHByZWZpeGVkTm9kZU5hbWUpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vIGFkZCBuYW1lc3BhY2VzIGZvciBhdHRyaWJ1dGVzXG5cdFx0XHR2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cdFx0XHRpZiAoYXR0ci5wcmVmaXggPT0gJ3htbG5zJykge1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBhdHRyLmxvY2FsTmFtZSwgbmFtZXNwYWNlOiBhdHRyLnZhbHVlIH0pO1xuXHRcdFx0fWVsc2UgaWYoYXR0ci5ub2RlTmFtZSA9PSAneG1sbnMnKXtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogJycsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKG5lZWROYW1lc3BhY2VEZWZpbmUoYXR0cixpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0XHR2YXIgcHJlZml4ID0gYXR0ci5wcmVmaXh8fCcnO1xuXHRcdFx0XHR2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cdFx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoYXR0cixidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuYW1lc3BhY2UgZm9yIGN1cnJlbnQgbm9kZVxuXHRcdGlmIChub2RlTmFtZSA9PT0gcHJlZml4ZWROb2RlTmFtZSAmJiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG5cdFx0XHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXh8fCcnO1xuXHRcdFx0dmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuXHRcdFx0YWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHByZWZpeCA/ICd4bWxuczonICsgcHJlZml4IDogXCJ4bWxuc1wiLCB1cmkpO1xuXHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdFx0Ly9pZiBpcyBjZGF0YSBjaGlsZCBub2RlXG5cdFx0XHRpZihpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpe1xuXHRcdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdFx0aWYoY2hpbGQuZGF0YSl7XG5cdFx0XHRcdFx0XHRidWYucHVzaChjaGlsZC5kYXRhKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc8LycscHJlZml4ZWROb2RlTmFtZSwnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0YnVmLnB1c2goJy8+Jyk7XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhZGRlZCB2aXNpYmxlIG5hbWVzcGFjZXNcblx0XHQvL3Zpc2libGVOYW1lc3BhY2VzLmxlbmd0aCA9IHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXM7XG5cdFx0cmV0dXJuO1xuXHRjYXNlIERPQ1VNRU5UX05PREU6XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRyZXR1cm4gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIG5vZGUubmFtZSwgbm9kZS52YWx1ZSk7XG5cdGNhc2UgVEVYVF9OT0RFOlxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbXBlcnNhbmQgY2hhcmFjdGVyICgmKSBhbmQgdGhlIGxlZnQgYW5nbGUgYnJhY2tldCAoPCkgbXVzdCBub3QgYXBwZWFyIGluIHRoZWlyIGxpdGVyYWwgZm9ybSxcblx0XHQgKiBleGNlcHQgd2hlbiB1c2VkIGFzIG1hcmt1cCBkZWxpbWl0ZXJzLCBvciB3aXRoaW4gYSBjb21tZW50LCBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIG9yIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKiBJZiB0aGV5IGFyZSBuZWVkZWQgZWxzZXdoZXJlLCB0aGV5IG11c3QgYmUgZXNjYXBlZCB1c2luZyBlaXRoZXIgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBvciB0aGUgc3RyaW5nc1xuXHRcdCAqIGAmYW1wO2AgYW5kIGAmbHQ7YCByZXNwZWN0aXZlbHkuXG5cdFx0ICogVGhlIHJpZ2h0IGFuZ2xlIGJyYWNrZXQgKD4pIG1heSBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgc3RyaW5nIFwiICZndDsgXCIsIGFuZCBtdXN0LCBmb3IgY29tcGF0aWJpbGl0eSxcblx0XHQgKiBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBgJmd0O2Agb3IgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlIHdoZW4gaXQgYXBwZWFycyBpbiB0aGUgc3RyaW5nIGBdXT5gIGluIGNvbnRlbnQsXG5cdFx0ICogd2hlbiB0aGF0IHN0cmluZyBpcyBub3QgbWFya2luZyB0aGUgZW5kIG9mIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKlxuXHRcdCAqIEluIHRoZSBjb250ZW50IG9mIGVsZW1lbnRzLCBjaGFyYWN0ZXIgZGF0YSBpcyBhbnkgc3RyaW5nIG9mIGNoYXJhY3RlcnNcblx0XHQgKiB3aGljaCBkb2VzIG5vdCBjb250YWluIHRoZSBzdGFydC1kZWxpbWl0ZXIgb2YgYW55IG1hcmt1cFxuXHRcdCAqIGFuZCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBDREFUQS1zZWN0aW9uLWNsb3NlIGRlbGltaXRlciwgYF1dPmAuXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULUNoYXJEYXRhXG5cdFx0ICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3htbC1zZXJpYWxpemluZy1hLXRleHQtbm9kZVxuXHRcdCAqL1xuXHRcdHJldHVybiBidWYucHVzaChub2RlLmRhdGFcblx0XHRcdC5yZXBsYWNlKC9bPCY+XS9nLF94bWxFbmNvZGVyKVxuXHRcdCk7XG5cdGNhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggJzwhW0NEQVRBWycsbm9kZS5kYXRhLCddXT4nKTtcblx0Y2FzZSBDT01NRU5UX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjwhLS1cIixub2RlLmRhdGEsXCItLT5cIik7XG5cdGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHRcdHZhciBwdWJpZCA9IG5vZGUucHVibGljSWQ7XG5cdFx0dmFyIHN5c2lkID0gbm9kZS5zeXN0ZW1JZDtcblx0XHRidWYucHVzaCgnPCFET0NUWVBFICcsbm9kZS5uYW1lKTtcblx0XHRpZihwdWJpZCl7XG5cdFx0XHRidWYucHVzaCgnIFBVQkxJQyAnLCBwdWJpZCk7XG5cdFx0XHRpZiAoc3lzaWQgJiYgc3lzaWQhPScuJykge1xuXHRcdFx0XHRidWYucHVzaCgnICcsIHN5c2lkKTtcblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc+Jyk7XG5cdFx0fWVsc2UgaWYoc3lzaWQgJiYgc3lzaWQhPScuJyl7XG5cdFx0XHRidWYucHVzaCgnIFNZU1RFTSAnLCBzeXNpZCwgJz4nKTtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBzdWIgPSBub2RlLmludGVybmFsU3Vic2V0O1xuXHRcdFx0aWYoc3ViKXtcblx0XHRcdFx0YnVmLnB1c2goXCIgW1wiLHN1YixcIl1cIik7XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaChcIj5cIik7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjw/XCIsbm9kZS50YXJnZXQsXCIgXCIsbm9kZS5kYXRhLFwiPz5cIik7XG5cdGNhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggJyYnLG5vZGUubm9kZU5hbWUsJzsnKTtcblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERTpcblx0ZGVmYXVsdDpcblx0XHRidWYucHVzaCgnPz8nLG5vZGUubm9kZU5hbWUpO1xuXHR9XG59XG5mdW5jdGlvbiBpbXBvcnROb2RlKGRvYyxub2RlLGRlZXApe1xuXHR2YXIgbm9kZTI7XG5cdHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcblx0XHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRcdC8vdmFyIGF0dHJzID0gbm9kZTIuYXR0cmlidXRlcztcblx0XHQvL3ZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdFx0Ly9mb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0Ly9ub2RlMi5zZXRBdHRyaWJ1dGVOb2RlTlMoaW1wb3J0Tm9kZShkb2MsYXR0cnMuaXRlbShpKSxkZWVwKSk7XG5cdFx0Ly99XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRicmVhaztcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRkZWVwID0gdHJ1ZTtcblx0XHRicmVhaztcblx0Ly9jYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcblx0Ly9jYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcblx0Ly8vL2Nhc2UgVEVYVF9OT0RFOlxuXHQvL2Nhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHQvL2Nhc2UgQ09NTUVOVF9OT0RFOlxuXHQvL1x0ZGVlcCA9IGZhbHNlO1xuXHQvL1x0YnJlYWs7XG5cdC8vY2FzZSBET0NVTUVOVF9OT0RFOlxuXHQvL2Nhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHQvL2Nhbm5vdCBiZSBpbXBvcnRlZC5cblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERe+8mlxuXHQvL2NhbiBub3QgaGl0IGluIGxldmVsM1xuXHQvL2RlZmF1bHQ6dGhyb3cgZTtcblx0fVxuXHRpZighbm9kZTIpe1xuXHRcdG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpOy8vZmFsc2Vcblx0fVxuXHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRub2RlMi5wYXJlbnROb2RlID0gbnVsbDtcblx0aWYoZGVlcCl7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdG5vZGUyLmFwcGVuZENoaWxkKGltcG9ydE5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cbi8vXG4vL3ZhciBfcmVsYXRpb25NYXAgPSB7Zmlyc3RDaGlsZDoxLGxhc3RDaGlsZDoxLHByZXZpb3VzU2libGluZzoxLG5leHRTaWJsaW5nOjEsXG4vL1x0XHRcdFx0XHRhdHRyaWJ1dGVzOjEsY2hpbGROb2RlczoxLHBhcmVudE5vZGU6MSxkb2N1bWVudEVsZW1lbnQ6MSxkb2N0eXBlLH07XG5mdW5jdGlvbiBjbG9uZU5vZGUoZG9jLG5vZGUsZGVlcCl7XG5cdHZhciBub2RlMiA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKCk7XG5cdGZvciAodmFyIG4gaW4gbm9kZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZSwgbikpIHtcblx0XHRcdHZhciB2ID0gbm9kZVtuXTtcblx0XHRcdGlmICh0eXBlb2YgdiAhPSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdGlmICh2ICE9IG5vZGUyW25dKSB7XG5cdFx0XHRcdFx0bm9kZTJbbl0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmKG5vZGUuY2hpbGROb2Rlcyl7XG5cdFx0bm9kZTIuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHR9XG5cdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdHN3aXRjaCAobm9kZTIubm9kZVR5cGUpIHtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcztcblx0XHR2YXIgYXR0cnMyXHQ9IG5vZGUyLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aFxuXHRcdGF0dHJzMi5fb3duZXJFbGVtZW50ID0gbm9kZTI7XG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdG5vZGUyLnNldEF0dHJpYnV0ZU5vZGUoY2xvbmVOb2RlKGRvYyxhdHRycy5pdGVtKGkpLHRydWUpKTtcblx0XHR9XG5cdFx0YnJlYWs7O1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdGRlZXAgPSB0cnVlO1xuXHR9XG5cdGlmKGRlZXApe1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRub2RlMi5hcHBlbmRDaGlsZChjbG9uZU5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cblxuZnVuY3Rpb24gX19zZXRfXyhvYmplY3Qsa2V5LHZhbHVlKXtcblx0b2JqZWN0W2tleV0gPSB2YWx1ZVxufVxuLy9kbyBkeW5hbWljXG50cnl7XG5cdGlmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsJ2xlbmd0aCcse1xuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRsZW5ndGg7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsJ3RleHRDb250ZW50Jyx7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIGdldFRleHRDb250ZW50KHRoaXMpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0OmZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRzd2l0Y2godGhpcy5ub2RlVHlwZSl7XG5cdFx0XHRcdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdFx0d2hpbGUodGhpcy5maXJzdENoaWxkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGF0YSB8fCBTdHJpbmcoZGF0YSkpe1xuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy5ub2RlVmFsdWUgPSBkYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpe1xuXHRcdFx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdHZhciBidWYgPSBbXTtcblx0XHRcdFx0bm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRcdFx0d2hpbGUobm9kZSl7XG5cdFx0XHRcdFx0aWYobm9kZS5ub2RlVHlwZSE9PTcgJiYgbm9kZS5ub2RlVHlwZSAhPT04KXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfX3NldF9fID0gZnVuY3Rpb24ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKVxuXHRcdFx0b2JqZWN0WyckJCcra2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG59Y2F0Y2goZSl7Ly9pZThcbn1cblxuLy9pZih0eXBlb2YgcmVxdWlyZSA9PSAnZnVuY3Rpb24nKXtcblx0ZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBEb2N1bWVudFR5cGU7XG5cdGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gRE9NRXhjZXB0aW9uO1xuXHRleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb247XG5cdGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5cdGV4cG9ydHMuTm9kZSA9IE5vZGU7XG5cdGV4cG9ydHMuTm9kZUxpc3QgPSBOb2RlTGlzdDtcblx0ZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcbi8vfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnJlZXplID0gcmVxdWlyZSgnLi9jb252ZW50aW9ucycpLmZyZWV6ZTtcblxuLyoqXG4gKiBUaGUgZW50aXRpZXMgdGhhdCBhcmUgcHJlZGVmaW5lZCBpbiBldmVyeSBYTUwgZG9jdW1lbnQuXG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwNi9SRUMteG1sMTEtMjAwNjA4MTYvI3NlYy1wcmVkZWZpbmVkLWVudCBXM0MgWE1MIDEuMVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMteG1sLTIwMDgxMTI2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjBcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI1ByZWRlZmluZWRfZW50aXRpZXNfaW5fWE1MIFdpa2lwZWRpYVxuICovXG5leHBvcnRzLlhNTF9FTlRJVElFUyA9IGZyZWV6ZSh7XG5cdGFtcDogJyYnLFxuXHRhcG9zOiBcIidcIixcblx0Z3Q6ICc+Jyxcblx0bHQ6ICc8Jyxcblx0cXVvdDogJ1wiJyxcbn0pO1xuXG4vKipcbiAqIEEgbWFwIG9mIGFsbCBlbnRpdGllcyB0aGF0IGFyZSBkZXRlY3RlZCBpbiBhbiBIVE1MIGRvY3VtZW50LlxuICogVGhleSBjb250YWluIGFsbCBlbnRyaWVzIGZyb20gYFhNTF9FTlRJVElFU2AuXG4gKlxuICogQHNlZSBYTUxfRU5USVRJRVNcbiAqIEBzZWUgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ1xuICogQHNlZSBET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUuY3JlYXRlSFRNTERvY3VtZW50XG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzIFdIQVRXRyBIVE1MKDUpIFNwZWNcbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9lbnRpdGllcy5qc29uIEpTT05cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1lbnRpdHktbmFtZXMvIFczQyBYTUwgRW50aXR5IE5hbWVzXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNC9zZ21sL2VudGl0aWVzLmh0bWwgVzNDIEhUTUw0L1NHTUxcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlc19pbl9IVE1MIFdpa2lwZWRpYSAoSFRNTClcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0VudGl0aWVzX3JlcHJlc2VudGluZ19zcGVjaWFsX2NoYXJhY3RlcnNfaW5fWEhUTUwgV2lrcGVkaWEgKFhIVE1MKVxuICovXG5leHBvcnRzLkhUTUxfRU5USVRJRVMgPSBmcmVlemUoe1xuXHRBYWN1dGU6ICdcXHUwMEMxJyxcblx0YWFjdXRlOiAnXFx1MDBFMScsXG5cdEFicmV2ZTogJ1xcdTAxMDInLFxuXHRhYnJldmU6ICdcXHUwMTAzJyxcblx0YWM6ICdcXHUyMjNFJyxcblx0YWNkOiAnXFx1MjIzRicsXG5cdGFjRTogJ1xcdTIyM0VcXHUwMzMzJyxcblx0QWNpcmM6ICdcXHUwMEMyJyxcblx0YWNpcmM6ICdcXHUwMEUyJyxcblx0YWN1dGU6ICdcXHUwMEI0Jyxcblx0QWN5OiAnXFx1MDQxMCcsXG5cdGFjeTogJ1xcdTA0MzAnLFxuXHRBRWxpZzogJ1xcdTAwQzYnLFxuXHRhZWxpZzogJ1xcdTAwRTYnLFxuXHRhZjogJ1xcdTIwNjEnLFxuXHRBZnI6ICdcXHVEODM1XFx1REQwNCcsXG5cdGFmcjogJ1xcdUQ4MzVcXHVERDFFJyxcblx0QWdyYXZlOiAnXFx1MDBDMCcsXG5cdGFncmF2ZTogJ1xcdTAwRTAnLFxuXHRhbGVmc3ltOiAnXFx1MjEzNScsXG5cdGFsZXBoOiAnXFx1MjEzNScsXG5cdEFscGhhOiAnXFx1MDM5MScsXG5cdGFscGhhOiAnXFx1MDNCMScsXG5cdEFtYWNyOiAnXFx1MDEwMCcsXG5cdGFtYWNyOiAnXFx1MDEwMScsXG5cdGFtYWxnOiAnXFx1MkEzRicsXG5cdEFNUDogJ1xcdTAwMjYnLFxuXHRhbXA6ICdcXHUwMDI2Jyxcblx0QW5kOiAnXFx1MkE1MycsXG5cdGFuZDogJ1xcdTIyMjcnLFxuXHRhbmRhbmQ6ICdcXHUyQTU1Jyxcblx0YW5kZDogJ1xcdTJBNUMnLFxuXHRhbmRzbG9wZTogJ1xcdTJBNTgnLFxuXHRhbmR2OiAnXFx1MkE1QScsXG5cdGFuZzogJ1xcdTIyMjAnLFxuXHRhbmdlOiAnXFx1MjlBNCcsXG5cdGFuZ2xlOiAnXFx1MjIyMCcsXG5cdGFuZ21zZDogJ1xcdTIyMjEnLFxuXHRhbmdtc2RhYTogJ1xcdTI5QTgnLFxuXHRhbmdtc2RhYjogJ1xcdTI5QTknLFxuXHRhbmdtc2RhYzogJ1xcdTI5QUEnLFxuXHRhbmdtc2RhZDogJ1xcdTI5QUInLFxuXHRhbmdtc2RhZTogJ1xcdTI5QUMnLFxuXHRhbmdtc2RhZjogJ1xcdTI5QUQnLFxuXHRhbmdtc2RhZzogJ1xcdTI5QUUnLFxuXHRhbmdtc2RhaDogJ1xcdTI5QUYnLFxuXHRhbmdydDogJ1xcdTIyMUYnLFxuXHRhbmdydHZiOiAnXFx1MjJCRScsXG5cdGFuZ3J0dmJkOiAnXFx1Mjk5RCcsXG5cdGFuZ3NwaDogJ1xcdTIyMjInLFxuXHRhbmdzdDogJ1xcdTAwQzUnLFxuXHRhbmd6YXJyOiAnXFx1MjM3QycsXG5cdEFvZ29uOiAnXFx1MDEwNCcsXG5cdGFvZ29uOiAnXFx1MDEwNScsXG5cdEFvcGY6ICdcXHVEODM1XFx1REQzOCcsXG5cdGFvcGY6ICdcXHVEODM1XFx1REQ1MicsXG5cdGFwOiAnXFx1MjI0OCcsXG5cdGFwYWNpcjogJ1xcdTJBNkYnLFxuXHRhcEU6ICdcXHUyQTcwJyxcblx0YXBlOiAnXFx1MjI0QScsXG5cdGFwaWQ6ICdcXHUyMjRCJyxcblx0YXBvczogJ1xcdTAwMjcnLFxuXHRBcHBseUZ1bmN0aW9uOiAnXFx1MjA2MScsXG5cdGFwcHJveDogJ1xcdTIyNDgnLFxuXHRhcHByb3hlcTogJ1xcdTIyNEEnLFxuXHRBcmluZzogJ1xcdTAwQzUnLFxuXHRhcmluZzogJ1xcdTAwRTUnLFxuXHRBc2NyOiAnXFx1RDgzNVxcdURDOUMnLFxuXHRhc2NyOiAnXFx1RDgzNVxcdURDQjYnLFxuXHRBc3NpZ246ICdcXHUyMjU0Jyxcblx0YXN0OiAnXFx1MDAyQScsXG5cdGFzeW1wOiAnXFx1MjI0OCcsXG5cdGFzeW1wZXE6ICdcXHUyMjREJyxcblx0QXRpbGRlOiAnXFx1MDBDMycsXG5cdGF0aWxkZTogJ1xcdTAwRTMnLFxuXHRBdW1sOiAnXFx1MDBDNCcsXG5cdGF1bWw6ICdcXHUwMEU0Jyxcblx0YXdjb25pbnQ6ICdcXHUyMjMzJyxcblx0YXdpbnQ6ICdcXHUyQTExJyxcblx0YmFja2Nvbmc6ICdcXHUyMjRDJyxcblx0YmFja2Vwc2lsb246ICdcXHUwM0Y2Jyxcblx0YmFja3ByaW1lOiAnXFx1MjAzNScsXG5cdGJhY2tzaW06ICdcXHUyMjNEJyxcblx0YmFja3NpbWVxOiAnXFx1MjJDRCcsXG5cdEJhY2tzbGFzaDogJ1xcdTIyMTYnLFxuXHRCYXJ2OiAnXFx1MkFFNycsXG5cdGJhcnZlZTogJ1xcdTIyQkQnLFxuXHRCYXJ3ZWQ6ICdcXHUyMzA2Jyxcblx0YmFyd2VkOiAnXFx1MjMwNScsXG5cdGJhcndlZGdlOiAnXFx1MjMwNScsXG5cdGJicms6ICdcXHUyM0I1Jyxcblx0YmJya3Ricms6ICdcXHUyM0I2Jyxcblx0YmNvbmc6ICdcXHUyMjRDJyxcblx0QmN5OiAnXFx1MDQxMScsXG5cdGJjeTogJ1xcdTA0MzEnLFxuXHRiZHF1bzogJ1xcdTIwMUUnLFxuXHRiZWNhdXM6ICdcXHUyMjM1Jyxcblx0QmVjYXVzZTogJ1xcdTIyMzUnLFxuXHRiZWNhdXNlOiAnXFx1MjIzNScsXG5cdGJlbXB0eXY6ICdcXHUyOUIwJyxcblx0YmVwc2k6ICdcXHUwM0Y2Jyxcblx0YmVybm91OiAnXFx1MjEyQycsXG5cdEJlcm5vdWxsaXM6ICdcXHUyMTJDJyxcblx0QmV0YTogJ1xcdTAzOTInLFxuXHRiZXRhOiAnXFx1MDNCMicsXG5cdGJldGg6ICdcXHUyMTM2Jyxcblx0YmV0d2VlbjogJ1xcdTIyNkMnLFxuXHRCZnI6ICdcXHVEODM1XFx1REQwNScsXG5cdGJmcjogJ1xcdUQ4MzVcXHVERDFGJyxcblx0YmlnY2FwOiAnXFx1MjJDMicsXG5cdGJpZ2NpcmM6ICdcXHUyNUVGJyxcblx0YmlnY3VwOiAnXFx1MjJDMycsXG5cdGJpZ29kb3Q6ICdcXHUyQTAwJyxcblx0Ymlnb3BsdXM6ICdcXHUyQTAxJyxcblx0Ymlnb3RpbWVzOiAnXFx1MkEwMicsXG5cdGJpZ3NxY3VwOiAnXFx1MkEwNicsXG5cdGJpZ3N0YXI6ICdcXHUyNjA1Jyxcblx0YmlndHJpYW5nbGVkb3duOiAnXFx1MjVCRCcsXG5cdGJpZ3RyaWFuZ2xldXA6ICdcXHUyNUIzJyxcblx0YmlndXBsdXM6ICdcXHUyQTA0Jyxcblx0YmlndmVlOiAnXFx1MjJDMScsXG5cdGJpZ3dlZGdlOiAnXFx1MjJDMCcsXG5cdGJrYXJvdzogJ1xcdTI5MEQnLFxuXHRibGFja2xvemVuZ2U6ICdcXHUyOUVCJyxcblx0YmxhY2tzcXVhcmU6ICdcXHUyNUFBJyxcblx0YmxhY2t0cmlhbmdsZTogJ1xcdTI1QjQnLFxuXHRibGFja3RyaWFuZ2xlZG93bjogJ1xcdTI1QkUnLFxuXHRibGFja3RyaWFuZ2xlbGVmdDogJ1xcdTI1QzInLFxuXHRibGFja3RyaWFuZ2xlcmlnaHQ6ICdcXHUyNUI4Jyxcblx0Ymxhbms6ICdcXHUyNDIzJyxcblx0YmxrMTI6ICdcXHUyNTkyJyxcblx0YmxrMTQ6ICdcXHUyNTkxJyxcblx0YmxrMzQ6ICdcXHUyNTkzJyxcblx0YmxvY2s6ICdcXHUyNTg4Jyxcblx0Ym5lOiAnXFx1MDAzRFxcdTIwRTUnLFxuXHRibmVxdWl2OiAnXFx1MjI2MVxcdTIwRTUnLFxuXHRiTm90OiAnXFx1MkFFRCcsXG5cdGJub3Q6ICdcXHUyMzEwJyxcblx0Qm9wZjogJ1xcdUQ4MzVcXHVERDM5Jyxcblx0Ym9wZjogJ1xcdUQ4MzVcXHVERDUzJyxcblx0Ym90OiAnXFx1MjJBNScsXG5cdGJvdHRvbTogJ1xcdTIyQTUnLFxuXHRib3d0aWU6ICdcXHUyMkM4Jyxcblx0Ym94Ym94OiAnXFx1MjlDOScsXG5cdGJveERMOiAnXFx1MjU1NycsXG5cdGJveERsOiAnXFx1MjU1NicsXG5cdGJveGRMOiAnXFx1MjU1NScsXG5cdGJveGRsOiAnXFx1MjUxMCcsXG5cdGJveERSOiAnXFx1MjU1NCcsXG5cdGJveERyOiAnXFx1MjU1MycsXG5cdGJveGRSOiAnXFx1MjU1MicsXG5cdGJveGRyOiAnXFx1MjUwQycsXG5cdGJveEg6ICdcXHUyNTUwJyxcblx0Ym94aDogJ1xcdTI1MDAnLFxuXHRib3hIRDogJ1xcdTI1NjYnLFxuXHRib3hIZDogJ1xcdTI1NjQnLFxuXHRib3hoRDogJ1xcdTI1NjUnLFxuXHRib3hoZDogJ1xcdTI1MkMnLFxuXHRib3hIVTogJ1xcdTI1NjknLFxuXHRib3hIdTogJ1xcdTI1NjcnLFxuXHRib3hoVTogJ1xcdTI1NjgnLFxuXHRib3hodTogJ1xcdTI1MzQnLFxuXHRib3htaW51czogJ1xcdTIyOUYnLFxuXHRib3hwbHVzOiAnXFx1MjI5RScsXG5cdGJveHRpbWVzOiAnXFx1MjJBMCcsXG5cdGJveFVMOiAnXFx1MjU1RCcsXG5cdGJveFVsOiAnXFx1MjU1QycsXG5cdGJveHVMOiAnXFx1MjU1QicsXG5cdGJveHVsOiAnXFx1MjUxOCcsXG5cdGJveFVSOiAnXFx1MjU1QScsXG5cdGJveFVyOiAnXFx1MjU1OScsXG5cdGJveHVSOiAnXFx1MjU1OCcsXG5cdGJveHVyOiAnXFx1MjUxNCcsXG5cdGJveFY6ICdcXHUyNTUxJyxcblx0Ym94djogJ1xcdTI1MDInLFxuXHRib3hWSDogJ1xcdTI1NkMnLFxuXHRib3hWaDogJ1xcdTI1NkInLFxuXHRib3h2SDogJ1xcdTI1NkEnLFxuXHRib3h2aDogJ1xcdTI1M0MnLFxuXHRib3hWTDogJ1xcdTI1NjMnLFxuXHRib3hWbDogJ1xcdTI1NjInLFxuXHRib3h2TDogJ1xcdTI1NjEnLFxuXHRib3h2bDogJ1xcdTI1MjQnLFxuXHRib3hWUjogJ1xcdTI1NjAnLFxuXHRib3hWcjogJ1xcdTI1NUYnLFxuXHRib3h2UjogJ1xcdTI1NUUnLFxuXHRib3h2cjogJ1xcdTI1MUMnLFxuXHRicHJpbWU6ICdcXHUyMDM1Jyxcblx0QnJldmU6ICdcXHUwMkQ4Jyxcblx0YnJldmU6ICdcXHUwMkQ4Jyxcblx0YnJ2YmFyOiAnXFx1MDBBNicsXG5cdEJzY3I6ICdcXHUyMTJDJyxcblx0YnNjcjogJ1xcdUQ4MzVcXHVEQ0I3Jyxcblx0YnNlbWk6ICdcXHUyMDRGJyxcblx0YnNpbTogJ1xcdTIyM0QnLFxuXHRic2ltZTogJ1xcdTIyQ0QnLFxuXHRic29sOiAnXFx1MDA1QycsXG5cdGJzb2xiOiAnXFx1MjlDNScsXG5cdGJzb2xoc3ViOiAnXFx1MjdDOCcsXG5cdGJ1bGw6ICdcXHUyMDIyJyxcblx0YnVsbGV0OiAnXFx1MjAyMicsXG5cdGJ1bXA6ICdcXHUyMjRFJyxcblx0YnVtcEU6ICdcXHUyQUFFJyxcblx0YnVtcGU6ICdcXHUyMjRGJyxcblx0QnVtcGVxOiAnXFx1MjI0RScsXG5cdGJ1bXBlcTogJ1xcdTIyNEYnLFxuXHRDYWN1dGU6ICdcXHUwMTA2Jyxcblx0Y2FjdXRlOiAnXFx1MDEwNycsXG5cdENhcDogJ1xcdTIyRDInLFxuXHRjYXA6ICdcXHUyMjI5Jyxcblx0Y2FwYW5kOiAnXFx1MkE0NCcsXG5cdGNhcGJyY3VwOiAnXFx1MkE0OScsXG5cdGNhcGNhcDogJ1xcdTJBNEInLFxuXHRjYXBjdXA6ICdcXHUyQTQ3Jyxcblx0Y2FwZG90OiAnXFx1MkE0MCcsXG5cdENhcGl0YWxEaWZmZXJlbnRpYWxEOiAnXFx1MjE0NScsXG5cdGNhcHM6ICdcXHUyMjI5XFx1RkUwMCcsXG5cdGNhcmV0OiAnXFx1MjA0MScsXG5cdGNhcm9uOiAnXFx1MDJDNycsXG5cdENheWxleXM6ICdcXHUyMTJEJyxcblx0Y2NhcHM6ICdcXHUyQTREJyxcblx0Q2Nhcm9uOiAnXFx1MDEwQycsXG5cdGNjYXJvbjogJ1xcdTAxMEQnLFxuXHRDY2VkaWw6ICdcXHUwMEM3Jyxcblx0Y2NlZGlsOiAnXFx1MDBFNycsXG5cdENjaXJjOiAnXFx1MDEwOCcsXG5cdGNjaXJjOiAnXFx1MDEwOScsXG5cdENjb25pbnQ6ICdcXHUyMjMwJyxcblx0Y2N1cHM6ICdcXHUyQTRDJyxcblx0Y2N1cHNzbTogJ1xcdTJBNTAnLFxuXHRDZG90OiAnXFx1MDEwQScsXG5cdGNkb3Q6ICdcXHUwMTBCJyxcblx0Y2VkaWw6ICdcXHUwMEI4Jyxcblx0Q2VkaWxsYTogJ1xcdTAwQjgnLFxuXHRjZW1wdHl2OiAnXFx1MjlCMicsXG5cdGNlbnQ6ICdcXHUwMEEyJyxcblx0Q2VudGVyRG90OiAnXFx1MDBCNycsXG5cdGNlbnRlcmRvdDogJ1xcdTAwQjcnLFxuXHRDZnI6ICdcXHUyMTJEJyxcblx0Y2ZyOiAnXFx1RDgzNVxcdUREMjAnLFxuXHRDSGN5OiAnXFx1MDQyNycsXG5cdGNoY3k6ICdcXHUwNDQ3Jyxcblx0Y2hlY2s6ICdcXHUyNzEzJyxcblx0Y2hlY2ttYXJrOiAnXFx1MjcxMycsXG5cdENoaTogJ1xcdTAzQTcnLFxuXHRjaGk6ICdcXHUwM0M3Jyxcblx0Y2lyOiAnXFx1MjVDQicsXG5cdGNpcmM6ICdcXHUwMkM2Jyxcblx0Y2lyY2VxOiAnXFx1MjI1NycsXG5cdGNpcmNsZWFycm93bGVmdDogJ1xcdTIxQkEnLFxuXHRjaXJjbGVhcnJvd3JpZ2h0OiAnXFx1MjFCQicsXG5cdGNpcmNsZWRhc3Q6ICdcXHUyMjlCJyxcblx0Y2lyY2xlZGNpcmM6ICdcXHUyMjlBJyxcblx0Y2lyY2xlZGRhc2g6ICdcXHUyMjlEJyxcblx0Q2lyY2xlRG90OiAnXFx1MjI5OScsXG5cdGNpcmNsZWRSOiAnXFx1MDBBRScsXG5cdGNpcmNsZWRTOiAnXFx1MjRDOCcsXG5cdENpcmNsZU1pbnVzOiAnXFx1MjI5NicsXG5cdENpcmNsZVBsdXM6ICdcXHUyMjk1Jyxcblx0Q2lyY2xlVGltZXM6ICdcXHUyMjk3Jyxcblx0Y2lyRTogJ1xcdTI5QzMnLFxuXHRjaXJlOiAnXFx1MjI1NycsXG5cdGNpcmZuaW50OiAnXFx1MkExMCcsXG5cdGNpcm1pZDogJ1xcdTJBRUYnLFxuXHRjaXJzY2lyOiAnXFx1MjlDMicsXG5cdENsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMzInLFxuXHRDbG9zZUN1cmx5RG91YmxlUXVvdGU6ICdcXHUyMDFEJyxcblx0Q2xvc2VDdXJseVF1b3RlOiAnXFx1MjAxOScsXG5cdGNsdWJzOiAnXFx1MjY2MycsXG5cdGNsdWJzdWl0OiAnXFx1MjY2MycsXG5cdENvbG9uOiAnXFx1MjIzNycsXG5cdGNvbG9uOiAnXFx1MDAzQScsXG5cdENvbG9uZTogJ1xcdTJBNzQnLFxuXHRjb2xvbmU6ICdcXHUyMjU0Jyxcblx0Y29sb25lcTogJ1xcdTIyNTQnLFxuXHRjb21tYTogJ1xcdTAwMkMnLFxuXHRjb21tYXQ6ICdcXHUwMDQwJyxcblx0Y29tcDogJ1xcdTIyMDEnLFxuXHRjb21wZm46ICdcXHUyMjE4Jyxcblx0Y29tcGxlbWVudDogJ1xcdTIyMDEnLFxuXHRjb21wbGV4ZXM6ICdcXHUyMTAyJyxcblx0Y29uZzogJ1xcdTIyNDUnLFxuXHRjb25nZG90OiAnXFx1MkE2RCcsXG5cdENvbmdydWVudDogJ1xcdTIyNjEnLFxuXHRDb25pbnQ6ICdcXHUyMjJGJyxcblx0Y29uaW50OiAnXFx1MjIyRScsXG5cdENvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMkUnLFxuXHRDb3BmOiAnXFx1MjEwMicsXG5cdGNvcGY6ICdcXHVEODM1XFx1REQ1NCcsXG5cdGNvcHJvZDogJ1xcdTIyMTAnLFxuXHRDb3Byb2R1Y3Q6ICdcXHUyMjEwJyxcblx0Q09QWTogJ1xcdTAwQTknLFxuXHRjb3B5OiAnXFx1MDBBOScsXG5cdGNvcHlzcjogJ1xcdTIxMTcnLFxuXHRDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsOiAnXFx1MjIzMycsXG5cdGNyYXJyOiAnXFx1MjFCNScsXG5cdENyb3NzOiAnXFx1MkEyRicsXG5cdGNyb3NzOiAnXFx1MjcxNycsXG5cdENzY3I6ICdcXHVEODM1XFx1REM5RScsXG5cdGNzY3I6ICdcXHVEODM1XFx1RENCOCcsXG5cdGNzdWI6ICdcXHUyQUNGJyxcblx0Y3N1YmU6ICdcXHUyQUQxJyxcblx0Y3N1cDogJ1xcdTJBRDAnLFxuXHRjc3VwZTogJ1xcdTJBRDInLFxuXHRjdGRvdDogJ1xcdTIyRUYnLFxuXHRjdWRhcnJsOiAnXFx1MjkzOCcsXG5cdGN1ZGFycnI6ICdcXHUyOTM1Jyxcblx0Y3VlcHI6ICdcXHUyMkRFJyxcblx0Y3Vlc2M6ICdcXHUyMkRGJyxcblx0Y3VsYXJyOiAnXFx1MjFCNicsXG5cdGN1bGFycnA6ICdcXHUyOTNEJyxcblx0Q3VwOiAnXFx1MjJEMycsXG5cdGN1cDogJ1xcdTIyMkEnLFxuXHRjdXBicmNhcDogJ1xcdTJBNDgnLFxuXHRDdXBDYXA6ICdcXHUyMjREJyxcblx0Y3VwY2FwOiAnXFx1MkE0NicsXG5cdGN1cGN1cDogJ1xcdTJBNEEnLFxuXHRjdXBkb3Q6ICdcXHUyMjhEJyxcblx0Y3Vwb3I6ICdcXHUyQTQ1Jyxcblx0Y3VwczogJ1xcdTIyMkFcXHVGRTAwJyxcblx0Y3VyYXJyOiAnXFx1MjFCNycsXG5cdGN1cmFycm06ICdcXHUyOTNDJyxcblx0Y3VybHllcXByZWM6ICdcXHUyMkRFJyxcblx0Y3VybHllcXN1Y2M6ICdcXHUyMkRGJyxcblx0Y3VybHl2ZWU6ICdcXHUyMkNFJyxcblx0Y3VybHl3ZWRnZTogJ1xcdTIyQ0YnLFxuXHRjdXJyZW46ICdcXHUwMEE0Jyxcblx0Y3VydmVhcnJvd2xlZnQ6ICdcXHUyMUI2Jyxcblx0Y3VydmVhcnJvd3JpZ2h0OiAnXFx1MjFCNycsXG5cdGN1dmVlOiAnXFx1MjJDRScsXG5cdGN1d2VkOiAnXFx1MjJDRicsXG5cdGN3Y29uaW50OiAnXFx1MjIzMicsXG5cdGN3aW50OiAnXFx1MjIzMScsXG5cdGN5bGN0eTogJ1xcdTIzMkQnLFxuXHREYWdnZXI6ICdcXHUyMDIxJyxcblx0ZGFnZ2VyOiAnXFx1MjAyMCcsXG5cdGRhbGV0aDogJ1xcdTIxMzgnLFxuXHREYXJyOiAnXFx1MjFBMScsXG5cdGRBcnI6ICdcXHUyMUQzJyxcblx0ZGFycjogJ1xcdTIxOTMnLFxuXHRkYXNoOiAnXFx1MjAxMCcsXG5cdERhc2h2OiAnXFx1MkFFNCcsXG5cdGRhc2h2OiAnXFx1MjJBMycsXG5cdGRia2Fyb3c6ICdcXHUyOTBGJyxcblx0ZGJsYWM6ICdcXHUwMkREJyxcblx0RGNhcm9uOiAnXFx1MDEwRScsXG5cdGRjYXJvbjogJ1xcdTAxMEYnLFxuXHREY3k6ICdcXHUwNDE0Jyxcblx0ZGN5OiAnXFx1MDQzNCcsXG5cdEREOiAnXFx1MjE0NScsXG5cdGRkOiAnXFx1MjE0NicsXG5cdGRkYWdnZXI6ICdcXHUyMDIxJyxcblx0ZGRhcnI6ICdcXHUyMUNBJyxcblx0RERvdHJhaGQ6ICdcXHUyOTExJyxcblx0ZGRvdHNlcTogJ1xcdTJBNzcnLFxuXHRkZWc6ICdcXHUwMEIwJyxcblx0RGVsOiAnXFx1MjIwNycsXG5cdERlbHRhOiAnXFx1MDM5NCcsXG5cdGRlbHRhOiAnXFx1MDNCNCcsXG5cdGRlbXB0eXY6ICdcXHUyOUIxJyxcblx0ZGZpc2h0OiAnXFx1Mjk3RicsXG5cdERmcjogJ1xcdUQ4MzVcXHVERDA3Jyxcblx0ZGZyOiAnXFx1RDgzNVxcdUREMjEnLFxuXHRkSGFyOiAnXFx1Mjk2NScsXG5cdGRoYXJsOiAnXFx1MjFDMycsXG5cdGRoYXJyOiAnXFx1MjFDMicsXG5cdERpYWNyaXRpY2FsQWN1dGU6ICdcXHUwMEI0Jyxcblx0RGlhY3JpdGljYWxEb3Q6ICdcXHUwMkQ5Jyxcblx0RGlhY3JpdGljYWxEb3VibGVBY3V0ZTogJ1xcdTAyREQnLFxuXHREaWFjcml0aWNhbEdyYXZlOiAnXFx1MDA2MCcsXG5cdERpYWNyaXRpY2FsVGlsZGU6ICdcXHUwMkRDJyxcblx0ZGlhbTogJ1xcdTIyQzQnLFxuXHREaWFtb25kOiAnXFx1MjJDNCcsXG5cdGRpYW1vbmQ6ICdcXHUyMkM0Jyxcblx0ZGlhbW9uZHN1aXQ6ICdcXHUyNjY2Jyxcblx0ZGlhbXM6ICdcXHUyNjY2Jyxcblx0ZGllOiAnXFx1MDBBOCcsXG5cdERpZmZlcmVudGlhbEQ6ICdcXHUyMTQ2Jyxcblx0ZGlnYW1tYTogJ1xcdTAzREQnLFxuXHRkaXNpbjogJ1xcdTIyRjInLFxuXHRkaXY6ICdcXHUwMEY3Jyxcblx0ZGl2aWRlOiAnXFx1MDBGNycsXG5cdGRpdmlkZW9udGltZXM6ICdcXHUyMkM3Jyxcblx0ZGl2b254OiAnXFx1MjJDNycsXG5cdERKY3k6ICdcXHUwNDAyJyxcblx0ZGpjeTogJ1xcdTA0NTInLFxuXHRkbGNvcm46ICdcXHUyMzFFJyxcblx0ZGxjcm9wOiAnXFx1MjMwRCcsXG5cdGRvbGxhcjogJ1xcdTAwMjQnLFxuXHREb3BmOiAnXFx1RDgzNVxcdUREM0InLFxuXHRkb3BmOiAnXFx1RDgzNVxcdURENTUnLFxuXHREb3Q6ICdcXHUwMEE4Jyxcblx0ZG90OiAnXFx1MDJEOScsXG5cdERvdERvdDogJ1xcdTIwREMnLFxuXHRkb3RlcTogJ1xcdTIyNTAnLFxuXHRkb3RlcWRvdDogJ1xcdTIyNTEnLFxuXHREb3RFcXVhbDogJ1xcdTIyNTAnLFxuXHRkb3RtaW51czogJ1xcdTIyMzgnLFxuXHRkb3RwbHVzOiAnXFx1MjIxNCcsXG5cdGRvdHNxdWFyZTogJ1xcdTIyQTEnLFxuXHRkb3VibGViYXJ3ZWRnZTogJ1xcdTIzMDYnLFxuXHREb3VibGVDb250b3VySW50ZWdyYWw6ICdcXHUyMjJGJyxcblx0RG91YmxlRG90OiAnXFx1MDBBOCcsXG5cdERvdWJsZURvd25BcnJvdzogJ1xcdTIxRDMnLFxuXHREb3VibGVMZWZ0QXJyb3c6ICdcXHUyMUQwJyxcblx0RG91YmxlTGVmdFJpZ2h0QXJyb3c6ICdcXHUyMUQ0Jyxcblx0RG91YmxlTGVmdFRlZTogJ1xcdTJBRTQnLFxuXHREb3VibGVMb25nTGVmdEFycm93OiAnXFx1MjdGOCcsXG5cdERvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdzogJ1xcdTI3RkEnLFxuXHREb3VibGVMb25nUmlnaHRBcnJvdzogJ1xcdTI3RjknLFxuXHREb3VibGVSaWdodEFycm93OiAnXFx1MjFEMicsXG5cdERvdWJsZVJpZ2h0VGVlOiAnXFx1MjJBOCcsXG5cdERvdWJsZVVwQXJyb3c6ICdcXHUyMUQxJyxcblx0RG91YmxlVXBEb3duQXJyb3c6ICdcXHUyMUQ1Jyxcblx0RG91YmxlVmVydGljYWxCYXI6ICdcXHUyMjI1Jyxcblx0RG93bkFycm93OiAnXFx1MjE5MycsXG5cdERvd25hcnJvdzogJ1xcdTIxRDMnLFxuXHRkb3duYXJyb3c6ICdcXHUyMTkzJyxcblx0RG93bkFycm93QmFyOiAnXFx1MjkxMycsXG5cdERvd25BcnJvd1VwQXJyb3c6ICdcXHUyMUY1Jyxcblx0RG93bkJyZXZlOiAnXFx1MDMxMScsXG5cdGRvd25kb3duYXJyb3dzOiAnXFx1MjFDQScsXG5cdGRvd25oYXJwb29ubGVmdDogJ1xcdTIxQzMnLFxuXHRkb3duaGFycG9vbnJpZ2h0OiAnXFx1MjFDMicsXG5cdERvd25MZWZ0UmlnaHRWZWN0b3I6ICdcXHUyOTUwJyxcblx0RG93bkxlZnRUZWVWZWN0b3I6ICdcXHUyOTVFJyxcblx0RG93bkxlZnRWZWN0b3I6ICdcXHUyMUJEJyxcblx0RG93bkxlZnRWZWN0b3JCYXI6ICdcXHUyOTU2Jyxcblx0RG93blJpZ2h0VGVlVmVjdG9yOiAnXFx1Mjk1RicsXG5cdERvd25SaWdodFZlY3RvcjogJ1xcdTIxQzEnLFxuXHREb3duUmlnaHRWZWN0b3JCYXI6ICdcXHUyOTU3Jyxcblx0RG93blRlZTogJ1xcdTIyQTQnLFxuXHREb3duVGVlQXJyb3c6ICdcXHUyMUE3Jyxcblx0ZHJia2Fyb3c6ICdcXHUyOTEwJyxcblx0ZHJjb3JuOiAnXFx1MjMxRicsXG5cdGRyY3JvcDogJ1xcdTIzMEMnLFxuXHREc2NyOiAnXFx1RDgzNVxcdURDOUYnLFxuXHRkc2NyOiAnXFx1RDgzNVxcdURDQjknLFxuXHREU2N5OiAnXFx1MDQwNScsXG5cdGRzY3k6ICdcXHUwNDU1Jyxcblx0ZHNvbDogJ1xcdTI5RjYnLFxuXHREc3Ryb2s6ICdcXHUwMTEwJyxcblx0ZHN0cm9rOiAnXFx1MDExMScsXG5cdGR0ZG90OiAnXFx1MjJGMScsXG5cdGR0cmk6ICdcXHUyNUJGJyxcblx0ZHRyaWY6ICdcXHUyNUJFJyxcblx0ZHVhcnI6ICdcXHUyMUY1Jyxcblx0ZHVoYXI6ICdcXHUyOTZGJyxcblx0ZHdhbmdsZTogJ1xcdTI5QTYnLFxuXHREWmN5OiAnXFx1MDQwRicsXG5cdGR6Y3k6ICdcXHUwNDVGJyxcblx0ZHppZ3JhcnI6ICdcXHUyN0ZGJyxcblx0RWFjdXRlOiAnXFx1MDBDOScsXG5cdGVhY3V0ZTogJ1xcdTAwRTknLFxuXHRlYXN0ZXI6ICdcXHUyQTZFJyxcblx0RWNhcm9uOiAnXFx1MDExQScsXG5cdGVjYXJvbjogJ1xcdTAxMUInLFxuXHRlY2lyOiAnXFx1MjI1NicsXG5cdEVjaXJjOiAnXFx1MDBDQScsXG5cdGVjaXJjOiAnXFx1MDBFQScsXG5cdGVjb2xvbjogJ1xcdTIyNTUnLFxuXHRFY3k6ICdcXHUwNDJEJyxcblx0ZWN5OiAnXFx1MDQ0RCcsXG5cdGVERG90OiAnXFx1MkE3NycsXG5cdEVkb3Q6ICdcXHUwMTE2Jyxcblx0ZURvdDogJ1xcdTIyNTEnLFxuXHRlZG90OiAnXFx1MDExNycsXG5cdGVlOiAnXFx1MjE0NycsXG5cdGVmRG90OiAnXFx1MjI1MicsXG5cdEVmcjogJ1xcdUQ4MzVcXHVERDA4Jyxcblx0ZWZyOiAnXFx1RDgzNVxcdUREMjInLFxuXHRlZzogJ1xcdTJBOUEnLFxuXHRFZ3JhdmU6ICdcXHUwMEM4Jyxcblx0ZWdyYXZlOiAnXFx1MDBFOCcsXG5cdGVnczogJ1xcdTJBOTYnLFxuXHRlZ3Nkb3Q6ICdcXHUyQTk4Jyxcblx0ZWw6ICdcXHUyQTk5Jyxcblx0RWxlbWVudDogJ1xcdTIyMDgnLFxuXHRlbGludGVyczogJ1xcdTIzRTcnLFxuXHRlbGw6ICdcXHUyMTEzJyxcblx0ZWxzOiAnXFx1MkE5NScsXG5cdGVsc2RvdDogJ1xcdTJBOTcnLFxuXHRFbWFjcjogJ1xcdTAxMTInLFxuXHRlbWFjcjogJ1xcdTAxMTMnLFxuXHRlbXB0eTogJ1xcdTIyMDUnLFxuXHRlbXB0eXNldDogJ1xcdTIyMDUnLFxuXHRFbXB0eVNtYWxsU3F1YXJlOiAnXFx1MjVGQicsXG5cdGVtcHR5djogJ1xcdTIyMDUnLFxuXHRFbXB0eVZlcnlTbWFsbFNxdWFyZTogJ1xcdTI1QUInLFxuXHRlbXNwOiAnXFx1MjAwMycsXG5cdGVtc3AxMzogJ1xcdTIwMDQnLFxuXHRlbXNwMTQ6ICdcXHUyMDA1Jyxcblx0RU5HOiAnXFx1MDE0QScsXG5cdGVuZzogJ1xcdTAxNEInLFxuXHRlbnNwOiAnXFx1MjAwMicsXG5cdEVvZ29uOiAnXFx1MDExOCcsXG5cdGVvZ29uOiAnXFx1MDExOScsXG5cdEVvcGY6ICdcXHVEODM1XFx1REQzQycsXG5cdGVvcGY6ICdcXHVEODM1XFx1REQ1NicsXG5cdGVwYXI6ICdcXHUyMkQ1Jyxcblx0ZXBhcnNsOiAnXFx1MjlFMycsXG5cdGVwbHVzOiAnXFx1MkE3MScsXG5cdGVwc2k6ICdcXHUwM0I1Jyxcblx0RXBzaWxvbjogJ1xcdTAzOTUnLFxuXHRlcHNpbG9uOiAnXFx1MDNCNScsXG5cdGVwc2l2OiAnXFx1MDNGNScsXG5cdGVxY2lyYzogJ1xcdTIyNTYnLFxuXHRlcWNvbG9uOiAnXFx1MjI1NScsXG5cdGVxc2ltOiAnXFx1MjI0MicsXG5cdGVxc2xhbnRndHI6ICdcXHUyQTk2Jyxcblx0ZXFzbGFudGxlc3M6ICdcXHUyQTk1Jyxcblx0RXF1YWw6ICdcXHUyQTc1Jyxcblx0ZXF1YWxzOiAnXFx1MDAzRCcsXG5cdEVxdWFsVGlsZGU6ICdcXHUyMjQyJyxcblx0ZXF1ZXN0OiAnXFx1MjI1RicsXG5cdEVxdWlsaWJyaXVtOiAnXFx1MjFDQycsXG5cdGVxdWl2OiAnXFx1MjI2MScsXG5cdGVxdWl2REQ6ICdcXHUyQTc4Jyxcblx0ZXF2cGFyc2w6ICdcXHUyOUU1Jyxcblx0ZXJhcnI6ICdcXHUyOTcxJyxcblx0ZXJEb3Q6ICdcXHUyMjUzJyxcblx0RXNjcjogJ1xcdTIxMzAnLFxuXHRlc2NyOiAnXFx1MjEyRicsXG5cdGVzZG90OiAnXFx1MjI1MCcsXG5cdEVzaW06ICdcXHUyQTczJyxcblx0ZXNpbTogJ1xcdTIyNDInLFxuXHRFdGE6ICdcXHUwMzk3Jyxcblx0ZXRhOiAnXFx1MDNCNycsXG5cdEVUSDogJ1xcdTAwRDAnLFxuXHRldGg6ICdcXHUwMEYwJyxcblx0RXVtbDogJ1xcdTAwQ0InLFxuXHRldW1sOiAnXFx1MDBFQicsXG5cdGV1cm86ICdcXHUyMEFDJyxcblx0ZXhjbDogJ1xcdTAwMjEnLFxuXHRleGlzdDogJ1xcdTIyMDMnLFxuXHRFeGlzdHM6ICdcXHUyMjAzJyxcblx0ZXhwZWN0YXRpb246ICdcXHUyMTMwJyxcblx0RXhwb25lbnRpYWxFOiAnXFx1MjE0NycsXG5cdGV4cG9uZW50aWFsZTogJ1xcdTIxNDcnLFxuXHRmYWxsaW5nZG90c2VxOiAnXFx1MjI1MicsXG5cdEZjeTogJ1xcdTA0MjQnLFxuXHRmY3k6ICdcXHUwNDQ0Jyxcblx0ZmVtYWxlOiAnXFx1MjY0MCcsXG5cdGZmaWxpZzogJ1xcdUZCMDMnLFxuXHRmZmxpZzogJ1xcdUZCMDAnLFxuXHRmZmxsaWc6ICdcXHVGQjA0Jyxcblx0RmZyOiAnXFx1RDgzNVxcdUREMDknLFxuXHRmZnI6ICdcXHVEODM1XFx1REQyMycsXG5cdGZpbGlnOiAnXFx1RkIwMScsXG5cdEZpbGxlZFNtYWxsU3F1YXJlOiAnXFx1MjVGQycsXG5cdEZpbGxlZFZlcnlTbWFsbFNxdWFyZTogJ1xcdTI1QUEnLFxuXHRmamxpZzogJ1xcdTAwNjZcXHUwMDZBJyxcblx0ZmxhdDogJ1xcdTI2NkQnLFxuXHRmbGxpZzogJ1xcdUZCMDInLFxuXHRmbHRuczogJ1xcdTI1QjEnLFxuXHRmbm9mOiAnXFx1MDE5MicsXG5cdEZvcGY6ICdcXHVEODM1XFx1REQzRCcsXG5cdGZvcGY6ICdcXHVEODM1XFx1REQ1NycsXG5cdEZvckFsbDogJ1xcdTIyMDAnLFxuXHRmb3JhbGw6ICdcXHUyMjAwJyxcblx0Zm9yazogJ1xcdTIyRDQnLFxuXHRmb3JrdjogJ1xcdTJBRDknLFxuXHRGb3VyaWVydHJmOiAnXFx1MjEzMScsXG5cdGZwYXJ0aW50OiAnXFx1MkEwRCcsXG5cdGZyYWMxMjogJ1xcdTAwQkQnLFxuXHRmcmFjMTM6ICdcXHUyMTUzJyxcblx0ZnJhYzE0OiAnXFx1MDBCQycsXG5cdGZyYWMxNTogJ1xcdTIxNTUnLFxuXHRmcmFjMTY6ICdcXHUyMTU5Jyxcblx0ZnJhYzE4OiAnXFx1MjE1QicsXG5cdGZyYWMyMzogJ1xcdTIxNTQnLFxuXHRmcmFjMjU6ICdcXHUyMTU2Jyxcblx0ZnJhYzM0OiAnXFx1MDBCRScsXG5cdGZyYWMzNTogJ1xcdTIxNTcnLFxuXHRmcmFjMzg6ICdcXHUyMTVDJyxcblx0ZnJhYzQ1OiAnXFx1MjE1OCcsXG5cdGZyYWM1NjogJ1xcdTIxNUEnLFxuXHRmcmFjNTg6ICdcXHUyMTVEJyxcblx0ZnJhYzc4OiAnXFx1MjE1RScsXG5cdGZyYXNsOiAnXFx1MjA0NCcsXG5cdGZyb3duOiAnXFx1MjMyMicsXG5cdEZzY3I6ICdcXHUyMTMxJyxcblx0ZnNjcjogJ1xcdUQ4MzVcXHVEQ0JCJyxcblx0Z2FjdXRlOiAnXFx1MDFGNScsXG5cdEdhbW1hOiAnXFx1MDM5MycsXG5cdGdhbW1hOiAnXFx1MDNCMycsXG5cdEdhbW1hZDogJ1xcdTAzREMnLFxuXHRnYW1tYWQ6ICdcXHUwM0REJyxcblx0Z2FwOiAnXFx1MkE4NicsXG5cdEdicmV2ZTogJ1xcdTAxMUUnLFxuXHRnYnJldmU6ICdcXHUwMTFGJyxcblx0R2NlZGlsOiAnXFx1MDEyMicsXG5cdEdjaXJjOiAnXFx1MDExQycsXG5cdGdjaXJjOiAnXFx1MDExRCcsXG5cdEdjeTogJ1xcdTA0MTMnLFxuXHRnY3k6ICdcXHUwNDMzJyxcblx0R2RvdDogJ1xcdTAxMjAnLFxuXHRnZG90OiAnXFx1MDEyMScsXG5cdGdFOiAnXFx1MjI2NycsXG5cdGdlOiAnXFx1MjI2NScsXG5cdGdFbDogJ1xcdTJBOEMnLFxuXHRnZWw6ICdcXHUyMkRCJyxcblx0Z2VxOiAnXFx1MjI2NScsXG5cdGdlcXE6ICdcXHUyMjY3Jyxcblx0Z2Vxc2xhbnQ6ICdcXHUyQTdFJyxcblx0Z2VzOiAnXFx1MkE3RScsXG5cdGdlc2NjOiAnXFx1MkFBOScsXG5cdGdlc2RvdDogJ1xcdTJBODAnLFxuXHRnZXNkb3RvOiAnXFx1MkE4MicsXG5cdGdlc2RvdG9sOiAnXFx1MkE4NCcsXG5cdGdlc2w6ICdcXHUyMkRCXFx1RkUwMCcsXG5cdGdlc2xlczogJ1xcdTJBOTQnLFxuXHRHZnI6ICdcXHVEODM1XFx1REQwQScsXG5cdGdmcjogJ1xcdUQ4MzVcXHVERDI0Jyxcblx0R2c6ICdcXHUyMkQ5Jyxcblx0Z2c6ICdcXHUyMjZCJyxcblx0Z2dnOiAnXFx1MjJEOScsXG5cdGdpbWVsOiAnXFx1MjEzNycsXG5cdEdKY3k6ICdcXHUwNDAzJyxcblx0Z2pjeTogJ1xcdTA0NTMnLFxuXHRnbDogJ1xcdTIyNzcnLFxuXHRnbGE6ICdcXHUyQUE1Jyxcblx0Z2xFOiAnXFx1MkE5MicsXG5cdGdsajogJ1xcdTJBQTQnLFxuXHRnbmFwOiAnXFx1MkE4QScsXG5cdGduYXBwcm94OiAnXFx1MkE4QScsXG5cdGduRTogJ1xcdTIyNjknLFxuXHRnbmU6ICdcXHUyQTg4Jyxcblx0Z25lcTogJ1xcdTJBODgnLFxuXHRnbmVxcTogJ1xcdTIyNjknLFxuXHRnbnNpbTogJ1xcdTIyRTcnLFxuXHRHb3BmOiAnXFx1RDgzNVxcdUREM0UnLFxuXHRnb3BmOiAnXFx1RDgzNVxcdURENTgnLFxuXHRncmF2ZTogJ1xcdTAwNjAnLFxuXHRHcmVhdGVyRXF1YWw6ICdcXHUyMjY1Jyxcblx0R3JlYXRlckVxdWFsTGVzczogJ1xcdTIyREInLFxuXHRHcmVhdGVyRnVsbEVxdWFsOiAnXFx1MjI2NycsXG5cdEdyZWF0ZXJHcmVhdGVyOiAnXFx1MkFBMicsXG5cdEdyZWF0ZXJMZXNzOiAnXFx1MjI3NycsXG5cdEdyZWF0ZXJTbGFudEVxdWFsOiAnXFx1MkE3RScsXG5cdEdyZWF0ZXJUaWxkZTogJ1xcdTIyNzMnLFxuXHRHc2NyOiAnXFx1RDgzNVxcdURDQTInLFxuXHRnc2NyOiAnXFx1MjEwQScsXG5cdGdzaW06ICdcXHUyMjczJyxcblx0Z3NpbWU6ICdcXHUyQThFJyxcblx0Z3NpbWw6ICdcXHUyQTkwJyxcblx0R3Q6ICdcXHUyMjZCJyxcblx0R1Q6ICdcXHUwMDNFJyxcblx0Z3Q6ICdcXHUwMDNFJyxcblx0Z3RjYzogJ1xcdTJBQTcnLFxuXHRndGNpcjogJ1xcdTJBN0EnLFxuXHRndGRvdDogJ1xcdTIyRDcnLFxuXHRndGxQYXI6ICdcXHUyOTk1Jyxcblx0Z3RxdWVzdDogJ1xcdTJBN0MnLFxuXHRndHJhcHByb3g6ICdcXHUyQTg2Jyxcblx0Z3RyYXJyOiAnXFx1Mjk3OCcsXG5cdGd0cmRvdDogJ1xcdTIyRDcnLFxuXHRndHJlcWxlc3M6ICdcXHUyMkRCJyxcblx0Z3RyZXFxbGVzczogJ1xcdTJBOEMnLFxuXHRndHJsZXNzOiAnXFx1MjI3NycsXG5cdGd0cnNpbTogJ1xcdTIyNzMnLFxuXHRndmVydG5lcXE6ICdcXHUyMjY5XFx1RkUwMCcsXG5cdGd2bkU6ICdcXHUyMjY5XFx1RkUwMCcsXG5cdEhhY2VrOiAnXFx1MDJDNycsXG5cdGhhaXJzcDogJ1xcdTIwMEEnLFxuXHRoYWxmOiAnXFx1MDBCRCcsXG5cdGhhbWlsdDogJ1xcdTIxMEInLFxuXHRIQVJEY3k6ICdcXHUwNDJBJyxcblx0aGFyZGN5OiAnXFx1MDQ0QScsXG5cdGhBcnI6ICdcXHUyMUQ0Jyxcblx0aGFycjogJ1xcdTIxOTQnLFxuXHRoYXJyY2lyOiAnXFx1Mjk0OCcsXG5cdGhhcnJ3OiAnXFx1MjFBRCcsXG5cdEhhdDogJ1xcdTAwNUUnLFxuXHRoYmFyOiAnXFx1MjEwRicsXG5cdEhjaXJjOiAnXFx1MDEyNCcsXG5cdGhjaXJjOiAnXFx1MDEyNScsXG5cdGhlYXJ0czogJ1xcdTI2NjUnLFxuXHRoZWFydHN1aXQ6ICdcXHUyNjY1Jyxcblx0aGVsbGlwOiAnXFx1MjAyNicsXG5cdGhlcmNvbjogJ1xcdTIyQjknLFxuXHRIZnI6ICdcXHUyMTBDJyxcblx0aGZyOiAnXFx1RDgzNVxcdUREMjUnLFxuXHRIaWxiZXJ0U3BhY2U6ICdcXHUyMTBCJyxcblx0aGtzZWFyb3c6ICdcXHUyOTI1Jyxcblx0aGtzd2Fyb3c6ICdcXHUyOTI2Jyxcblx0aG9hcnI6ICdcXHUyMUZGJyxcblx0aG9tdGh0OiAnXFx1MjIzQicsXG5cdGhvb2tsZWZ0YXJyb3c6ICdcXHUyMUE5Jyxcblx0aG9va3JpZ2h0YXJyb3c6ICdcXHUyMUFBJyxcblx0SG9wZjogJ1xcdTIxMEQnLFxuXHRob3BmOiAnXFx1RDgzNVxcdURENTknLFxuXHRob3JiYXI6ICdcXHUyMDE1Jyxcblx0SG9yaXpvbnRhbExpbmU6ICdcXHUyNTAwJyxcblx0SHNjcjogJ1xcdTIxMEInLFxuXHRoc2NyOiAnXFx1RDgzNVxcdURDQkQnLFxuXHRoc2xhc2g6ICdcXHUyMTBGJyxcblx0SHN0cm9rOiAnXFx1MDEyNicsXG5cdGhzdHJvazogJ1xcdTAxMjcnLFxuXHRIdW1wRG93bkh1bXA6ICdcXHUyMjRFJyxcblx0SHVtcEVxdWFsOiAnXFx1MjI0RicsXG5cdGh5YnVsbDogJ1xcdTIwNDMnLFxuXHRoeXBoZW46ICdcXHUyMDEwJyxcblx0SWFjdXRlOiAnXFx1MDBDRCcsXG5cdGlhY3V0ZTogJ1xcdTAwRUQnLFxuXHRpYzogJ1xcdTIwNjMnLFxuXHRJY2lyYzogJ1xcdTAwQ0UnLFxuXHRpY2lyYzogJ1xcdTAwRUUnLFxuXHRJY3k6ICdcXHUwNDE4Jyxcblx0aWN5OiAnXFx1MDQzOCcsXG5cdElkb3Q6ICdcXHUwMTMwJyxcblx0SUVjeTogJ1xcdTA0MTUnLFxuXHRpZWN5OiAnXFx1MDQzNScsXG5cdGlleGNsOiAnXFx1MDBBMScsXG5cdGlmZjogJ1xcdTIxRDQnLFxuXHRJZnI6ICdcXHUyMTExJyxcblx0aWZyOiAnXFx1RDgzNVxcdUREMjYnLFxuXHRJZ3JhdmU6ICdcXHUwMENDJyxcblx0aWdyYXZlOiAnXFx1MDBFQycsXG5cdGlpOiAnXFx1MjE0OCcsXG5cdGlpaWludDogJ1xcdTJBMEMnLFxuXHRpaWludDogJ1xcdTIyMkQnLFxuXHRpaW5maW46ICdcXHUyOURDJyxcblx0aWlvdGE6ICdcXHUyMTI5Jyxcblx0SUpsaWc6ICdcXHUwMTMyJyxcblx0aWpsaWc6ICdcXHUwMTMzJyxcblx0SW06ICdcXHUyMTExJyxcblx0SW1hY3I6ICdcXHUwMTJBJyxcblx0aW1hY3I6ICdcXHUwMTJCJyxcblx0aW1hZ2U6ICdcXHUyMTExJyxcblx0SW1hZ2luYXJ5STogJ1xcdTIxNDgnLFxuXHRpbWFnbGluZTogJ1xcdTIxMTAnLFxuXHRpbWFncGFydDogJ1xcdTIxMTEnLFxuXHRpbWF0aDogJ1xcdTAxMzEnLFxuXHRpbW9mOiAnXFx1MjJCNycsXG5cdGltcGVkOiAnXFx1MDFCNScsXG5cdEltcGxpZXM6ICdcXHUyMUQyJyxcblx0aW46ICdcXHUyMjA4Jyxcblx0aW5jYXJlOiAnXFx1MjEwNScsXG5cdGluZmluOiAnXFx1MjIxRScsXG5cdGluZmludGllOiAnXFx1MjlERCcsXG5cdGlub2RvdDogJ1xcdTAxMzEnLFxuXHRJbnQ6ICdcXHUyMjJDJyxcblx0aW50OiAnXFx1MjIyQicsXG5cdGludGNhbDogJ1xcdTIyQkEnLFxuXHRpbnRlZ2VyczogJ1xcdTIxMjQnLFxuXHRJbnRlZ3JhbDogJ1xcdTIyMkInLFxuXHRpbnRlcmNhbDogJ1xcdTIyQkEnLFxuXHRJbnRlcnNlY3Rpb246ICdcXHUyMkMyJyxcblx0aW50bGFyaGs6ICdcXHUyQTE3Jyxcblx0aW50cHJvZDogJ1xcdTJBM0MnLFxuXHRJbnZpc2libGVDb21tYTogJ1xcdTIwNjMnLFxuXHRJbnZpc2libGVUaW1lczogJ1xcdTIwNjInLFxuXHRJT2N5OiAnXFx1MDQwMScsXG5cdGlvY3k6ICdcXHUwNDUxJyxcblx0SW9nb246ICdcXHUwMTJFJyxcblx0aW9nb246ICdcXHUwMTJGJyxcblx0SW9wZjogJ1xcdUQ4MzVcXHVERDQwJyxcblx0aW9wZjogJ1xcdUQ4MzVcXHVERDVBJyxcblx0SW90YTogJ1xcdTAzOTknLFxuXHRpb3RhOiAnXFx1MDNCOScsXG5cdGlwcm9kOiAnXFx1MkEzQycsXG5cdGlxdWVzdDogJ1xcdTAwQkYnLFxuXHRJc2NyOiAnXFx1MjExMCcsXG5cdGlzY3I6ICdcXHVEODM1XFx1RENCRScsXG5cdGlzaW46ICdcXHUyMjA4Jyxcblx0aXNpbmRvdDogJ1xcdTIyRjUnLFxuXHRpc2luRTogJ1xcdTIyRjknLFxuXHRpc2luczogJ1xcdTIyRjQnLFxuXHRpc2luc3Y6ICdcXHUyMkYzJyxcblx0aXNpbnY6ICdcXHUyMjA4Jyxcblx0aXQ6ICdcXHUyMDYyJyxcblx0SXRpbGRlOiAnXFx1MDEyOCcsXG5cdGl0aWxkZTogJ1xcdTAxMjknLFxuXHRJdWtjeTogJ1xcdTA0MDYnLFxuXHRpdWtjeTogJ1xcdTA0NTYnLFxuXHRJdW1sOiAnXFx1MDBDRicsXG5cdGl1bWw6ICdcXHUwMEVGJyxcblx0SmNpcmM6ICdcXHUwMTM0Jyxcblx0amNpcmM6ICdcXHUwMTM1Jyxcblx0SmN5OiAnXFx1MDQxOScsXG5cdGpjeTogJ1xcdTA0MzknLFxuXHRKZnI6ICdcXHVEODM1XFx1REQwRCcsXG5cdGpmcjogJ1xcdUQ4MzVcXHVERDI3Jyxcblx0am1hdGg6ICdcXHUwMjM3Jyxcblx0Sm9wZjogJ1xcdUQ4MzVcXHVERDQxJyxcblx0am9wZjogJ1xcdUQ4MzVcXHVERDVCJyxcblx0SnNjcjogJ1xcdUQ4MzVcXHVEQ0E1Jyxcblx0anNjcjogJ1xcdUQ4MzVcXHVEQ0JGJyxcblx0SnNlcmN5OiAnXFx1MDQwOCcsXG5cdGpzZXJjeTogJ1xcdTA0NTgnLFxuXHRKdWtjeTogJ1xcdTA0MDQnLFxuXHRqdWtjeTogJ1xcdTA0NTQnLFxuXHRLYXBwYTogJ1xcdTAzOUEnLFxuXHRrYXBwYTogJ1xcdTAzQkEnLFxuXHRrYXBwYXY6ICdcXHUwM0YwJyxcblx0S2NlZGlsOiAnXFx1MDEzNicsXG5cdGtjZWRpbDogJ1xcdTAxMzcnLFxuXHRLY3k6ICdcXHUwNDFBJyxcblx0a2N5OiAnXFx1MDQzQScsXG5cdEtmcjogJ1xcdUQ4MzVcXHVERDBFJyxcblx0a2ZyOiAnXFx1RDgzNVxcdUREMjgnLFxuXHRrZ3JlZW46ICdcXHUwMTM4Jyxcblx0S0hjeTogJ1xcdTA0MjUnLFxuXHRraGN5OiAnXFx1MDQ0NScsXG5cdEtKY3k6ICdcXHUwNDBDJyxcblx0a2pjeTogJ1xcdTA0NUMnLFxuXHRLb3BmOiAnXFx1RDgzNVxcdURENDInLFxuXHRrb3BmOiAnXFx1RDgzNVxcdURENUMnLFxuXHRLc2NyOiAnXFx1RDgzNVxcdURDQTYnLFxuXHRrc2NyOiAnXFx1RDgzNVxcdURDQzAnLFxuXHRsQWFycjogJ1xcdTIxREEnLFxuXHRMYWN1dGU6ICdcXHUwMTM5Jyxcblx0bGFjdXRlOiAnXFx1MDEzQScsXG5cdGxhZW1wdHl2OiAnXFx1MjlCNCcsXG5cdGxhZ3JhbjogJ1xcdTIxMTInLFxuXHRMYW1iZGE6ICdcXHUwMzlCJyxcblx0bGFtYmRhOiAnXFx1MDNCQicsXG5cdExhbmc6ICdcXHUyN0VBJyxcblx0bGFuZzogJ1xcdTI3RTgnLFxuXHRsYW5nZDogJ1xcdTI5OTEnLFxuXHRsYW5nbGU6ICdcXHUyN0U4Jyxcblx0bGFwOiAnXFx1MkE4NScsXG5cdExhcGxhY2V0cmY6ICdcXHUyMTEyJyxcblx0bGFxdW86ICdcXHUwMEFCJyxcblx0TGFycjogJ1xcdTIxOUUnLFxuXHRsQXJyOiAnXFx1MjFEMCcsXG5cdGxhcnI6ICdcXHUyMTkwJyxcblx0bGFycmI6ICdcXHUyMUU0Jyxcblx0bGFycmJmczogJ1xcdTI5MUYnLFxuXHRsYXJyZnM6ICdcXHUyOTFEJyxcblx0bGFycmhrOiAnXFx1MjFBOScsXG5cdGxhcnJscDogJ1xcdTIxQUInLFxuXHRsYXJycGw6ICdcXHUyOTM5Jyxcblx0bGFycnNpbTogJ1xcdTI5NzMnLFxuXHRsYXJydGw6ICdcXHUyMUEyJyxcblx0bGF0OiAnXFx1MkFBQicsXG5cdGxBdGFpbDogJ1xcdTI5MUInLFxuXHRsYXRhaWw6ICdcXHUyOTE5Jyxcblx0bGF0ZTogJ1xcdTJBQUQnLFxuXHRsYXRlczogJ1xcdTJBQURcXHVGRTAwJyxcblx0bEJhcnI6ICdcXHUyOTBFJyxcblx0bGJhcnI6ICdcXHUyOTBDJyxcblx0bGJicms6ICdcXHUyNzcyJyxcblx0bGJyYWNlOiAnXFx1MDA3QicsXG5cdGxicmFjazogJ1xcdTAwNUInLFxuXHRsYnJrZTogJ1xcdTI5OEInLFxuXHRsYnJrc2xkOiAnXFx1Mjk4RicsXG5cdGxicmtzbHU6ICdcXHUyOThEJyxcblx0TGNhcm9uOiAnXFx1MDEzRCcsXG5cdGxjYXJvbjogJ1xcdTAxM0UnLFxuXHRMY2VkaWw6ICdcXHUwMTNCJyxcblx0bGNlZGlsOiAnXFx1MDEzQycsXG5cdGxjZWlsOiAnXFx1MjMwOCcsXG5cdGxjdWI6ICdcXHUwMDdCJyxcblx0TGN5OiAnXFx1MDQxQicsXG5cdGxjeTogJ1xcdTA0M0InLFxuXHRsZGNhOiAnXFx1MjkzNicsXG5cdGxkcXVvOiAnXFx1MjAxQycsXG5cdGxkcXVvcjogJ1xcdTIwMUUnLFxuXHRsZHJkaGFyOiAnXFx1Mjk2NycsXG5cdGxkcnVzaGFyOiAnXFx1Mjk0QicsXG5cdGxkc2g6ICdcXHUyMUIyJyxcblx0bEU6ICdcXHUyMjY2Jyxcblx0bGU6ICdcXHUyMjY0Jyxcblx0TGVmdEFuZ2xlQnJhY2tldDogJ1xcdTI3RTgnLFxuXHRMZWZ0QXJyb3c6ICdcXHUyMTkwJyxcblx0TGVmdGFycm93OiAnXFx1MjFEMCcsXG5cdGxlZnRhcnJvdzogJ1xcdTIxOTAnLFxuXHRMZWZ0QXJyb3dCYXI6ICdcXHUyMUU0Jyxcblx0TGVmdEFycm93UmlnaHRBcnJvdzogJ1xcdTIxQzYnLFxuXHRsZWZ0YXJyb3d0YWlsOiAnXFx1MjFBMicsXG5cdExlZnRDZWlsaW5nOiAnXFx1MjMwOCcsXG5cdExlZnREb3VibGVCcmFja2V0OiAnXFx1MjdFNicsXG5cdExlZnREb3duVGVlVmVjdG9yOiAnXFx1Mjk2MScsXG5cdExlZnREb3duVmVjdG9yOiAnXFx1MjFDMycsXG5cdExlZnREb3duVmVjdG9yQmFyOiAnXFx1Mjk1OScsXG5cdExlZnRGbG9vcjogJ1xcdTIzMEEnLFxuXHRsZWZ0aGFycG9vbmRvd246ICdcXHUyMUJEJyxcblx0bGVmdGhhcnBvb251cDogJ1xcdTIxQkMnLFxuXHRsZWZ0bGVmdGFycm93czogJ1xcdTIxQzcnLFxuXHRMZWZ0UmlnaHRBcnJvdzogJ1xcdTIxOTQnLFxuXHRMZWZ0cmlnaHRhcnJvdzogJ1xcdTIxRDQnLFxuXHRsZWZ0cmlnaHRhcnJvdzogJ1xcdTIxOTQnLFxuXHRsZWZ0cmlnaHRhcnJvd3M6ICdcXHUyMUM2Jyxcblx0bGVmdHJpZ2h0aGFycG9vbnM6ICdcXHUyMUNCJyxcblx0bGVmdHJpZ2h0c3F1aWdhcnJvdzogJ1xcdTIxQUQnLFxuXHRMZWZ0UmlnaHRWZWN0b3I6ICdcXHUyOTRFJyxcblx0TGVmdFRlZTogJ1xcdTIyQTMnLFxuXHRMZWZ0VGVlQXJyb3c6ICdcXHUyMUE0Jyxcblx0TGVmdFRlZVZlY3RvcjogJ1xcdTI5NUEnLFxuXHRsZWZ0dGhyZWV0aW1lczogJ1xcdTIyQ0InLFxuXHRMZWZ0VHJpYW5nbGU6ICdcXHUyMkIyJyxcblx0TGVmdFRyaWFuZ2xlQmFyOiAnXFx1MjlDRicsXG5cdExlZnRUcmlhbmdsZUVxdWFsOiAnXFx1MjJCNCcsXG5cdExlZnRVcERvd25WZWN0b3I6ICdcXHUyOTUxJyxcblx0TGVmdFVwVGVlVmVjdG9yOiAnXFx1Mjk2MCcsXG5cdExlZnRVcFZlY3RvcjogJ1xcdTIxQkYnLFxuXHRMZWZ0VXBWZWN0b3JCYXI6ICdcXHUyOTU4Jyxcblx0TGVmdFZlY3RvcjogJ1xcdTIxQkMnLFxuXHRMZWZ0VmVjdG9yQmFyOiAnXFx1Mjk1MicsXG5cdGxFZzogJ1xcdTJBOEInLFxuXHRsZWc6ICdcXHUyMkRBJyxcblx0bGVxOiAnXFx1MjI2NCcsXG5cdGxlcXE6ICdcXHUyMjY2Jyxcblx0bGVxc2xhbnQ6ICdcXHUyQTdEJyxcblx0bGVzOiAnXFx1MkE3RCcsXG5cdGxlc2NjOiAnXFx1MkFBOCcsXG5cdGxlc2RvdDogJ1xcdTJBN0YnLFxuXHRsZXNkb3RvOiAnXFx1MkE4MScsXG5cdGxlc2RvdG9yOiAnXFx1MkE4MycsXG5cdGxlc2c6ICdcXHUyMkRBXFx1RkUwMCcsXG5cdGxlc2dlczogJ1xcdTJBOTMnLFxuXHRsZXNzYXBwcm94OiAnXFx1MkE4NScsXG5cdGxlc3Nkb3Q6ICdcXHUyMkQ2Jyxcblx0bGVzc2VxZ3RyOiAnXFx1MjJEQScsXG5cdGxlc3NlcXFndHI6ICdcXHUyQThCJyxcblx0TGVzc0VxdWFsR3JlYXRlcjogJ1xcdTIyREEnLFxuXHRMZXNzRnVsbEVxdWFsOiAnXFx1MjI2NicsXG5cdExlc3NHcmVhdGVyOiAnXFx1MjI3NicsXG5cdGxlc3NndHI6ICdcXHUyMjc2Jyxcblx0TGVzc0xlc3M6ICdcXHUyQUExJyxcblx0bGVzc3NpbTogJ1xcdTIyNzInLFxuXHRMZXNzU2xhbnRFcXVhbDogJ1xcdTJBN0QnLFxuXHRMZXNzVGlsZGU6ICdcXHUyMjcyJyxcblx0bGZpc2h0OiAnXFx1Mjk3QycsXG5cdGxmbG9vcjogJ1xcdTIzMEEnLFxuXHRMZnI6ICdcXHVEODM1XFx1REQwRicsXG5cdGxmcjogJ1xcdUQ4MzVcXHVERDI5Jyxcblx0bGc6ICdcXHUyMjc2Jyxcblx0bGdFOiAnXFx1MkE5MScsXG5cdGxIYXI6ICdcXHUyOTYyJyxcblx0bGhhcmQ6ICdcXHUyMUJEJyxcblx0bGhhcnU6ICdcXHUyMUJDJyxcblx0bGhhcnVsOiAnXFx1Mjk2QScsXG5cdGxoYmxrOiAnXFx1MjU4NCcsXG5cdExKY3k6ICdcXHUwNDA5Jyxcblx0bGpjeTogJ1xcdTA0NTknLFxuXHRMbDogJ1xcdTIyRDgnLFxuXHRsbDogJ1xcdTIyNkEnLFxuXHRsbGFycjogJ1xcdTIxQzcnLFxuXHRsbGNvcm5lcjogJ1xcdTIzMUUnLFxuXHRMbGVmdGFycm93OiAnXFx1MjFEQScsXG5cdGxsaGFyZDogJ1xcdTI5NkInLFxuXHRsbHRyaTogJ1xcdTI1RkEnLFxuXHRMbWlkb3Q6ICdcXHUwMTNGJyxcblx0bG1pZG90OiAnXFx1MDE0MCcsXG5cdGxtb3VzdDogJ1xcdTIzQjAnLFxuXHRsbW91c3RhY2hlOiAnXFx1MjNCMCcsXG5cdGxuYXA6ICdcXHUyQTg5Jyxcblx0bG5hcHByb3g6ICdcXHUyQTg5Jyxcblx0bG5FOiAnXFx1MjI2OCcsXG5cdGxuZTogJ1xcdTJBODcnLFxuXHRsbmVxOiAnXFx1MkE4NycsXG5cdGxuZXFxOiAnXFx1MjI2OCcsXG5cdGxuc2ltOiAnXFx1MjJFNicsXG5cdGxvYW5nOiAnXFx1MjdFQycsXG5cdGxvYXJyOiAnXFx1MjFGRCcsXG5cdGxvYnJrOiAnXFx1MjdFNicsXG5cdExvbmdMZWZ0QXJyb3c6ICdcXHUyN0Y1Jyxcblx0TG9uZ2xlZnRhcnJvdzogJ1xcdTI3RjgnLFxuXHRsb25nbGVmdGFycm93OiAnXFx1MjdGNScsXG5cdExvbmdMZWZ0UmlnaHRBcnJvdzogJ1xcdTI3RjcnLFxuXHRMb25nbGVmdHJpZ2h0YXJyb3c6ICdcXHUyN0ZBJyxcblx0bG9uZ2xlZnRyaWdodGFycm93OiAnXFx1MjdGNycsXG5cdGxvbmdtYXBzdG86ICdcXHUyN0ZDJyxcblx0TG9uZ1JpZ2h0QXJyb3c6ICdcXHUyN0Y2Jyxcblx0TG9uZ3JpZ2h0YXJyb3c6ICdcXHUyN0Y5Jyxcblx0bG9uZ3JpZ2h0YXJyb3c6ICdcXHUyN0Y2Jyxcblx0bG9vcGFycm93bGVmdDogJ1xcdTIxQUInLFxuXHRsb29wYXJyb3dyaWdodDogJ1xcdTIxQUMnLFxuXHRsb3BhcjogJ1xcdTI5ODUnLFxuXHRMb3BmOiAnXFx1RDgzNVxcdURENDMnLFxuXHRsb3BmOiAnXFx1RDgzNVxcdURENUQnLFxuXHRsb3BsdXM6ICdcXHUyQTJEJyxcblx0bG90aW1lczogJ1xcdTJBMzQnLFxuXHRsb3dhc3Q6ICdcXHUyMjE3Jyxcblx0bG93YmFyOiAnXFx1MDA1RicsXG5cdExvd2VyTGVmdEFycm93OiAnXFx1MjE5OScsXG5cdExvd2VyUmlnaHRBcnJvdzogJ1xcdTIxOTgnLFxuXHRsb3o6ICdcXHUyNUNBJyxcblx0bG96ZW5nZTogJ1xcdTI1Q0EnLFxuXHRsb3pmOiAnXFx1MjlFQicsXG5cdGxwYXI6ICdcXHUwMDI4Jyxcblx0bHBhcmx0OiAnXFx1Mjk5MycsXG5cdGxyYXJyOiAnXFx1MjFDNicsXG5cdGxyY29ybmVyOiAnXFx1MjMxRicsXG5cdGxyaGFyOiAnXFx1MjFDQicsXG5cdGxyaGFyZDogJ1xcdTI5NkQnLFxuXHRscm06ICdcXHUyMDBFJyxcblx0bHJ0cmk6ICdcXHUyMkJGJyxcblx0bHNhcXVvOiAnXFx1MjAzOScsXG5cdExzY3I6ICdcXHUyMTEyJyxcblx0bHNjcjogJ1xcdUQ4MzVcXHVEQ0MxJyxcblx0THNoOiAnXFx1MjFCMCcsXG5cdGxzaDogJ1xcdTIxQjAnLFxuXHRsc2ltOiAnXFx1MjI3MicsXG5cdGxzaW1lOiAnXFx1MkE4RCcsXG5cdGxzaW1nOiAnXFx1MkE4RicsXG5cdGxzcWI6ICdcXHUwMDVCJyxcblx0bHNxdW86ICdcXHUyMDE4Jyxcblx0bHNxdW9yOiAnXFx1MjAxQScsXG5cdExzdHJvazogJ1xcdTAxNDEnLFxuXHRsc3Ryb2s6ICdcXHUwMTQyJyxcblx0THQ6ICdcXHUyMjZBJyxcblx0TFQ6ICdcXHUwMDNDJyxcblx0bHQ6ICdcXHUwMDNDJyxcblx0bHRjYzogJ1xcdTJBQTYnLFxuXHRsdGNpcjogJ1xcdTJBNzknLFxuXHRsdGRvdDogJ1xcdTIyRDYnLFxuXHRsdGhyZWU6ICdcXHUyMkNCJyxcblx0bHRpbWVzOiAnXFx1MjJDOScsXG5cdGx0bGFycjogJ1xcdTI5NzYnLFxuXHRsdHF1ZXN0OiAnXFx1MkE3QicsXG5cdGx0cmk6ICdcXHUyNUMzJyxcblx0bHRyaWU6ICdcXHUyMkI0Jyxcblx0bHRyaWY6ICdcXHUyNUMyJyxcblx0bHRyUGFyOiAnXFx1Mjk5NicsXG5cdGx1cmRzaGFyOiAnXFx1Mjk0QScsXG5cdGx1cnVoYXI6ICdcXHUyOTY2Jyxcblx0bHZlcnRuZXFxOiAnXFx1MjI2OFxcdUZFMDAnLFxuXHRsdm5FOiAnXFx1MjI2OFxcdUZFMDAnLFxuXHRtYWNyOiAnXFx1MDBBRicsXG5cdG1hbGU6ICdcXHUyNjQyJyxcblx0bWFsdDogJ1xcdTI3MjAnLFxuXHRtYWx0ZXNlOiAnXFx1MjcyMCcsXG5cdE1hcDogJ1xcdTI5MDUnLFxuXHRtYXA6ICdcXHUyMUE2Jyxcblx0bWFwc3RvOiAnXFx1MjFBNicsXG5cdG1hcHN0b2Rvd246ICdcXHUyMUE3Jyxcblx0bWFwc3RvbGVmdDogJ1xcdTIxQTQnLFxuXHRtYXBzdG91cDogJ1xcdTIxQTUnLFxuXHRtYXJrZXI6ICdcXHUyNUFFJyxcblx0bWNvbW1hOiAnXFx1MkEyOScsXG5cdE1jeTogJ1xcdTA0MUMnLFxuXHRtY3k6ICdcXHUwNDNDJyxcblx0bWRhc2g6ICdcXHUyMDE0Jyxcblx0bUREb3Q6ICdcXHUyMjNBJyxcblx0bWVhc3VyZWRhbmdsZTogJ1xcdTIyMjEnLFxuXHRNZWRpdW1TcGFjZTogJ1xcdTIwNUYnLFxuXHRNZWxsaW50cmY6ICdcXHUyMTMzJyxcblx0TWZyOiAnXFx1RDgzNVxcdUREMTAnLFxuXHRtZnI6ICdcXHVEODM1XFx1REQyQScsXG5cdG1obzogJ1xcdTIxMjcnLFxuXHRtaWNybzogJ1xcdTAwQjUnLFxuXHRtaWQ6ICdcXHUyMjIzJyxcblx0bWlkYXN0OiAnXFx1MDAyQScsXG5cdG1pZGNpcjogJ1xcdTJBRjAnLFxuXHRtaWRkb3Q6ICdcXHUwMEI3Jyxcblx0bWludXM6ICdcXHUyMjEyJyxcblx0bWludXNiOiAnXFx1MjI5RicsXG5cdG1pbnVzZDogJ1xcdTIyMzgnLFxuXHRtaW51c2R1OiAnXFx1MkEyQScsXG5cdE1pbnVzUGx1czogJ1xcdTIyMTMnLFxuXHRtbGNwOiAnXFx1MkFEQicsXG5cdG1sZHI6ICdcXHUyMDI2Jyxcblx0bW5wbHVzOiAnXFx1MjIxMycsXG5cdG1vZGVsczogJ1xcdTIyQTcnLFxuXHRNb3BmOiAnXFx1RDgzNVxcdURENDQnLFxuXHRtb3BmOiAnXFx1RDgzNVxcdURENUUnLFxuXHRtcDogJ1xcdTIyMTMnLFxuXHRNc2NyOiAnXFx1MjEzMycsXG5cdG1zY3I6ICdcXHVEODM1XFx1RENDMicsXG5cdG1zdHBvczogJ1xcdTIyM0UnLFxuXHRNdTogJ1xcdTAzOUMnLFxuXHRtdTogJ1xcdTAzQkMnLFxuXHRtdWx0aW1hcDogJ1xcdTIyQjgnLFxuXHRtdW1hcDogJ1xcdTIyQjgnLFxuXHRuYWJsYTogJ1xcdTIyMDcnLFxuXHROYWN1dGU6ICdcXHUwMTQzJyxcblx0bmFjdXRlOiAnXFx1MDE0NCcsXG5cdG5hbmc6ICdcXHUyMjIwXFx1MjBEMicsXG5cdG5hcDogJ1xcdTIyNDknLFxuXHRuYXBFOiAnXFx1MkE3MFxcdTAzMzgnLFxuXHRuYXBpZDogJ1xcdTIyNEJcXHUwMzM4Jyxcblx0bmFwb3M6ICdcXHUwMTQ5Jyxcblx0bmFwcHJveDogJ1xcdTIyNDknLFxuXHRuYXR1cjogJ1xcdTI2NkUnLFxuXHRuYXR1cmFsOiAnXFx1MjY2RScsXG5cdG5hdHVyYWxzOiAnXFx1MjExNScsXG5cdG5ic3A6ICdcXHUwMEEwJyxcblx0bmJ1bXA6ICdcXHUyMjRFXFx1MDMzOCcsXG5cdG5idW1wZTogJ1xcdTIyNEZcXHUwMzM4Jyxcblx0bmNhcDogJ1xcdTJBNDMnLFxuXHROY2Fyb246ICdcXHUwMTQ3Jyxcblx0bmNhcm9uOiAnXFx1MDE0OCcsXG5cdE5jZWRpbDogJ1xcdTAxNDUnLFxuXHRuY2VkaWw6ICdcXHUwMTQ2Jyxcblx0bmNvbmc6ICdcXHUyMjQ3Jyxcblx0bmNvbmdkb3Q6ICdcXHUyQTZEXFx1MDMzOCcsXG5cdG5jdXA6ICdcXHUyQTQyJyxcblx0TmN5OiAnXFx1MDQxRCcsXG5cdG5jeTogJ1xcdTA0M0QnLFxuXHRuZGFzaDogJ1xcdTIwMTMnLFxuXHRuZTogJ1xcdTIyNjAnLFxuXHRuZWFyaGs6ICdcXHUyOTI0Jyxcblx0bmVBcnI6ICdcXHUyMUQ3Jyxcblx0bmVhcnI6ICdcXHUyMTk3Jyxcblx0bmVhcnJvdzogJ1xcdTIxOTcnLFxuXHRuZWRvdDogJ1xcdTIyNTBcXHUwMzM4Jyxcblx0TmVnYXRpdmVNZWRpdW1TcGFjZTogJ1xcdTIwMEInLFxuXHROZWdhdGl2ZVRoaWNrU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVUaGluU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVWZXJ5VGhpblNwYWNlOiAnXFx1MjAwQicsXG5cdG5lcXVpdjogJ1xcdTIyNjInLFxuXHRuZXNlYXI6ICdcXHUyOTI4Jyxcblx0bmVzaW06ICdcXHUyMjQyXFx1MDMzOCcsXG5cdE5lc3RlZEdyZWF0ZXJHcmVhdGVyOiAnXFx1MjI2QicsXG5cdE5lc3RlZExlc3NMZXNzOiAnXFx1MjI2QScsXG5cdE5ld0xpbmU6ICdcXHUwMDBBJyxcblx0bmV4aXN0OiAnXFx1MjIwNCcsXG5cdG5leGlzdHM6ICdcXHUyMjA0Jyxcblx0TmZyOiAnXFx1RDgzNVxcdUREMTEnLFxuXHRuZnI6ICdcXHVEODM1XFx1REQyQicsXG5cdG5nRTogJ1xcdTIyNjdcXHUwMzM4Jyxcblx0bmdlOiAnXFx1MjI3MScsXG5cdG5nZXE6ICdcXHUyMjcxJyxcblx0bmdlcXE6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdG5nZXFzbGFudDogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0bmdlczogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0bkdnOiAnXFx1MjJEOVxcdTAzMzgnLFxuXHRuZ3NpbTogJ1xcdTIyNzUnLFxuXHRuR3Q6ICdcXHUyMjZCXFx1MjBEMicsXG5cdG5ndDogJ1xcdTIyNkYnLFxuXHRuZ3RyOiAnXFx1MjI2RicsXG5cdG5HdHY6ICdcXHUyMjZCXFx1MDMzOCcsXG5cdG5oQXJyOiAnXFx1MjFDRScsXG5cdG5oYXJyOiAnXFx1MjFBRScsXG5cdG5ocGFyOiAnXFx1MkFGMicsXG5cdG5pOiAnXFx1MjIwQicsXG5cdG5pczogJ1xcdTIyRkMnLFxuXHRuaXNkOiAnXFx1MjJGQScsXG5cdG5pdjogJ1xcdTIyMEInLFxuXHROSmN5OiAnXFx1MDQwQScsXG5cdG5qY3k6ICdcXHUwNDVBJyxcblx0bmxBcnI6ICdcXHUyMUNEJyxcblx0bmxhcnI6ICdcXHUyMTlBJyxcblx0bmxkcjogJ1xcdTIwMjUnLFxuXHRubEU6ICdcXHUyMjY2XFx1MDMzOCcsXG5cdG5sZTogJ1xcdTIyNzAnLFxuXHRuTGVmdGFycm93OiAnXFx1MjFDRCcsXG5cdG5sZWZ0YXJyb3c6ICdcXHUyMTlBJyxcblx0bkxlZnRyaWdodGFycm93OiAnXFx1MjFDRScsXG5cdG5sZWZ0cmlnaHRhcnJvdzogJ1xcdTIxQUUnLFxuXHRubGVxOiAnXFx1MjI3MCcsXG5cdG5sZXFxOiAnXFx1MjI2NlxcdTAzMzgnLFxuXHRubGVxc2xhbnQ6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdG5sZXM6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdG5sZXNzOiAnXFx1MjI2RScsXG5cdG5MbDogJ1xcdTIyRDhcXHUwMzM4Jyxcblx0bmxzaW06ICdcXHUyMjc0Jyxcblx0bkx0OiAnXFx1MjI2QVxcdTIwRDInLFxuXHRubHQ6ICdcXHUyMjZFJyxcblx0bmx0cmk6ICdcXHUyMkVBJyxcblx0bmx0cmllOiAnXFx1MjJFQycsXG5cdG5MdHY6ICdcXHUyMjZBXFx1MDMzOCcsXG5cdG5taWQ6ICdcXHUyMjI0Jyxcblx0Tm9CcmVhazogJ1xcdTIwNjAnLFxuXHROb25CcmVha2luZ1NwYWNlOiAnXFx1MDBBMCcsXG5cdE5vcGY6ICdcXHUyMTE1Jyxcblx0bm9wZjogJ1xcdUQ4MzVcXHVERDVGJyxcblx0Tm90OiAnXFx1MkFFQycsXG5cdG5vdDogJ1xcdTAwQUMnLFxuXHROb3RDb25ncnVlbnQ6ICdcXHUyMjYyJyxcblx0Tm90Q3VwQ2FwOiAnXFx1MjI2RCcsXG5cdE5vdERvdWJsZVZlcnRpY2FsQmFyOiAnXFx1MjIyNicsXG5cdE5vdEVsZW1lbnQ6ICdcXHUyMjA5Jyxcblx0Tm90RXF1YWw6ICdcXHUyMjYwJyxcblx0Tm90RXF1YWxUaWxkZTogJ1xcdTIyNDJcXHUwMzM4Jyxcblx0Tm90RXhpc3RzOiAnXFx1MjIwNCcsXG5cdE5vdEdyZWF0ZXI6ICdcXHUyMjZGJyxcblx0Tm90R3JlYXRlckVxdWFsOiAnXFx1MjI3MScsXG5cdE5vdEdyZWF0ZXJGdWxsRXF1YWw6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdE5vdEdyZWF0ZXJHcmVhdGVyOiAnXFx1MjI2QlxcdTAzMzgnLFxuXHROb3RHcmVhdGVyTGVzczogJ1xcdTIyNzknLFxuXHROb3RHcmVhdGVyU2xhbnRFcXVhbDogJ1xcdTJBN0VcXHUwMzM4Jyxcblx0Tm90R3JlYXRlclRpbGRlOiAnXFx1MjI3NScsXG5cdE5vdEh1bXBEb3duSHVtcDogJ1xcdTIyNEVcXHUwMzM4Jyxcblx0Tm90SHVtcEVxdWFsOiAnXFx1MjI0RlxcdTAzMzgnLFxuXHRub3RpbjogJ1xcdTIyMDknLFxuXHRub3RpbmRvdDogJ1xcdTIyRjVcXHUwMzM4Jyxcblx0bm90aW5FOiAnXFx1MjJGOVxcdTAzMzgnLFxuXHRub3RpbnZhOiAnXFx1MjIwOScsXG5cdG5vdGludmI6ICdcXHUyMkY3Jyxcblx0bm90aW52YzogJ1xcdTIyRjYnLFxuXHROb3RMZWZ0VHJpYW5nbGU6ICdcXHUyMkVBJyxcblx0Tm90TGVmdFRyaWFuZ2xlQmFyOiAnXFx1MjlDRlxcdTAzMzgnLFxuXHROb3RMZWZ0VHJpYW5nbGVFcXVhbDogJ1xcdTIyRUMnLFxuXHROb3RMZXNzOiAnXFx1MjI2RScsXG5cdE5vdExlc3NFcXVhbDogJ1xcdTIyNzAnLFxuXHROb3RMZXNzR3JlYXRlcjogJ1xcdTIyNzgnLFxuXHROb3RMZXNzTGVzczogJ1xcdTIyNkFcXHUwMzM4Jyxcblx0Tm90TGVzc1NsYW50RXF1YWw6ICdcXHUyQTdEXFx1MDMzOCcsXG5cdE5vdExlc3NUaWxkZTogJ1xcdTIyNzQnLFxuXHROb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjogJ1xcdTJBQTJcXHUwMzM4Jyxcblx0Tm90TmVzdGVkTGVzc0xlc3M6ICdcXHUyQUExXFx1MDMzOCcsXG5cdG5vdG5pOiAnXFx1MjIwQycsXG5cdG5vdG5pdmE6ICdcXHUyMjBDJyxcblx0bm90bml2YjogJ1xcdTIyRkUnLFxuXHRub3RuaXZjOiAnXFx1MjJGRCcsXG5cdE5vdFByZWNlZGVzOiAnXFx1MjI4MCcsXG5cdE5vdFByZWNlZGVzRXF1YWw6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdE5vdFByZWNlZGVzU2xhbnRFcXVhbDogJ1xcdTIyRTAnLFxuXHROb3RSZXZlcnNlRWxlbWVudDogJ1xcdTIyMEMnLFxuXHROb3RSaWdodFRyaWFuZ2xlOiAnXFx1MjJFQicsXG5cdE5vdFJpZ2h0VHJpYW5nbGVCYXI6ICdcXHUyOUQwXFx1MDMzOCcsXG5cdE5vdFJpZ2h0VHJpYW5nbGVFcXVhbDogJ1xcdTIyRUQnLFxuXHROb3RTcXVhcmVTdWJzZXQ6ICdcXHUyMjhGXFx1MDMzOCcsXG5cdE5vdFNxdWFyZVN1YnNldEVxdWFsOiAnXFx1MjJFMicsXG5cdE5vdFNxdWFyZVN1cGVyc2V0OiAnXFx1MjI5MFxcdTAzMzgnLFxuXHROb3RTcXVhcmVTdXBlcnNldEVxdWFsOiAnXFx1MjJFMycsXG5cdE5vdFN1YnNldDogJ1xcdTIyODJcXHUyMEQyJyxcblx0Tm90U3Vic2V0RXF1YWw6ICdcXHUyMjg4Jyxcblx0Tm90U3VjY2VlZHM6ICdcXHUyMjgxJyxcblx0Tm90U3VjY2VlZHNFcXVhbDogJ1xcdTJBQjBcXHUwMzM4Jyxcblx0Tm90U3VjY2VlZHNTbGFudEVxdWFsOiAnXFx1MjJFMScsXG5cdE5vdFN1Y2NlZWRzVGlsZGU6ICdcXHUyMjdGXFx1MDMzOCcsXG5cdE5vdFN1cGVyc2V0OiAnXFx1MjI4M1xcdTIwRDInLFxuXHROb3RTdXBlcnNldEVxdWFsOiAnXFx1MjI4OScsXG5cdE5vdFRpbGRlOiAnXFx1MjI0MScsXG5cdE5vdFRpbGRlRXF1YWw6ICdcXHUyMjQ0Jyxcblx0Tm90VGlsZGVGdWxsRXF1YWw6ICdcXHUyMjQ3Jyxcblx0Tm90VGlsZGVUaWxkZTogJ1xcdTIyNDknLFxuXHROb3RWZXJ0aWNhbEJhcjogJ1xcdTIyMjQnLFxuXHRucGFyOiAnXFx1MjIyNicsXG5cdG5wYXJhbGxlbDogJ1xcdTIyMjYnLFxuXHRucGFyc2w6ICdcXHUyQUZEXFx1MjBFNScsXG5cdG5wYXJ0OiAnXFx1MjIwMlxcdTAzMzgnLFxuXHRucG9saW50OiAnXFx1MkExNCcsXG5cdG5wcjogJ1xcdTIyODAnLFxuXHRucHJjdWU6ICdcXHUyMkUwJyxcblx0bnByZTogJ1xcdTJBQUZcXHUwMzM4Jyxcblx0bnByZWM6ICdcXHUyMjgwJyxcblx0bnByZWNlcTogJ1xcdTJBQUZcXHUwMzM4Jyxcblx0bnJBcnI6ICdcXHUyMUNGJyxcblx0bnJhcnI6ICdcXHUyMTlCJyxcblx0bnJhcnJjOiAnXFx1MjkzM1xcdTAzMzgnLFxuXHRucmFycnc6ICdcXHUyMTlEXFx1MDMzOCcsXG5cdG5SaWdodGFycm93OiAnXFx1MjFDRicsXG5cdG5yaWdodGFycm93OiAnXFx1MjE5QicsXG5cdG5ydHJpOiAnXFx1MjJFQicsXG5cdG5ydHJpZTogJ1xcdTIyRUQnLFxuXHRuc2M6ICdcXHUyMjgxJyxcblx0bnNjY3VlOiAnXFx1MjJFMScsXG5cdG5zY2U6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdE5zY3I6ICdcXHVEODM1XFx1RENBOScsXG5cdG5zY3I6ICdcXHVEODM1XFx1RENDMycsXG5cdG5zaG9ydG1pZDogJ1xcdTIyMjQnLFxuXHRuc2hvcnRwYXJhbGxlbDogJ1xcdTIyMjYnLFxuXHRuc2ltOiAnXFx1MjI0MScsXG5cdG5zaW1lOiAnXFx1MjI0NCcsXG5cdG5zaW1lcTogJ1xcdTIyNDQnLFxuXHRuc21pZDogJ1xcdTIyMjQnLFxuXHRuc3BhcjogJ1xcdTIyMjYnLFxuXHRuc3FzdWJlOiAnXFx1MjJFMicsXG5cdG5zcXN1cGU6ICdcXHUyMkUzJyxcblx0bnN1YjogJ1xcdTIyODQnLFxuXHRuc3ViRTogJ1xcdTJBQzVcXHUwMzM4Jyxcblx0bnN1YmU6ICdcXHUyMjg4Jyxcblx0bnN1YnNldDogJ1xcdTIyODJcXHUyMEQyJyxcblx0bnN1YnNldGVxOiAnXFx1MjI4OCcsXG5cdG5zdWJzZXRlcXE6ICdcXHUyQUM1XFx1MDMzOCcsXG5cdG5zdWNjOiAnXFx1MjI4MScsXG5cdG5zdWNjZXE6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdG5zdXA6ICdcXHUyMjg1Jyxcblx0bnN1cEU6ICdcXHUyQUM2XFx1MDMzOCcsXG5cdG5zdXBlOiAnXFx1MjI4OScsXG5cdG5zdXBzZXQ6ICdcXHUyMjgzXFx1MjBEMicsXG5cdG5zdXBzZXRlcTogJ1xcdTIyODknLFxuXHRuc3Vwc2V0ZXFxOiAnXFx1MkFDNlxcdTAzMzgnLFxuXHRudGdsOiAnXFx1MjI3OScsXG5cdE50aWxkZTogJ1xcdTAwRDEnLFxuXHRudGlsZGU6ICdcXHUwMEYxJyxcblx0bnRsZzogJ1xcdTIyNzgnLFxuXHRudHJpYW5nbGVsZWZ0OiAnXFx1MjJFQScsXG5cdG50cmlhbmdsZWxlZnRlcTogJ1xcdTIyRUMnLFxuXHRudHJpYW5nbGVyaWdodDogJ1xcdTIyRUInLFxuXHRudHJpYW5nbGVyaWdodGVxOiAnXFx1MjJFRCcsXG5cdE51OiAnXFx1MDM5RCcsXG5cdG51OiAnXFx1MDNCRCcsXG5cdG51bTogJ1xcdTAwMjMnLFxuXHRudW1lcm86ICdcXHUyMTE2Jyxcblx0bnVtc3A6ICdcXHUyMDA3Jyxcblx0bnZhcDogJ1xcdTIyNERcXHUyMEQyJyxcblx0blZEYXNoOiAnXFx1MjJBRicsXG5cdG5WZGFzaDogJ1xcdTIyQUUnLFxuXHRudkRhc2g6ICdcXHUyMkFEJyxcblx0bnZkYXNoOiAnXFx1MjJBQycsXG5cdG52Z2U6ICdcXHUyMjY1XFx1MjBEMicsXG5cdG52Z3Q6ICdcXHUwMDNFXFx1MjBEMicsXG5cdG52SGFycjogJ1xcdTI5MDQnLFxuXHRudmluZmluOiAnXFx1MjlERScsXG5cdG52bEFycjogJ1xcdTI5MDInLFxuXHRudmxlOiAnXFx1MjI2NFxcdTIwRDInLFxuXHRudmx0OiAnXFx1MDAzQ1xcdTIwRDInLFxuXHRudmx0cmllOiAnXFx1MjJCNFxcdTIwRDInLFxuXHRudnJBcnI6ICdcXHUyOTAzJyxcblx0bnZydHJpZTogJ1xcdTIyQjVcXHUyMEQyJyxcblx0bnZzaW06ICdcXHUyMjNDXFx1MjBEMicsXG5cdG53YXJoazogJ1xcdTI5MjMnLFxuXHRud0FycjogJ1xcdTIxRDYnLFxuXHRud2FycjogJ1xcdTIxOTYnLFxuXHRud2Fycm93OiAnXFx1MjE5NicsXG5cdG53bmVhcjogJ1xcdTI5MjcnLFxuXHRPYWN1dGU6ICdcXHUwMEQzJyxcblx0b2FjdXRlOiAnXFx1MDBGMycsXG5cdG9hc3Q6ICdcXHUyMjlCJyxcblx0b2NpcjogJ1xcdTIyOUEnLFxuXHRPY2lyYzogJ1xcdTAwRDQnLFxuXHRvY2lyYzogJ1xcdTAwRjQnLFxuXHRPY3k6ICdcXHUwNDFFJyxcblx0b2N5OiAnXFx1MDQzRScsXG5cdG9kYXNoOiAnXFx1MjI5RCcsXG5cdE9kYmxhYzogJ1xcdTAxNTAnLFxuXHRvZGJsYWM6ICdcXHUwMTUxJyxcblx0b2RpdjogJ1xcdTJBMzgnLFxuXHRvZG90OiAnXFx1MjI5OScsXG5cdG9kc29sZDogJ1xcdTI5QkMnLFxuXHRPRWxpZzogJ1xcdTAxNTInLFxuXHRvZWxpZzogJ1xcdTAxNTMnLFxuXHRvZmNpcjogJ1xcdTI5QkYnLFxuXHRPZnI6ICdcXHVEODM1XFx1REQxMicsXG5cdG9mcjogJ1xcdUQ4MzVcXHVERDJDJyxcblx0b2dvbjogJ1xcdTAyREInLFxuXHRPZ3JhdmU6ICdcXHUwMEQyJyxcblx0b2dyYXZlOiAnXFx1MDBGMicsXG5cdG9ndDogJ1xcdTI5QzEnLFxuXHRvaGJhcjogJ1xcdTI5QjUnLFxuXHRvaG06ICdcXHUwM0E5Jyxcblx0b2ludDogJ1xcdTIyMkUnLFxuXHRvbGFycjogJ1xcdTIxQkEnLFxuXHRvbGNpcjogJ1xcdTI5QkUnLFxuXHRvbGNyb3NzOiAnXFx1MjlCQicsXG5cdG9saW5lOiAnXFx1MjAzRScsXG5cdG9sdDogJ1xcdTI5QzAnLFxuXHRPbWFjcjogJ1xcdTAxNEMnLFxuXHRvbWFjcjogJ1xcdTAxNEQnLFxuXHRPbWVnYTogJ1xcdTAzQTknLFxuXHRvbWVnYTogJ1xcdTAzQzknLFxuXHRPbWljcm9uOiAnXFx1MDM5RicsXG5cdG9taWNyb246ICdcXHUwM0JGJyxcblx0b21pZDogJ1xcdTI5QjYnLFxuXHRvbWludXM6ICdcXHUyMjk2Jyxcblx0T29wZjogJ1xcdUQ4MzVcXHVERDQ2Jyxcblx0b29wZjogJ1xcdUQ4MzVcXHVERDYwJyxcblx0b3BhcjogJ1xcdTI5QjcnLFxuXHRPcGVuQ3VybHlEb3VibGVRdW90ZTogJ1xcdTIwMUMnLFxuXHRPcGVuQ3VybHlRdW90ZTogJ1xcdTIwMTgnLFxuXHRvcGVycDogJ1xcdTI5QjknLFxuXHRvcGx1czogJ1xcdTIyOTUnLFxuXHRPcjogJ1xcdTJBNTQnLFxuXHRvcjogJ1xcdTIyMjgnLFxuXHRvcmFycjogJ1xcdTIxQkInLFxuXHRvcmQ6ICdcXHUyQTVEJyxcblx0b3JkZXI6ICdcXHUyMTM0Jyxcblx0b3JkZXJvZjogJ1xcdTIxMzQnLFxuXHRvcmRmOiAnXFx1MDBBQScsXG5cdG9yZG06ICdcXHUwMEJBJyxcblx0b3JpZ29mOiAnXFx1MjJCNicsXG5cdG9yb3I6ICdcXHUyQTU2Jyxcblx0b3JzbG9wZTogJ1xcdTJBNTcnLFxuXHRvcnY6ICdcXHUyQTVCJyxcblx0b1M6ICdcXHUyNEM4Jyxcblx0T3NjcjogJ1xcdUQ4MzVcXHVEQ0FBJyxcblx0b3NjcjogJ1xcdTIxMzQnLFxuXHRPc2xhc2g6ICdcXHUwMEQ4Jyxcblx0b3NsYXNoOiAnXFx1MDBGOCcsXG5cdG9zb2w6ICdcXHUyMjk4Jyxcblx0T3RpbGRlOiAnXFx1MDBENScsXG5cdG90aWxkZTogJ1xcdTAwRjUnLFxuXHRPdGltZXM6ICdcXHUyQTM3Jyxcblx0b3RpbWVzOiAnXFx1MjI5NycsXG5cdG90aW1lc2FzOiAnXFx1MkEzNicsXG5cdE91bWw6ICdcXHUwMEQ2Jyxcblx0b3VtbDogJ1xcdTAwRjYnLFxuXHRvdmJhcjogJ1xcdTIzM0QnLFxuXHRPdmVyQmFyOiAnXFx1MjAzRScsXG5cdE92ZXJCcmFjZTogJ1xcdTIzREUnLFxuXHRPdmVyQnJhY2tldDogJ1xcdTIzQjQnLFxuXHRPdmVyUGFyZW50aGVzaXM6ICdcXHUyM0RDJyxcblx0cGFyOiAnXFx1MjIyNScsXG5cdHBhcmE6ICdcXHUwMEI2Jyxcblx0cGFyYWxsZWw6ICdcXHUyMjI1Jyxcblx0cGFyc2ltOiAnXFx1MkFGMycsXG5cdHBhcnNsOiAnXFx1MkFGRCcsXG5cdHBhcnQ6ICdcXHUyMjAyJyxcblx0UGFydGlhbEQ6ICdcXHUyMjAyJyxcblx0UGN5OiAnXFx1MDQxRicsXG5cdHBjeTogJ1xcdTA0M0YnLFxuXHRwZXJjbnQ6ICdcXHUwMDI1Jyxcblx0cGVyaW9kOiAnXFx1MDAyRScsXG5cdHBlcm1pbDogJ1xcdTIwMzAnLFxuXHRwZXJwOiAnXFx1MjJBNScsXG5cdHBlcnRlbms6ICdcXHUyMDMxJyxcblx0UGZyOiAnXFx1RDgzNVxcdUREMTMnLFxuXHRwZnI6ICdcXHVEODM1XFx1REQyRCcsXG5cdFBoaTogJ1xcdTAzQTYnLFxuXHRwaGk6ICdcXHUwM0M2Jyxcblx0cGhpdjogJ1xcdTAzRDUnLFxuXHRwaG1tYXQ6ICdcXHUyMTMzJyxcblx0cGhvbmU6ICdcXHUyNjBFJyxcblx0UGk6ICdcXHUwM0EwJyxcblx0cGk6ICdcXHUwM0MwJyxcblx0cGl0Y2hmb3JrOiAnXFx1MjJENCcsXG5cdHBpdjogJ1xcdTAzRDYnLFxuXHRwbGFuY2s6ICdcXHUyMTBGJyxcblx0cGxhbmNraDogJ1xcdTIxMEUnLFxuXHRwbGFua3Y6ICdcXHUyMTBGJyxcblx0cGx1czogJ1xcdTAwMkInLFxuXHRwbHVzYWNpcjogJ1xcdTJBMjMnLFxuXHRwbHVzYjogJ1xcdTIyOUUnLFxuXHRwbHVzY2lyOiAnXFx1MkEyMicsXG5cdHBsdXNkbzogJ1xcdTIyMTQnLFxuXHRwbHVzZHU6ICdcXHUyQTI1Jyxcblx0cGx1c2U6ICdcXHUyQTcyJyxcblx0UGx1c01pbnVzOiAnXFx1MDBCMScsXG5cdHBsdXNtbjogJ1xcdTAwQjEnLFxuXHRwbHVzc2ltOiAnXFx1MkEyNicsXG5cdHBsdXN0d286ICdcXHUyQTI3Jyxcblx0cG06ICdcXHUwMEIxJyxcblx0UG9pbmNhcmVwbGFuZTogJ1xcdTIxMEMnLFxuXHRwb2ludGludDogJ1xcdTJBMTUnLFxuXHRQb3BmOiAnXFx1MjExOScsXG5cdHBvcGY6ICdcXHVEODM1XFx1REQ2MScsXG5cdHBvdW5kOiAnXFx1MDBBMycsXG5cdFByOiAnXFx1MkFCQicsXG5cdHByOiAnXFx1MjI3QScsXG5cdHByYXA6ICdcXHUyQUI3Jyxcblx0cHJjdWU6ICdcXHUyMjdDJyxcblx0cHJFOiAnXFx1MkFCMycsXG5cdHByZTogJ1xcdTJBQUYnLFxuXHRwcmVjOiAnXFx1MjI3QScsXG5cdHByZWNhcHByb3g6ICdcXHUyQUI3Jyxcblx0cHJlY2N1cmx5ZXE6ICdcXHUyMjdDJyxcblx0UHJlY2VkZXM6ICdcXHUyMjdBJyxcblx0UHJlY2VkZXNFcXVhbDogJ1xcdTJBQUYnLFxuXHRQcmVjZWRlc1NsYW50RXF1YWw6ICdcXHUyMjdDJyxcblx0UHJlY2VkZXNUaWxkZTogJ1xcdTIyN0UnLFxuXHRwcmVjZXE6ICdcXHUyQUFGJyxcblx0cHJlY25hcHByb3g6ICdcXHUyQUI5Jyxcblx0cHJlY25lcXE6ICdcXHUyQUI1Jyxcblx0cHJlY25zaW06ICdcXHUyMkU4Jyxcblx0cHJlY3NpbTogJ1xcdTIyN0UnLFxuXHRQcmltZTogJ1xcdTIwMzMnLFxuXHRwcmltZTogJ1xcdTIwMzInLFxuXHRwcmltZXM6ICdcXHUyMTE5Jyxcblx0cHJuYXA6ICdcXHUyQUI5Jyxcblx0cHJuRTogJ1xcdTJBQjUnLFxuXHRwcm5zaW06ICdcXHUyMkU4Jyxcblx0cHJvZDogJ1xcdTIyMEYnLFxuXHRQcm9kdWN0OiAnXFx1MjIwRicsXG5cdHByb2ZhbGFyOiAnXFx1MjMyRScsXG5cdHByb2ZsaW5lOiAnXFx1MjMxMicsXG5cdHByb2ZzdXJmOiAnXFx1MjMxMycsXG5cdHByb3A6ICdcXHUyMjFEJyxcblx0UHJvcG9ydGlvbjogJ1xcdTIyMzcnLFxuXHRQcm9wb3J0aW9uYWw6ICdcXHUyMjFEJyxcblx0cHJvcHRvOiAnXFx1MjIxRCcsXG5cdHByc2ltOiAnXFx1MjI3RScsXG5cdHBydXJlbDogJ1xcdTIyQjAnLFxuXHRQc2NyOiAnXFx1RDgzNVxcdURDQUInLFxuXHRwc2NyOiAnXFx1RDgzNVxcdURDQzUnLFxuXHRQc2k6ICdcXHUwM0E4Jyxcblx0cHNpOiAnXFx1MDNDOCcsXG5cdHB1bmNzcDogJ1xcdTIwMDgnLFxuXHRRZnI6ICdcXHVEODM1XFx1REQxNCcsXG5cdHFmcjogJ1xcdUQ4MzVcXHVERDJFJyxcblx0cWludDogJ1xcdTJBMEMnLFxuXHRRb3BmOiAnXFx1MjExQScsXG5cdHFvcGY6ICdcXHVEODM1XFx1REQ2MicsXG5cdHFwcmltZTogJ1xcdTIwNTcnLFxuXHRRc2NyOiAnXFx1RDgzNVxcdURDQUMnLFxuXHRxc2NyOiAnXFx1RDgzNVxcdURDQzYnLFxuXHRxdWF0ZXJuaW9uczogJ1xcdTIxMEQnLFxuXHRxdWF0aW50OiAnXFx1MkExNicsXG5cdHF1ZXN0OiAnXFx1MDAzRicsXG5cdHF1ZXN0ZXE6ICdcXHUyMjVGJyxcblx0UVVPVDogJ1xcdTAwMjInLFxuXHRxdW90OiAnXFx1MDAyMicsXG5cdHJBYXJyOiAnXFx1MjFEQicsXG5cdHJhY2U6ICdcXHUyMjNEXFx1MDMzMScsXG5cdFJhY3V0ZTogJ1xcdTAxNTQnLFxuXHRyYWN1dGU6ICdcXHUwMTU1Jyxcblx0cmFkaWM6ICdcXHUyMjFBJyxcblx0cmFlbXB0eXY6ICdcXHUyOUIzJyxcblx0UmFuZzogJ1xcdTI3RUInLFxuXHRyYW5nOiAnXFx1MjdFOScsXG5cdHJhbmdkOiAnXFx1Mjk5MicsXG5cdHJhbmdlOiAnXFx1MjlBNScsXG5cdHJhbmdsZTogJ1xcdTI3RTknLFxuXHRyYXF1bzogJ1xcdTAwQkInLFxuXHRSYXJyOiAnXFx1MjFBMCcsXG5cdHJBcnI6ICdcXHUyMUQyJyxcblx0cmFycjogJ1xcdTIxOTInLFxuXHRyYXJyYXA6ICdcXHUyOTc1Jyxcblx0cmFycmI6ICdcXHUyMUU1Jyxcblx0cmFycmJmczogJ1xcdTI5MjAnLFxuXHRyYXJyYzogJ1xcdTI5MzMnLFxuXHRyYXJyZnM6ICdcXHUyOTFFJyxcblx0cmFycmhrOiAnXFx1MjFBQScsXG5cdHJhcnJscDogJ1xcdTIxQUMnLFxuXHRyYXJycGw6ICdcXHUyOTQ1Jyxcblx0cmFycnNpbTogJ1xcdTI5NzQnLFxuXHRSYXJydGw6ICdcXHUyOTE2Jyxcblx0cmFycnRsOiAnXFx1MjFBMycsXG5cdHJhcnJ3OiAnXFx1MjE5RCcsXG5cdHJBdGFpbDogJ1xcdTI5MUMnLFxuXHRyYXRhaWw6ICdcXHUyOTFBJyxcblx0cmF0aW86ICdcXHUyMjM2Jyxcblx0cmF0aW9uYWxzOiAnXFx1MjExQScsXG5cdFJCYXJyOiAnXFx1MjkxMCcsXG5cdHJCYXJyOiAnXFx1MjkwRicsXG5cdHJiYXJyOiAnXFx1MjkwRCcsXG5cdHJiYnJrOiAnXFx1Mjc3MycsXG5cdHJicmFjZTogJ1xcdTAwN0QnLFxuXHRyYnJhY2s6ICdcXHUwMDVEJyxcblx0cmJya2U6ICdcXHUyOThDJyxcblx0cmJya3NsZDogJ1xcdTI5OEUnLFxuXHRyYnJrc2x1OiAnXFx1Mjk5MCcsXG5cdFJjYXJvbjogJ1xcdTAxNTgnLFxuXHRyY2Fyb246ICdcXHUwMTU5Jyxcblx0UmNlZGlsOiAnXFx1MDE1NicsXG5cdHJjZWRpbDogJ1xcdTAxNTcnLFxuXHRyY2VpbDogJ1xcdTIzMDknLFxuXHRyY3ViOiAnXFx1MDA3RCcsXG5cdFJjeTogJ1xcdTA0MjAnLFxuXHRyY3k6ICdcXHUwNDQwJyxcblx0cmRjYTogJ1xcdTI5MzcnLFxuXHRyZGxkaGFyOiAnXFx1Mjk2OScsXG5cdHJkcXVvOiAnXFx1MjAxRCcsXG5cdHJkcXVvcjogJ1xcdTIwMUQnLFxuXHRyZHNoOiAnXFx1MjFCMycsXG5cdFJlOiAnXFx1MjExQycsXG5cdHJlYWw6ICdcXHUyMTFDJyxcblx0cmVhbGluZTogJ1xcdTIxMUInLFxuXHRyZWFscGFydDogJ1xcdTIxMUMnLFxuXHRyZWFsczogJ1xcdTIxMUQnLFxuXHRyZWN0OiAnXFx1MjVBRCcsXG5cdFJFRzogJ1xcdTAwQUUnLFxuXHRyZWc6ICdcXHUwMEFFJyxcblx0UmV2ZXJzZUVsZW1lbnQ6ICdcXHUyMjBCJyxcblx0UmV2ZXJzZUVxdWlsaWJyaXVtOiAnXFx1MjFDQicsXG5cdFJldmVyc2VVcEVxdWlsaWJyaXVtOiAnXFx1Mjk2RicsXG5cdHJmaXNodDogJ1xcdTI5N0QnLFxuXHRyZmxvb3I6ICdcXHUyMzBCJyxcblx0UmZyOiAnXFx1MjExQycsXG5cdHJmcjogJ1xcdUQ4MzVcXHVERDJGJyxcblx0ckhhcjogJ1xcdTI5NjQnLFxuXHRyaGFyZDogJ1xcdTIxQzEnLFxuXHRyaGFydTogJ1xcdTIxQzAnLFxuXHRyaGFydWw6ICdcXHUyOTZDJyxcblx0UmhvOiAnXFx1MDNBMScsXG5cdHJobzogJ1xcdTAzQzEnLFxuXHRyaG92OiAnXFx1MDNGMScsXG5cdFJpZ2h0QW5nbGVCcmFja2V0OiAnXFx1MjdFOScsXG5cdFJpZ2h0QXJyb3c6ICdcXHUyMTkyJyxcblx0UmlnaHRhcnJvdzogJ1xcdTIxRDInLFxuXHRyaWdodGFycm93OiAnXFx1MjE5MicsXG5cdFJpZ2h0QXJyb3dCYXI6ICdcXHUyMUU1Jyxcblx0UmlnaHRBcnJvd0xlZnRBcnJvdzogJ1xcdTIxQzQnLFxuXHRyaWdodGFycm93dGFpbDogJ1xcdTIxQTMnLFxuXHRSaWdodENlaWxpbmc6ICdcXHUyMzA5Jyxcblx0UmlnaHREb3VibGVCcmFja2V0OiAnXFx1MjdFNycsXG5cdFJpZ2h0RG93blRlZVZlY3RvcjogJ1xcdTI5NUQnLFxuXHRSaWdodERvd25WZWN0b3I6ICdcXHUyMUMyJyxcblx0UmlnaHREb3duVmVjdG9yQmFyOiAnXFx1Mjk1NScsXG5cdFJpZ2h0Rmxvb3I6ICdcXHUyMzBCJyxcblx0cmlnaHRoYXJwb29uZG93bjogJ1xcdTIxQzEnLFxuXHRyaWdodGhhcnBvb251cDogJ1xcdTIxQzAnLFxuXHRyaWdodGxlZnRhcnJvd3M6ICdcXHUyMUM0Jyxcblx0cmlnaHRsZWZ0aGFycG9vbnM6ICdcXHUyMUNDJyxcblx0cmlnaHRyaWdodGFycm93czogJ1xcdTIxQzknLFxuXHRyaWdodHNxdWlnYXJyb3c6ICdcXHUyMTlEJyxcblx0UmlnaHRUZWU6ICdcXHUyMkEyJyxcblx0UmlnaHRUZWVBcnJvdzogJ1xcdTIxQTYnLFxuXHRSaWdodFRlZVZlY3RvcjogJ1xcdTI5NUInLFxuXHRyaWdodHRocmVldGltZXM6ICdcXHUyMkNDJyxcblx0UmlnaHRUcmlhbmdsZTogJ1xcdTIyQjMnLFxuXHRSaWdodFRyaWFuZ2xlQmFyOiAnXFx1MjlEMCcsXG5cdFJpZ2h0VHJpYW5nbGVFcXVhbDogJ1xcdTIyQjUnLFxuXHRSaWdodFVwRG93blZlY3RvcjogJ1xcdTI5NEYnLFxuXHRSaWdodFVwVGVlVmVjdG9yOiAnXFx1Mjk1QycsXG5cdFJpZ2h0VXBWZWN0b3I6ICdcXHUyMUJFJyxcblx0UmlnaHRVcFZlY3RvckJhcjogJ1xcdTI5NTQnLFxuXHRSaWdodFZlY3RvcjogJ1xcdTIxQzAnLFxuXHRSaWdodFZlY3RvckJhcjogJ1xcdTI5NTMnLFxuXHRyaW5nOiAnXFx1MDJEQScsXG5cdHJpc2luZ2RvdHNlcTogJ1xcdTIyNTMnLFxuXHRybGFycjogJ1xcdTIxQzQnLFxuXHRybGhhcjogJ1xcdTIxQ0MnLFxuXHRybG06ICdcXHUyMDBGJyxcblx0cm1vdXN0OiAnXFx1MjNCMScsXG5cdHJtb3VzdGFjaGU6ICdcXHUyM0IxJyxcblx0cm5taWQ6ICdcXHUyQUVFJyxcblx0cm9hbmc6ICdcXHUyN0VEJyxcblx0cm9hcnI6ICdcXHUyMUZFJyxcblx0cm9icms6ICdcXHUyN0U3Jyxcblx0cm9wYXI6ICdcXHUyOTg2Jyxcblx0Um9wZjogJ1xcdTIxMUQnLFxuXHRyb3BmOiAnXFx1RDgzNVxcdURENjMnLFxuXHRyb3BsdXM6ICdcXHUyQTJFJyxcblx0cm90aW1lczogJ1xcdTJBMzUnLFxuXHRSb3VuZEltcGxpZXM6ICdcXHUyOTcwJyxcblx0cnBhcjogJ1xcdTAwMjknLFxuXHRycGFyZ3Q6ICdcXHUyOTk0Jyxcblx0cnBwb2xpbnQ6ICdcXHUyQTEyJyxcblx0cnJhcnI6ICdcXHUyMUM5Jyxcblx0UnJpZ2h0YXJyb3c6ICdcXHUyMURCJyxcblx0cnNhcXVvOiAnXFx1MjAzQScsXG5cdFJzY3I6ICdcXHUyMTFCJyxcblx0cnNjcjogJ1xcdUQ4MzVcXHVEQ0M3Jyxcblx0UnNoOiAnXFx1MjFCMScsXG5cdHJzaDogJ1xcdTIxQjEnLFxuXHRyc3FiOiAnXFx1MDA1RCcsXG5cdHJzcXVvOiAnXFx1MjAxOScsXG5cdHJzcXVvcjogJ1xcdTIwMTknLFxuXHRydGhyZWU6ICdcXHUyMkNDJyxcblx0cnRpbWVzOiAnXFx1MjJDQScsXG5cdHJ0cmk6ICdcXHUyNUI5Jyxcblx0cnRyaWU6ICdcXHUyMkI1Jyxcblx0cnRyaWY6ICdcXHUyNUI4Jyxcblx0cnRyaWx0cmk6ICdcXHUyOUNFJyxcblx0UnVsZURlbGF5ZWQ6ICdcXHUyOUY0Jyxcblx0cnVsdWhhcjogJ1xcdTI5NjgnLFxuXHRyeDogJ1xcdTIxMUUnLFxuXHRTYWN1dGU6ICdcXHUwMTVBJyxcblx0c2FjdXRlOiAnXFx1MDE1QicsXG5cdHNicXVvOiAnXFx1MjAxQScsXG5cdFNjOiAnXFx1MkFCQycsXG5cdHNjOiAnXFx1MjI3QicsXG5cdHNjYXA6ICdcXHUyQUI4Jyxcblx0U2Nhcm9uOiAnXFx1MDE2MCcsXG5cdHNjYXJvbjogJ1xcdTAxNjEnLFxuXHRzY2N1ZTogJ1xcdTIyN0QnLFxuXHRzY0U6ICdcXHUyQUI0Jyxcblx0c2NlOiAnXFx1MkFCMCcsXG5cdFNjZWRpbDogJ1xcdTAxNUUnLFxuXHRzY2VkaWw6ICdcXHUwMTVGJyxcblx0U2NpcmM6ICdcXHUwMTVDJyxcblx0c2NpcmM6ICdcXHUwMTVEJyxcblx0c2NuYXA6ICdcXHUyQUJBJyxcblx0c2NuRTogJ1xcdTJBQjYnLFxuXHRzY25zaW06ICdcXHUyMkU5Jyxcblx0c2Nwb2xpbnQ6ICdcXHUyQTEzJyxcblx0c2NzaW06ICdcXHUyMjdGJyxcblx0U2N5OiAnXFx1MDQyMScsXG5cdHNjeTogJ1xcdTA0NDEnLFxuXHRzZG90OiAnXFx1MjJDNScsXG5cdHNkb3RiOiAnXFx1MjJBMScsXG5cdHNkb3RlOiAnXFx1MkE2NicsXG5cdHNlYXJoazogJ1xcdTI5MjUnLFxuXHRzZUFycjogJ1xcdTIxRDgnLFxuXHRzZWFycjogJ1xcdTIxOTgnLFxuXHRzZWFycm93OiAnXFx1MjE5OCcsXG5cdHNlY3Q6ICdcXHUwMEE3Jyxcblx0c2VtaTogJ1xcdTAwM0InLFxuXHRzZXN3YXI6ICdcXHUyOTI5Jyxcblx0c2V0bWludXM6ICdcXHUyMjE2Jyxcblx0c2V0bW46ICdcXHUyMjE2Jyxcblx0c2V4dDogJ1xcdTI3MzYnLFxuXHRTZnI6ICdcXHVEODM1XFx1REQxNicsXG5cdHNmcjogJ1xcdUQ4MzVcXHVERDMwJyxcblx0c2Zyb3duOiAnXFx1MjMyMicsXG5cdHNoYXJwOiAnXFx1MjY2RicsXG5cdFNIQ0hjeTogJ1xcdTA0MjknLFxuXHRzaGNoY3k6ICdcXHUwNDQ5Jyxcblx0U0hjeTogJ1xcdTA0MjgnLFxuXHRzaGN5OiAnXFx1MDQ0OCcsXG5cdFNob3J0RG93bkFycm93OiAnXFx1MjE5MycsXG5cdFNob3J0TGVmdEFycm93OiAnXFx1MjE5MCcsXG5cdHNob3J0bWlkOiAnXFx1MjIyMycsXG5cdHNob3J0cGFyYWxsZWw6ICdcXHUyMjI1Jyxcblx0U2hvcnRSaWdodEFycm93OiAnXFx1MjE5MicsXG5cdFNob3J0VXBBcnJvdzogJ1xcdTIxOTEnLFxuXHRzaHk6ICdcXHUwMEFEJyxcblx0U2lnbWE6ICdcXHUwM0EzJyxcblx0c2lnbWE6ICdcXHUwM0MzJyxcblx0c2lnbWFmOiAnXFx1MDNDMicsXG5cdHNpZ21hdjogJ1xcdTAzQzInLFxuXHRzaW06ICdcXHUyMjNDJyxcblx0c2ltZG90OiAnXFx1MkE2QScsXG5cdHNpbWU6ICdcXHUyMjQzJyxcblx0c2ltZXE6ICdcXHUyMjQzJyxcblx0c2ltZzogJ1xcdTJBOUUnLFxuXHRzaW1nRTogJ1xcdTJBQTAnLFxuXHRzaW1sOiAnXFx1MkE5RCcsXG5cdHNpbWxFOiAnXFx1MkE5RicsXG5cdHNpbW5lOiAnXFx1MjI0NicsXG5cdHNpbXBsdXM6ICdcXHUyQTI0Jyxcblx0c2ltcmFycjogJ1xcdTI5NzInLFxuXHRzbGFycjogJ1xcdTIxOTAnLFxuXHRTbWFsbENpcmNsZTogJ1xcdTIyMTgnLFxuXHRzbWFsbHNldG1pbnVzOiAnXFx1MjIxNicsXG5cdHNtYXNocDogJ1xcdTJBMzMnLFxuXHRzbWVwYXJzbDogJ1xcdTI5RTQnLFxuXHRzbWlkOiAnXFx1MjIyMycsXG5cdHNtaWxlOiAnXFx1MjMyMycsXG5cdHNtdDogJ1xcdTJBQUEnLFxuXHRzbXRlOiAnXFx1MkFBQycsXG5cdHNtdGVzOiAnXFx1MkFBQ1xcdUZFMDAnLFxuXHRTT0ZUY3k6ICdcXHUwNDJDJyxcblx0c29mdGN5OiAnXFx1MDQ0QycsXG5cdHNvbDogJ1xcdTAwMkYnLFxuXHRzb2xiOiAnXFx1MjlDNCcsXG5cdHNvbGJhcjogJ1xcdTIzM0YnLFxuXHRTb3BmOiAnXFx1RDgzNVxcdURENEEnLFxuXHRzb3BmOiAnXFx1RDgzNVxcdURENjQnLFxuXHRzcGFkZXM6ICdcXHUyNjYwJyxcblx0c3BhZGVzdWl0OiAnXFx1MjY2MCcsXG5cdHNwYXI6ICdcXHUyMjI1Jyxcblx0c3FjYXA6ICdcXHUyMjkzJyxcblx0c3FjYXBzOiAnXFx1MjI5M1xcdUZFMDAnLFxuXHRzcWN1cDogJ1xcdTIyOTQnLFxuXHRzcWN1cHM6ICdcXHUyMjk0XFx1RkUwMCcsXG5cdFNxcnQ6ICdcXHUyMjFBJyxcblx0c3FzdWI6ICdcXHUyMjhGJyxcblx0c3FzdWJlOiAnXFx1MjI5MScsXG5cdHNxc3Vic2V0OiAnXFx1MjI4RicsXG5cdHNxc3Vic2V0ZXE6ICdcXHUyMjkxJyxcblx0c3FzdXA6ICdcXHUyMjkwJyxcblx0c3FzdXBlOiAnXFx1MjI5MicsXG5cdHNxc3Vwc2V0OiAnXFx1MjI5MCcsXG5cdHNxc3Vwc2V0ZXE6ICdcXHUyMjkyJyxcblx0c3F1OiAnXFx1MjVBMScsXG5cdFNxdWFyZTogJ1xcdTI1QTEnLFxuXHRzcXVhcmU6ICdcXHUyNUExJyxcblx0U3F1YXJlSW50ZXJzZWN0aW9uOiAnXFx1MjI5MycsXG5cdFNxdWFyZVN1YnNldDogJ1xcdTIyOEYnLFxuXHRTcXVhcmVTdWJzZXRFcXVhbDogJ1xcdTIyOTEnLFxuXHRTcXVhcmVTdXBlcnNldDogJ1xcdTIyOTAnLFxuXHRTcXVhcmVTdXBlcnNldEVxdWFsOiAnXFx1MjI5MicsXG5cdFNxdWFyZVVuaW9uOiAnXFx1MjI5NCcsXG5cdHNxdWFyZjogJ1xcdTI1QUEnLFxuXHRzcXVmOiAnXFx1MjVBQScsXG5cdHNyYXJyOiAnXFx1MjE5MicsXG5cdFNzY3I6ICdcXHVEODM1XFx1RENBRScsXG5cdHNzY3I6ICdcXHVEODM1XFx1RENDOCcsXG5cdHNzZXRtbjogJ1xcdTIyMTYnLFxuXHRzc21pbGU6ICdcXHUyMzIzJyxcblx0c3N0YXJmOiAnXFx1MjJDNicsXG5cdFN0YXI6ICdcXHUyMkM2Jyxcblx0c3RhcjogJ1xcdTI2MDYnLFxuXHRzdGFyZjogJ1xcdTI2MDUnLFxuXHRzdHJhaWdodGVwc2lsb246ICdcXHUwM0Y1Jyxcblx0c3RyYWlnaHRwaGk6ICdcXHUwM0Q1Jyxcblx0c3RybnM6ICdcXHUwMEFGJyxcblx0U3ViOiAnXFx1MjJEMCcsXG5cdHN1YjogJ1xcdTIyODInLFxuXHRzdWJkb3Q6ICdcXHUyQUJEJyxcblx0c3ViRTogJ1xcdTJBQzUnLFxuXHRzdWJlOiAnXFx1MjI4NicsXG5cdHN1YmVkb3Q6ICdcXHUyQUMzJyxcblx0c3VibXVsdDogJ1xcdTJBQzEnLFxuXHRzdWJuRTogJ1xcdTJBQ0InLFxuXHRzdWJuZTogJ1xcdTIyOEEnLFxuXHRzdWJwbHVzOiAnXFx1MkFCRicsXG5cdHN1YnJhcnI6ICdcXHUyOTc5Jyxcblx0U3Vic2V0OiAnXFx1MjJEMCcsXG5cdHN1YnNldDogJ1xcdTIyODInLFxuXHRzdWJzZXRlcTogJ1xcdTIyODYnLFxuXHRzdWJzZXRlcXE6ICdcXHUyQUM1Jyxcblx0U3Vic2V0RXF1YWw6ICdcXHUyMjg2Jyxcblx0c3Vic2V0bmVxOiAnXFx1MjI4QScsXG5cdHN1YnNldG5lcXE6ICdcXHUyQUNCJyxcblx0c3Vic2ltOiAnXFx1MkFDNycsXG5cdHN1YnN1YjogJ1xcdTJBRDUnLFxuXHRzdWJzdXA6ICdcXHUyQUQzJyxcblx0c3VjYzogJ1xcdTIyN0InLFxuXHRzdWNjYXBwcm94OiAnXFx1MkFCOCcsXG5cdHN1Y2NjdXJseWVxOiAnXFx1MjI3RCcsXG5cdFN1Y2NlZWRzOiAnXFx1MjI3QicsXG5cdFN1Y2NlZWRzRXF1YWw6ICdcXHUyQUIwJyxcblx0U3VjY2VlZHNTbGFudEVxdWFsOiAnXFx1MjI3RCcsXG5cdFN1Y2NlZWRzVGlsZGU6ICdcXHUyMjdGJyxcblx0c3VjY2VxOiAnXFx1MkFCMCcsXG5cdHN1Y2NuYXBwcm94OiAnXFx1MkFCQScsXG5cdHN1Y2NuZXFxOiAnXFx1MkFCNicsXG5cdHN1Y2Nuc2ltOiAnXFx1MjJFOScsXG5cdHN1Y2NzaW06ICdcXHUyMjdGJyxcblx0U3VjaFRoYXQ6ICdcXHUyMjBCJyxcblx0U3VtOiAnXFx1MjIxMScsXG5cdHN1bTogJ1xcdTIyMTEnLFxuXHRzdW5nOiAnXFx1MjY2QScsXG5cdFN1cDogJ1xcdTIyRDEnLFxuXHRzdXA6ICdcXHUyMjgzJyxcblx0c3VwMTogJ1xcdTAwQjknLFxuXHRzdXAyOiAnXFx1MDBCMicsXG5cdHN1cDM6ICdcXHUwMEIzJyxcblx0c3VwZG90OiAnXFx1MkFCRScsXG5cdHN1cGRzdWI6ICdcXHUyQUQ4Jyxcblx0c3VwRTogJ1xcdTJBQzYnLFxuXHRzdXBlOiAnXFx1MjI4NycsXG5cdHN1cGVkb3Q6ICdcXHUyQUM0Jyxcblx0U3VwZXJzZXQ6ICdcXHUyMjgzJyxcblx0U3VwZXJzZXRFcXVhbDogJ1xcdTIyODcnLFxuXHRzdXBoc29sOiAnXFx1MjdDOScsXG5cdHN1cGhzdWI6ICdcXHUyQUQ3Jyxcblx0c3VwbGFycjogJ1xcdTI5N0InLFxuXHRzdXBtdWx0OiAnXFx1MkFDMicsXG5cdHN1cG5FOiAnXFx1MkFDQycsXG5cdHN1cG5lOiAnXFx1MjI4QicsXG5cdHN1cHBsdXM6ICdcXHUyQUMwJyxcblx0U3Vwc2V0OiAnXFx1MjJEMScsXG5cdHN1cHNldDogJ1xcdTIyODMnLFxuXHRzdXBzZXRlcTogJ1xcdTIyODcnLFxuXHRzdXBzZXRlcXE6ICdcXHUyQUM2Jyxcblx0c3Vwc2V0bmVxOiAnXFx1MjI4QicsXG5cdHN1cHNldG5lcXE6ICdcXHUyQUNDJyxcblx0c3Vwc2ltOiAnXFx1MkFDOCcsXG5cdHN1cHN1YjogJ1xcdTJBRDQnLFxuXHRzdXBzdXA6ICdcXHUyQUQ2Jyxcblx0c3dhcmhrOiAnXFx1MjkyNicsXG5cdHN3QXJyOiAnXFx1MjFEOScsXG5cdHN3YXJyOiAnXFx1MjE5OScsXG5cdHN3YXJyb3c6ICdcXHUyMTk5Jyxcblx0c3dud2FyOiAnXFx1MjkyQScsXG5cdHN6bGlnOiAnXFx1MDBERicsXG5cdFRhYjogJ1xcdTAwMDknLFxuXHR0YXJnZXQ6ICdcXHUyMzE2Jyxcblx0VGF1OiAnXFx1MDNBNCcsXG5cdHRhdTogJ1xcdTAzQzQnLFxuXHR0YnJrOiAnXFx1MjNCNCcsXG5cdFRjYXJvbjogJ1xcdTAxNjQnLFxuXHR0Y2Fyb246ICdcXHUwMTY1Jyxcblx0VGNlZGlsOiAnXFx1MDE2MicsXG5cdHRjZWRpbDogJ1xcdTAxNjMnLFxuXHRUY3k6ICdcXHUwNDIyJyxcblx0dGN5OiAnXFx1MDQ0MicsXG5cdHRkb3Q6ICdcXHUyMERCJyxcblx0dGVscmVjOiAnXFx1MjMxNScsXG5cdFRmcjogJ1xcdUQ4MzVcXHVERDE3Jyxcblx0dGZyOiAnXFx1RDgzNVxcdUREMzEnLFxuXHR0aGVyZTQ6ICdcXHUyMjM0Jyxcblx0VGhlcmVmb3JlOiAnXFx1MjIzNCcsXG5cdHRoZXJlZm9yZTogJ1xcdTIyMzQnLFxuXHRUaGV0YTogJ1xcdTAzOTgnLFxuXHR0aGV0YTogJ1xcdTAzQjgnLFxuXHR0aGV0YXN5bTogJ1xcdTAzRDEnLFxuXHR0aGV0YXY6ICdcXHUwM0QxJyxcblx0dGhpY2thcHByb3g6ICdcXHUyMjQ4Jyxcblx0dGhpY2tzaW06ICdcXHUyMjNDJyxcblx0VGhpY2tTcGFjZTogJ1xcdTIwNUZcXHUyMDBBJyxcblx0dGhpbnNwOiAnXFx1MjAwOScsXG5cdFRoaW5TcGFjZTogJ1xcdTIwMDknLFxuXHR0aGthcDogJ1xcdTIyNDgnLFxuXHR0aGtzaW06ICdcXHUyMjNDJyxcblx0VEhPUk46ICdcXHUwMERFJyxcblx0dGhvcm46ICdcXHUwMEZFJyxcblx0VGlsZGU6ICdcXHUyMjNDJyxcblx0dGlsZGU6ICdcXHUwMkRDJyxcblx0VGlsZGVFcXVhbDogJ1xcdTIyNDMnLFxuXHRUaWxkZUZ1bGxFcXVhbDogJ1xcdTIyNDUnLFxuXHRUaWxkZVRpbGRlOiAnXFx1MjI0OCcsXG5cdHRpbWVzOiAnXFx1MDBENycsXG5cdHRpbWVzYjogJ1xcdTIyQTAnLFxuXHR0aW1lc2JhcjogJ1xcdTJBMzEnLFxuXHR0aW1lc2Q6ICdcXHUyQTMwJyxcblx0dGludDogJ1xcdTIyMkQnLFxuXHR0b2VhOiAnXFx1MjkyOCcsXG5cdHRvcDogJ1xcdTIyQTQnLFxuXHR0b3Bib3Q6ICdcXHUyMzM2Jyxcblx0dG9wY2lyOiAnXFx1MkFGMScsXG5cdFRvcGY6ICdcXHVEODM1XFx1REQ0QicsXG5cdHRvcGY6ICdcXHVEODM1XFx1REQ2NScsXG5cdHRvcGZvcms6ICdcXHUyQURBJyxcblx0dG9zYTogJ1xcdTI5MjknLFxuXHR0cHJpbWU6ICdcXHUyMDM0Jyxcblx0VFJBREU6ICdcXHUyMTIyJyxcblx0dHJhZGU6ICdcXHUyMTIyJyxcblx0dHJpYW5nbGU6ICdcXHUyNUI1Jyxcblx0dHJpYW5nbGVkb3duOiAnXFx1MjVCRicsXG5cdHRyaWFuZ2xlbGVmdDogJ1xcdTI1QzMnLFxuXHR0cmlhbmdsZWxlZnRlcTogJ1xcdTIyQjQnLFxuXHR0cmlhbmdsZXE6ICdcXHUyMjVDJyxcblx0dHJpYW5nbGVyaWdodDogJ1xcdTI1QjknLFxuXHR0cmlhbmdsZXJpZ2h0ZXE6ICdcXHUyMkI1Jyxcblx0dHJpZG90OiAnXFx1MjVFQycsXG5cdHRyaWU6ICdcXHUyMjVDJyxcblx0dHJpbWludXM6ICdcXHUyQTNBJyxcblx0VHJpcGxlRG90OiAnXFx1MjBEQicsXG5cdHRyaXBsdXM6ICdcXHUyQTM5Jyxcblx0dHJpc2I6ICdcXHUyOUNEJyxcblx0dHJpdGltZTogJ1xcdTJBM0InLFxuXHR0cnBleml1bTogJ1xcdTIzRTInLFxuXHRUc2NyOiAnXFx1RDgzNVxcdURDQUYnLFxuXHR0c2NyOiAnXFx1RDgzNVxcdURDQzknLFxuXHRUU2N5OiAnXFx1MDQyNicsXG5cdHRzY3k6ICdcXHUwNDQ2Jyxcblx0VFNIY3k6ICdcXHUwNDBCJyxcblx0dHNoY3k6ICdcXHUwNDVCJyxcblx0VHN0cm9rOiAnXFx1MDE2NicsXG5cdHRzdHJvazogJ1xcdTAxNjcnLFxuXHR0d2l4dDogJ1xcdTIyNkMnLFxuXHR0d29oZWFkbGVmdGFycm93OiAnXFx1MjE5RScsXG5cdHR3b2hlYWRyaWdodGFycm93OiAnXFx1MjFBMCcsXG5cdFVhY3V0ZTogJ1xcdTAwREEnLFxuXHR1YWN1dGU6ICdcXHUwMEZBJyxcblx0VWFycjogJ1xcdTIxOUYnLFxuXHR1QXJyOiAnXFx1MjFEMScsXG5cdHVhcnI6ICdcXHUyMTkxJyxcblx0VWFycm9jaXI6ICdcXHUyOTQ5Jyxcblx0VWJyY3k6ICdcXHUwNDBFJyxcblx0dWJyY3k6ICdcXHUwNDVFJyxcblx0VWJyZXZlOiAnXFx1MDE2QycsXG5cdHVicmV2ZTogJ1xcdTAxNkQnLFxuXHRVY2lyYzogJ1xcdTAwREInLFxuXHR1Y2lyYzogJ1xcdTAwRkInLFxuXHRVY3k6ICdcXHUwNDIzJyxcblx0dWN5OiAnXFx1MDQ0MycsXG5cdHVkYXJyOiAnXFx1MjFDNScsXG5cdFVkYmxhYzogJ1xcdTAxNzAnLFxuXHR1ZGJsYWM6ICdcXHUwMTcxJyxcblx0dWRoYXI6ICdcXHUyOTZFJyxcblx0dWZpc2h0OiAnXFx1Mjk3RScsXG5cdFVmcjogJ1xcdUQ4MzVcXHVERDE4Jyxcblx0dWZyOiAnXFx1RDgzNVxcdUREMzInLFxuXHRVZ3JhdmU6ICdcXHUwMEQ5Jyxcblx0dWdyYXZlOiAnXFx1MDBGOScsXG5cdHVIYXI6ICdcXHUyOTYzJyxcblx0dWhhcmw6ICdcXHUyMUJGJyxcblx0dWhhcnI6ICdcXHUyMUJFJyxcblx0dWhibGs6ICdcXHUyNTgwJyxcblx0dWxjb3JuOiAnXFx1MjMxQycsXG5cdHVsY29ybmVyOiAnXFx1MjMxQycsXG5cdHVsY3JvcDogJ1xcdTIzMEYnLFxuXHR1bHRyaTogJ1xcdTI1RjgnLFxuXHRVbWFjcjogJ1xcdTAxNkEnLFxuXHR1bWFjcjogJ1xcdTAxNkInLFxuXHR1bWw6ICdcXHUwMEE4Jyxcblx0VW5kZXJCYXI6ICdcXHUwMDVGJyxcblx0VW5kZXJCcmFjZTogJ1xcdTIzREYnLFxuXHRVbmRlckJyYWNrZXQ6ICdcXHUyM0I1Jyxcblx0VW5kZXJQYXJlbnRoZXNpczogJ1xcdTIzREQnLFxuXHRVbmlvbjogJ1xcdTIyQzMnLFxuXHRVbmlvblBsdXM6ICdcXHUyMjhFJyxcblx0VW9nb246ICdcXHUwMTcyJyxcblx0dW9nb246ICdcXHUwMTczJyxcblx0VW9wZjogJ1xcdUQ4MzVcXHVERDRDJyxcblx0dW9wZjogJ1xcdUQ4MzVcXHVERDY2Jyxcblx0VXBBcnJvdzogJ1xcdTIxOTEnLFxuXHRVcGFycm93OiAnXFx1MjFEMScsXG5cdHVwYXJyb3c6ICdcXHUyMTkxJyxcblx0VXBBcnJvd0JhcjogJ1xcdTI5MTInLFxuXHRVcEFycm93RG93bkFycm93OiAnXFx1MjFDNScsXG5cdFVwRG93bkFycm93OiAnXFx1MjE5NScsXG5cdFVwZG93bmFycm93OiAnXFx1MjFENScsXG5cdHVwZG93bmFycm93OiAnXFx1MjE5NScsXG5cdFVwRXF1aWxpYnJpdW06ICdcXHUyOTZFJyxcblx0dXBoYXJwb29ubGVmdDogJ1xcdTIxQkYnLFxuXHR1cGhhcnBvb25yaWdodDogJ1xcdTIxQkUnLFxuXHR1cGx1czogJ1xcdTIyOEUnLFxuXHRVcHBlckxlZnRBcnJvdzogJ1xcdTIxOTYnLFxuXHRVcHBlclJpZ2h0QXJyb3c6ICdcXHUyMTk3Jyxcblx0VXBzaTogJ1xcdTAzRDInLFxuXHR1cHNpOiAnXFx1MDNDNScsXG5cdHVwc2loOiAnXFx1MDNEMicsXG5cdFVwc2lsb246ICdcXHUwM0E1Jyxcblx0dXBzaWxvbjogJ1xcdTAzQzUnLFxuXHRVcFRlZTogJ1xcdTIyQTUnLFxuXHRVcFRlZUFycm93OiAnXFx1MjFBNScsXG5cdHVwdXBhcnJvd3M6ICdcXHUyMUM4Jyxcblx0dXJjb3JuOiAnXFx1MjMxRCcsXG5cdHVyY29ybmVyOiAnXFx1MjMxRCcsXG5cdHVyY3JvcDogJ1xcdTIzMEUnLFxuXHRVcmluZzogJ1xcdTAxNkUnLFxuXHR1cmluZzogJ1xcdTAxNkYnLFxuXHR1cnRyaTogJ1xcdTI1RjknLFxuXHRVc2NyOiAnXFx1RDgzNVxcdURDQjAnLFxuXHR1c2NyOiAnXFx1RDgzNVxcdURDQ0EnLFxuXHR1dGRvdDogJ1xcdTIyRjAnLFxuXHRVdGlsZGU6ICdcXHUwMTY4Jyxcblx0dXRpbGRlOiAnXFx1MDE2OScsXG5cdHV0cmk6ICdcXHUyNUI1Jyxcblx0dXRyaWY6ICdcXHUyNUI0Jyxcblx0dXVhcnI6ICdcXHUyMUM4Jyxcblx0VXVtbDogJ1xcdTAwREMnLFxuXHR1dW1sOiAnXFx1MDBGQycsXG5cdHV3YW5nbGU6ICdcXHUyOUE3Jyxcblx0dmFuZ3J0OiAnXFx1Mjk5QycsXG5cdHZhcmVwc2lsb246ICdcXHUwM0Y1Jyxcblx0dmFya2FwcGE6ICdcXHUwM0YwJyxcblx0dmFybm90aGluZzogJ1xcdTIyMDUnLFxuXHR2YXJwaGk6ICdcXHUwM0Q1Jyxcblx0dmFycGk6ICdcXHUwM0Q2Jyxcblx0dmFycHJvcHRvOiAnXFx1MjIxRCcsXG5cdHZBcnI6ICdcXHUyMUQ1Jyxcblx0dmFycjogJ1xcdTIxOTUnLFxuXHR2YXJyaG86ICdcXHUwM0YxJyxcblx0dmFyc2lnbWE6ICdcXHUwM0MyJyxcblx0dmFyc3Vic2V0bmVxOiAnXFx1MjI4QVxcdUZFMDAnLFxuXHR2YXJzdWJzZXRuZXFxOiAnXFx1MkFDQlxcdUZFMDAnLFxuXHR2YXJzdXBzZXRuZXE6ICdcXHUyMjhCXFx1RkUwMCcsXG5cdHZhcnN1cHNldG5lcXE6ICdcXHUyQUNDXFx1RkUwMCcsXG5cdHZhcnRoZXRhOiAnXFx1MDNEMScsXG5cdHZhcnRyaWFuZ2xlbGVmdDogJ1xcdTIyQjInLFxuXHR2YXJ0cmlhbmdsZXJpZ2h0OiAnXFx1MjJCMycsXG5cdFZiYXI6ICdcXHUyQUVCJyxcblx0dkJhcjogJ1xcdTJBRTgnLFxuXHR2QmFydjogJ1xcdTJBRTknLFxuXHRWY3k6ICdcXHUwNDEyJyxcblx0dmN5OiAnXFx1MDQzMicsXG5cdFZEYXNoOiAnXFx1MjJBQicsXG5cdFZkYXNoOiAnXFx1MjJBOScsXG5cdHZEYXNoOiAnXFx1MjJBOCcsXG5cdHZkYXNoOiAnXFx1MjJBMicsXG5cdFZkYXNobDogJ1xcdTJBRTYnLFxuXHRWZWU6ICdcXHUyMkMxJyxcblx0dmVlOiAnXFx1MjIyOCcsXG5cdHZlZWJhcjogJ1xcdTIyQkInLFxuXHR2ZWVlcTogJ1xcdTIyNUEnLFxuXHR2ZWxsaXA6ICdcXHUyMkVFJyxcblx0VmVyYmFyOiAnXFx1MjAxNicsXG5cdHZlcmJhcjogJ1xcdTAwN0MnLFxuXHRWZXJ0OiAnXFx1MjAxNicsXG5cdHZlcnQ6ICdcXHUwMDdDJyxcblx0VmVydGljYWxCYXI6ICdcXHUyMjIzJyxcblx0VmVydGljYWxMaW5lOiAnXFx1MDA3QycsXG5cdFZlcnRpY2FsU2VwYXJhdG9yOiAnXFx1Mjc1OCcsXG5cdFZlcnRpY2FsVGlsZGU6ICdcXHUyMjQwJyxcblx0VmVyeVRoaW5TcGFjZTogJ1xcdTIwMEEnLFxuXHRWZnI6ICdcXHVEODM1XFx1REQxOScsXG5cdHZmcjogJ1xcdUQ4MzVcXHVERDMzJyxcblx0dmx0cmk6ICdcXHUyMkIyJyxcblx0dm5zdWI6ICdcXHUyMjgyXFx1MjBEMicsXG5cdHZuc3VwOiAnXFx1MjI4M1xcdTIwRDInLFxuXHRWb3BmOiAnXFx1RDgzNVxcdURENEQnLFxuXHR2b3BmOiAnXFx1RDgzNVxcdURENjcnLFxuXHR2cHJvcDogJ1xcdTIyMUQnLFxuXHR2cnRyaTogJ1xcdTIyQjMnLFxuXHRWc2NyOiAnXFx1RDgzNVxcdURDQjEnLFxuXHR2c2NyOiAnXFx1RDgzNVxcdURDQ0InLFxuXHR2c3VibkU6ICdcXHUyQUNCXFx1RkUwMCcsXG5cdHZzdWJuZTogJ1xcdTIyOEFcXHVGRTAwJyxcblx0dnN1cG5FOiAnXFx1MkFDQ1xcdUZFMDAnLFxuXHR2c3VwbmU6ICdcXHUyMjhCXFx1RkUwMCcsXG5cdFZ2ZGFzaDogJ1xcdTIyQUEnLFxuXHR2emlnemFnOiAnXFx1Mjk5QScsXG5cdFdjaXJjOiAnXFx1MDE3NCcsXG5cdHdjaXJjOiAnXFx1MDE3NScsXG5cdHdlZGJhcjogJ1xcdTJBNUYnLFxuXHRXZWRnZTogJ1xcdTIyQzAnLFxuXHR3ZWRnZTogJ1xcdTIyMjcnLFxuXHR3ZWRnZXE6ICdcXHUyMjU5Jyxcblx0d2VpZXJwOiAnXFx1MjExOCcsXG5cdFdmcjogJ1xcdUQ4MzVcXHVERDFBJyxcblx0d2ZyOiAnXFx1RDgzNVxcdUREMzQnLFxuXHRXb3BmOiAnXFx1RDgzNVxcdURENEUnLFxuXHR3b3BmOiAnXFx1RDgzNVxcdURENjgnLFxuXHR3cDogJ1xcdTIxMTgnLFxuXHR3cjogJ1xcdTIyNDAnLFxuXHR3cmVhdGg6ICdcXHUyMjQwJyxcblx0V3NjcjogJ1xcdUQ4MzVcXHVEQ0IyJyxcblx0d3NjcjogJ1xcdUQ4MzVcXHVEQ0NDJyxcblx0eGNhcDogJ1xcdTIyQzInLFxuXHR4Y2lyYzogJ1xcdTI1RUYnLFxuXHR4Y3VwOiAnXFx1MjJDMycsXG5cdHhkdHJpOiAnXFx1MjVCRCcsXG5cdFhmcjogJ1xcdUQ4MzVcXHVERDFCJyxcblx0eGZyOiAnXFx1RDgzNVxcdUREMzUnLFxuXHR4aEFycjogJ1xcdTI3RkEnLFxuXHR4aGFycjogJ1xcdTI3RjcnLFxuXHRYaTogJ1xcdTAzOUUnLFxuXHR4aTogJ1xcdTAzQkUnLFxuXHR4bEFycjogJ1xcdTI3RjgnLFxuXHR4bGFycjogJ1xcdTI3RjUnLFxuXHR4bWFwOiAnXFx1MjdGQycsXG5cdHhuaXM6ICdcXHUyMkZCJyxcblx0eG9kb3Q6ICdcXHUyQTAwJyxcblx0WG9wZjogJ1xcdUQ4MzVcXHVERDRGJyxcblx0eG9wZjogJ1xcdUQ4MzVcXHVERDY5Jyxcblx0eG9wbHVzOiAnXFx1MkEwMScsXG5cdHhvdGltZTogJ1xcdTJBMDInLFxuXHR4ckFycjogJ1xcdTI3RjknLFxuXHR4cmFycjogJ1xcdTI3RjYnLFxuXHRYc2NyOiAnXFx1RDgzNVxcdURDQjMnLFxuXHR4c2NyOiAnXFx1RDgzNVxcdURDQ0QnLFxuXHR4c3FjdXA6ICdcXHUyQTA2Jyxcblx0eHVwbHVzOiAnXFx1MkEwNCcsXG5cdHh1dHJpOiAnXFx1MjVCMycsXG5cdHh2ZWU6ICdcXHUyMkMxJyxcblx0eHdlZGdlOiAnXFx1MjJDMCcsXG5cdFlhY3V0ZTogJ1xcdTAwREQnLFxuXHR5YWN1dGU6ICdcXHUwMEZEJyxcblx0WUFjeTogJ1xcdTA0MkYnLFxuXHR5YWN5OiAnXFx1MDQ0RicsXG5cdFljaXJjOiAnXFx1MDE3NicsXG5cdHljaXJjOiAnXFx1MDE3NycsXG5cdFljeTogJ1xcdTA0MkInLFxuXHR5Y3k6ICdcXHUwNDRCJyxcblx0eWVuOiAnXFx1MDBBNScsXG5cdFlmcjogJ1xcdUQ4MzVcXHVERDFDJyxcblx0eWZyOiAnXFx1RDgzNVxcdUREMzYnLFxuXHRZSWN5OiAnXFx1MDQwNycsXG5cdHlpY3k6ICdcXHUwNDU3Jyxcblx0WW9wZjogJ1xcdUQ4MzVcXHVERDUwJyxcblx0eW9wZjogJ1xcdUQ4MzVcXHVERDZBJyxcblx0WXNjcjogJ1xcdUQ4MzVcXHVEQ0I0Jyxcblx0eXNjcjogJ1xcdUQ4MzVcXHVEQ0NFJyxcblx0WVVjeTogJ1xcdTA0MkUnLFxuXHR5dWN5OiAnXFx1MDQ0RScsXG5cdFl1bWw6ICdcXHUwMTc4Jyxcblx0eXVtbDogJ1xcdTAwRkYnLFxuXHRaYWN1dGU6ICdcXHUwMTc5Jyxcblx0emFjdXRlOiAnXFx1MDE3QScsXG5cdFpjYXJvbjogJ1xcdTAxN0QnLFxuXHR6Y2Fyb246ICdcXHUwMTdFJyxcblx0WmN5OiAnXFx1MDQxNycsXG5cdHpjeTogJ1xcdTA0MzcnLFxuXHRaZG90OiAnXFx1MDE3QicsXG5cdHpkb3Q6ICdcXHUwMTdDJyxcblx0emVldHJmOiAnXFx1MjEyOCcsXG5cdFplcm9XaWR0aFNwYWNlOiAnXFx1MjAwQicsXG5cdFpldGE6ICdcXHUwMzk2Jyxcblx0emV0YTogJ1xcdTAzQjYnLFxuXHRaZnI6ICdcXHUyMTI4Jyxcblx0emZyOiAnXFx1RDgzNVxcdUREMzcnLFxuXHRaSGN5OiAnXFx1MDQxNicsXG5cdHpoY3k6ICdcXHUwNDM2Jyxcblx0emlncmFycjogJ1xcdTIxREQnLFxuXHRab3BmOiAnXFx1MjEyNCcsXG5cdHpvcGY6ICdcXHVEODM1XFx1REQ2QicsXG5cdFpzY3I6ICdcXHVEODM1XFx1RENCNScsXG5cdHpzY3I6ICdcXHVEODM1XFx1RENDRicsXG5cdHp3ajogJ1xcdTIwMEQnLFxuXHR6d25qOiAnXFx1MjAwQycsXG59KTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgYEhUTUxfRU5USVRJRVNgIGluc3RlYWRcbiAqIEBzZWUgSFRNTF9FTlRJVElFU1xuICovXG5leHBvcnRzLmVudGl0eU1hcCA9IGV4cG9ydHMuSFRNTF9FTlRJVElFUztcbiIsInZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG5leHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uXG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBkb20uWE1MU2VyaWFsaXplclxuZXhwb3J0cy5ET01QYXJzZXIgPSByZXF1aXJlKCcuL2RvbS1wYXJzZXInKS5ET01QYXJzZXJcbiIsInZhciBOQU1FU1BBQ0UgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKS5OQU1FU1BBQ0U7XG5cbi8vWzRdICAgXHROYW1lU3RhcnRDaGFyXHQgICA6Oj0gICBcdFwiOlwiIHwgW0EtWl0gfCBcIl9cIiB8IFthLXpdIHwgWyN4QzAtI3hENl0gfCBbI3hEOC0jeEY2XSB8IFsjeEY4LSN4MkZGXSB8IFsjeDM3MC0jeDM3RF0gfCBbI3gzN0YtI3gxRkZGXSB8IFsjeDIwMEMtI3gyMDBEXSB8IFsjeDIwNzAtI3gyMThGXSB8IFsjeDJDMDAtI3gyRkVGXSB8IFsjeDMwMDEtI3hEN0ZGXSB8IFsjeEY5MDAtI3hGRENGXSB8IFsjeEZERjAtI3hGRkZEXSB8IFsjeDEwMDAwLSN4RUZGRkZdXG4vL1s0YV0gICBcdE5hbWVDaGFyXHQgICA6Oj0gICBcdE5hbWVTdGFydENoYXIgfCBcIi1cIiB8IFwiLlwiIHwgWzAtOV0gfCAjeEI3IHwgWyN4MDMwMC0jeDAzNkZdIHwgWyN4MjAzRi0jeDIwNDBdXG4vL1s1XSAgIFx0TmFtZVx0ICAgOjo9ICAgXHROYW1lU3RhcnRDaGFyIChOYW1lQ2hhcikqXG52YXIgbmFtZVN0YXJ0Q2hhciA9IC9bQS1aX2EtelxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdLy8vXFx1MTAwMDAtXFx1RUZGRkZcbnZhciBuYW1lQ2hhciA9IG5ldyBSZWdFeHAoXCJbXFxcXC1cXFxcLjAtOVwiK25hbWVTdGFydENoYXIuc291cmNlLnNsaWNlKDEsLTEpK1wiXFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBdXCIpO1xudmFyIHRhZ05hbWVQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXicrbmFtZVN0YXJ0Q2hhci5zb3VyY2UrbmFtZUNoYXIuc291cmNlKycqKD86XFw6JytuYW1lU3RhcnRDaGFyLnNvdXJjZStuYW1lQ2hhci5zb3VyY2UrJyopPyQnKTtcbi8vdmFyIHRhZ05hbWVQYXR0ZXJuID0gL15bYS16QS1aX11bXFx3XFwtXFwuXSooPzpcXDpbYS16QS1aX11bXFx3XFwtXFwuXSopPyQvXG4vL3ZhciBoYW5kbGVycyA9ICdyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LGNoYXJhY3RlcnMsZW5kRG9jdW1lbnQsZW5kRWxlbWVudCxlbmRQcmVmaXhNYXBwaW5nLGlnbm9yYWJsZVdoaXRlc3BhY2UscHJvY2Vzc2luZ0luc3RydWN0aW9uLHNldERvY3VtZW50TG9jYXRvcixza2lwcGVkRW50aXR5LHN0YXJ0RG9jdW1lbnQsc3RhcnRFbGVtZW50LHN0YXJ0UHJlZml4TWFwcGluZyxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsLGVycm9yLGZhdGFsRXJyb3Isd2FybmluZyxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wsY29tbWVudCxlbmRDREFUQSxlbmREVEQsZW5kRW50aXR5LHN0YXJ0Q0RBVEEsc3RhcnREVEQsc3RhcnRFbnRpdHknLnNwbGl0KCcsJylcblxuLy9TX1RBRyxcdFNfQVRUUixcdFNfRVEsXHRTX0FUVFJfTk9RVU9UX1ZBTFVFXG4vL1NfQVRUUl9TUEFDRSxcdFNfQVRUUl9FTkQsXHRTX1RBR19TUEFDRSwgU19UQUdfQ0xPU0VcbnZhciBTX1RBRyA9IDA7Ly90YWcgbmFtZSBvZmZlcnJpbmdcbnZhciBTX0FUVFIgPSAxOy8vYXR0ciBuYW1lIG9mZmVycmluZ1xudmFyIFNfQVRUUl9TUEFDRT0yOy8vYXR0ciBuYW1lIGVuZCBhbmQgc3BhY2Ugb2ZmZXJcbnZhciBTX0VRID0gMzsvLz1zcGFjZT9cbnZhciBTX0FUVFJfTk9RVU9UX1ZBTFVFID0gNDsvL2F0dHIgdmFsdWUobm8gcXVvdCB2YWx1ZSBvbmx5KVxudmFyIFNfQVRUUl9FTkQgPSA1Oy8vYXR0ciB2YWx1ZSBlbmQgYW5kIG5vIHNwYWNlKHF1b3QgZW5kKVxudmFyIFNfVEFHX1NQQUNFID0gNjsvLyhhdHRyIHZhbHVlIGVuZCB8fCB0YWcgZW5kICkgJiYgKHNwYWNlIG9mZmVyKVxudmFyIFNfVEFHX0NMT1NFID0gNzsvL2Nsb3NlZCBlbDxlbCAvPlxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZXJyb3IgdGhhdCB3aWxsIG5vdCBiZSBjYXVnaHQgYnkgWE1MUmVhZGVyIGFrYSB0aGUgU0FYIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHthbnk/fSBsb2NhdG9yIE9wdGlvbmFsLCBjYW4gcHJvdmlkZSBkZXRhaWxzIGFib3V0IHRoZSBsb2NhdGlvbiBpbiB0aGUgc291cmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFyc2VFcnJvcihtZXNzYWdlLCBsb2NhdG9yKSB7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2Vcblx0dGhpcy5sb2NhdG9yID0gbG9jYXRvclxuXHRpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgUGFyc2VFcnJvcik7XG59XG5QYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUGFyc2VFcnJvci5wcm90b3R5cGUubmFtZSA9IFBhcnNlRXJyb3IubmFtZVxuXG5mdW5jdGlvbiBYTUxSZWFkZXIoKXtcblxufVxuXG5YTUxSZWFkZXIucHJvdG90eXBlID0ge1xuXHRwYXJzZTpmdW5jdGlvbihzb3VyY2UsZGVmYXVsdE5TTWFwLGVudGl0eU1hcCl7XG5cdFx0dmFyIGRvbUJ1aWxkZXIgPSB0aGlzLmRvbUJ1aWxkZXI7XG5cdFx0ZG9tQnVpbGRlci5zdGFydERvY3VtZW50KCk7XG5cdFx0X2NvcHkoZGVmYXVsdE5TTWFwICxkZWZhdWx0TlNNYXAgPSB7fSlcblx0XHRwYXJzZShzb3VyY2UsZGVmYXVsdE5TTWFwLGVudGl0eU1hcCxcblx0XHRcdFx0ZG9tQnVpbGRlcix0aGlzLmVycm9ySGFuZGxlcik7XG5cdFx0ZG9tQnVpbGRlci5lbmREb2N1bWVudCgpO1xuXHR9XG59XG5mdW5jdGlvbiBwYXJzZShzb3VyY2UsZGVmYXVsdE5TTWFwQ29weSxlbnRpdHlNYXAsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpe1xuXHRmdW5jdGlvbiBmaXhlZEZyb21DaGFyQ29kZShjb2RlKSB7XG5cdFx0Ly8gU3RyaW5nLnByb3RvdHlwZS5mcm9tQ2hhckNvZGUgZG9lcyBub3Qgc3VwcG9ydHNcblx0XHQvLyA+IDIgYnl0ZXMgdW5pY29kZSBjaGFycyBkaXJlY3RseVxuXHRcdGlmIChjb2RlID4gMHhmZmZmKSB7XG5cdFx0XHRjb2RlIC09IDB4MTAwMDA7XG5cdFx0XHR2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjb2RlID4+IDEwKVxuXHRcdFx0XHQsIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoY29kZSAmIDB4M2ZmKTtcblxuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBlbnRpdHlSZXBsYWNlcihhKXtcblx0XHR2YXIgayA9IGEuc2xpY2UoMSwtMSk7XG5cdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudGl0eU1hcCwgaykpIHtcblx0XHRcdHJldHVybiBlbnRpdHlNYXBba107XG5cdFx0fWVsc2UgaWYoay5jaGFyQXQoMCkgPT09ICcjJyl7XG5cdFx0XHRyZXR1cm4gZml4ZWRGcm9tQ2hhckNvZGUocGFyc2VJbnQoay5zdWJzdHIoMSkucmVwbGFjZSgneCcsJzB4JykpKVxuXHRcdH1lbHNle1xuXHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKCdlbnRpdHkgbm90IGZvdW5kOicrYSk7XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gYXBwZW5kVGV4dChlbmQpey8vaGFzIHNvbWUgYnVnc1xuXHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHR2YXIgeHQgPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LGVuZCkucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRsb2NhdG9yJiZwb3NpdGlvbihzdGFydCk7XG5cdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnMoeHQsMCxlbmQtc3RhcnQpO1xuXHRcdFx0c3RhcnQgPSBlbmRcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcG9zaXRpb24ocCxtKXtcblx0XHR3aGlsZShwPj1saW5lRW5kICYmIChtID0gbGluZVBhdHRlcm4uZXhlYyhzb3VyY2UpKSl7XG5cdFx0XHRsaW5lU3RhcnQgPSBtLmluZGV4O1xuXHRcdFx0bGluZUVuZCA9IGxpbmVTdGFydCArIG1bMF0ubGVuZ3RoO1xuXHRcdFx0bG9jYXRvci5saW5lTnVtYmVyKys7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdsaW5lKys6Jyxsb2NhdG9yLHN0YXJ0UG9zLGVuZFBvcylcblx0XHR9XG5cdFx0bG9jYXRvci5jb2x1bW5OdW1iZXIgPSBwLWxpbmVTdGFydCsxO1xuXHR9XG5cdHZhciBsaW5lU3RhcnQgPSAwO1xuXHR2YXIgbGluZUVuZCA9IDA7XG5cdHZhciBsaW5lUGF0dGVybiA9IC8uKig/Olxcclxcbj98XFxuKXwuKiQvZ1xuXHR2YXIgbG9jYXRvciA9IGRvbUJ1aWxkZXIubG9jYXRvcjtcblxuXHR2YXIgcGFyc2VTdGFjayA9IFt7Y3VycmVudE5TTWFwOmRlZmF1bHROU01hcENvcHl9XVxuXHR2YXIgY2xvc2VNYXAgPSB7fTtcblx0dmFyIHN0YXJ0ID0gMDtcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dHJ5e1xuXHRcdFx0dmFyIHRhZ1N0YXJ0ID0gc291cmNlLmluZGV4T2YoJzwnLHN0YXJ0KTtcblx0XHRcdGlmKHRhZ1N0YXJ0PDApe1xuXHRcdFx0XHRpZighc291cmNlLnN1YnN0cihzdGFydCkubWF0Y2goL15cXHMqJC8pKXtcblx0XHRcdFx0XHR2YXIgZG9jID0gZG9tQnVpbGRlci5kb2M7XG5cdCAgICBcdFx0XHR2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG5cdCAgICBcdFx0XHRkb2MuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdCAgICBcdFx0XHRkb21CdWlsZGVyLmN1cnJlbnRFbGVtZW50ID0gdGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZih0YWdTdGFydD5zdGFydCl7XG5cdFx0XHRcdGFwcGVuZFRleHQodGFnU3RhcnQpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoKHNvdXJjZS5jaGFyQXQodGFnU3RhcnQrMSkpe1xuXHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPicsdGFnU3RhcnQrMyk7XG5cdFx0XHRcdHZhciB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIsIGVuZCkucmVwbGFjZSgvWyBcXHRcXG5cXHJdKyQvZywgJycpO1xuXHRcdFx0XHR2YXIgY29uZmlnID0gcGFyc2VTdGFjay5wb3AoKTtcblx0XHRcdFx0aWYoZW5kPDApe1xuXG5cdCAgICAgICAgXHRcdHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0KzIpLnJlcGxhY2UoL1tcXHM8XS4qLywnJyk7XG5cdCAgICAgICAgXHRcdGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIGlzIG5vdCBjb21wbGV0ZTonK2NvbmZpZy50YWdOYW1lKTtcblx0ICAgICAgICBcdFx0ZW5kID0gdGFnU3RhcnQrMSt0YWdOYW1lLmxlbmd0aDtcblx0ICAgICAgICBcdH1lbHNlIGlmKHRhZ05hbWUubWF0Y2goL1xcczwvKSl7XG5cdCAgICAgICAgXHRcdHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1tcXHM8XS4qLywnJyk7XG5cdCAgICAgICAgXHRcdGVycm9ySGFuZGxlci5lcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIG1heWJlIG5vdCBjb21wbGV0ZScpO1xuXHQgICAgICAgIFx0XHRlbmQgPSB0YWdTdGFydCsxK3RhZ05hbWUubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBsb2NhbE5TTWFwID0gY29uZmlnLmxvY2FsTlNNYXA7XG5cdFx0XHRcdHZhciBlbmRNYXRjaCA9IGNvbmZpZy50YWdOYW1lID09IHRhZ05hbWU7XG5cdFx0XHRcdHZhciBlbmRJZ25vcmVDYXNlTWFjaCA9IGVuZE1hdGNoIHx8IGNvbmZpZy50YWdOYW1lJiZjb25maWcudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IHRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXHRcdCAgICAgICAgaWYoZW5kSWdub3JlQ2FzZU1hY2gpe1xuXHRcdCAgICAgICAgXHRkb21CdWlsZGVyLmVuZEVsZW1lbnQoY29uZmlnLnVyaSxjb25maWcubG9jYWxOYW1lLHRhZ05hbWUpO1xuXHRcdFx0XHRcdGlmKGxvY2FsTlNNYXApe1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJlZml4IGluIGxvY2FsTlNNYXApIHtcblx0XHRcdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsb2NhbE5TTWFwLCBwcmVmaXgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIWVuZE1hdGNoKXtcblx0XHQgICAgICAgICAgICBcdGVycm9ySGFuZGxlci5mYXRhbEVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgaXMgbm90IG1hdGNoIHRoZSBjdXJyZW50IHN0YXJ0IHRhZ05hbWU6Jytjb25maWcudGFnTmFtZSApOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdFx0XHR9XG5cdFx0ICAgICAgICB9ZWxzZXtcblx0XHQgICAgICAgIFx0cGFyc2VTdGFjay5wdXNoKGNvbmZpZylcblx0XHQgICAgICAgIH1cblxuXHRcdFx0XHRlbmQrKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdC8vIGVuZCBlbG1lbnRcblx0XHRcdGNhc2UgJz8nOi8vIDw/Li4uPz5cblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHRlbmQgPSBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICchJzovLyA8IWRvY3R5cGUsPCFbQ0RBVEEsPCEtLVxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdGVuZCA9IHBhcnNlRENDKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHR2YXIgZWwgPSBuZXcgRWxlbWVudEF0dHJpYnV0ZXMoKTtcblx0XHRcdFx0dmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGgtMV0uY3VycmVudE5TTWFwO1xuXHRcdFx0XHQvL2VsU3RhcnRFbmRcblx0XHRcdFx0dmFyIGVuZCA9IHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2UsdGFnU3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdHZhciBsZW4gPSBlbC5sZW5ndGg7XG5cblxuXHRcdFx0XHRpZighZWwuY2xvc2VkICYmIGZpeFNlbGZDbG9zZWQoc291cmNlLGVuZCxlbC50YWdOYW1lLGNsb3NlTWFwKSl7XG5cdFx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZighZW50aXR5TWFwLm5ic3Ape1xuXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ3VuY2xvc2VkIHhtbCBhdHRyaWJ1dGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobG9jYXRvciAmJiBsZW4pe1xuXHRcdFx0XHRcdHZhciBsb2NhdG9yMiA9IGNvcHlMb2NhdG9yKGxvY2F0b3Ise30pO1xuXHRcdFx0XHRcdC8vdHJ5ey8vYXR0cmlidXRlIHBvc2l0aW9uIGZpeGVkXG5cdFx0XHRcdFx0Zm9yKHZhciBpID0gMDtpPGxlbjtpKyspe1xuXHRcdFx0XHRcdFx0dmFyIGEgPSBlbFtpXTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uKGEub2Zmc2V0KTtcblx0XHRcdFx0XHRcdGEubG9jYXRvciA9IGNvcHlMb2NhdG9yKGxvY2F0b3Ise30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yMlxuXHRcdFx0XHRcdGlmKGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApKXtcblx0XHRcdFx0XHRcdHBhcnNlU3RhY2sucHVzaChlbClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCkpe1xuXHRcdFx0XHRcdFx0cGFyc2VTdGFjay5wdXNoKGVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChOQU1FU1BBQ0UuaXNIVE1MKGVsLnVyaSkgJiYgIWVsLmNsb3NlZCkge1xuXHRcdFx0XHRcdGVuZCA9IHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSxlbmQsZWwudGFnTmFtZSxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0aWYgKGUgaW5zdGFuY2VvZiBQYXJzZUVycm9yKSB7XG5cdFx0XHRcdHRocm93IGU7XG5cdFx0XHR9XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ2VsZW1lbnQgcGFyc2UgZXJyb3I6ICcrZSlcblx0XHRcdGVuZCA9IC0xO1xuXHRcdH1cblx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0c3RhcnQgPSBlbmQ7XG5cdFx0fWVsc2V7XG5cdFx0XHQvL1RPRE86IOi/memHjOacieWPr+iDvXNheOWbnumAgO+8jOacieS9jee9rumUmeivr+mjjumZqVxuXHRcdFx0YXBwZW5kVGV4dChNYXRoLm1heCh0YWdTdGFydCxzdGFydCkrMSk7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiBjb3B5TG9jYXRvcihmLHQpe1xuXHR0LmxpbmVOdW1iZXIgPSBmLmxpbmVOdW1iZXI7XG5cdHQuY29sdW1uTnVtYmVyID0gZi5jb2x1bW5OdW1iZXI7XG5cdHJldHVybiB0O1xufVxuXG4vKipcbiAqIEBzZWUgI2FwcGVuZEVsZW1lbnQoc291cmNlLGVsU3RhcnRFbmQsZWwsc2VsZkNsb3NlZCxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyLHBhcnNlU3RhY2spO1xuICogQHJldHVybiBlbmQgb2YgdGhlIGVsZW1lbnRTdGFydFBhcnQoZW5kIG9mIGVsZW1lbnRFbmRQYXJ0IGZvciBzZWxmQ2xvc2VkIGVsKVxuICovXG5mdW5jdGlvbiBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLHN0YXJ0LGVsLGN1cnJlbnROU01hcCxlbnRpdHlSZXBsYWNlcixlcnJvckhhbmRsZXIpe1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcW5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydEluZGV4XG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBdHRyaWJ1dGUocW5hbWUsIHZhbHVlLCBzdGFydEluZGV4KSB7XG5cdFx0aWYgKGVsLmF0dHJpYnV0ZU5hbWVzLmhhc093blByb3BlcnR5KHFuYW1lKSkge1xuXHRcdFx0ZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoJ0F0dHJpYnV0ZSAnICsgcW5hbWUgKyAnIHJlZGVmaW5lZCcpXG5cdFx0fVxuXHRcdGVsLmFkZFZhbHVlKFxuXHRcdFx0cW5hbWUsXG5cdFx0XHQvLyBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI0FWTm9ybWFsaXplXG5cdFx0XHQvLyBzaW5jZSB0aGUgeG1sZG9tIHNheCBwYXJzZXIgZG9lcyBub3QgXCJpbnRlcnByZXRcIiBEVEQgdGhlIGZvbGxvd2luZyBpcyBub3QgaW1wbGVtZW50ZWQ6XG5cdFx0XHQvLyAtIHJlY3Vyc2l2ZSByZXBsYWNlbWVudCBvZiAoRFREKSBlbnRpdHkgcmVmZXJlbmNlc1xuXHRcdFx0Ly8gLSB0cmltbWluZyBhbmQgY29sbGFwc2luZyBtdWx0aXBsZSBzcGFjZXMgaW50byBhIHNpbmdsZSBvbmUgZm9yIGF0dHJpYnV0ZXMgdGhhdCBhcmUgbm90IG9mIHR5cGUgQ0RBVEFcblx0XHRcdHZhbHVlLnJlcGxhY2UoL1tcXHRcXG5cXHJdL2csICcgJykucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpLFxuXHRcdFx0c3RhcnRJbmRleFxuXHRcdClcblx0fVxuXHR2YXIgYXR0ck5hbWU7XG5cdHZhciB2YWx1ZTtcblx0dmFyIHAgPSArK3N0YXJ0O1xuXHR2YXIgcyA9IFNfVEFHOy8vc3RhdHVzXG5cdHdoaWxlKHRydWUpe1xuXHRcdHZhciBjID0gc291cmNlLmNoYXJBdChwKTtcblx0XHRzd2l0Y2goYyl7XG5cdFx0Y2FzZSAnPSc6XG5cdFx0XHRpZihzID09PSBTX0FUVFIpey8vYXR0ck5hbWVcblx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscCk7XG5cdFx0XHRcdHMgPSBTX0VRO1xuXHRcdFx0fWVsc2UgaWYocyA9PT0gU19BVFRSX1NQQUNFKXtcblx0XHRcdFx0cyA9IFNfRVE7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9mYXRhbEVycm9yOiBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lIG9yIHNwYWNlIGFmdGVyIGF0dHJOYW1lXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUnKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdcXCcnOlxuXHRcdGNhc2UgJ1wiJzpcblx0XHRcdGlmKHMgPT09IFNfRVEgfHwgcyA9PT0gU19BVFRSIC8vfHwgcyA9PSBTX0FUVFJfU1BBQ0Vcblx0XHRcdFx0KXsvL2VxdWFsXG5cdFx0XHRcdGlmKHMgPT09IFNfQVRUUil7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJylcblx0XHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXJ0ID0gcCsxO1xuXHRcdFx0XHRwID0gc291cmNlLmluZGV4T2YoYyxzdGFydClcblx0XHRcdFx0aWYocD4wKXtcblx0XHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQtMSk7XG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9FTkQ7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZW5kIHF1b3QgbWF0Y2hcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJytjKydcXCcgbWF0Y2gnKTtcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2UgaWYocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKXtcblx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuXHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCk7XG5cdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK2F0dHJOYW1lKydcIiBtaXNzZWQgc3RhcnQgcXVvdCgnK2MrJykhIScpO1xuXHRcdFx0XHRzdGFydCA9IHArMTtcblx0XHRcdFx0cyA9IFNfQVRUUl9FTkRcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvL2ZhdGFsRXJyb3I6IG5vIGVxdWFsIGJlZm9yZVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtdXN0IGFmdGVyIFwiPVwiJyk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnLyc6XG5cdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0cyA9U19UQUdfQ0xPU0U7XG5cdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG5cdFx0XHRjYXNlIFNfQVRUUjpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9jYXNlIFNfRVE6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgaW52YWxpZCBjbG9zZSBjaGFyKCcvJylcIikgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcnOi8vZW5kIGRvY3VtZW50XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ3VuZXhwZWN0ZWQgZW5kIG9mIGlucHV0Jyk7XG5cdFx0XHRpZihzID09IFNfVEFHKXtcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Y2FzZSAnPic6XG5cdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0YnJlYWs7Ly9ub3JtYWxcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTovL0NvbXBhdGlibGUgc3RhdGVcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0aWYodmFsdWUuc2xpY2UoLTEpID09PSAnLycpe1xuXHRcdFx0XHRcdGVsLmNsb3NlZCAgPSB0cnVlO1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc2xpY2UoMCwtMSlcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdGlmKHMgPT09IFNfQVRUUl9TUEFDRSl7XG5cdFx0XHRcdFx0dmFsdWUgPSBhdHRyTmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpe1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgcXVvdChcIikhJyk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKCFOQU1FU1BBQ0UuaXNIVE1MKGN1cnJlbnROU01hcFsnJ10pIHx8ICF2YWx1ZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK3ZhbHVlKydcIiBpbnN0ZWFkISEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUodmFsdWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbWlzc2VkISEnKTtcblx0XHRcdH1cbi8vXHRcdFx0Y29uc29sZS5sb2codGFnTmFtZSx0YWdOYW1lUGF0dGVybix0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Lyp4bWwgc3BhY2UgJ1xceDIwJyB8ICN4OSB8ICN4RCB8ICN4QTsgKi9cblx0XHRjYXNlICdcXHUwMDgwJzpcblx0XHRcdGMgPSAnICc7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmKGM8PSAnICcpey8vc3BhY2Vcblx0XHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTsvL3RhZ05hbWVcblx0XHRcdFx0XHRzID0gU19UQUdfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCBxdW90KFwiKSEhJyk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpXG5cdFx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdFx0XHRzID0gU19UQUdfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdFx0Ly9jYXNlIFNfRVE6XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdC8vXHR2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0XHQvL2lnbm9yZSB3YXJuaW5nXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNley8vbm90IHNwYWNlXG4vL1NfVEFHLFx0U19BVFRSLFx0U19FUSxcdFNfQVRUUl9OT1FVT1RfVkFMVUVcbi8vU19BVFRSX1NQQUNFLFx0U19BVFRSX0VORCxcdFNfVEFHX1NQQUNFLCBTX1RBR19DTE9TRVxuXHRcdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRcdC8vY2FzZSBTX1RBRzp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFI6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19BVFRSX05PUVVPVF9WQUxVRTp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHRcdHZhciB0YWdOYW1lID0gIGVsLnRhZ05hbWU7XG5cdFx0XHRcdFx0aWYgKCFOQU1FU1BBQ0UuaXNIVE1MKGN1cnJlbnROU01hcFsnJ10pIHx8ICFhdHRyTmFtZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSkge1xuXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrYXR0ck5hbWUrJ1wiIG1pc3NlZCB2YWx1ZSEhIFwiJythdHRyTmFtZSsnXCIgaW5zdGVhZDIhIScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0ck5hbWUsIHN0YXJ0KTtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0cyA9IFNfQVRUUjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgc3BhY2UgaXMgcmVxdWlyZWRcIicrYXR0ck5hbWUrJ1wiISEnKVxuXHRcdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0XHRcdHMgPSBTX0FUVFI7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfRVE6XG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9OT1FVT1RfVkFMVUU7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImVsZW1lbnRzIGNsb3NlZCBjaGFyYWN0ZXIgJy8nIGFuZCAnPicgbXVzdCBiZSBjb25uZWN0ZWQgdG9cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9Ly9lbmQgb3V0ZXIgc3dpdGNoXG5cdFx0Ly9jb25zb2xlLmxvZygncCsrJyxwKVxuXHRcdHArKztcblx0fVxufVxuLyoqXG4gKiBAcmV0dXJuIHRydWUgaWYgaGFzIG5ldyBuYW1lc3BhY2UgZGVmaW5lXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApe1xuXHR2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cdHZhciBsb2NhbE5TTWFwID0gbnVsbDtcblx0Ly92YXIgY3VycmVudE5TTWFwID0gcGFyc2VTdGFja1twYXJzZVN0YWNrLmxlbmd0aC0xXS5jdXJyZW50TlNNYXA7XG5cdHZhciBpID0gZWwubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdHZhciBhID0gZWxbaV07XG5cdFx0dmFyIHFOYW1lID0gYS5xTmFtZTtcblx0XHR2YXIgdmFsdWUgPSBhLnZhbHVlO1xuXHRcdHZhciBuc3AgPSBxTmFtZS5pbmRleE9mKCc6Jyk7XG5cdFx0aWYobnNwPjApe1xuXHRcdFx0dmFyIHByZWZpeCA9IGEucHJlZml4ID0gcU5hbWUuc2xpY2UoMCxuc3ApO1xuXHRcdFx0dmFyIGxvY2FsTmFtZSA9IHFOYW1lLnNsaWNlKG5zcCsxKTtcblx0XHRcdHZhciBuc1ByZWZpeCA9IHByZWZpeCA9PT0gJ3htbG5zJyAmJiBsb2NhbE5hbWVcblx0XHR9ZWxzZXtcblx0XHRcdGxvY2FsTmFtZSA9IHFOYW1lO1xuXHRcdFx0cHJlZml4ID0gbnVsbFxuXHRcdFx0bnNQcmVmaXggPSBxTmFtZSA9PT0gJ3htbG5zJyAmJiAnJ1xuXHRcdH1cblx0XHQvL2NhbiBub3Qgc2V0IHByZWZpeCxiZWNhdXNlIHByZWZpeCAhPT0gJydcblx0XHRhLmxvY2FsTmFtZSA9IGxvY2FsTmFtZSA7XG5cdFx0Ly9wcmVmaXggPT0gbnVsbCBmb3Igbm8gbnMgcHJlZml4IGF0dHJpYnV0ZVxuXHRcdGlmKG5zUHJlZml4ICE9PSBmYWxzZSl7Ly9oYWNrISFcblx0XHRcdGlmKGxvY2FsTlNNYXAgPT0gbnVsbCl7XG5cdFx0XHRcdGxvY2FsTlNNYXAgPSB7fVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwwKVxuXHRcdFx0XHRfY29weShjdXJyZW50TlNNYXAsY3VycmVudE5TTWFwPXt9KVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwxKVxuXHRcdFx0fVxuXHRcdFx0Y3VycmVudE5TTWFwW25zUHJlZml4XSA9IGxvY2FsTlNNYXBbbnNQcmVmaXhdID0gdmFsdWU7XG5cdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUxOU1xuXHRcdFx0ZG9tQnVpbGRlci5zdGFydFByZWZpeE1hcHBpbmcobnNQcmVmaXgsIHZhbHVlKVxuXHRcdH1cblx0fVxuXHR2YXIgaSA9IGVsLmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHRhID0gZWxbaV07XG5cdFx0dmFyIHByZWZpeCA9IGEucHJlZml4O1xuXHRcdGlmKHByZWZpeCl7Ly9ubyBwcmVmaXggYXR0cmlidXRlIGhhcyBubyBuYW1lc3BhY2Vcblx0XHRcdGlmKHByZWZpeCA9PT0gJ3htbCcpe1xuXHRcdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUw7XG5cdFx0XHR9aWYocHJlZml4ICE9PSAneG1sbnMnKXtcblx0XHRcdFx0YS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXVxuXG5cdFx0XHRcdC8ve2NvbnNvbGUubG9nKCcjIyMnK2EucU5hbWUsZG9tQnVpbGRlci5sb2NhdG9yLnN5c3RlbUlkKycnLGN1cnJlbnROU01hcCxhLnVyaSl9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHZhciBuc3AgPSB0YWdOYW1lLmluZGV4T2YoJzonKTtcblx0aWYobnNwPjApe1xuXHRcdHByZWZpeCA9IGVsLnByZWZpeCA9IHRhZ05hbWUuc2xpY2UoMCxuc3ApO1xuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWUuc2xpY2UobnNwKzEpO1xuXHR9ZWxzZXtcblx0XHRwcmVmaXggPSBudWxsOy8vaW1wb3J0YW50ISFcblx0XHRsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHR9XG5cdC8vbm8gcHJlZml4IGVsZW1lbnQgaGFzIGRlZmF1bHQgbmFtZXNwYWNlXG5cdHZhciBucyA9IGVsLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddO1xuXHRkb21CdWlsZGVyLnN0YXJ0RWxlbWVudChucyxsb2NhbE5hbWUsdGFnTmFtZSxlbCk7XG5cdC8vZW5kUHJlZml4TWFwcGluZyBhbmQgc3RhcnRQcmVmaXhNYXBwaW5nIGhhdmUgbm90IGFueSBoZWxwIGZvciBkb20gYnVpbGRlclxuXHQvL2xvY2FsTlNNYXAgPSBudWxsXG5cdGlmKGVsLmNsb3NlZCl7XG5cdFx0ZG9tQnVpbGRlci5lbmRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lKTtcblx0XHRpZihsb2NhbE5TTWFwKXtcblx0XHRcdGZvciAocHJlZml4IGluIGxvY2FsTlNNYXApIHtcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsb2NhbE5TTWFwLCBwcmVmaXgpKSB7XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1lbHNle1xuXHRcdGVsLmN1cnJlbnROU01hcCA9IGN1cnJlbnROU01hcDtcblx0XHRlbC5sb2NhbE5TTWFwID0gbG9jYWxOU01hcDtcblx0XHQvL3BhcnNlU3RhY2sucHVzaChlbCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbmZ1bmN0aW9uIHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSxlbFN0YXJ0RW5kLHRhZ05hbWUsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcil7XG5cdGlmKC9eKD86c2NyaXB0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKXtcblx0XHR2YXIgZWxFbmRTdGFydCA9ICBzb3VyY2UuaW5kZXhPZignPC8nK3RhZ05hbWUrJz4nLGVsU3RhcnRFbmQpO1xuXHRcdHZhciB0ZXh0ID0gc291cmNlLnN1YnN0cmluZyhlbFN0YXJ0RW5kKzEsZWxFbmRTdGFydCk7XG5cdFx0aWYoL1smPF0vLnRlc3QodGV4dCkpe1xuXHRcdFx0aWYoL15zY3JpcHQkL2kudGVzdCh0YWdOYW1lKSl7XG5cdFx0XHRcdC8vaWYoIS9cXF1cXF0+Ly50ZXN0KHRleHQpKXtcblx0XHRcdFx0XHQvL2xleEhhbmRsZXIuc3RhcnRDREFUQSgpO1xuXHRcdFx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LDAsdGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdC8vbGV4SGFuZGxlci5lbmRDREFUQSgpO1xuXHRcdFx0XHRcdHJldHVybiBlbEVuZFN0YXJ0O1xuXHRcdFx0XHQvL31cblx0XHRcdH0vL31lbHNley8vdGV4dCBhcmVhXG5cdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwwLHRleHQubGVuZ3RoKTtcblx0XHRcdFx0cmV0dXJuIGVsRW5kU3RhcnQ7XG5cdFx0XHQvL31cblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZWxTdGFydEVuZCsxO1xufVxuZnVuY3Rpb24gZml4U2VsZkNsb3NlZChzb3VyY2UsZWxTdGFydEVuZCx0YWdOYW1lLGNsb3NlTWFwKXtcblx0Ly9pZih0YWdOYW1lIGluIGNsb3NlTWFwKXtcblx0dmFyIHBvcyA9IGNsb3NlTWFwW3RhZ05hbWVdO1xuXHRpZihwb3MgPT0gbnVsbCl7XG5cdFx0Ly9jb25zb2xlLmxvZyh0YWdOYW1lKVxuXHRcdHBvcyA9ICBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyt0YWdOYW1lKyc+Jylcblx0XHRpZihwb3M8ZWxTdGFydEVuZCl7Ly/lv5jorrDpl63lkIhcblx0XHRcdHBvcyA9IHNvdXJjZS5sYXN0SW5kZXhPZignPC8nK3RhZ05hbWUpXG5cdFx0fVxuXHRcdGNsb3NlTWFwW3RhZ05hbWVdID1wb3Ncblx0fVxuXHRyZXR1cm4gcG9zPGVsU3RhcnRFbmQ7XG5cdC8vfVxufVxuXG5mdW5jdGlvbiBfY29weSAoc291cmNlLCB0YXJnZXQpIHtcblx0Zm9yICh2YXIgbiBpbiBzb3VyY2UpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgbikpIHtcblx0XHRcdHRhcmdldFtuXSA9IHNvdXJjZVtuXTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEQ0Moc291cmNlLHN0YXJ0LGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKXsvL3N1cmUgc3RhcnQgd2l0aCAnPCEnXG5cdHZhciBuZXh0PSBzb3VyY2UuY2hhckF0KHN0YXJ0KzIpXG5cdHN3aXRjaChuZXh0KXtcblx0Y2FzZSAnLSc6XG5cdFx0aWYoc291cmNlLmNoYXJBdChzdGFydCArIDMpID09PSAnLScpe1xuXHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCctLT4nLHN0YXJ0KzQpO1xuXHRcdFx0Ly9hcHBlbmQgY29tbWVudCBzb3VyY2Uuc3Vic3RyaW5nKDQsZW5kKS8vPCEtLVxuXHRcdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdFx0ZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSxzdGFydCs0LGVuZC1zdGFydC00KTtcblx0XHRcdFx0cmV0dXJuIGVuZCszO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdC8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdGRlZmF1bHQ6XG5cdFx0aWYoc291cmNlLnN1YnN0cihzdGFydCszLDYpID09ICdDREFUQVsnKXtcblx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignXV0+JyxzdGFydCs5KTtcblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnRDREFUQSgpO1xuXHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHNvdXJjZSxzdGFydCs5LGVuZC1zdGFydC05KTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kQ0RBVEEoKVxuXHRcdFx0cmV0dXJuIGVuZCszO1xuXHRcdH1cblx0XHQvLzwhRE9DVFlQRVxuXHRcdC8vc3RhcnREVEQoamF2YS5sYW5nLlN0cmluZyBuYW1lLCBqYXZhLmxhbmcuU3RyaW5nIHB1YmxpY0lkLCBqYXZhLmxhbmcuU3RyaW5nIHN5c3RlbUlkKVxuXHRcdHZhciBtYXRjaHMgPSBzcGxpdChzb3VyY2Usc3RhcnQpO1xuXHRcdHZhciBsZW4gPSBtYXRjaHMubGVuZ3RoO1xuXHRcdGlmKGxlbj4xICYmIC8hZG9jdHlwZS9pLnRlc3QobWF0Y2hzWzBdWzBdKSl7XG5cdFx0XHR2YXIgbmFtZSA9IG1hdGNoc1sxXVswXTtcblx0XHRcdHZhciBwdWJpZCA9IGZhbHNlO1xuXHRcdFx0dmFyIHN5c2lkID0gZmFsc2U7XG5cdFx0XHRpZihsZW4+Myl7XG5cdFx0XHRcdGlmKC9ecHVibGljJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0cHViaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdFx0c3lzaWQgPSBsZW4+NCAmJiBtYXRjaHNbNF1bMF07XG5cdFx0XHRcdH1lbHNlIGlmKC9ec3lzdGVtJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0c3lzaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuLTFdXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0RFREKG5hbWUsIHB1YmlkLCBzeXNpZCk7XG5cdFx0XHRkb21CdWlsZGVyLmVuZERURCgpO1xuXG5cdFx0XHRyZXR1cm4gbGFzdE1hdGNoLmluZGV4K2xhc3RNYXRjaFswXS5sZW5ndGhcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5cblxuZnVuY3Rpb24gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2Usc3RhcnQsZG9tQnVpbGRlcil7XG5cdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPz4nLHN0YXJ0KTtcblx0aWYoZW5kKXtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LGVuZCkubWF0Y2goL148XFw/KFxcUyopXFxzKihbXFxzXFxTXSo/KVxccyokLyk7XG5cdFx0aWYobWF0Y2gpe1xuXHRcdFx0dmFyIGxlbiA9IG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdGRvbUJ1aWxkZXIucHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoWzFdLCBtYXRjaFsyXSkgO1xuXHRcdFx0cmV0dXJuIGVuZCsyO1xuXHRcdH1lbHNley8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBFbGVtZW50QXR0cmlidXRlcygpe1xuXHR0aGlzLmF0dHJpYnV0ZU5hbWVzID0ge31cbn1cbkVsZW1lbnRBdHRyaWJ1dGVzLnByb3RvdHlwZSA9IHtcblx0c2V0VGFnTmFtZTpmdW5jdGlvbih0YWdOYW1lKXtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdCh0YWdOYW1lKSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdGFnTmFtZTonK3RhZ05hbWUpXG5cdFx0fVxuXHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWVcblx0fSxcblx0YWRkVmFsdWU6ZnVuY3Rpb24ocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdChxTmFtZSkpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGF0dHJpYnV0ZTonK3FOYW1lKVxuXHRcdH1cblx0XHR0aGlzLmF0dHJpYnV0ZU5hbWVzW3FOYW1lXSA9IHRoaXMubGVuZ3RoO1xuXHRcdHRoaXNbdGhpcy5sZW5ndGgrK10gPSB7cU5hbWU6cU5hbWUsdmFsdWU6dmFsdWUsb2Zmc2V0Om9mZnNldH1cblx0fSxcblx0bGVuZ3RoOjAsXG5cdGdldExvY2FsTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5sb2NhbE5hbWV9LFxuXHRnZXRMb2NhdG9yOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLmxvY2F0b3J9LFxuXHRnZXRRTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5xTmFtZX0sXG5cdGdldFVSSTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS51cml9LFxuXHRnZXRWYWx1ZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS52YWx1ZX1cbi8vXHQsZ2V0SW5kZXg6ZnVuY3Rpb24odXJpLCBsb2NhbE5hbWUpKXtcbi8vXHRcdGlmKGxvY2FsTmFtZSl7XG4vL1xuLy9cdFx0fWVsc2V7XG4vL1x0XHRcdHZhciBxTmFtZSA9IHVyaVxuLy9cdFx0fVxuLy9cdH0sXG4vL1x0Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmdldEluZGV4LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LFxuLy9cdGdldFR5cGU6ZnVuY3Rpb24odXJpLGxvY2FsTmFtZSl7fVxuLy9cdGdldFR5cGU6ZnVuY3Rpb24oaSl7fSxcbn1cblxuXG5cbmZ1bmN0aW9uIHNwbGl0KHNvdXJjZSxzdGFydCl7XG5cdHZhciBtYXRjaDtcblx0dmFyIGJ1ZiA9IFtdO1xuXHR2YXIgcmVnID0gLydbXiddKyd8XCJbXlwiXStcInxbXlxcczw+XFwvPV0rPT98KFxcLz9cXHMqPnw8KS9nO1xuXHRyZWcubGFzdEluZGV4ID0gc3RhcnQ7XG5cdHJlZy5leGVjKHNvdXJjZSk7Ly9za2lwIDxcblx0d2hpbGUobWF0Y2ggPSByZWcuZXhlYyhzb3VyY2UpKXtcblx0XHRidWYucHVzaChtYXRjaCk7XG5cdFx0aWYobWF0Y2hbMV0pcmV0dXJuIGJ1Zjtcblx0fVxufVxuXG5leHBvcnRzLlhNTFJlYWRlciA9IFhNTFJlYWRlcjtcbmV4cG9ydHMuUGFyc2VFcnJvciA9IFBhcnNlRXJyb3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=