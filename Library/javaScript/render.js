/**
 * @title 实现一个简单的模板渲染
 */

const template = `
    Hello {{ name }}, you age is {{ age + 6 }}.
    I like {{ girlfirend.name }}, she age is {{ girlfirend.age }}.
`;

const data = {
    name: 'daoerche',
    age: 18,
    girlfirend: {
        name: 'jian',
        age: 18
    }
}

const render1 = (template, data) => {
    return template.replace(/\{\{(.*?)\}\}/g, (match, p1, offset, string) => {
        return data[p1.trim()];
    })
}

console.log('render1:', render1(template, data));

const createTplRender = (template) => {
    const reg = /\{\{(.*?)\}\}/g;
    let code = '';
    code += `let output = [];`;
    code += `with(this) {`;

    let start = 0;
    let res;
    while (res = reg.exec(template)) {
        const [ match, p1 ] = res;
        let end = res.index;
        let len = match.length;
        let userCode = p1.trim();

        code += `output.push('${template.slice(start, end)}');`;
        code += `output.push(${userCode});`;
        start = end + len;
    }
    code += `output.push('${template.slice(start)}');`;

    code += `}`;
    code += `return output.join('');`;

    return data => {
        return new Function(code.replace(/[\n\t\r]/g, '')).call(data);
    }
};

const render2 = createTplRender(template);
console.log('render2:', render2(data));
