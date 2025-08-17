// --- Validator Functions ---

function checkHtmlContains(value, mustInclude, mustNotInclude) {
    const missing = mustInclude.filter(item => !value.includes(item));
    const forbidden = mustNotInclude.filter(item => value.includes(item));

    if (missing.length > 0) {
        return { ok: false, message: `De volgende onderdelen ontbreken: ${missing.join(', ')}` };
    }
    if (forbidden.length > 0) {
        return { ok: false, message: `De volgende onderdelen zijn niet toegestaan: ${forbidden.join(', ')}` };
    }
    return { ok: true, message: 'Geslaagd!' };
}

function checkCssRule(value, mustInclude) {
     const missing = mustInclude.filter(item => !value.includes(item));
     if (missing.length > 0) {
        return { ok: false, message: `De volgende regels/selectors ontbreken: ${missing.join(', ')}` };
    }
    return { ok: true, message: 'Geslaagd!' };
}

export function validate_ex_html_html_html_75a8c24f(value) {
    const spec = {
        "kind": "html_contains",
        "must_include": ["<html"],
        "must_not_include": []
    };
    return checkHtmlContains(value, spec.must_include, spec.must_not_include);
}

export function validate_ex_css_1_css_basis_syntax_cascade_specificiteit_inheritance_layersc_091ea15c(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": ["@layer", "@layer base", "@layer components"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_2_selectorsselectors_afgebakende_links_6ced71b4(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": ["nav a", ":hover", "text-decoration"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_3_waarden_eenhedenwaarden_eenheden_a52111a8(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": ["body", "font-size: 1.125rem", ".container", "width: 50%"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_4_kleuren_kleurruimteskleuren_kleurruimtes_9332b2af(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": ["h1", "color: oklch("]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_5_box_model_sizing_overflowbox_model_overflow_4498c000(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": ["*", "box-sizing: border-box", "overflow"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_6_positionering_z_indexpositionering_z_index_389ca93c(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": [".header", "position: sticky", "top: 0", "z-index: 10"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_7_weergave_layoutlayout_grid_galerij_5eee569a(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": [".gallery", "display: grid", "grid-template-columns", "gap: 1rem"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_8_sizing_containmentsizing_containment_047552f6(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": [".box", "contain: content", "contain-intrinsic-size"]
    };
    return checkCssRule(value, spec.must_include);
}

export function validate_ex_css_9_achtergronden_borders_effectsachtergronden_borders_effects_e8ea5ca2(value) {
    const spec = {
        "kind": "css_rule",
        "must_include": [".hero", "background:", "linear-gradient(", "border-radius:"]
    };
    return checkCssRule(value, spec.must_include);
}
