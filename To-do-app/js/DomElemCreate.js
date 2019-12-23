export default function DomElemCreate(tag, props, ...children) {
    const elem = document.createElement(tag);

    Object.keys(props).forEach(key => elem[key] = props[key]);

    if (children.length > 0) {
        children.forEach(child => {
            if(typeof child === 'string') {
                child = document.createTextNode(child);
            }

            elem.appendChild(child);
        });
    }

    return elem;
}