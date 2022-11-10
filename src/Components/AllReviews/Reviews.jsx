import avatar from "../../asset/avatar/avatar.png";

const Reviews = ({ review }) => {
  // console.log(review);
  const { email, text, userName, photoURL } = review;

  return (
    <div>
      <tr>
        <th>
          <label></label>
        </th>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {review?.photoURL ? (
                  <img width="60" height="60" src={photoURL} alt="" />
                ) : (
                  <img width="60" height="60" src={avatar} alt="" />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">
                {review?.userName ? userName : <p>no name</p>}
              </div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>{text}</td>

        <th></th>
      </tr>
    </div>
  );
};

export default Reviews;
