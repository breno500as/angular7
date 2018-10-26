export function getPhoneMask(telefoneParameter) {
    const telefoneStr = telefoneParameter.replace(/^(\d{2})(\d)/g, '($1) $2');
    return telefoneStr.replace(/(\d)(\d{4})$/, '$1-$2');
}
