const Switch = props => {
    const { test, children } = props
    // filter out only children with a matching prop
    return children.find(child => {
        return child.props.value === test
    })
}

export default Switch

// const Switch = props => {
//     const { test, children } = props;
//     return children.find(child => {
//         return child.props.value === test;
//     });
// };
// const Case = ({ children, value }) => {
//     return children;
// };