import { useState } from "react";
import Alert from "./components/common/Alert";
import Button from "./components/common/Button";
import Like from "./components/common/Like";
import ExpandableText from "./components/common/ExpandableText";
import Form from "./components/common/Form";
import Request from "./components/Request";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="container">
      <div className="row col-12 p-5">
        <h1 className="text-center">Request</h1>
        <hr />
        <Request />
      </div>

      <div className="row col-12 p-5">
        <h1 className="text-center">Form</h1>
        <hr />
        <Form></Form>
      </div>

      <div className="row col-12 p-5">
        <h1 className="text-center">Alert</h1>

        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        )}

        <Button colour="dark" onClick={() => setAlertVisible(true)}>
          Click Me!
        </Button>
        <hr />
      </div>

      <div className="row col-12 p-5 text-center">
        <h1>Like</h1>
        <hr />
        <Like colour="green" onClick={() => console.log("Like Clicked")}></Like>
      </div>

      <div className="row col-12 p-5 text-center">
        <h1>Expandable Text</h1>
        <hr />
        <ExpandableText charCount={120}>
          Starboardflogging gangway Cat o'nine tails measured fer yer chains
          reef sails lugsail log come about brig. Sheet reef sails galleon swing
          the lead deadlights bowsprit Nelsons folly port starboard Barbary
          Coast. Aft schooner killick Blimey square-rigged topsail Sail ho
          Pirate Round gibbet measured fer yer chains. Lee bowsprit deadlights
          black jack lateen sail Sail ho scuttle take a caulk me gibbet.
          Flogging carouser nipper jolly boat lugger trysail sutler parley
          execution dock schooner. Reef quarter ye weigh anchor tack jack gabion
          tackle Pirate Round loot. Nelsons folly cable American Main coxswain
          bring a spring upon her cable gangway Letter of Marque deadlights brig
          clap of thunder. Transom Pieces of Eight pinnace overhaul Admiral of
          the Black spike bounty topgallant Shiver me timbers lugger. Splice the
          main brace gaff Brethren of the Coast weigh anchor ahoy Blimey Nelsons
          folly Sail ho main sheet draft.
        </ExpandableText>
      </div>
    </div>
  );
}

export default App;
