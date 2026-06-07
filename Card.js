import "./styles.css";
export default function List(props) {
  return (
    <div class="listContanier">
      <div class="listParent">
        <div class="picture">
          {" "}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/054/007/267/small/a-little-girl-smiles-while-wearing-a-yellow-shirt-photo.jpg"
            width="80px"
            height="80px"
            alt="photo"
          />{" "}
        </div>
        <div class="text1">
          <div> {props.name}</div>
          <div> @Maribek</div>
        </div>
        <div class="text1">
          <div> {props.date}</div>
          <div> Subscribe Date</div>
        </div>
        <div class="text1">
          <div> None</div>
          <div> Renew Date</div>
        </div>
        <div class="text1">
          <div> {props.monthly}</div>
          <div> Monthly Cc</div>
        </div>
      </div>
    </div>
  );
}
