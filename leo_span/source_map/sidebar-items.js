initSidebarItems({"enum":[["FileName","A file name."]],"fn":[["analyze_source_file","Finds all newlines, multi-byte characters, and non-narrow characters in a SourceFile."],["is_not_test_framework","Is the env var `LEO_TESTFRAMEWORK` not enabled?"],["normalize_newlines","Replaces `\\r\\n` with `\\n` in-place in `src`."],["normalize_src","Normalizes the source code and records the normalizations."],["remove_bom","Removes UTF-8 BOM, if any."]],"struct":[["LineCol","File / Line / Column information on a `BytePos`."],["MultiByteChar","Identifies an offset of a multi-byte character in a `SourceFile`."],["SourceFile","A single source in the [`SourceMap`]."],["SourceMap","The source map containing all recorded sources, methods to register new ones, and methods to query about spans in relation to recorded sources."],["SourceMapInner","Actual data of the source map. We use this setup for purposes of interior mutability."],["SpanLocation","Detailed information on a `Span`."]]});