import React, { useContext } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import InputField from "./InputField";
import FormContext from "../../contexts/Form";

function AddressInputField(props) {
  const { value } = props;
  const context = useContext(FormContext.Context);

  return (
    <PlacesAutocomplete
      onChange={placeValue => {
        context.setStateValue("address", placeValue);
      }}
      value={value || context.address}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        return (
          <>
            <InputField label="Address" getInputProps={getInputProps} width={12} required={true} />
            <div className="form-address-input-field-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active ? "form-address-input-field-selected" : "form-address-input-field-normal";
                const style = suggestion.active ? { backgroundColor: "#DFEDF0" } : { backgroundColor: "#ffffff" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </>
        );
      }}
    </PlacesAutocomplete>
  );
}

export default AddressInputField;
