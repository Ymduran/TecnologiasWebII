import "../../components/styles/Profile.css";
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
};

export default function Profile() {
  return (
    <>
      <h1 styles={styles.h1} > {user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={styles.img}
      />
    </>
  );
}

const styles = {
  img: {
    width: user.imageSize,
    height: user.imageSize,
    border: "solid 15px",
    borderColor: 'rgb(116,113,113)',
  },
  h1: {
    color: 'rgb(4,2,96)',
  },
}