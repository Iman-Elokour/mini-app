class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("button", {
      onClick: add
    }, "Checkout"));
  }

}

add = () => {
  ReactDOM.render(React.createElement("div", null, React.createElement("label", null, "name"), React.createElement("input", null), React.createElement("label", null, "email"), React.createElement("input", null), React.createElement("label", null, "password"), React.createElement("input", null), React.createElement("button", {
    onClick: next
  }, "Next")), document.getElementById('app'));
};

next = () => {
  ReactDOM.render(React.createElement("div", null, React.createElement("h4", null, "Address"), React.createElement("label", null, "city"), React.createElement("input", null), React.createElement("label", null, "state"), React.createElement("input", null), React.createElement("label", null, "zip code"), React.createElement("input", null), React.createElement("label", null, "phone number"), React.createElement("input", null), React.createElement("button", {
    onClick: next2
  }, "Next"), " "), document.getElementById('app'));
};

next2 = () => {
  ReactDOM.render(React.createElement("div", null, React.createElement("h4", null, "Address"), React.createElement("label", null, "credit card number"), React.createElement("input", null), React.createElement("label", null, "expiry date"), React.createElement("input", null), React.createElement("label", null, "CVV"), React.createElement("input", null), React.createElement("label", null, "billing zip code"), React.createElement("input", null), React.createElement("button", null, "Submit"), " "), document.getElementById('app'));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYWRkIiwiUmVhY3RET00iLCJuZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHQyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQy9CQyxFQUFBQSxNQUFNLEdBQUc7QUFDTixXQUNHLGlDQUNHO0FBQVEsTUFBQSxPQUFPLEVBQUlDO0FBQW5CLGtCQURILENBREg7QUFNRjs7QUFSOEI7O0FBV2xDQSxHQUFHLEdBQUcsTUFBTTtBQUNWQyxFQUFBQSxRQUFRLENBQUNGLE1BQVQsQ0FBZ0IsaUNBQ2QsMENBRGMsRUFDSyxrQ0FETCxFQUVkLDJDQUZjLEVBRU0sa0NBRk4sRUFHZCw4Q0FIYyxFQUdTLGtDQUhULEVBSWQ7QUFBUSxJQUFBLE9BQU8sRUFBSUc7QUFBbkIsWUFKYyxDQUFoQixFQUtRQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FMUjtBQU1ELENBUEQ7O0FBU0FGLElBQUksR0FBRyxNQUFNO0FBQ1hELEVBQUFBLFFBQVEsQ0FBQ0YsTUFBVCxDQUFnQixpQ0FBSywwQ0FBTCxFQUNkLDBDQURjLEVBQ0ssa0NBREwsRUFFWiwyQ0FGWSxFQUVRLGtDQUZSLEVBR1osOENBSFksRUFHVyxrQ0FIWCxFQUlaLGtEQUpZLEVBSWUsa0NBSmYsRUFLWjtBQUFRLElBQUEsT0FBTyxFQUFJTTtBQUFuQixZQUxZLE1BQWhCLEVBS29ERixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FMcEQ7QUFPRCxDQVJEOztBQVVBQyxLQUFLLEdBQUcsTUFBTTtBQUNaSixFQUFBQSxRQUFRLENBQUNGLE1BQVQsQ0FBZ0IsaUNBQUssMENBQUwsRUFDZCx3REFEYyxFQUNtQixrQ0FEbkIsRUFFWixpREFGWSxFQUVjLGtDQUZkLEVBR1oseUNBSFksRUFHTSxrQ0FITixFQUlaLHNEQUpZLEVBSW1CLGtDQUpuQixFQUtaLDZDQUxZLE1BQWhCLEVBS29DSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FMcEM7QUFPRCxDQVJEOztBQVNBSCxRQUFRLENBQUNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkksUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2FkZH0+Q2hlY2tvdXQ8L2J1dHRvbj4gIFxuICAgICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICB9XG59XG5cbmFkZCA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKDxkaXY+XG4gICAgPGxhYmVsPm5hbWU8L2xhYmVsPjxpbnB1dCAvPlxuICAgIDxsYWJlbD5lbWFpbDwvbGFiZWw+PGlucHV0IC8+XG4gICAgPGxhYmVsPnBhc3N3b3JkPC9sYWJlbD48aW5wdXQgLz5cbiAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bmV4dH0gPk5leHQ8L2J1dHRvbj5cbiAgPC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xufVxuXG5uZXh0ID0gKCkgPT4ge1xuICBSZWFjdERPTS5yZW5kZXIoPGRpdj48aDQ+QWRkcmVzczwvaDQ+XG4gICAgPGxhYmVsPmNpdHk8L2xhYmVsPjxpbnB1dCAvPlxuICAgICAgPGxhYmVsPnN0YXRlPC9sYWJlbD48aW5wdXQgLz5cbiAgICAgIDxsYWJlbD56aXAgY29kZTwvbGFiZWw+PGlucHV0IC8+XG4gICAgICA8bGFiZWw+cGhvbmUgbnVtYmVyPC9sYWJlbD48aW5wdXQgLz5cbiAgICAgIDxidXR0b24gb25DbGljayA9IHtuZXh0Mn0+TmV4dDwvYnV0dG9uPiA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiAgXG59XG5cbm5leHQyID0gKCkgPT4ge1xuICBSZWFjdERPTS5yZW5kZXIoPGRpdj48aDQ+QWRkcmVzczwvaDQ+XG4gICAgPGxhYmVsPmNyZWRpdCBjYXJkIG51bWJlcjwvbGFiZWw+PGlucHV0IC8+XG4gICAgICA8bGFiZWw+ZXhwaXJ5IGRhdGU8L2xhYmVsPjxpbnB1dCAvPlxuICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+PGlucHV0IC8+XG4gICAgICA8bGFiZWw+YmlsbGluZyB6aXAgY29kZTwvbGFiZWw+PGlucHV0IC8+XG4gICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPiA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiAgXG59XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==