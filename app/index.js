const USER_DATA = {
  name: 'Ben Swennen',
  username: 'BenSwennen',
  image: 'https://avatars1.githubusercontent.com/u/8612041',
};

const React = require('react');
const ReactDOM = require('react-dom');

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl() {
    window.location.replace(this.props.href);
  }

  render() {
    return (
      <span
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={this.changeUrl}
      >
        {this.props.children}
      </span>
    );
  }
}
Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.node,
};

const ProfilePic = (props) => (
  <img src={props.imageUrl} style={{ height: 100, width: 100 }} alt="" />
);
ProfilePic.propTypes = { imageUrl: React.PropTypes.string };

const ProfileLink = (props) => (
  <div>
    <Link href={`https://www.github.com/${props.username}`}>
      {props.username}
    </Link>
  </div>
);
ProfileLink.propTypes = { username: React.PropTypes.string };

const ProfileName = (props) => (
  <div>{props.name}</div>
);
ProfileName.propTypes = { name: React.PropTypes.string };


const Avatar = (props) => (
  <div>
    <ProfilePic imageUrl={props.user.image} />
    <ProfileName name={props.user.name} />
    <ProfileLink username={props.user.username} />
  </div>
);
Avatar.propTypes = {
  user: React.PropTypes.node,
};


ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
