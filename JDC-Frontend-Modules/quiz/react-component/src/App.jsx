import ButtonPrimary from "./components/ui/atoms/ButtonPrimary";
import ButtonSecondary from "./components/ui/atoms/ButtonSecondary";
import ButtonSecondaryIcon from "./components/ui/molecules/ButtonSecondaryIcon";
import Card from "./components/ui/organisms/card";

function App() {
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold"> Button Component </h4>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-semibold">Button Primary</h5>
              <div>
                <h6 className="text-sm font-semibold mb-2"> Normal State: </h6>
                <ButtonPrimary rimary className={""}>
                  BUTTON
                </ButtonPrimary>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-2"> Disable State: </h6>
                <ButtonPrimary disabled={true} className={""}>
                  BUTTON
                </ButtonPrimary>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-semibold">Button Secondary</h5>
              <div>
                <h6 className="text-sm font-semibold mb-2"> Normal State: </h6>
                <ButtonSecondary className={""}> BUTTON </ButtonSecondary>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-2"> Disable State: </h6>
                <ButtonSecondary disabled={true} className={""}>
                  BUTTON
                </ButtonSecondary>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-semibold">Button Secondary Icon</h5>
              <div>
                <h6 className="text-sm font-semibold mb-2">Normal State: </h6>
                <ButtonSecondaryIcon icon={"bell"}>BUTTON</ButtonSecondaryIcon>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-2">Disable State: </h6>
                <ButtonSecondaryIcon disabled={true} icon={"bell"}>
                  BUTTON
                </ButtonSecondaryIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <h4 className="text-xl font-semibold"> Button Component </h4>
      <div className="flex gap-10">
          <Card>
            <h6 className="font-semibold"> This is Heading </h6>
            <p>this is lorem ipsum with a fake dajl dadhe </p>
          </Card>
          <Card disabled={true}>
            <h6 className="font-semibold"> This is Heading </h6>
            <p>this is lorem ipsum with a fake dajl dadhe </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
