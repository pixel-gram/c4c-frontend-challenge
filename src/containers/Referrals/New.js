import React, {useContext,useState} from 'react'
import {useForm} from "react-hook-form";

import {Container,Grid,InputAdornment,TextField} from '@material-ui/core';
import {AccountCircle,TranslateSharp, CakeTwoTone, LocalPhone, Email, Search} from '@material-ui/icons';

import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import {ReferralContext} from "../../context/ReferralContext";


const NewReferral=()=>{

    const { referrals,addReferral} = useContext(ReferralContext)

    const {register, handleSubmit}  = useForm()
    const [address,setAddress] = useState()


    const onSubmit=  async (formData,event)=>{

        formData.address = address
        addReferral(formData)
        event.target.reset()
        setAddress("")

    }

    const handleChange = address => {
        setAddress(address)
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));

        setAddress(address)
    };


    return (

        <>
            <Container fixed style={{padding:'0px'}}>
            <Grid container style={{backgroundColor:'white',marginBottom:'10px'}}  >
                <Grid item xs={1} style={{backgroundColor:'#2695a5', color:'white', borderRadius:'5px'}}>
                    <h1>{referrals.length+1}</h1>

                </Grid>
                <Grid container item xs={10} justify="flex-start" style={{color: '#2695a5', marginLeft:'20px'}} spacing={0}>
                    <h1>New Referral</h1>

                </Grid>
            </Grid>
            </Container>

            <Container fixed style={{ backgroundColor: 'white'}} mxWidth="xs">


                <form onSubmit={handleSubmit(onSubmit)} id="hook-form">


                    <Grid container spacing={4}>



                        <Grid item xs={6}>
                            <TextField fullWidth  required id="name" label="Required" placeholder="First Name"  name="first_name"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AccountCircle />
                                               </InputAdornment>
                                           ),}}
                                        inputRef={register} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" placeholder="Last Name" name="last_name" inputRef={register}
                                       InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),}} />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" placeholder="Date of Birth" name="dob" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <CakeTwoTone />
                                               </InputAdornment>
                                           ),}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" placeholder="Language" name="language" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <TranslateSharp />
                                               </InputAdornment>
                                           ),}}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" placeholder="Phone" name="phone" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <LocalPhone />
                                               </InputAdornment>
                                           ),}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" placeholder="Email" name="email" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Email />
                                               </InputAdornment>
                                           ),}}
                            />
                        </Grid>


                        <Grid item xs={12}>

                            <PlacesAutocomplete
                                value={address}

                                onChange={handleChange}
                                onSelect={handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <TextField
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Search />
                                                    </InputAdornment>
                                                ),}}
                                            {...getInputProps({

                                                placeholder: 'Address',
                                                className: 'location-search-input MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart',
                                            })}
                                        />
                                        <br/>
                                        <br/>
                                        <div className="autocomplete-dropdown-container " style={{textAlign:'left'}}>
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active ? "autocomplete-selected" : "autocomplete-normal";

                                                // inline style for demonstration purpose
                                                 const style = suggestion.active ? { backgroundColor: "#DFEDF0" } : { backgroundColor: "#ffffff" };

                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >

                                                        <span >{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth   id="standard-required"  placeholder="Notes" name="notes" inputRef={register} />
                        </Grid>


                    </Grid>

                </form>
            </Container>




        </>
    )


}

export default NewReferral