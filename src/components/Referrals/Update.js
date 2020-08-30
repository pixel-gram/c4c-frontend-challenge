import React, {useContext} from 'react'
import {useForm} from "react-hook-form";

import {Grid, InputAdornment, TextField} from '@material-ui/core';
import {AccountCircle,TranslateSharp, CakeTwoTone, LocalPhone, Email, Search} from '@material-ui/icons';

import {ReferralContext} from "../../context/ReferralContext";

const UpdateReferral=(props)=>{

    const { updateReferral} = useContext(ReferralContext)
    const {register, handleSubmit}  = useForm()

    const {referral} = props

    const onSubmit=(formData,event)=>{

        updateReferral(props.referral.id,formData)

    }


    return (

        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="id" ref={register} value={referral.id}/>

                <Grid container spacing={4}>

                        <Grid item xs={6}>
                            <TextField fullWidth  required id="name" label="Required" defaultValue={referral.data.first_name} name="first_name" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AccountCircle />
                                               </InputAdornment>
                                           ),}}  />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" defaultValue={referral.data.last_name} name="last_name" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AccountCircle />
                                               </InputAdornment>
                                           ),}} />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" defaultValue={referral.data.dob} name="dob" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <CakeTwoTone />
                                               </InputAdornment>
                                           ),}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" name="language" defaultValue={referral.data.language} inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <TranslateSharp />
                                               </InputAdornment>
                                           ),}}/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" defaultValue={referral.data.phone} name="phone" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <LocalPhone />
                                               </InputAdornment>
                                           ),}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth  required id="standard-required" label="Required" defaultValue={referral.data.email} name="email" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Email />
                                               </InputAdornment>
                                           ),}}/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth  required id="standard-required" label="Required" defaultValue={referral.data.address} name="address" inputRef={register}
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <Search />
                                               </InputAdornment>
                                           ),}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth   id="standard-required" placeholder="Notes" defaultValue={referral.data.notes} name="notes" inputRef={register} />
                        </Grid>


                    </Grid>


            </form>

        </>
    )


}

export default UpdateReferral