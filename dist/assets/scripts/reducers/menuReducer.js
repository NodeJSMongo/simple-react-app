//reducers are just functions that return an array of objects
//step: 1, write a reducer
//step: 2, wire it up with the application via index.js(combinereducer)
//step: 3, combine reducer gives a key to the reducer a global application state.
//step: 4, created a functional component and connected with the redux store
export default function(){
  return [
    {title: 'Git', details:'Version Control System'},
    {title: 'Webpack', details:'Project file bundler'},
    {title: 'Gulp', details:''},
    {title: 'CSS', details:'Cascading StyleSheet'},
    {title: 'HTML', details:'HyperText Markup Language'},
    {title: 'React', details:'javascript FrameWork'},
    {title: 'Redux' ,details:''},
    {title: 'Nodejs' ,details:''},
    {title: 'MongoDB' ,details:''},
    {title: 'SVG' ,details:''},
    {title: 'React-Native', details:''},
    {title: 'Wordpress' ,details:''},
    {title: 'BootStarp' ,details:''},
    {title: 'jQuery' , details:''}
  ];
}
