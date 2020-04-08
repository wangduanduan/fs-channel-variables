<!-- TOC -->

- [1 absolute_codec_string](#1-absolutecodecstring)
- [2 accountcode](#2-accountcode)
- [3 acl_token](#3-acltoken)
- [4 alert_info](#4-alertinfo)
- [5 answer_epoch](#5-answerepoch)
- [6 answer_stamp](#6-answerstamp)
- [7 answer_uepoch](#7-answeruepoch)
- [8 answermsec](#8-answermsec)
- [9 answersec](#9-answersec)
- [10 answerusec](#10-answerusec)
- [11 api_after_bridge](#11-apiafterbridge)
- [12 api_hangup_hook](#12-apihanguphook)
- [13 api_on_answer](#13-apionanswer)
- [14 api_on_media](#14-apionmedia)
- [15 api_on_originate](#15-apionoriginate)
- [16 api_on_post_originate](#16-apionpostoriginate)
- [17 api_on_pre_answer](#17-apionpreanswer)
- [18 api_on_pre_originate](#18-apionpreoriginate)
- [19 api_on_ring](#19-apionring)
- [20 api_on_sip_extra_headers](#20-apionsipextraheaders)
- [21 api_on_startup](#21-apionstartup)
- [22 api_on_tone_detect](#22-apiontonedetect)
- [23 asr_intercept_dtmf](#23-asrinterceptdtmf)
- [24 auto_answer_destination](#24-autoanswerdestination)
- [25 auto_hunt](#25-autohunt)
- [26 base_dir](#26-basedir)
- [27 billmsec](#27-billmsec)
- [28 billsec](#28-billsec)
- [29 billusec](#29-billusec)
- [30 bind_digit_digit_timeout](#30-binddigitdigittimeout)
- [31 bind_digit_input_timeout](#31-binddigitinputtimeout)
- [32 bind_meta_key](#32-bindmetakey)
- [33 bridge_answer_timeout](#33-bridgeanswertimeout)
- [34 bridge_channel](#34-bridgechannel)
- [35 bridge_early_media](#35-bridgeearlymedia)
- [36 bridge_epoch](#36-bridgeepoch)
- [37 bridge_filter_dtmf](#37-bridgefilterdtmf)
- [38 bridge_generate_comfort_noise](#38-bridgegeneratecomfortnoise)
- [39 bridge_hangup_cause](#39-bridgehangupcause)
- [40 bridge_pre_execute_aleg_app](#40-bridgepreexecutealegapp)
- [41 bridge_pre_execute_aleg_data](#41-bridgepreexecutealegdata)
- [42 bridge_pre_execute_bleg_app](#42-bridgepreexecuteblegapp)
- [43 bridge_pre_execute_bleg_data](#43-bridgepreexecuteblegdata)
- [44 bridge_stamp](#44-bridgestamp)
- [45 bridge_terminate_key](#45-bridgeterminatekey)
- [46 bridge_to](#46-bridgeto)
- [47 bridge_uepoch](#47-bridgeuepoch)
- [48 bridge_uuid](#48-bridgeuuid)
- [49 bypass_keep_codec](#49-bypasskeepcodec)
- [50 bypass_media](#50-bypassmedia)
- [51 bypass_media_after_bridge](#51-bypassmediaafterbridge)
- [52 cache_dir](#52-cachedir)
- [53 cache_speech_handles](#53-cachespeechhandles)
- [54 call_clientcode](#54-callclientcode)
- [55 call_timeout](#55-calltimeout)
- [56 callee_id_name](#56-calleeidname)
- [57 callee_id_number](#57-calleeidnumber)
- [58 caller_id_name](#58-calleridname)
- [59 caller_id_number](#59-calleridnumber)
- [60 campon](#60-campon)
- [61 campon_announce_sound](#61-camponannouncesound)
- [62 campon_fallback_context](#62-camponfallbackcontext)
- [63 campon_fallback_dialplan](#63-camponfallbackdialplan)
- [64 campon_fallback_exten](#64-camponfallbackexten)
- [65 campon_hold_music](#65-camponholdmusic)
- [66 campon_retries](#66-camponretries)
- [67 campon_sleep](#67-camponsleep)
- [68 campon_stop_key](#68-camponstopkey)
- [69 campon_timeout](#69-campontimeout)
- [70 cdr_csv_base](#70-cdrcsvbase)
- [71 certs_dir](#71-certsdir)
- [72 CHANNEL](#72-channel)
- [73 channel_name](#73-channelname)
- [74 codec_string](#74-codecstring)
- [75 conf_dir](#75-confdir)
- [76 conference_auto_outcall_announce](#76-conferenceautooutcallannounce)
- [77 conference_auto_outcall_caller_id_name](#77-conferenceautooutcallcalleridname)
- [78 conference_auto_outcall_caller_id_number](#78-conferenceautooutcallcalleridnumber)
- [79 conference_auto_outcall_flags](#79-conferenceautooutcallflags)
- [80 conference_auto_outcall_maxwait](#80-conferenceautooutcallmaxwait)
- [81 conference_auto_outcall_prefix](#81-conferenceautooutcallprefix)
- [82 conference_auto_outcall_profile](#82-conferenceautooutcallprofile)
- [83 conference_auto_outcall_timeout](#83-conferenceautooutcalltimeout)
- [84 conference_controls](#84-conferencecontrols)
- [85 conference_enforce_security](#85-conferenceenforcesecurity)
- [86 conference_enter_sound](#86-conferenceentersound)
- [87 conference_exit_sound](#87-conferenceexitsound)
- [88 conference_last_matching_digits](#88-conferencelastmatchingdigits)
- [89 conference_member_id](#89-conferencememberid)
- [90 conference_moderator](#90-conferencemoderator)
- [91 conference_recording](#91-conferencerecording)
- [92 conference_uuid](#92-conferenceuuid)
- [93 continue_on_fail](#93-continueonfail)
- [94 copy_xml_cdr](#94-copyxmlcdr)
- [95 core_uuid](#95-coreuuid)
- [96 created_time](#96-createdtime)
- [97 current_application](#97-currentapplication)
- [98 current_application_data](#98-currentapplicationdata)
- [99 current_application_response](#99-currentapplicationresponse)
- [100 current_loop](#100-currentloop)
- [101 data](#101-data)
- [102 db_dir](#102-dbdir)
- [103 default_language](#103-defaultlanguage)
- [104 deny_refer_requests](#104-denyreferrequests)
- [105 destination_number](#105-destinationnumber)
- [106 detect_speech_result](#106-detectspeechresult)
- [107 dialed_domain](#107-dialeddomain)
- [108 dialed_group](#108-dialedgroup)
- [109 dialed_user](#109-dialeduser)
- [110 digits_dialed](#110-digitsdialed)
- [111 direction](#111-direction)
- [112 disable_app_log](#112-disableapplog)
- [113 disable_q850_reason](#113-disableq850reason)
- [114 disable_radius_start](#114-disableradiusstart)
- [115 disable_radius_stop](#115-disableradiusstop)
- [116 disable_rtp_auto_adjust](#116-disablertpautoadjust)
- [117 DISPLACE_HANGUP_ON_ERROR](#117-displacehanguponerror)
- [118 dl_cid_msg](#118-dlcidmsg)
- [119 dl_from_host](#119-dlfromhost)
- [120 dl_from_user](#120-dlfromuser)
- [121 dl_host](#121-dlhost)
- [122 dl_user](#122-dluser)
- [123 domain_name](#123-domainname)
- [124 drop_dtmf](#124-dropdtmf)
- [125 drop_dtmf_masking_digits](#125-dropdtmfmaskingdigits)
- [126 drop_dtmf_masking_file](#126-dropdtmfmaskingfile)
- [127 dtmf_type](#127-dtmftype)
- [128 dtmf_verbose](#128-dtmfverbose)
- [129 duration](#129-duration)
- [130 easy_acctcode](#130-easyacctcode)
- [131 easy_destnum](#131-easydestnum)
- [132 easy_dialstring](#132-easydialstring)
- [133 easy_group](#133-easygroup)
- [134 easy_limit](#134-easylimit)
- [135 eavesdrop_annnounce_macro](#135-eavesdropannnouncemacro)
- [136 eavesdrop_announce_id](#136-eavesdropannounceid)
- [137 eavesdrop_group](#137-eavesdropgroup)
- [138 eavesdrop_indicate_failed](#138-eavesdropindicatefailed)
- [139 eavesdrop_indicate_idle](#139-eavesdropindicateidle)
- [140 eavesdrop_indicate_new](#140-eavesdropindicatenew)
- [141 eavesdrop_require_group](#141-eavesdroprequiregroup)
- [142 effective_ani](#142-effectiveani)
- [143 effective_aniii](#143-effectiveaniii)
- [144 effective_caller_id_name](#144-effectivecalleridname)
- [145 effective_caller_id_number](#145-effectivecalleridnumber)
- [146 effective_sip_cid_in_1xx](#146-effectivesipcidin1xx)
- [147 enable_file_write_buffering](#147-enablefilewritebuffering)
- [148 enable_heartbeat_events](#148-enableheartbeatevents)
- [149 end_epoch](#149-endepoch)
- [150 end_stamp](#150-endstamp)
- [151 end_uepoch](#151-enduepoch)
- [152 endpoint_disposition](#152-endpointdisposition)
- [153 ep_codec_prefer_sdp](#153-epcodecprefersdp)
- [154 ep_codec_string](#154-epcodecstring)
- [155 exec_after_bridge_app](#155-execafterbridgeapp)
- [156 exec_after_bridge_arg](#156-execafterbridgearg)
- [157 execute_on_answer](#157-executeonanswer)
- [158 execute_on_fax_detect](#158-executeonfaxdetect)
- [159 execute_on_fax_failure](#159-executeonfaxfailure)
- [160 execute_on_fax_result](#160-executeonfaxresult)
- [161 execute_on_fax_success](#161-executeonfaxsuccess)
- [162 execute_on_media](#162-executeonmedia)
- [163 execute_on_media_timeout](#163-executeonmediatimeout)
- [164 execute_on_originate](#164-executeonoriginate)
- [165 execute_on_pre_answer](#165-executeonpreanswer)
- [166 execute_on_ring](#166-executeonring)
- [167 execute_on_sip_extra_headers](#167-executeonsipextraheaders)
- [168 execute_on_sip_reinvite](#168-executeonsipreinvite)
- [169 export_vars](#169-exportvars)
- [170 EXTEN](#170-exten)
- [171 fail_on_single_reject](#171-failonsinglereject)
- [172 failed_xml_cdr_prefix](#172-failedxmlcdrprefix)
- [173 failure_causes](#173-failurecauses)
- [174 fax_bad_rows](#174-faxbadrows)
- [175 fax_disable_v17](#175-faxdisablev17)
- [176 fax_document_total_pages](#176-faxdocumenttotalpages)
- [177 fax_document_transferred_pages](#177-faxdocumenttransferredpages)
- [178 fax_ecm_requested](#178-faxecmrequested)
- [179 fax_ecm_used](#179-faxecmused)
- [180 fax_end_page](#180-faxendpage)
- [181 fax_filename](#181-faxfilename)
- [182 fax_force_caller](#182-faxforcecaller)
- [183 fax_header](#183-faxheader)
- [184 fax_ident](#184-faxident)
- [185 fax_image_resolution](#185-faximageresolution)
- [186 fax_image_size](#186-faximagesize)
- [187 fax_local_station_id](#187-faxlocalstationid)
- [188 fax_prefix](#188-faxprefix)
- [189 fax_remote_station_id](#189-faxremotestationid)
- [190 fax_result_code](#190-faxresultcode)
- [191 fax_result_text](#191-faxresulttext)
- [192 fax_start_page](#192-faxstartpage)
- [193 fax_success](#193-faxsuccess)
- [194 fax_transfer_rate](#194-faxtransferrate)
- [195 fax_use_ecm](#195-faxuseecm)
- [196 fax_v17_disabled](#196-faxv17disabled)
- [197 fax_verbose](#197-faxverbose)
- [198 fifo_announce](#198-fifoannounce)
- [199 fifo_bridged](#199-fifobridged)
- [200 fifo_caller_consumer_import](#200-fifocallerconsumerimport)
- [201 fifo_caller_exit_key](#201-fifocallerexitkey)
- [202 fifo_chime_freq](#202-fifochimefreq)
- [203 fifo_chime_list](#203-fifochimelist)
- [204 fifo_consumer_caller_import](#204-fifoconsumercallerimport)
- [205 fifo_consumer_exit_key](#205-fifoconsumerexitkey)
- [206 fifo_consumer_id](#206-fifoconsumerid)
- [207 fifo_consumer_wrapup_key](#207-fifoconsumerwrapupkey)
- [208 fifo_consumer_wrapup_sound](#208-fifoconsumerwrapupsound)
- [209 fifo_consumer_wrapup_time](#209-fifoconsumerwrapuptime)
- [210 fifo_hold_music](#210-fifoholdmusic)
- [211 fifo_manual_bridge](#211-fifomanualbridge)
- [212 fifo_member_wait](#212-fifomemberwait)
- [213 fifo_music](#213-fifomusic)
- [214 fifo_orbit_announce](#214-fifoorbitannounce)
- [215 fifo_orbit_context](#215-fifoorbitcontext)
- [216 fifo_orbit_exten](#216-fifoorbitexten)
- [217 fifo_outbound_announce](#217-fifooutboundannounce)
- [218 fifo_outbound_uuid](#218-fifooutbounduuid)
- [219 fifo_override_announce](#219-fifooverrideannounce)
- [220 fifo_pop_order](#220-fifopoporder)
- [221 fifo_position](#221-fifoposition)
- [222 fifo_priority](#222-fifopriority)
- [223 fifo_record_template](#223-fiforecordtemplate)
- [224 fifo_role](#224-fiforole)
- [225 fifo_serviced_by](#225-fifoservicedby)
- [226 fifo_serviced_uuid](#226-fifoserviceduuid)
- [227 fifo_status](#227-fifostatus)
- [228 fifo_strategy](#228-fifostrategy)
- [229 fifo_target](#229-fifotarget)
- [230 fifo_timestamp](#230-fifotimestamp)
- [231 fire_asr_events](#231-fireasrevents)
- [232 flow_billmsec](#232-flowbillmsec)
- [233 flow_billsec](#233-flowbillsec)
- [234 flow_billusec](#234-flowbillusec)
- [235 force_transfer_context](#235-forcetransfercontext)
- [236 force_transfer_dialplan](#236-forcetransferdialplan)
- [237 funny_stun](#237-funnystun)
- [238 grammar_dir](#238-grammardir)
- [239 group_confirm_cancel_timeout](#239-groupconfirmcanceltimeout)
- [240 group_confirm_file](#240-groupconfirmfile)
- [241 group_confirm_key](#241-groupconfirmkey)
- [242 group_context](#242-groupcontext)
- [243 hangup_after_bridge](#243-hangupafterbridge)
- [244 hangup_after_conference](#244-hangupafterconference)
- [245 hangup_cause](#245-hangupcause)
- [246 hangup_cause_q850](#246-hangupcauseq850)
- [247 has_t38](#247-hast38)
- [248 hold_hangup_xfer_exten](#248-holdhangupxferexten)
- [249 hold_music](#249-holdmusic)
- [250 holding_uuid](#250-holdinguuid)
- [251 hostname](#251-hostname)
- [252 htdocs_dir](#252-htdocsdir)
- [253 id](#253-id)
- [254 ignore_display_updates](#254-ignoredisplayupdates)
- [255 ignore_early_media](#255-ignoreearlymedia)
- [256 import](#256-import)
- [257 inbound_dialplan](#257-inbounddialplan)
- [258 inherit_codec](#258-inheritcodec)
- [259 initial_callee_id_name](#259-initialcalleeidname)
- [260 instant_ringback](#260-instantringback)
- [261 intercept_unanswered_only](#261-interceptunansweredonly)
- [262 intercept_unbridged_only](#262-interceptunbridgedonly)
- [263 ip_invite_params](#263-ipinviteparams)
- [264 is_loopback](#264-isloopback)
- [265 is_outbound](#265-isoutbound)
- [266 ivr_menu_status](#266-ivrmenustatus)
- [267 ivr_menu_terminator](#267-ivrmenuterminator)
- [268 jitterbuffer_msec](#268-jitterbuffermsec)
- [269 language](#269-language)
- [270 last_app](#270-lastapp)
- [271 last_arg](#271-lastarg)
- [272 last_bridge_hangup_cause](#272-lastbridgehangupcause)
- [273 last_bridge_proto_specific_hangup_cause](#273-lastbridgeprotospecifichangupcause)
- [274 last_bridge_to](#274-lastbridgeto)
- [275 last_dtmf_duration](#275-lastdtmfduration)
- [276 last_file_position](#276-lastfileposition)
- [277 last_matching_digits](#277-lastmatchingdigits)
- [278 last_transferred_conference](#278-lasttransferredconference)
- [279 lcr_auto_route](#279-lcrautoroute)
- [280 lcr_route_count](#280-lcrroutecount)
- [281 left_hanging_extension](#281-lefthangingextension)
- [282 leg_delay_start](#282-legdelaystart)
- [283 leg_progress_timeout](#283-legprogresstimeout)
- [284 leg_timeout](#284-legtimeout)
- [285 limit_id](#285-limitid)
- [286 limit_ignore_transfer](#286-limitignoretransfer)
- [287 limit_max](#287-limitmax)
- [288 limit_rate](#288-limitrate)
- [289 limit_realm](#289-limitrealm)
- [290 limit_usage](#290-limitusage)
- [291 local_ip_v4](#291-localipv4)
- [292 local_ip_v6](#292-localipv6)
- [293 local_mask_v4](#293-localmaskv4)
- [294 local_media_ip](#294-localmediaip)
- [295 local_media_port](#295-localmediaport)
- [296 local_video_ip](#296-localvideoip)
- [297 local_video_port](#297-localvideoport)
- [298 log_dir](#298-logdir)
- [299 loopback_bowout_on_execute](#299-loopbackbowoutonexecute)
- [300 loopback_export](#300-loopbackexport)
- [301 loopback_leg](#301-loopbackleg)
- [302 max_forwards](#302-maxforwards)
- [303 max_session_transfers](#303-maxsessiontransfers)
- [304 mduration](#304-mduration)
- [305 media_bug_answer_req](#305-mediabuganswerreq)
- [306 media_mix_inbound_outbound_codecs](#306-mediamixinboundoutboundcodecs)
- [307 media_webrtc](#307-mediawebrtc)
- [308 memory_debug](#308-memorydebug)
- [309 min_dup_digit_spacing_ms](#309-mindupdigitspacingms)
- [310 mod_dir](#310-moddir)
- [311 monitor_early_media_fail](#311-monitorearlymediafail)
- [312 monitor_early_media_ring](#312-monitorearlymediaring)
- [313 monitor_early_media_ring_total](#313-monitorearlymediaringtotal)
- [314 monitor_fail_dispo](#314-monitorfaildispo)
- [315 monitor_ring_dispo](#315-monitorringdispo)
- [316 myid](#316-myid)
- [317 nat_private_addr](#317-natprivateaddr)
- [318 nat_public_addr](#318-natpublicaddr)
- [319 nat_type](#319-nattype)
- [320 NDLB_support_asterisk_missing_srtp_auth](#320-ndlbsupportasteriskmissingsrtpauth)
- [321 new_name](#321-newname)
- [322 no_throttle_limits](#322-nothrottlelimits)
- [323 nonexistantvar](#323-nonexistantvar)
- [324 original_caller_id_name](#324-originalcalleridname)
- [325 original_caller_id_number](#325-originalcalleridnumber)
- [326 original_destination_number](#326-originaldestinationnumber)
- [327 originate_continue_on_timeout](#327-originatecontinueontimeout)
- [328 originate_delay_start](#328-originatedelaystart)
- [329 originate_disposition](#329-originatedisposition)
- [330 originate_retries](#330-originateretries)
- [331 originate_retry_sleep_ms](#331-originateretrysleepms)
- [332 originate_timeout](#332-originatetimeout)
- [333 originating_leg_uuid](#333-originatingleguuid)
- [334 origination_callee_id_name](#334-originationcalleeidname)
- [335 origination_callee_id_number](#335-originationcalleeidnumber)
- [336 origination_caller_id_name](#336-originationcalleridname)
- [337 origination_caller_id_number](#337-originationcalleridnumber)
- [338 origination_cancel_key](#338-originationcancelkey)
- [339 origination_channel_name](#339-originationchannelname)
- [340 origination_nested_vars](#340-originationnestedvars)
- [341 origination_privacy](#341-originationprivacy)
- [342 origination_timeout](#342-originationtimeout)
- [343 origination_uuid](#343-originationuuid)
- [344 originator](#344-originator)
- [345 originator_codec](#345-originatorcodec)
- [346 originator_video_codec](#346-originatorvideocodec)
- [347 other_loopback_leg_uuid](#347-otherloopbackleguuid)
- [348 outbound_redirect_fatal](#348-outboundredirectfatal)
- [349 pa_hold_file](#349-paholdfile)
- [350 pa_ring_file](#350-paringfile)
- [351 park_after_bridge](#351-parkafterbridge)
- [352 park_timeout](#352-parktimeout)
- [353 pass_rfc2833](#353-passrfc2833)
- [354 passthru_ptime_mismatch](#354-passthruptimemismatch)
- [355 playback_delimiter](#355-playbackdelimiter)
- [356 playback_last_offset_pos](#356-playbacklastoffsetpos)
- [357 playback_ms](#357-playbackms)
- [358 playback_samples](#358-playbacksamples)
- [359 playback_sleep_val](#359-playbacksleepval)
- [360 playback_terminator_used](#360-playbackterminatorused)
- [361 playback_terminators](#361-playbackterminators)
- [362 playback_timeout_sec](#362-playbacktimeoutsec)
- [363 pound_replace](#363-poundreplace)
- [364 presence_data_cols](#364-presencedatacols)
- [365 presence_id](#365-presenceid)
- [366 process_cdr](#366-processcdr)
- [367 profile_created_time](#367-profilecreatedtime)
- [368 profile_start_epoch](#368-profilestartepoch)
- [369 profile_start_stamp](#369-profilestartstamp)
- [370 profile_start_uepoch](#370-profilestartuepoch)
- [371 progress_epoch](#371-progressepoch)
- [372 progress_media_epoch](#372-progressmediaepoch)
- [373 progress_media_stamp](#373-progressmediastamp)
- [374 progress_media_uepoch](#374-progressmediauepoch)
- [375 progress_mediamsec](#375-progressmediamsec)
- [376 progress_mediasec](#376-progressmediasec)
- [377 progress_mediausec](#377-progressmediausec)
- [378 progress_stamp](#378-progressstamp)
- [379 progress_time](#379-progresstime)
- [380 progress_timeout](#380-progresstimeout)
- [381 progress_uepoch](#381-progressuepoch)
- [382 progressmsec](#382-progressmsec)
- [383 progresssec](#383-progresssec)
- [384 progressusec](#384-progressusec)
- [385 proto_specific_hangup_cause](#385-protospecifichangupcause)
- [386 proxy_media](#386-proxymedia)
- [387 rdnis](#387-rdnis)
- [388 read_codec](#388-readcodec)
- [389 read_rate](#389-readrate)
- [390 read_result](#390-readresult)
- [391 read_terminator_used](#391-readterminatorused)
- [392 RECORD_APPEND](#392-recordappend)
- [393 RECORD_ARTIST](#393-recordartist)
- [394 RECORD_BRIDGE_REQ](#394-recordbridgereq)
- [395 RECORD_COMMENT](#395-recordcomment)
- [396 RECORD_COPYRIGHT](#396-recordcopyright)
- [397 RECORD_DATE](#397-recorddate)
- [398 RECORD_DISCARDED](#398-recorddiscarded)
- [399 record_fill_cng](#399-recordfillcng)
- [400 RECORD_HANGUP_ON_ERROR](#400-recordhanguponerror)
- [401 RECORD_MIN_SEC](#401-recordminsec)
- [402 record_ms](#402-recordms)
- [403 record_post_process_exec_api](#403-recordpostprocessexecapi)
- [404 record_post_process_exec_app](#404-recordpostprocessexecapp)
- [405 RECORD_READ_ONLY](#405-recordreadonly)
- [406 record_restart_limit_on_dtmf](#406-recordrestartlimitondtmf)
- [407 record_sample_rate](#407-recordsamplerate)
- [408 RECORD_SOFTWARE](#408-recordsoftware)
- [409 RECORD_STEREO](#409-recordstereo)
- [410 RECORD_STEREO_SWAP](#410-recordstereoswap)
- [411 RECORD_TITLE](#411-recordtitle)
- [412 record_waste_resources](#412-recordwasteresources)
- [413 RECORD_WRITE_ONLY](#413-recordwriteonly)
- [414 recording_follow_transfer](#414-recordingfollowtransfer)
- [415 recordings_dir](#415-recordingsdir)
- [416 recovery_profile_name](#416-recoveryprofilename)
- [417 remote_media_ip](#417-remotemediaip)
- [418 remote_media_port](#418-remotemediaport)
- [419 remote_video_ip](#419-remotevideoip)
- [420 remote_video_port](#420-remotevideoport)
- [421 ringback](#421-ringback)
- [422 rss_alt_config](#422-rssaltconfig)
- [423 rtcp_audio_interval_msec](#423-rtcpaudiointervalmsec)
- [424 rtcp_mux](#424-rtcpmux)
- [425 rtcp_octet_count](#425-rtcpoctetcount)
- [426 rtcp_packet_count](#426-rtcppacketcount)
- [427 rtp_adv_audio_ip](#427-rtpadvaudioip)
- [428 rtp_append_audio_sdp](#428-rtpappendaudiosdp)
- [429 rtp_assume_rtcp](#429-rtpassumertcp)
- [430 rtp_autoflush](#430-rtpautoflush)
- [431 rtp_autoflush_during_bridge](#431-rtpautoflushduringbridge)
- [432 rtp_disable_hold](#432-rtpdisablehold)
- [433 rtp_disable_vad_in](#433-rtpdisablevadin)
- [434 rtp_disable_vad_out](#434-rtpdisablevadout)
- [435 rtp_enable_vad_in](#435-rtpenablevadin)
- [436 rtp_enable_vad_out](#436-rtpenablevadout)
- [437 rtp_force_audio_fmtp](#437-rtpforceaudiofmtp)
- [438 rtp_hold_timeout_sec](#438-rtpholdtimeoutsec)
- [439 rtp_jitter_buffer_during_bridge](#439-rtpjitterbufferduringbridge)
- [440 rtp_manual_rtp_bugs](#440-rtpmanualrtpbugs)
- [441 rtp_negotiate_near_match](#441-rtpnegotiatenearmatch)
- [442 rtp_rewrite_timestamps](#442-rtprewritetimestamps)
- [443 rtp_sdes_suites](#443-rtpsdessuites)
- [444 rtp_secure_media](#444-rtpsecuremedia)
- [445 rtp_secure_media_inbound](#445-rtpsecuremediainbound)
- [446 rtp_secure_media_outbound](#446-rtpsecuremediaoutbound)
- [447 rtp_secure_media_suites](#447-rtpsecuremediasuites)
- [448 rtp_stun_ping](#448-rtpstunping)
- [449 rtp_timeout_sec](#449-rtptimeoutsec)
- [450 rtp_timer_name](#450-rtptimername)
- [451 run_dir](#451-rundir)
- [452 script_dir](#452-scriptdir)
- [453 sdp_m_per_ptime](#453-sdpmperptime)
- [454 sdp_secure_savp_only](#454-sdpsecuresavponly)
- [455 send_silence_when_idle](#455-sendsilencewhenidle)
- [456 session_in_hangup_hook](#456-sessioninhanguphook)
- [457 signal_bond](#457-signalbond)
- [458 signal_bridge_to](#458-signalbridgeto)
- [459 sip](#459-sip)
- [460 sip_acl_authed_by](#460-sipaclauthedby)
- [461 sip_acl_token](#461-sipacltoken)
- [462 sip_auth_method](#462-sipauthmethod)
- [463 sip_auth_password](#463-sipauthpassword)
- [464 sip_auth_realm](#464-sipauthrealm)
- [465 sip_auth_username](#465-sipauthusername)
- [466 sip_authorized](#466-sipauthorized)
- [467 sip_auto_answer](#467-sipautoanswer)
- [468 sip_auto_answer_detected](#468-sipautoanswerdetected)
- [469 sip_auto_answer_notify](#469-sipautoanswernotify)
- [470 sip_auto_answer_suppress_notify](#470-sipautoanswersuppressnotify)
- [471 sip_auto_simplify](#471-sipautosimplify)
- [472 sip_call_id](#472-sipcallid)
- [473 sip_callee_id_name](#473-sipcalleeidname)
- [474 sip_cid_in_1xx](#474-sipcidin1xx)
- [475 sip_cid_type](#475-sipcidtype)
- [476 sip_codec_negotiation](#476-sipcodecnegotiation)
- [477 sip_contact_host](#477-sipcontacthost)
- [478 sip_contact_port](#478-sipcontactport)
- [479 sip_contact_user](#479-sipcontactuser)
- [480 sip_copy_custom_headers](#480-sipcopycustomheaders)
- [481 sip_copy_multipart](#481-sipcopymultipart)
- [482 sip_destination_url](#482-sipdestinationurl)
- [483 sip_enable_soa](#483-sipenablesoa)
- [484 sip_exclude_contact](#484-sipexcludecontact)
- [485 sip_execute_on_image](#485-sipexecuteonimage)
- [486 sip_force_audio_fmtp](#486-sipforceaudiofmtp)
- [487 sip_force_full_from](#487-sipforcefullfrom)
- [488 sip_force_full_to](#488-sipforcefullto)
- [489 sip_force_video_fmtp](#489-sipforcevideofmtp)
- [490 sip_from_comment](#490-sipfromcomment)
- [491 sip_from_display](#491-sipfromdisplay)
- [492 sip_from_host](#492-sipfromhost)
- [493 sip_from_port](#493-sipfromport)
- [494 sip_from_uri](#494-sipfromuri)
- [495 sip_from_user](#495-sipfromuser)
- [496 sip_from_user_stripped](#496-sipfromuserstripped)
- [497 sip_gateway](#497-sipgateway)
- [498 sip_gateway_name](#498-sipgatewayname)
- [499 sip_h_Referred-By](#499-siphreferred-by)
- [500 sip_handle_full_from](#500-siphandlefullfrom)
- [501 sip_handle_full_to](#501-siphandlefullto)
- [502 sip_hangup_disposition](#502-siphangupdisposition)
- [503 sip_has_crypto](#503-siphascrypto)
- [504 sip_header_name](#504-sipheadername)
- [505 sip_history_info](#505-siphistoryinfo)
- [506 sip_ignore_183nosdp](#506-sipignore183nosdp)
- [507 sip_ignore_reinvites](#507-sipignorereinvites)
- [508 sip_ignore_remote_cause](#508-sipignoreremotecause)
- [509 sip_invite_call_id](#509-sipinvitecallid)
- [510 sip_invite_contact_params](#510-sipinvitecontactparams)
- [511 sip_invite_domain](#511-sipinvitedomain)
- [512 sip_invite_from_params](#512-sipinvitefromparams)
- [513 sip_invite_from_uri](#513-sipinvitefromuri)
- [514 sip_invite_full_from](#514-sipinvitefullfrom)
- [515 sip_invite_full_to](#515-sipinvitefullto)
- [516 sip_invite_params](#516-sipinviteparams)
- [517 sip_invite_record_route](#517-sipinviterecordroute)
- [518 sip_invite_req_uri](#518-sipinviterequri)
- [519 sip_invite_route_uri](#519-sipinviterouteuri)
- [520 sip_invite_tel_params](#520-sipinvitetelparams)
- [521 sip_invite_to_params](#521-sipinvitetoparams)
- [522 sip_invite_to_uri](#522-sipinvitetouri)
- [523 sip_jitter_buffer_plc](#523-sipjitterbufferplc)
- [524 sip_local_sdp_str](#524-siplocalsdpstr)
- [525 sip_local_url](#525-siplocalurl)
- [526 sip_looped_call](#526-siploopedcall)
- [527 sip_mirror_remote_audio_codec_payload](#527-sipmirrorremoteaudiocodecpayload)
- [528 sip_nat_detected](#528-sipnatdetected)
- [529 sip_network_destination](#529-sipnetworkdestination)
- [530 sip_outgoing_call_id](#530-sipoutgoingcallid)
- [531 sip_p_rtp_stat](#531-sipprtpstat)
- [532 sip_profile](#532-sipprofile)
- [533 sip_profile_name](#533-sipprofilename)
- [534 sip_received_ip](#534-sipreceivedip)
- [535 sip_received_port](#535-sipreceivedport)
- [536 sip_recover_contact](#536-siprecovercontact)
- [537 sip_recover_via](#537-siprecovervia)
- [538 sip_recovery_break_rfc](#538-siprecoverybreakrfc)
- [539 sip_refer_reply](#539-sipreferreply)
- [540 sip_referred_by_cid](#540-sipreferredbycid)
- [541 sip_referred_by_user_stripped](#541-sipreferredbyuserstripped)
- [542 sip_renegotiate_codec_on_reinvite](#542-siprenegotiatecodeconreinvite)
- [543 sip_reply_host](#543-sipreplyhost)
- [544 sip_request_host](#544-siprequesthost)
- [545 sip_request_port](#545-siprequestport)
- [546 sip_require_timer](#546-siprequiretimer)
- [547 sip_route_uri](#547-siprouteuri)
- [548 sip_rtp_rxstat](#548-siprtprxstat)
- [549 sip_rtp_txstat](#549-siprtptxstat)
- [550 sip_secure_media](#550-sipsecuremedia)
- [551 sip_sticky_contact](#551-sipstickycontact)
- [552 sip_subject](#552-sipsubject)
- [553 sip_term_cause](#553-siptermcause)
- [554 sip_term_status](#554-siptermstatus)
- [555 sip_to_comment](#555-siptocomment)
- [556 sip_to_host](#556-siptohost)
- [557 sip_to_port](#557-siptoport)
- [558 sip_to_uri](#558-siptouri)
- [559 sip_to_user](#559-siptouser)
- [560 sip_transport](#560-siptransport)
- [561 sip_use_gateway](#561-sipusegateway)
- [562 sip_user_agent](#562-sipuseragent)
- [563 sip_via_host](#563-sipviahost)
- [564 sip_via_port](#564-sipviaport)
- [565 sip_via_protocol](#565-sipviaprotocol)
- [566 sip_via_rport](#566-sipviarport)
- [567 sip_video_fmtp](#567-sipvideofmtp)
- [568 sip_video_pt](#568-sipvideopt)
- [569 sip_wait_for_aleg_ack](#569-sipwaitforalegack)
- [570 skeleton](#570-skeleton)
- [571 skip_cdr_causes](#571-skipcdrcauses)
- [572 sleep_eat_digits](#572-sleepeatdigits)
- [573 socket_host](#573-sockethost)
- [574 socket_path](#574-socketpath)
- [575 SOFIA_CRYPTO_MANDATORY_VARIABLE](#575-sofiacryptomandatoryvariable)
- [576 SOFIA_HAS_CRYPTO_VARIABLE](#576-sofiahascryptovariable)
- [577 sofia_profile_domain_name](#577-sofiaprofiledomainname)
- [578 sofia_profile_name](#578-sofiaprofilename)
- [579 sofia_record_file](#579-sofiarecordfile)
- [580 SOFIA_REFER_TO_VARIABLE](#580-sofiarefertovariable)
- [581 SOFIA_REPLACES_HEADER](#581-sofiareplacesheader)
- [582 SOFIA_SECURE_MEDIA_CONFIRMED_VARIABLE](#582-sofiasecuremediaconfirmedvariable)
- [583 SOFIA_SECURE_MEDIA_VARIABLE](#583-sofiasecuremediavariable)
- [584 SOFIA_SESSION_TIMEOUT](#584-sofiasessiontimeout)
- [585 sound_prefix](#585-soundprefix)
- [586 sounds_dir](#586-soundsdir)
- [587 spandsp_dtmf_rx_filter_dialtone](#587-spandspdtmfrxfilterdialtone)
- [588 spandsp_dtmf_rx_reverse_twist](#588-spandspdtmfrxreversetwist)
- [589 spandsp_dtmf_rx_threshold](#589-spandspdtmfrxthreshold)
- [590 spandsp_dtmf_rx_twist](#590-spandspdtmfrxtwist)
- [591 star_replace](#591-starreplace)
- [592 start_epoch](#592-startepoch)
- [593 start_stamp](#593-startstamp)
- [594 start_uepoch](#594-startuepoch)
- [595 storage_dir](#595-storagedir)
- [596 stream_prebuffer](#596-streamprebuffer)
- [597 suppress_cng](#597-suppresscng)
- [598 switch_m_sdp](#598-switchmsdp)
- [599 SWITCH_PLAYBACK_TERMINATOR_USED](#599-switchplaybackterminatorused)
- [600 switch_r_sdp](#600-switchrsdp)
- [601 switch_serial](#601-switchserial)
- [602 SWITCH_UUID_BRIDGE](#602-switchuuidbridge)
- [603 temp_dir](#603-tempdir)
- [604 temp_hold_music](#604-tempholdmusic)
- [605 timer_name](#605-timername)
- [606 timezone](#606-timezone)
- [607 tod_tz_offset](#607-todtzoffset)
- [608 tone_detect_expires](#608-tonedetectexpires)
- [609 tone_detect_sleep](#609-tonedetectsleep)
- [610 total_loops](#610-totalloops)
- [611 transfer_after_bridge](#611-transferafterbridge)
- [612 transfer_fallback_extension](#612-transferfallbackextension)
- [613 transfer_history](#613-transferhistory)
- [614 transfer_on_fail](#614-transferonfail)
- [615 transfer_ringback](#615-transferringback)
- [616 transfer_source](#616-transfersource)
- [617 transfer_to](#617-transferto)
- [618 tts_commandline](#618-ttscommandline)
- [619 tts_engine](#619-ttsengine)
- [620 tts_voice](#620-ttsvoice)
- [621 uduration](#621-uduration)
- [622 UNIQUEID](#622-uniqueid)
- [623 user_context](#623-usercontext)
- [624 user_name](#624-username)
- [625 uuid_bridge_continue_on_cancel](#625-uuidbridgecontinueoncancel)
- [626 verbose_presence](#626-verbosepresence)
- [627 verbose_sdp](#627-verbosesdp)
- [628 video_logo_path](#628-videologopath)
- [629 video_mirror_input](#629-videomirrorinput)
- [630 video_possible](#630-videopossible)
- [631 video_read_codec](#631-videoreadcodec)
- [632 video_read_rate](#632-videoreadrate)
- [633 video_write_codec](#633-videowritecodec)
- [634 video_write_rate](#634-videowriterate)
- [635 vm_cc](#635-vmcc)
- [636 vm_message_ext](#636-vmmessageext)
- [637 vmd_detect](#637-vmddetect)
- [638 vname](#638-vname)
- [639 voicemail_account](#639-voicemailaccount)
- [640 voicemail_alternate_greet_id](#640-voicemailalternategreetid)
- [641 voicemail_authorized](#641-voicemailauthorized)
- [642 voicemail_caller_id_name](#642-voicemailcalleridname)
- [643 voicemail_caller_id_number](#643-voicemailcalleridnumber)
- [644 voicemail_current_folder](#644-voicemailcurrentfolder)
- [645 voicemail_domain](#645-voicemaildomain)
- [646 voicemail_domain_name](#646-voicemaildomainname)
- [647 voicemail_email](#647-voicemailemail)
- [648 voicemail_file_path](#648-voicemailfilepath)
- [649 voicemail_greeting_number](#649-voicemailgreetingnumber)
- [650 voicemail_greeting_path](#650-voicemailgreetingpath)
- [651 voicemail_id](#651-voicemailid)
- [652 voicemail_message_len](#652-voicemailmessagelen)
- [653 voicemail_priority](#653-voicemailpriority)
- [654 voicemail_profile_name](#654-voicemailprofilename)
- [655 voicemail_read_flags](#655-voicemailreadflags)
- [656 voicemail_time](#656-voicemailtime)
- [657 voicemail_total_new_messages](#657-voicemailtotalnewmessages)
- [658 voicemail_total_saved_messages](#658-voicemailtotalsavedmessages)
- [659 voicemail_urgent_new_messages](#659-voicemailurgentnewmessages)
- [660 voicemail_urgent_saved_messages](#660-voicemailurgentsavedmessages)
- [661 waitmsec](#661-waitmsec)
- [662 waitsec](#662-waitsec)
- [663 waitusec](#663-waitusec)
- [664 write_codec](#664-writecodec)
- [665 write_rate](#665-writerate)
- [666 xfer_uuids](#666-xferuuids)
- [667 xml_cdr_base](#667-xmlcdrbase)
- [668 zrtp_enabled](#668-zrtpenabled)

<!-- /TOC -->

# 1 absolute_codec_string
- url: https://freeswitch.org/confluence/display/FREESWITCH/absolute_codec_string
- type: **string**

Sets the absolute codec string to use (nothing will be appended).

```
<action application="set" data="absolute_codec_string=PCMU,GSM"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 2 accountcode
- url: https://freeswitch.org/confluence/display/FREESWITCH/accountcode
- type: **string**

Account code is mostly an arbitrary value that you can assign on a per leg basis. An important feature of accountcode is that if its value matches one of the CDR CSV templates defined in cdr_csv.conf.xml then that CDR template will be used when generating a CSV CDR.

```
<action application="set" data="accountcode=custom"/>
```




# 3 acl_token
- url: https://freeswitch.org/confluence/display/FREESWITCH/acl_token
- type: **string**

If an incoming SIP INVITE message matches against a user ACL, this variable is set to the user ID and domain name.

```

```




# 4 alert_info
- url: https://freeswitch.org/confluence/display/FREESWITCH/alert_info
- type: **string**

Add an Alert-Info Header like Snom and other Phones need for Ring or Ringtone information.

```
oad an external WAV ringtone on all calls:
<action application="export" data="alert_info=http://192.168.181.5/sounds/ctu.wav"/>
Use the External Ringer (Change the Ringtone for the alert-external, alert-group and alert-internal in Snom under Setup > Preferences > Alert-Info Ringer):
<action application="export" data="alert_info=http://www.notused.com;info=alert-external;x-line-id=0"/>
```




# 5 answer_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/answer_epoch
- type: **integer**



```

```




# 6 answer_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/answer_stamp
- type: **string**



```

```




# 7 answer_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/answer_uepoch
- type: **integer**



```

```




# 8 answermsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/answermsec
- type: **integer**



```

```




# 9 answersec
- url: https://freeswitch.org/confluence/display/FREESWITCH/answersec
- type: **integer**



```

```




# 10 answerusec
- url: https://freeswitch.org/confluence/display/FREESWITCH/answerusec
- type: **integer**



```

```




# 11 api_after_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_after_bridge
- type: **string**

Execute an API command after bridge.

```
aging to PA System via Portaudio (with chime before and after announcement):
<extension name="paging-with-chime">
	<condition field="destination_number" expression="^7243$">
		<action application="set" data="bridge_pre_execute_bleg_app=playback"/>
		<action application="set" data="bridge_pre_execute_bleg_data=/tmp/2_tone_chime.wav"/>
		<action application="set" data="api_after_bridge=luarun post-chime.lua"/>
		<action application="bridge" data="portaudio/auto_answer"/>
	</condition>
</extension>
post-chime.lua:
api = freesswitch.API()
api:execute("pa", "play /tmp/2_tone_chime.wav")
```




# 12 api_hangup_hook
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_hangup_hook
- type: **string**

Execute an API command on hangup.See also:session_in_hangup_hookapi_reporting_hook - like api_hangup_hook but after reporting state (both honor session_in_hangup_hook)

```
<action application="set" data="api_hangup_hook=jsrun cleanup.js ${uuid}"/>
```




# 13 api_on_answer
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_answer
- type: **string**

Execute an api (not an application) when the called party answers. To set an application, use execute_on_answer.

```
<action application="export" data="nolocal:api_on_answer=uuid_broadcast ${uuid} beep.wav both"/>

<action application="bridge" data="{api_on_answer='uuid_broadcast ${uuid} beep.wav both'}sofia/gateway/provider/5551231234"/>
```




# 14 api_on_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_media
- type: **string**

Execute a FreeSWITCH API command when the far end sends media, i.e. ringing or 183/SDP.The command is executed only on channels that are not already answered. Just use export or export with nolocal: prefix to make sure it is executed when b-leg answers.

```
<action application="export" data="nolocal:execute_on_media=lua incrInUse.lua ${uuid}"/>
```




# 15 api_on_originate
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_originate
- type: **string**



```

```




# 16 api_on_post_originate
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_post_originate
- type: **string**



```

```




# 17 api_on_pre_answer
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_pre_answer
- type: **string**



```

```




# 18 api_on_pre_originate
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_pre_originate
- type: **string**



```

```




# 19 api_on_ring
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_ring
- type: **string**



```

```




# 20 api_on_sip_extra_headers
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_sip_extra_headers
- type: **string**



```

```




# 21 api_on_startup
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_startup
- type: **string**

Execute an api (not an application) when the switch starts up.

```
<X-PRE-PROCESS cmd="set" data="api_on_startup=sofia recover"/>
```




# 22 api_on_tone_detect
- url: https://freeswitch.org/confluence/display/FREESWITCH/api_on_tone_detect
- type: **string**



```

```




# 23 asr_intercept_dtmf
- url: https://freeswitch.org/confluence/display/FREESWITCH/asr_intercept_dtmf
- type: **string**



```

```




# 24 auto_answer_destination
- url: https://freeswitch.org/confluence/display/FREESWITCH/auto_answer_destination
- type: **string**

In an inbound call, the remote side may send a SIP NOTIFY message with the event type talk, telling Sofia endpoint to answer the call. In this case, the variable auto_answer_destination is set to the channel's destination_number, and the call is transferred to the extension auto_answer within current dialplan and context.

```

```




# 25 auto_hunt
- url: https://freeswitch.org/confluence/display/FREESWITCH/auto_hunt
- type: **boolean**

Setting auto_hunt to true will alter the normal sequential processing of dialplan extensions. auto_hunt will cause the dialplan to 'jump' to a specific extension name, not processing any other extension. The destination_number and extension name must be the same in order for this to work. The condition must still match, but the extension name is the operative element.

```
n conf/vars.xml:
<X-PRE-PROCESS cmd="set" data="auto_hunt=true"/>

<extension name="do_xfer">
  <condition field="destination_number" expression="^.*$">
    <action application="set" data="auto_hunt=true"/>
    <action application="transfer" data="333"/>
  </condition>
</extension>

<extension name="333">
  <condition field="destination_number" expression="^333$">
    <action application="info"/>
  </condition>
</extension>
```




# 26 base_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/base_dir
- type: **string**

This defines the base directory for most other directory settings

```

```




# 27 billmsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/billmsec
- type: **integer**



```

```




# 28 billsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/billsec
- type: **integer**



```

```




# 29 billusec
- url: https://freeswitch.org/confluence/display/FREESWITCH/billusec
- type: **integer**



```

```




# 30 bind_digit_digit_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/bind_digit_digit_timeout
- type: **integer**

Inter-digit timeout, in milliseconds. This sets the time to wait between individual dialed digits. Default value is 1500 milliseconds. Mostly only useful in conjunction with mod_dptools: play_and_get_digits in the same dialplan extension.See section 3.1 in mod_dptools: bind_digit_action.

```
xample
<!-- To wait 10 seconds between digits: -->
<execute application="set" data="bind_digit_digit_timeout=10000" />
```




# 31 bind_digit_input_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/bind_digit_input_timeout
- type: **integer**

Overall timeout, in milliseconds. This sets the overall time to wait for the entire digit sequence to be entered. Default value is 0 milliseconds. Mostly only useful in conjunction with mod_dptools: play_and_get_digits in the same dialplan extension.See section 3.1 in mod_dptools: bind_digit_action.

```
xample
<execute application="set" data="bind_digit_input_timeout=10000" />
```




# 32 bind_meta_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/bind_meta_key
- type: **dtmf digit**

Selects the meta key to use with the bind_meta_app dialplan application.

```
<action application="set" data="bind_meta_key=#"/>
```




# 33 bridge_answer_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_answer_timeout
- type: **integer**

Timeout in seconds how long to tolerate a bridge that is in early media without being answered (can be set on either leg). Introduced in build 15057.See also: Early Media

```
<action application="set" data="bridge_answer_timeout=20">
```




# 34 bridge_channel
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_channel
- type: **string**



```

```




# 35 bridge_early_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_early_media
- type: **boolean**

By default this is false. Set to true, this makes the bridge use the live audio from the b-leg as ringback to the a-leg. Setting bridge_early_media=true means the early media will be buffered.Consider setting this to true if:you are using a loopback channel to execute a bridge to an endpoint which sends back early media and the received early media's audio is degraded. Note: The buffering resulting from setting bridge_early_media=true brings with it a higher resource cost than bridge_early_media=false, but may improve the sound quality of the early media. Set bridge_early_media before the bridge, or in the dial string for the bridge.you are using multiple targets in originate or bridge (e.g.: originate {globalVar=global}[channelVar=channel1]sofia/gateway/GW1/123456|[channelVar=channel2]sofia/gateway/GW2/123456) where you need to receive network generated Call Progress Tones (e.g.: ringtones and network announcements). You can combine this with continue_on_fail so you can fine-tune fallback on specific release causes only.

```

```




# 36 bridge_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_epoch
- type: **integer**



```

```




# 37 bridge_filter_dtmf
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_filter_dtmf
- type: **boolean**

Setting this variable to true will prevent DTMF digits received on this channel when bridged from being sent to the other channel.

```
n the dialplan:
<action application="set" data="bridge_filter_dtmf=true" />
Dialstring:
{bridge_filter_dtmf=true}sofia/default/blah@baz.com
```




# 38 bridge_generate_comfort_noise
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_generate_comfort_noise
- type: **string**

Generates comfort noise when bridged session is receiving discontinuous audio frames (silence suppression).When greater than 0, this variable is set to the divisor of the silence generating function. 400 or 1400 are common values set, but you may experiment with other choices to pick one that sounds best.When true, FreeSWITCH will pick a default comfort noise value.When -1, FreeSWITCH will transmit silence without comfort noise. (As of 2012-10-25)

```
eg A wants a continuous stream of audio, but leg B is using silence suppression:
<action application="set" data="bridge_generate_comfort_noise=true"/>
<action application="bridge" data="sofia/user/1000"/>
Leg A uses silence suppression, but leg B wants a continuous stream of audio:
<action application="bridge" data="{bridge_generate_comfort_noise=true}sofia/user/1000"/>
```




# 39 bridge_hangup_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_hangup_cause
- type: **string**

This is set to the hangup cause of the last bridged B leg of the call. If you have continue_on_fail=true and hangup_after_bridge=false you can do checks on this to see what "really" happened to the call. You can for instance do execute_extension after bridge, do a condition check on ${bridge_hangup_cause} to see if it contains MEDIA_TIMEOUT and then trigger a redial of the call or transfer to a cell phone. For a list of hangup causes, see Hangup Causes.

```
<action application="log" data="1 B-leg hangup cause: ${bridge_hangup_cause}"/>
```




# 40 bridge_pre_execute_aleg_app
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_pre_execute_aleg_app
- type: **string**

Command or api to be executed on the A leg before bridging the two channels. App arguments can be passed by setting bridge_pre_execute_aleg_data. this is executed AFTER the call is setup but BEFORE the media (audio) is bridged

```

```




# 41 bridge_pre_execute_aleg_data
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_pre_execute_aleg_data
- type: **string**

Arguments to be used with bridge_pre_execute_aleg_app.

```

```




# 42 bridge_pre_execute_bleg_app
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_pre_execute_bleg_app
- type: **string**

Command or api to be executed on the B leg before bridging the two channels. Useful when originating a call from the event socket, CLI or XML-RPC.It could for instance be used to do a HTTP GET with a script or mod_http to the IP address of a Snom phone to increase the ringer volume if you need to do a wakeup call.Can also be used to bind a dtmf to an app on the b leg of a call so that it can survive a transfer.Arguments can be passed to the app with bridge_pre_execute_bleg_data. this is executed AFTER the call is setup but BEFORE the media (audio) is bridged.

```
<action application="set" data="bridge_pre_execute_bleg_app=bind_meta_app"/>
<action application="set" data="bridge_pre_execute_bleg_data=1 a s att_xfer::sofia/profile/destination"/>
```




# 43 bridge_pre_execute_bleg_data
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_pre_execute_bleg_data
- type: **string**

Arguments to be used with bridge_pre_execute_bleg_app.

```
<action application="set" data="bridge_pre_execute_bleg_app=bind_meta_app"/>
<action application="set" data="bridge_pre_execute_bleg_data=1 a s att_xfer::sofia/profile/destination"/>
```




# 44 bridge_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_stamp
- type: **string**



```

```




# 45 bridge_terminate_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_terminate_key
- type: **dtmf digit**

Allows you to bind a key and the bridge will terminate if the DTMF matches.You can set bridge_terminate_key on either or both legs which will end the bridge, if it hangs up or not is decided by hangup_after_bridge=false or what is next in your dialplan.

```

```




# 46 bridge_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_to
- type: **string**



```

```




# 47 bridge_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_uepoch
- type: **integer**



```

```




# 48 bridge_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/bridge_uuid
- type: **string**



```

```




# 49 bypass_keep_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/bypass_keep_codec
- type: **boolean**

By doing export bypass_keep_codec=true to force re-invite with the same codec it was using previously.

```

```




# 50 bypass_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/bypass_media
- type: **boolean**

When set, the media (RTP) from the originating endpoint is sent directly to the destination endpoint and vice versa. The signaling (SIP) for both endpoints still goes through FreeSWITCH, but the media is point-to-point. See also: Bypass Media Overview

```
<action application="set" data="bypass_media=true"/>
```




# 51 bypass_media_after_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/bypass_media_after_bridge
- type: **boolean**

Same as bypass_media but will handle media for a call until it has reached the answered state (and has processed a few RTP frames.) At this point FreeSWITCH will use a ReInvite to take itself out of the media path. This helps reduce audio latency and take some load off FreeSWITCH. Especially useful for UACs behind Coned NAT as it gives RTP Auto-Adjust enough time to determine the correct ports to avoid one-way audio.

```

```




# 52 cache_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/cache_dir
- type: **string**



```

```




# 53 cache_speech_handles
- url: https://freeswitch.org/confluence/display/FREESWITCH/cache_speech_handles
- type: **string**



```

```




# 54 call_clientcode
- url: https://freeswitch.org/confluence/display/FREESWITCH/call_clientcode
- type: **string**

This is used by SNOM phones. When FreeSWITCH receives a SIP INFO message with x-clientcode header, this variable is set to the value of that header.

```

```




# 55 call_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/call_timeout
- type: **integer**

Controls how long (in seconds) to ring the B leg of a call when using the bridge application. The timeout is set on the A leg, and applies to any bridges that happen in the channel.If you need to set a timeout on a call that has no A leg, use originate_timeout.If you need to set a timeout with enterprise bridging/originate, use originate_timeout.If you need to set the timeout on a per-leg basis (i.e. a different timeout for each destination), use the leg_timeout variable. Beware that if you are not using {ignore_early_media=true}, call_timeout is no longer applicable as soon as early media signal is received.Default Value: 60

```
<action application="set" data="call_timeout=20"/>
If a call timeout is to be specified against a group_call() list, use the following format:
<action application="bridge" data="{originate_timeout=24}${group_call(sales@$${domain})}"/>
```




# 56 callee_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/callee_id_name
- type: **string**



```

```




# 57 callee_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/callee_id_number
- type: **string**



```

```




# 58 caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/caller_id_name
- type: **string**

readonly The caller id name set by the inbound call, not a real variable. Practically it is read only.

```

```




# 59 caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/caller_id_number
- type: **string**

readonly The caller id phone number set by the inbound call, not a real variable. Practically it is read only. From sofia.c, the values used (in precedence) are the user parts from: P-Preferred-Identity, P-Asserted-Identity, Remote-Party-ID, and the From header.

```

```




# 60 campon
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon
- type: **boolean**

Controls whether camping is enabled or not.Default: false

```
<action application="set" data="campon=true"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 61 campon_announce_sound
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_announce_sound
- type: **string**

File to play back after the first bridge fails (e.g. to announce what key to press to skip to fallback extension).Default: none

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_stop_key=1"/>
<action application="set" data="campon_announce_sound=press_one_to_stop.wav"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 62 campon_fallback_context
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_fallback_context
- type: **string**

Optional context name where the call is transferred for fallback

```

```




# 63 campon_fallback_dialplan
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_fallback_dialplan
- type: **string**

Optional dialplan name where the call is transferred for fallback

```

```




# 64 campon_fallback_exten
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_fallback_exten
- type: **string**

Extention number where the call is transferred for fallback

```

```




# 65 campon_hold_music
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_hold_music
- type: **string**

Optional hold music to play while camping instead of default hold_music.

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_hold_music=/data/campmusic/RelaxingCampSounds.wav"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 66 campon_retries
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_retries
- type: **integer**

Controls how many times the bridge will be retried before falling back.Default: 100

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_retries=13"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 67 campon_sleep
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_sleep
- type: **integer**

Controls how long to wait before starting a retry.Default: 10

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_sleep=30"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 68 campon_stop_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_stop_key
- type: **dtmf digit**

DTMF digit that breaks the campon loop and skips directly to fallback extensionDefault: none

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_stop_key=1"/>
<action application="set" data="campon_announce_sound=press_one_to_stop.wav"/>
<action application="set" data="campon_fallback_exten=1000"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 69 campon_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/campon_timeout
- type: **integer**

This variable controls how long to attempt each bridge before timing out. It works exactly like call_timeout but only applies to camping.Default: 10

```
<action application="set" data="campon=true"/>
<action application="set" data="campon_timeout=20"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 70 cdr_csv_base
- url: https://freeswitch.org/confluence/display/FREESWITCH/cdr_csv_base
- type: **string**



```

```




# 71 certs_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/certs_dir
- type: **string**



```

```




# 72 CHANNEL
- url: https://freeswitch.org/confluence/display/FREESWITCH/CHANNEL
- type: **string**



```

```




# 73 channel_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/channel_name
- type: **string**



```

```




# 74 codec_string
- url: https://freeswitch.org/confluence/display/FREESWITCH/codec_string
- type: **string**

Sets the base codec string to use.

```
<action application="set" data="codec_string=PCMU,GSM"/>
```




# 75 conf_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/conf_dir
- type: **string**



```

```




# 76 conference_auto_outcall_announce
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_announce
- type: **string**

File name of audio message to play to conference member joining conference via the conference_set_auto_outcall application. Because the conference would be originating an outbound call to a member this typically would be a greeting with an explanation that the recipient will be joining a conference call.

```
<action application="set" data="conference_auto_outcall_announce=sounds/soundfile.wav"/>
```




# 77 conference_auto_outcall_caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_caller_id_name
- type: **string**

Caller ID name to use when dialing endpoints to join the conference via the conference_set_auto_outcall application.

```
<action application="set" data="conference_auto_outcall_caller_id_name=$${effective_caller_id_name}"/>
```




# 78 conference_auto_outcall_caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_caller_id_number
- type: **string**

Caller ID number to use when dialing endpoints to join the conference via the conference_set_auto_outcall application.

```
<action application="set" data="conference_auto_outcall_caller_id_number=${effective_caller_id_number}"/>
```




# 79 conference_auto_outcall_flags
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_flags
- type: **string**

Conference flags to set for members joining conference via the conference_set_auto_outcall application.

```
<action application="set" data="conference_auto_outcall_flags=mute"/>
```




# 80 conference_auto_outcall_maxwait
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_maxwait
- type: **integer**

Maximum time in seconds that the channel that initiated the conference_set_auto_outcall will wait for members to join the conference.

```
<action application="set" data="conference_auto_outcall_maxwait=10"/>
```




# 81 conference_auto_outcall_prefix
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_prefix
- type: **string**

The value of conference_auto_outcall_prefix is prepended to each of conference_set_auto_outcall values, of which there can be more than one.

```
<extension name="mad_boss_intercom">
  <condition field="destination_number" expression="^0911$">
    <action application="set" data="conference_auto_outcall_caller_id_name=Mad Boss1"/>
    <action application="set" data="conference_auto_outcall_caller_id_number=0911"/>
    <action application="set" data="conference_auto_outcall_timeout=60"/>
    <action application="set" data="conference_auto_outcall_flags=mute"/>
    <action application="set" data="conference_auto_outcall_prefix={sip_auto_answer=true,execute_on_answer='bind_meta_app 2 a s1 transfer::intercept:${uuid} inline'}"/>
    <action application="set" data="sip_exclude_contact=${network_addr}"/>
    <action application="conference_set_auto_outcall" data="${group_call(sales)}"/>
    <action application="conference" data="madboss_intercom1@default+flags{endconf|deaf}"/>
  </condition>
</extension>
```




# 82 conference_auto_outcall_profile
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_profile
- type: **string**

Conference profile to use for members joining the conference via the conference_set_auto_outcall application.

```
<action application="set" data="conference_auto_outcall_profile=default"/>
```




# 83 conference_auto_outcall_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_auto_outcall_timeout
- type: **integer**

Originate timeout to use when joining a member to a conference via conference_set_auto_outcall.

```
<action application="set" data="conference_auto_outcall_timeout=60"/>
```




# 84 conference_controls
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_controls
- type: **string**

Set this variable to specify which conference control set to use when transferring a caller into a conference. This allows you, for example, to have a control set for the conference moderator and another control set for regular conference members. The control set for the moderator could include the ability to mute or kick people, for example. You must create the desired conference control set. Also, if this is not set then the default conference control set is used for the conference member.

```
<action application="set" data="conference_controls=moderator"/>
```




# 85 conference_enforce_security
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_enforce_security
- type: **boolean**

Allows the conference security to be overridden. This applies in two different scenarios, one for inbound and one for outbound. By default, conference security is always applied to inbound calls and is always skipped for outbound calls. This channel variable allows the behavior to be modified.

```
nbound:
<action application="set" data="conference_enforce_security=false"/>
<action application="conference" data="3000"/>
Outbound:
originate {conference_enforce_security=true}sofia/internal/1001 &conference(3000)
```




# 86 conference_enter_sound
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_enter_sound
- type: **string**

When set, this channel variable will override the enter-sound param on conference profile for any conferences into which the call leg is transferred.

```
<action application="set" data="conference_enter_sound=silence_stream://10"/>
```




# 87 conference_exit_sound
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_exit_sound
- type: **string**



```
<action application="set" data="conference_exit_sound=silence_stream://10"/>
```




# 88 conference_last_matching_digits
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_last_matching_digits
- type: **dtmf digit**

readonly Contains the last matching digits that the user on this channel sent into the conference.

```
<action application="log" data="INFO Last digits sent by this user: ${conference_last_matching_digits}"/>
```




# 89 conference_member_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_member_id
- type: **string**

Contains the conference_member_id value for any conference to which the channel may be connected.

```

```




# 90 conference_moderator
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_moderator
- type: **boolean**

Is true if the channel is connected to a conference as a moderator.

```

```




# 91 conference_recording
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_recording
- type: **string**

Contains the file name of the conference recording for the conference to which the channel is connected.

```

```




# 92 conference_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/conference_uuid
- type: **string**

Every instance of a conference has its own UUID. This channel variable stores the conference UUID for the most recent conference in which the channel was a member. It is set as soon as the channel enters the conference, and will show up in XML CDRs and uuid_dump calls, as well as any events that show channel variables.

```

```




# 93 continue_on_fail
- url: https://freeswitch.org/confluence/display/FREESWITCH/continue_on_fail
- type: **string**

Controls what happens when the called party can not be reached (busy/offline). If true the dialplan continues to be processed. If false the dialplan will stop processing. Can contain the return messages that will continue on fail also.

```
<action application="set" data="continue_on_fail=true"/>

<action application="set" data="continue_on_fail=NORMAL_TEMPORARY_FAILURE,USER_BUSY,NO_ANSWER,NO_ROUTE_DESTINATION"/>
With Q.850 cause codes:
<action application="set" data="continue_on_fail=3,17,18,27"/>
```




# 94 copy_xml_cdr
- url: https://freeswitch.org/confluence/display/FREESWITCH/copy_xml_cdr
- type: **string**

Copies the other leg's XML CDR into this leg's CDR. For example, the A leg's CDR will contain a variable named b_leg_cdr whose contents are the URL-encoded XML CDR data from the B leg. This variable must be set on the B leg, so use {copy_xml_cdr=true} in the dialstring or use export instead of set.

```
<action application="bridge" data="{copy_xml_cdr=true}user/${dialed_extension}@${domain_name}"/>
```




# 95 core_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/core_uuid
- type: **string**



```

```




# 96 created_time
- url: https://freeswitch.org/confluence/display/FREESWITCH/created_time
- type: **string**

Contains the start time (in microseconds) of when the call was created.In the event that a call is transferred, this will contain the time of when the entire call was created, not that specific transfer. If you need the transfer created time, see profile_created_time and variable_progress_time.

```

```




# 97 current_application
- url: https://freeswitch.org/confluence/display/FREESWITCH/current_application
- type: **string**



```

```




# 98 current_application_data
- url: https://freeswitch.org/confluence/display/FREESWITCH/current_application_data
- type: **string**



```

```




# 99 current_application_response
- url: https://freeswitch.org/confluence/display/FREESWITCH/current_application_response
- type: **string**



```

```




# 100 current_loop
- url: https://freeswitch.org/confluence/display/FREESWITCH/current_loop
- type: ****

TODO Probably has to do with mod_dptools: loop_playback or to sendmsg in the Event Socket Library (see loops header for execute ).

```

```




# 101 data
- url: https://freeswitch.org/confluence/display/FREESWITCH/data
- type: **string**



```

```




# 102 db_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/db_dir
- type: **string**



```

```




# 103 default_language
- url: https://freeswitch.org/confluence/display/FREESWITCH/default_language
- type: **string**

Controls the default language the Say Phrase engine will use when no language is explicitly specified in the API call. This permits you to easily support multiple languages by only changing a single variable at call time.

```
<action application="set" data="default_language=fr"/>
```




# 104 deny_refer_requests
- url: https://freeswitch.org/confluence/display/FREESWITCH/deny_refer_requests
- type: **string**

If this variable is set to true on either leg of a bridged SIP call, and the other end sends a REFER request, this will be denied by FreeSWITCH.

```

```




# 105 destination_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/destination_number
- type: **string**



```

```




# 106 detect_speech_result
- url: https://freeswitch.org/confluence/display/FREESWITCH/detect_speech_result
- type: **string**

readonly The result of play_and_detect_speech.

```

```




# 107 dialed_domain
- url: https://freeswitch.org/confluence/display/FREESWITCH/dialed_domain
- type: **string**



```

```




# 108 dialed_group
- url: https://freeswitch.org/confluence/display/FREESWITCH/dialed_group
- type: **string**



```

```




# 109 dialed_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/dialed_user
- type: **string**



```

```




# 110 digits_dialed
- url: https://freeswitch.org/confluence/display/FREESWITCH/digits_dialed
- type: **string**

Notes
Seems to be the DTMF buffer, but only seems to be set on hangup. At least it only shows up in CHANNEL_HANGUP and CHANNEL_HANGUP_COMPLETE , but then all the entered DTMF digits are there.TODO So where is the buffer, and how to access it and to flush it? (The latter may be important for a long running IVR).UPDATE: it's not the DTMF buffer...

```

```




# 111 direction
- url: https://freeswitch.org/confluence/display/FREESWITCH/direction
- type: **string**

It is used to determine if the particular leg of the call is inbound or outbound.

```
<condition field="${direction}" expression="^inbound$">
```




# 112 disable_app_log
- url: https://freeswitch.org/confluence/display/FREESWITCH/disable_app_log
- type: **boolean**



```

```




# 113 disable_q850_reason
- url: https://freeswitch.org/confluence/display/FREESWITCH/disable_q850_reason
- type: **boolean**

When set to true, this disables sending of the Reason header, which includes the Q.850 reason code, in responses and BYEs. For a list of hangup causes and their Q.850 codes, see Hangup Causes. This is available as of revision 15850 committed 12/8/2009.

```
<action application="set" data="disable_q850_reason=true"/>
```




# 114 disable_radius_start
- url: https://freeswitch.org/confluence/display/FREESWITCH/disable_radius_start
- type: **boolean**



```

```




# 115 disable_radius_stop
- url: https://freeswitch.org/confluence/display/FREESWITCH/disable_radius_stop
- type: **boolean**



```

```




# 116 disable_rtp_auto_adjust
- url: https://freeswitch.org/confluence/display/FREESWITCH/disable_rtp_auto_adjust
- type: **string**

Disable rtp auto adjust if it is not behaving as you expected. It stops the switch from rewriting the RTP destination based on the source. When RTP Auto-Adjust is ON FreeSWITCH will change the destination RTP address to match the source of the incoming packets, this doesn't work if the other end is really wanting to send and receive on a different addr.

```
Add {disable_rtp_auto_adjust=true} in your dial string.
```




# 117 DISPLACE_HANGUP_ON_ERROR
- url: https://freeswitch.org/confluence/display/FREESWITCH/DISPLACE_HANGUP_ON_ERROR
- type: **boolean**

When set to true this channel variable will cause the call to hangup if there is an error when trying to mod_commands#uuid_displace the call. The default is false. The default behavior before 2013/03/21 was to hangup.

```
<action application="set" data="DISPLACE_HANGUP_ON_ERROR=true"/>
```




# 118 dl_cid_msg
- url: https://freeswitch.org/confluence/display/FREESWITCH/dl_cid_msg
- type: **string**



```

```




# 119 dl_from_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/dl_from_host
- type: **string**



```

```




# 120 dl_from_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/dl_from_user
- type: **string**



```

```




# 121 dl_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/dl_host
- type: **string**



```

```




# 122 dl_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/dl_user
- type: **string**



```

```




# 123 domain_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/domain_name
- type: **string**



```

```




# 124 drop_dtmf
- url: https://freeswitch.org/confluence/display/FREESWITCH/drop_dtmf
- type: **boolean**

Set this on an inbound channel before answer or on an outbound channel before the bridge/originate in order to prevent DTMF events from being sent to the channel.Only tested with RFC2833, may also work for INFO / inband. See 

                     FS-4769
                            -
            Getting issue details...
                                                STATUS
                
 Commit 60f7849cbe72.TODO RFC 2833 is obsoleted by RFC 4733.

```
<action application="set" data="drop_dtmf=true"/>
<action application="answer"/>

<action application="export" data="nolocal:drop_dtmf=true"/>
<action application="bridge" data="sofia/internal/100@1.2.3.4"/>

<action application="bridge" data="{drop_dtmf=true}sofia/internal/100@1.2.3.4"/>
```




# 125 drop_dtmf_masking_digits
- url: https://freeswitch.org/confluence/display/FREESWITCH/drop_dtmf_masking_digits
- type: **dtmf digit**

If drop_dtmf is true play specified tone for every tone received.

```
ach DTMF tone that is entered into the a-leg will be dropped and a "d" sent to the b-leg.
<action application="set" data="drop_dtmf=true"/>
<action application="set" data="drop_dtmf_masking_digits=d"/>
To drop and replace DTMF on the b-leg use:
<action application="export" data="nolocal:drop_dtmf=true"/>
<action application="export" data="nolocal:drop_dtmf_masking_digits=d"/>
```




# 126 drop_dtmf_masking_file
- url: https://freeswitch.org/confluence/display/FREESWITCH/drop_dtmf_masking_file
- type: **string**

If drop_dtmf is true, play specified file for every tone received.

```
ach DTMF tone that is entered into the a-leg will be dropped and the file dtmf_masking_tone played to the b-leg.
<action application="export" data="drop_dtmf=true"/>
<action application="export" data="drop_dtmf_masking_file=/etc/freeswitch/Sounds/dtmf_masking_tone"/>
To drop and replace DTMF on the b-leg use
<action application="export" data="nolocal:drop_dtmf=true"/>
<action application="export" data="nolocal:drop_dtmf_masking_file=/etc/freeswitch/Sounds/dtmf_masking_tone" />
```




# 127 dtmf_type
- url: https://freeswitch.org/confluence/display/FREESWITCH/dtmf_type
- type: **string**

For inband DTMF, start_dtmf must be used in the dialplan.

```
<action application="set" data="dtmf_type=info"/>

<action application="set" data="dtmf_type=rfc2833"/>
TODO RFC 2833 is obsoleted by RFC 4733.
<action application="set" data="dtmf_type=none"/>
```




# 128 dtmf_verbose
- url: https://freeswitch.org/confluence/display/FREESWITCH/dtmf_verbose
- type: **boolean**

Enables verbose logging of Spandsp DTMF detector. Default is false. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="dtmf_verbose=true"/>
<action application="spandsp_start_dtmf" />
```




# 129 duration
- url: https://freeswitch.org/confluence/display/FREESWITCH/duration
- type: **integer**



```

```




# 130 easy_acctcode
- url: https://freeswitch.org/confluence/display/FREESWITCH/easy_acctcode
- type: **string**



```

```




# 131 easy_destnum
- url: https://freeswitch.org/confluence/display/FREESWITCH/easy_destnum
- type: **string**



```

```




# 132 easy_dialstring
- url: https://freeswitch.org/confluence/display/FREESWITCH/easy_dialstring
- type: **string**



```

```




# 133 easy_group
- url: https://freeswitch.org/confluence/display/FREESWITCH/easy_group
- type: **string**



```

```




# 134 easy_limit
- url: https://freeswitch.org/confluence/display/FREESWITCH/easy_limit
- type: **string**



```

```




# 135 eavesdrop_annnounce_macro
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_annnounce_macro
- type: **string**



```

```




# 136 eavesdrop_announce_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_announce_id
- type: **string**



```

```




# 137 eavesdrop_group
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_group
- type: **string**



```

```




# 138 eavesdrop_indicate_failed
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_indicate_failed
- type: **string**



```

```




# 139 eavesdrop_indicate_idle
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_indicate_idle
- type: **string**



```

```




# 140 eavesdrop_indicate_new
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_indicate_new
- type: **string**



```

```




# 141 eavesdrop_require_group
- url: https://freeswitch.org/confluence/display/FREESWITCH/eavesdrop_require_group
- type: **string**



```

```




# 142 effective_ani
- url: https://freeswitch.org/confluence/display/FREESWITCH/effective_ani
- type: **string**



```

```




# 143 effective_aniii
- url: https://freeswitch.org/confluence/display/FREESWITCH/effective_aniii
- type: **string**



```

```




# 144 effective_caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/effective_caller_id_name
- type: **string**

Sets the effective callerid name. This is automatically exported to the B-leg; however, it is not valid in an origination string. In other words, set this before calling bridge, otherwise use origination_caller_id_name.Snom 370/820 If you want to display LEG A's name (if available) as soon as LEG B (here the local Snom) rings, you have to set origination_caller_id_name or effective_caller_id_name as described. Otherwise, in LEG B's display, you will see LEG A's number during ringing and switching to LEG A's name after picking up the call by LEG B. To remove it set it to _undef_.

```
<action application="set" data="effective_caller_id_name=Bob Smith"/>
```




# 145 effective_caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/effective_caller_id_number
- type: **string**

Sets the effective callerid number. This is automatically exported to the B-leg; however, it is not valid in an origination string. In other words, set this before calling bridge, otherwise use origination_caller_id_number.

```
<action application="set" data="effective_caller_id_number=9185551212"/>
```




# 146 effective_sip_cid_in_1xx
- url: https://freeswitch.org/confluence/display/FREESWITCH/effective_sip_cid_in_1xx
- type: **boolean**

Prevents FreeSWITCH when it receives 183 from leg-B to automatically insert RPID before sending 183 to leg-A.

```
<action application="set" data="sip_cid_in_1xx=false"/>
```




# 147 enable_file_write_buffering
- url: https://freeswitch.org/confluence/display/FREESWITCH/enable_file_write_buffering
- type: **string**

Enable file buffering when recording a file, defaults to true if not set. Buffer size defaults to SWITCH_DEFAULT_FILE_BUFFER_LEN but can be overridden by putting bytes size instead of true (see below example). Mailing list discussion

```
<action application="set" data="enable_file_write_buffering=false"/>

<action application="set" data="enable_file_write_buffering=true"/>

<action application="set" data="enable_file_write_buffering=65535"/>
```




# 148 enable_heartbeat_events
- url: https://freeswitch.org/confluence/display/FREESWITCH/enable_heartbeat_events
- type: **boolean**



```

```




# 149 end_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/end_epoch
- type: **integer**



```

```




# 150 end_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/end_stamp
- type: **string**



```

```




# 151 end_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/end_uepoch
- type: **integer**



```

```




# 152 endpoint_disposition
- url: https://freeswitch.org/confluence/display/FREESWITCH/endpoint_disposition
- type: **string**



```

```




# 153 ep_codec_prefer_sdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/ep_codec_prefer_sdp
- type: **string**

ep_codec_prefer_sdp contains the "endpoint" codec string on the A leg. The order of preference is chosen by the A leg

```

```




# 154 ep_codec_string
- url: https://freeswitch.org/confluence/display/FREESWITCH/ep_codec_string
- type: **string**

ep_codec_string contains the "endpoint" codec string on the A leg. This codec list includes only the codecs that both the A leg and FreeSWITCH agree upon. This variable is set only when inbound-late-negotiation is enabled on the SIP profile. When there is more than one codec in the list, the order of preference is chosen by FreeSWITCH, not by the A leg.

```
<action application="bridge" data="{absolute_codec_string=${ep_codec_string}}sofia/foo/bar@baz"/>
```




# 155 exec_after_bridge_app
- url: https://freeswitch.org/confluence/display/FREESWITCH/exec_after_bridge_app
- type: **string**

Execute an application command after the bridge has been terminated. To be used with exec_after_bridge_arg. By contrast, to execute when the bridge has been established use execute_on_answer.

```
<action application="set" data="exec_after_bridge_app=transfer"/>
<action application="set" data="exec_after_bridge_arg=2102"/>
```




# 156 exec_after_bridge_arg
- url: https://freeswitch.org/confluence/display/FREESWITCH/exec_after_bridge_arg
- type: **string**

Argument passed to exec_after_bridge_app.

```
<action application="set" data="exec_after_bridge_app=transfer"/>
<action application="set" data="exec_after_bridge_arg=2102"/>
```




# 157 execute_on_answer
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_answer
- type: **string**

Execute an application (not an api) when the called party answers. To set an api, use api_on_answer. execute_on_answer will also allow for more control when dealing with no answer conditions in cases where you cannot ignore early media.The command is executed only on channels that are not already answered. Just use export or export with nolocal: prefix to make sure it is executed when b-leg answers.In the second usage example below, we have originated an outbound call to a local extension, where we will wait 30 seconds while manually ignoring media. In this case we use set and not export.

```
<action application="export" data="nolocal:execute_on_answer=lua incrInUse.lua ${uuid}"/>
To wait 30 seconds for an answer while 'manually' ignoring early media:
originate {ignore_early_media=true}sofia/gateway/my_gateway/5551212 885551212

<extension name="exe_on_ans">
  <condition field="destination_number" expression="^88(\d+)$">
    <action application="set" data="execute_on_answer=transfer ANSWEREDCALL XML default"/>
    <action application="log" data="INFO Waiting 30 seconds for $1 to answer..."/>
    <action application="sleep" data="30000"/>
    <action application="log" data="INFO Call to $1 was not answered, taking alternative action..."/>
    <action application="transfer" data="UNANSWEREDCALL XML default"/>
  </condition>
</extension>
```




# 158 execute_on_fax_detect
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_fax_detect
- type: **string**



```

```




# 159 execute_on_fax_failure
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_fax_failure
- type: **string**



```

```




# 160 execute_on_fax_result
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_fax_result
- type: **string**



```

```




# 161 execute_on_fax_success
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_fax_success
- type: **string**



```

```




# 162 execute_on_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_media
- type: **string**

Execute an application when the far end sends media, i.e. ringing or 183/SDP.The command is executed only on channels that are not already answered. Just use export or export with nolocal: prefix to make sure it is executed when b-leg answers.In the second usage example below, we have originated an outbound call to a local extension, where we will wait 30 seconds without ignoring media. In this case we use set and not export.

```
<action application="export" data="nolocal:execute_on_media=lua incrInUse.lua ${uuid}"/>
To wait 30 seconds for an answer without ignoring early media:
originate sofia/gateway/my_gateway/5551212 885551212

<extension name="exe_on_ans">
  <condition field="destination_number" expression="^88(\d+)$">
    <action application="set" data="execute_on_media=transfer ANSWEREDCALL XML default"/>
    <action application="log" data="INFO Waiting 30 seconds for $1 to answer..."/>
    <action application="sleep" data="30000"/>
    <action application="log" data="INFO Call to $1 was not answered, taking alternative action..."/>
    <action application="transfer" data="UNANSWEREDCALL XML default"/>
  </condition>
</extension>
```




# 163 execute_on_media_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_media_timeout
- type: **string**

Execute an application if the far end stops sending media and times out.

```
<action application="export" data="nolocal:execute_on_media_timeout=lua oops_timeout.lua ${uuid}"/>

<action application="set" data="execute_on_media_timeout=transfer HANDLE_MEDIA_TIMEOUT XML default"/>
```




# 164 execute_on_originate
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_originate
- type: **string**

Execute syntax: <app> <arg>Asynchronous syntax: <app>::<arg>Executes code on successful origination. Successful origination means the remote server responds, NOT when the call is actually answered.

```
originate {ignore_early_media=true,execute_on_originate='cng_plc'}sofia/gateway/foo/123456789 9664

originate {ignore_early_media=true,execute_on_originate='my_app::my_arg'}sofia/gateway/foo/123456789 9664
```




# 165 execute_on_pre_answer
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_pre_answer
- type: **string**

Execute an application (not an api) when the called party "preanswers" - that is, when some form of early media is coming or the far end sends a 180 Ringing.The command is executed only on channels that are not already answered. Just use export or export with nolocal: prefix to make sure it is executed when b-leg answers.In the second usage example below, we have originated an outbound call to a local extension, where we will wait 30 seconds without ignoring media. In this case we use set and not export.

```
<action application="export" data="nolocal:execute_on_pre_answer=lua incrInUse.lua ${uuid}"/>
To wait 30 seconds for an answer without ignoring early media:
originate sofia/gateway/my_gw/5551212 885551212

<extension name="exe_on_preans">
  <condition field="destination_number" expression="^88(\d+)$">
    <action application="set" data="execute_on_pre_answer=transfer ANSWEREDCALL XML default"/>
    <action application="log" data="INFO Waiting 30 seconds for $1 to answer..."/>
    <action application="sleep" data="30000"/>
    <action application="log" data="INFO Call to $1 was not answered, taking alternative action..."/>
    <action application="transfer" data="UNANSWEREDCALL XML default"/>
  </condition>
</extension>
```




# 166 execute_on_ring
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_ring
- type: **string**

Execute a command when the called party rings.

```
<action application="set" data="nolocal:execute_on_ring=lua markring ${uuid}"/>
```




# 167 execute_on_sip_extra_headers
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_sip_extra_headers
- type: **string**

Execute a command when SIP extra headers are detected in a SIP message.

```

```




# 168 execute_on_sip_reinvite
- url: https://freeswitch.org/confluence/display/FREESWITCH/execute_on_sip_reinvite
- type: **string**

Execute a command when SIP Reinvite.

```

```




# 169 export_vars
- url: https://freeswitch.org/confluence/display/FREESWITCH/export_vars
- type: **string**

export_vars lists variables to be exported to the other leg upon bridge. Unlike export, it only lists the variables to export without actually setting them. This is useful to transfer information from a-leg (INVITE) to the future b-leg of REFER.

```

```




# 170 EXTEN
- url: https://freeswitch.org/confluence/display/FREESWITCH/EXTEN
- type: **string**



```

```




# 171 fail_on_single_reject
- url: https://freeswitch.org/confluence/display/FREESWITCH/fail_on_single_reject
- type: **string**

This is useful when using the , AND operator in the data field of a bridge. The AND operator notifies a list of destinations, bridging to the first destination that accepts the call. Typically if a destination in the list rejects the call, the bridge will continue to be attempted until either another destination accepts the call, or a timeout occurs. See below for an example of using fail_on_single_reject with the | OR operator.This variable allows one to terminate the bridging attempt on a single rejection of the call. This means the bridge attempt would fail, and if continue_on_fail has not been set, the call is terminated. This variable would be set within a condition before a bridge application. When used in conjunction with the continue_on_fail variable, one can perform operations such as rolling over a rejected caller to an answering machine application.The default setting is false, meaning a single rejection will not terminate the bridging attempt.It can also be set to a list of failure causes to stop on, and can be negated to a list of causes not to stop on (i.e. stop on all other failure causes).

```
<action application="set" data="fail_on_single_reject=true"/>
<action application="bridge" data="sofia/$${profile}/$${kitchen}%$${domain},sofia/$${profile}/$${dining}%$${domain}"/>
<action application="javascript" data="answermachine.js"/>

<action application="set" data="fail_on_single_reject=USER_BUSY"/>

<action application="set" data="fail_on_single_reject=!NORMAL_CIRCUIT_CONGESTION"/>
To use a list:
<action application="set" data="fail_on_single_reject=^^:CALL_REJECTED:NORMAL_CLEARING:USER_BUSY"/>
For negated list:
<action application="set" data="fail_on_single_reject=!^^:ALLOTTED_TIMEOUT:NETWORK_OUT_OF_ORDER"/>
For use with the OR operator, consider the following example. Here the dialplan sends a call to multiple gateways simultaneously. In the case of GATEWAY_DOWN or INVALID_GATEWAY the bridge should not fail (i.e. negated fail_on_single_reject) and the dialplan should continue (i.e. continue_on_fail):
<action application="set" data="continue_on_fail=GATEWAY_DOWN,INVALID_GATEWAY"/>
<action application="set" data="fail_on_single_reject=!^^:GATEWAY_DOWN:INVALID_GATEWAY"/>
<action application="set" data="hangup_after_bridge=true"/>
<action application="bridge" data="sofia/gateway/gw1/$1|sofia/gateway/gw2/$1|sofia/gateway/gw3/$1"/>
```




# 172 failed_xml_cdr_prefix
- url: https://freeswitch.org/confluence/display/FREESWITCH/failed_xml_cdr_prefix
- type: **string**

If you set that on the A leg and any and all failed B originates generate a full XML CDR report and set it as a variable, this includes during a forked dial.So say you try to call sofia/profile/a@xxxxxxx,sofia/profile/b@xxxxxxx.And it fails completely, before you make the call you set failed_xml_cdr_prefix to "bad_call".Then you end up with ${bad_call_1} and ${bad_call_2} which are each a full XML report including all the vars etc.

```
<action application="set" data="failed_xml_cdr_prefix=failinggw" />
```




# 173 failure_causes
- url: https://freeswitch.org/confluence/display/FREESWITCH/failure_causes
- type: **string**

Controls which failure causes will be considered as a failure to the bridge(s). This will change the values for which continue_on_fail will fail by default unless continue_on_fail is set to true.

```
<action application="set" data="failure_causes=USER_BUSY,NO_ANSWER"/>
With Q.850 cause codes:
<action application="set" data="failure_causes=487"/>
```




# 174 fax_bad_rows
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_bad_rows
- type: **string**



```

```




# 175 fax_disable_v17
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_disable_v17
- type: **boolean**

fax_disable_v17 prevents the use of the V.17 (9,600bps to 14,400bps) FAX modem. This means FAXes will be limited to the use of V.29 (9,600bps and 7,200bps) and V.27ter (4,800bps). Some VoIP systems handle V.17 so poorly there are often good reasons to want to disable the use of this modem.

```

```




# 176 fax_document_total_pages
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_document_total_pages
- type: **integer**



```

```




# 177 fax_document_transferred_pages
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_document_transferred_pages
- type: **integer**



```

```




# 178 fax_ecm_requested
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_ecm_requested
- type: **boolean**



```

```




# 179 fax_ecm_used
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_ecm_used
- type: **boolean**



```

```




# 180 fax_end_page
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_end_page
- type: **string**



```

```




# 181 fax_filename
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_filename
- type: **string**



```

```




# 182 fax_force_caller
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_force_caller
- type: **boolean**



```

```




# 183 fax_header
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_header
- type: **string**



```

```




# 184 fax_ident
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_ident
- type: **string**



```

```




# 185 fax_image_resolution
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_image_resolution
- type: **string**



```

```




# 186 fax_image_size
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_image_size
- type: **string**



```

```




# 187 fax_local_station_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_local_station_id
- type: **string**



```

```




# 188 fax_prefix
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_prefix
- type: **string**



```

```




# 189 fax_remote_station_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_remote_station_id
- type: **string**



```

```




# 190 fax_result_code
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_result_code
- type: **string**

Result CodeMessage0OK2Timed out waiting for initial communication3Timed out waiting for the first message5The HDLC carrier did not stop in a timely manner6Failed to train with any of the compatible modems13Unexpected message received14Received bad response to DCS or training15Received a DCN from remote after sending a page17Received a DCN while waiting for a DIS20Received no response to DCS or TCF23Invalid ECM response received from transmitter31Timer T2 expired while waiting for fax page32Timer T2 expired while waiting for next fax page48Disconnected after permitted retries49The call dropped prematurely

```

```




# 191 fax_result_text
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_result_text
- type: **string**



```

```




# 192 fax_start_page
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_start_page
- type: **string**



```

```




# 193 fax_success
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_success
- type: **boolean**



```

```




# 194 fax_transfer_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_transfer_rate
- type: **string**



```

```




# 195 fax_use_ecm
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_use_ecm
- type: **boolean**



```

```




# 196 fax_v17_disabled
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_v17_disabled
- type: **boolean**



```

```




# 197 fax_verbose
- url: https://freeswitch.org/confluence/display/FREESWITCH/fax_verbose
- type: **boolean**



```

```




# 198 fifo_announce
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_announce
- type: **string**

If you invoke fifo without providing an announce file as an argument, mod_fifo will fall back to the value of fifo_announce.

```

```




# 199 fifo_bridged
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_bridged
- type: **boolean**

mod_fifo sets fifo_bridged to true when manually tracking a call.

```

```




# 200 fifo_caller_consumer_import
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_caller_consumer_import
- type: **string**

Import list of variables from the caller to the consumer.

```
<action application="set" data="fifo_caller_consumer_import=var1,var2"/>
```




# 201 fifo_caller_exit_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_caller_exit_key
- type: **dtmf digit**

When the caller dials one of the digits you define in fifo_caller_exit_key, they will exit the fifo.

```

```




# 202 fifo_chime_freq
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_chime_freq
- type: **integer**

The time to wait between playing each chime.

```

```




# 203 fifo_chime_list
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_chime_list
- type: **string**

A , delimited list of files to broadcast while the customer is waiting for someone to answer.

```

```




# 204 fifo_consumer_caller_import
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_caller_import
- type: **string**

Import list of variables from the consumer to the caller.

```
<action application="set" data="fifo_consumer_caller_import=var1,var2"/>
```




# 205 fifo_consumer_exit_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_exit_key
- type: **dtmf digit**

When fifo_consumer_exit_key is pressed, we hangup on the caller (unless we've put the caller on hold).

```

```




# 206 fifo_consumer_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_id
- type: **string**

If set, mod_fifo will set the fifo_serviced_by variable to this value when the consumer answers a call from the fifo.

```

```




# 207 fifo_consumer_wrapup_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_wrapup_key
- type: **dtmf digit**

If this variable is set and the consumer is in wait mode, mod_fifo will cause the consumer to reenter the fifo when they press fifo_consumer_wrapup_key or the fifo_consumer_wrapup_time milliseconds timeout is met.

```

```




# 208 fifo_consumer_wrapup_sound
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_wrapup_sound
- type: **string**

Played at the end of a serviced caller when wrapup starts.

```

```




# 209 fifo_consumer_wrapup_time
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_consumer_wrapup_time
- type: **string**

A timeout in milliseconds that, when reached, will cause the consumer to reenter the fifo.

```

```




# 210 fifo_hold_music
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_hold_music
- type: **string**

The music played to the consumer when they place a caller on hold by pressing 0. It falls back to fifo_music and then the default hold music if fifo_music is not set.

```

```




# 211 fifo_manual_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_manual_bridge
- type: **boolean**

readonly mod_fifo sets this variable to true when a manually tracking a call.

```

```




# 212 fifo_member_wait
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_member_wait
- type: **string**

If this variable is set to wait, the consumer's leg will not hangup when the caller hangs up. This is the default behavior.If set to nowait, the consumer's leg will hangup when the caller hangs up.

```
<action application="set" data="result=${fifo_member(add MyQueueName {fifo_member_wait=nowait}user/1001@VoiceNetwork.ca )"/>
```




# 213 fifo_music
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_music
- type: **string**



```

```




# 214 fifo_orbit_announce
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_orbit_announce
- type: **string**

This file will be played to the caller before transferring the caller to fifo_orbit_exten.

```

```




# 215 fifo_orbit_context
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_orbit_context
- type: **string**

Sets the context for fifo_orbit_exten. Must be set prior to placing the caller in the queue.

```
<action application="set" data="fifo_orbit_context=MyContext"/>
```




# 216 fifo_orbit_exten
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_orbit_exten
- type: **string**

Syntax: exten:timeoutSet a destination extension and timeout, and it will cause FreeSWITCH to run the caller through the FIFO until the specified timeout, then the caller will get transferred to the destination extension. Can be set before launching the caller into the FIFO.

```
efore executing the fifo application:
<action application="set" data="fifo_orbit_exten=MyFIFOVoicemail:60"/>
Now after 60 seconds of waiting in the FIFO, the caller will be transferred to MyFIFOVoicemail.
<action application="fifo" data="MyFIFO in"/>
```




# 217 fifo_outbound_announce
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_outbound_announce
- type: **string**

Play this to a member.

```

```




# 218 fifo_outbound_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_outbound_uuid
- type: **string**

Used by mod_fifo to track manual calls.

```

```




# 219 fifo_override_announce
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_override_announce
- type: **string**

Play this announcement to the consumer.

```

```




# 220 fifo_pop_order
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_pop_order
- type: **string**

A , delimited list of priorities to answered from most important to least important.

```
<action application="set" data="fifo_pop_order=1,2" />
```




# 221 fifo_position
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_position
- type: **integer**

readonly mod_fifo writes the caller's position to this variable.

```

```




# 222 fifo_priority
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_priority
- type: **string**



```

```




# 223 fifo_record_template
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_record_template
- type: **string**

If set, this is the file where the session will record to, expanded on the caller channel.

```

```




# 224 fifo_role
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_role
- type: **string**

For reporting purposes, i.e. in the CDRs, the variable will contain "consumer" or "caller" depending upon the call leg.

```

```




# 225 fifo_serviced_by
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_serviced_by
- type: **string**



```

```




# 226 fifo_serviced_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_serviced_uuid
- type: **string**



```

```




# 227 fifo_status
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_status
- type: **string**

The status of the consumer or caller. Usually WAITING or TALKING.

```

```




# 228 fifo_strategy
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_strategy
- type: **string**



```

```




# 229 fifo_target
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_target
- type: **string**



```

```




# 230 fifo_timestamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/fifo_timestamp
- type: **string**

Contains the timestamp of when the caller was bridged to the consumer.

```

```




# 231 fire_asr_events
- url: https://freeswitch.org/confluence/display/FREESWITCH/fire_asr_events
- type: **boolean**

If set, fire an event when speech is detected.See Alsomod_dptools: detect_speechmod_dptools: play_and_detect_speech

```

```




# 232 flow_billmsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/flow_billmsec
- type: **integer**



```

```




# 233 flow_billsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/flow_billsec
- type: **integer**



```

```




# 234 flow_billusec
- url: https://freeswitch.org/confluence/display/FREESWITCH/flow_billusec
- type: **integer**



```

```




# 235 force_transfer_context
- url: https://freeswitch.org/confluence/display/FREESWITCH/force_transfer_context
- type: **string**

When handling transfer/REFER FreeSWITCH normally inherits the context from the original channel. This variable forces the context in which to handle the transfer/REFER.

```
<action application="bridge" data="{force_transfer_context=some_context}sofia/gateway/gw_name/12345"/>
```




# 236 force_transfer_dialplan
- url: https://freeswitch.org/confluence/display/FREESWITCH/force_transfer_dialplan
- type: **string**

When handling transfer/REFER FreeSWITCH normally inherits the diaplan from the original channel. This variable forces the dialplan in which to handle the transfer/REFER.

```

```




# 237 funny_stun
- url: https://freeswitch.org/confluence/display/FREESWITCH/funny_stun
- type: **string**



```

```




# 238 grammar_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/grammar_dir
- type: **string**



```

```




# 239 group_confirm_cancel_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/group_confirm_cancel_timeout
- type: **integer**

If set, cancels leg_timeout after the call is answered. originate_timeout still remains active.When using group confirm, a call passes through three phases:Call is ringing.Call is answered, waiting to be confirmed.Call is confirmed and bridged.However, if you do<action application="set" data="group_confirm_cancel_timeout=1"/>then the timeout will only apply to phase 1. So, once phase 1 is crossed, leg_timeout counter stops.

```

```




# 240 group_confirm_file
- url: https://freeswitch.org/confluence/display/FREESWITCH/group_confirm_file
- type: **string**

This variable is used together with group_confirm_key. In group_confirm_file, you specify the wav file you want to play when the called party picks up the call. See answer confirmation for more examples.

```
<action application="set" data="group_confirm_file=/usr/local/freeswitch/sounds/take_call_question.wav" />
```




# 241 group_confirm_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/group_confirm_key
- type: **dtmf digit**

In the group_confirm_key variable, you define the DTMF that the called party should send to FS to bridge the call. If a wrong DTMF or no DTMF is sent, the called won't be bridged and the wav file will be repeated.

```
<action application="set" data="group_confirm_key=1" />
```




# 242 group_context
- url: https://freeswitch.org/confluence/display/FREESWITCH/group_context
- type: **string**



```

```




# 243 hangup_after_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/hangup_after_bridge
- type: **boolean**

Controls what happens to a calling (A) party when in a bridge state and the called (B) party hangs up. If true the dialplan will stop processing and the A leg will be terminated when the B leg terminates. If false (default) the dialplan continues to be processed after the B leg terminates. This is checked after park_after_bridge and transfer_after_bridge.

```
<action application="set" data="hangup_after_bridge=true"/>
```




# 244 hangup_after_conference
- url: https://freeswitch.org/confluence/display/FREESWITCH/hangup_after_conference
- type: **boolean**

Controls what happens to a calling (A) party when in a conference and the conference ends (e.g. endconf flag set and moderator leaves). If true (default) the dialplan will stop processing and the A leg will be terminated. If false the dialplan continues to be processed after the end of conference.

```
<action application="set" data="hangup_after_conference=false"/>

<!-- all regular memebers who dial "3500" will continue to the echo action after the "endconf" member below leaves conference -->
<!-- note that "hangup_after_true" is depenent on "endconf", one members (or more) must have endconf flag -->
<!-- if two or more managers join, call, participants will be kicked after laster member with "endconf" flag leaves -->
<!-- When a person calls into "3500-admin" and leaves, the partipants who came in via "3500" will continue to thier own echo app -->



    <extension name="cdquality_conferences">
      <condition field="destination_number" expression="^(35\d{2})$">
        <action application="answer"/>
        <action application="set" data="hangup_after_conference=false"/>
        <action application="conference" data="$1-${domain_name}@video-mcu-stereo"/>
        <action application="set" data="echo_encode_video=true"/>
        <action application="echo"/>
      </condition>
    </extension>


    <extension name="conference manager">
      <condition field="destination_number" expression="^(35\d{2})-admin$">
        <action application="set" data="conference_member_flags=endconf"/>
        <action application="conference" data="$1-${domain_name}@video-mcu-stereo"/>
      </condition>
    </extension>
```




# 245 hangup_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/hangup_cause
- type: **string**

This is set to the hangup cause of the A leg of the call (note that as such it doesn't make much sense before the end of the call). Often this will take the hangup cause from the B leg of the call, if there is one. For a list of hangup causes, see Hangup Causes.

```
<action application="log" data="1 A-leg hangup cause: ${hangup_cause}"/>
```




# 246 hangup_cause_q850
- url: https://freeswitch.org/confluence/display/FREESWITCH/hangup_cause_q850
- type: **string**

This is set to the Q850 numeric code of the hangup cause of the A leg of the call (note that as such it doesn't make much sense before the end of the call). Often this will take the hangup cause from the B leg of the call, if there is one. For a list of hangup causes, see Hangup Causes.

```
<action application="log" data="1 A-leg hangup Q850 cause: ${hangup_cause_q850}"/>
```




# 247 has_t38
- url: https://freeswitch.org/confluence/display/FREESWITCH/has_t38
- type: **boolean**



```

```




# 248 hold_hangup_xfer_exten
- url: https://freeswitch.org/confluence/display/FREESWITCH/hold_hangup_xfer_exten
- type: **string**

Controls what happens to a calling (A) party when in a bridge state and the bridge ends while the called (B) party is on hold. If not set on leg B (ie. the default), then A leg is hung up. If it is set on leg B, then leg A is transferred to the given extension, as per transfer_after_bridge.

```
<action application="set" data="hold_hangup_xfer_exten=1000:XML:default"/>
```




# 249 hold_music
- url: https://freeswitch.org/confluence/display/FREESWITCH/hold_music
- type: **string**

Per-channel hold music. Supports all audio formats and audio streams. The hold_music variable can also be set globally in vars.xml.

```
<action application="set" data="hold_music=/sounds/holdmusic.wav" />

<action application="set" data="hold_music=silence" />
You can also use phrase: to indicate to use a phrase instead of a specific file:
<action application="set" data="hold_music=phrase:my_hold_music" />
You can also set your hold_music to the special value indicate_hold instead of a music source and it will pass the hold req through but not the SDP:
<action application="set" data="hold_music=indicate_hold" />
For multi-tenant environment, if you want to have a separate MOH for the phone with hold button (like Polycom) that utilizes RE-INVITE with no media ip addr (0.0.0.0) for hold, you can override the hold-music values in the sip profile parameter similar to the following example:
<action application="bridge_export" data="hold_music=$${sounds_dir}/music/company-a.mp3"/>
```




# 250 holding_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/holding_uuid
- type: **string**



```

```




# 251 hostname
- url: https://freeswitch.org/confluence/display/FREESWITCH/hostname
- type: **string**

This global variable is set dynamically by the FreeSWITCH core and is set to the host name of the server on which FreeSWITCH is running. You cannot override the value of this variable by setting it. However if you change the host name of the server the value of the variable will be updated.

```

```




# 252 htdocs_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/htdocs_dir
- type: **string**



```

```




# 253 id
- url: https://freeswitch.org/confluence/display/FREESWITCH/id
- type: **string**



```

```




# 254 ignore_display_updates
- url: https://freeswitch.org/confluence/display/FREESWITCH/ignore_display_updates
- type: **string**

Tells freeswitch not to send display UPDATEs to the leg of the call. (update_display)

```
rom dialplan/default.xml, to set on A-Leg:
<action application="set"  data="ignore_display_updates=true"/>
To set on B-Leg:
<action application="bridge" data="{ignore_display_updates=true}sofia/gateway/provider/18005551212"/>
```




# 255 ignore_early_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/ignore_early_media
- type: **string**

Controls if the call returns on early media or not. Default is false.

```
<action application="set" data="ignore_early_media=true"/>
You may also specify a value for ignore_early_media in the argument to the bridge application, using the { } syntax. (ignore_early_media may not be specified on a per-leg basis, using the [ ] syntax, as it specifically is a global variable to the originate session):
<action application="bridge" data="{ignore_early_media=true}sofia/test-int/1001@somebox,sofia/test-int/1000@somehost"/>
Setting the value to ring_ready will work the same as ignore_early_media=true but also send a SIP 180 to the inbound leg when the first SIP 183 is caught.
<action application="set" data="ignore_early_media=ring_ready"/>
```




# 256 import
- url: https://freeswitch.org/confluence/display/FREESWITCH/import
- type: **string**

The import variable, when used before a bridge, imports the variables of the other channel on the actual channel. Implemented by mod_lcr.

```
<action application="set" data="import=this_is_a_variable_name"/>
```




# 257 inbound_dialplan
- url: https://freeswitch.org/confluence/display/FREESWITCH/inbound_dialplan
- type: **string**



```

```




# 258 inherit_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/inherit_codec
- type: **boolean**

If late negotiation is on, and you set inherit_codec=true on the A leg, the negotiated codec of the B leg will be forced onto the A leg.

```
<action application="set" data="inherit_codec=true"/>
```




# 259 initial_callee_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/initial_callee_id_name
- type: **string**

Sets the callee id name during the 183. This allows the phone to see the name of the called party prior to the phone being answered.

```
n example of setting this to the caller id name of the number being dialed:
<action application="set" data="initial_callee_id_name='${user_data(${dialed_extension}@${domain_name} var effective_caller_id_name)}'"/>
```




# 260 instant_ringback
- url: https://freeswitch.org/confluence/display/FREESWITCH/instant_ringback
- type: **boolean**

When set, ringback will not wait for indication before sending ringback tone to calling party.

```
this may cause undesirable effects, like ringing for 3 seconds that turns into a busy signal.
<action application="set" data="instant_ringback=true"/>
```




# 261 intercept_unanswered_only
- url: https://freeswitch.org/confluence/display/FREESWITCH/intercept_unanswered_only
- type: **boolean**

If set to true, the leg will only be intercepted if the channel is not answered.Default: false

```
<action application="set" data="intercept_unanswered_only=true"/>
<action application="intercept" data="myUUID"/>
```




# 262 intercept_unbridged_only
- url: https://freeswitch.org/confluence/display/FREESWITCH/intercept_unbridged_only
- type: **boolean**

If set to true, the leg will only be mod_dptools: intercept if the channel is not bridged to anyone.Default: false

```
<action application="set" data="intercept_unbridged_only=true"/>
<action application="intercept" data="myUUID"/>
```




# 263 ip_invite_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/ip_invite_params
- type: **string**



```

```




# 264 is_loopback
- url: https://freeswitch.org/confluence/display/FREESWITCH/is_loopback
- type: **boolean**

A variable added during the hangup phase that distinguishes loopback channels from real channels. This is useful for processing CDRs. is_loopback was made available as of 6/26/2013 this variable is only available after the channel has ended.

```

```




# 265 is_outbound
- url: https://freeswitch.org/confluence/display/FREESWITCH/is_outbound
- type: **boolean**



```

```




# 266 ivr_menu_status
- url: https://freeswitch.org/confluence/display/FREESWITCH/ivr_menu_status
- type: **string**

ivr_menu_status is a channel variable that returns the status of the IVR menu:successfailuretimeout

```

```




# 267 ivr_menu_terminator
- url: https://freeswitch.org/confluence/display/FREESWITCH/ivr_menu_terminator
- type: **dtmf digit**

You can set to none or the dtmf chars you want to terminate input.

```
<action application="set" data="ivr_menu_terminator=#"/>
```




# 268 jitterbuffer_msec
- url: https://freeswitch.org/confluence/display/FREESWITCH/jitterbuffer_msec
- type: **string**

Activates the jitter buffer. The jitter buffer has three params: length, max length, and max drift.

```
<action application="set" data="jitterbuffer_msec=60:200:20"/>
<action application="answer"/>
Or to set it on the subsequent outbound call: export sets a variable on both the current channel and on any channels it creates, the nolocal: disables setting it on the current channel and only sets it on the subsequent outbound channels.
<action application="export" data="nolocal:jitterbuffer_msec=60"/>
<action application="bridge" data="sofia/default/888@conference.freeswitch.org"/>
You can also activate the jitter buffer in the bridge as follows:
<action application="bridge" data="{jitterbuffer_msec=60}sofia/gateway/$1@gateway.com"/>
This will add a jitter buffer to packets flowing from a remote gateway towards a local freeswitch user. The network would look like this:
(local sip user) -----> FreeSWITCH -----> (remote gateway)
Where the link between the freeswitch and the remote gateway has a bad, jitter causing connection, and say the local sip user has no jitter buffering on their IP-phone. This will help the voice quality for the incoming audio.
```




# 269 language
- url: https://freeswitch.org/confluence/display/FREESWITCH/language
- type: **string**



```

```




# 270 last_app
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_app
- type: **string**



```

```




# 271 last_arg
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_arg
- type: **string**



```

```




# 272 last_bridge_hangup_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_bridge_hangup_cause
- type: **string**

This is set to the hangup cause of the last bridged B leg of the call. For a list of hangup causes, see Hangup Causes.

```
<action application="log" data="B-leg hangup cause: ${last_bridge_hangup_cause}"/>
```




# 273 last_bridge_proto_specific_hangup_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_bridge_proto_specific_hangup_cause
- type: **string**

This shows the last bridge hangup cause by SIP response code, e.g. "sip:404"

```

```




# 274 last_bridge_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_bridge_to
- type: **string**



```

```




# 275 last_dtmf_duration
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_dtmf_duration
- type: **string**



```

```




# 276 last_file_position
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_file_position
- type: **string**

deprecated This is possibly deprecated.

```

```




# 277 last_matching_digits
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_matching_digits
- type: **string**

Contains the last set of digits that the user dialed when using the "dmachine" digit-handling. This is most commonly used with the bind_digit_action dialplan application.TODO What is dmachine ? Source search on the source.TODO Does this only work with mod_dptools: bind_digit_action?

```
<action application="log" data="INFO User just dialed ${last_matching_digits}"/>
```




# 278 last_transferred_conference
- url: https://freeswitch.org/confluence/display/FREESWITCH/last_transferred_conference
- type: **string**

readonly Contains the name of the last conference that this channel was connected to.

```
<action application="log" data="INFO Last conference this person visited was [${last_transferred_conference}]"/>
```




# 279 lcr_auto_route
- url: https://freeswitch.org/confluence/display/FREESWITCH/lcr_auto_route
- type: **string**



```

```




# 280 lcr_route_count
- url: https://freeswitch.org/confluence/display/FREESWITCH/lcr_route_count
- type: **integer**



```

```




# 281 left_hanging_extension
- url: https://freeswitch.org/confluence/display/FREESWITCH/left_hanging_extension
- type: **string**



```

```




# 282 leg_delay_start
- url: https://freeswitch.org/confluence/display/FREESWITCH/leg_delay_start
- type: **string**

Specifies a wait time in seconds before each leg is called in a forked dial scenario. Can be used in per-leg [], but not in global {} for the dialstring.

```
<action application="bridge" data="sofia/profile/dest1,[leg_delay_start=10]sofia/profile/dest2,[leg_delay_start=15]sofia/profile/dest3"/>
```




# 283 leg_progress_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/leg_progress_timeout
- type: **string**



```
ake all bridged calls fail over to the next in 6 seconds:
<action application="export" data="leg_progress_timeout=6"/>
```




# 284 leg_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/leg_timeout
- type: **integer**

Timeout for each leg in an originate dialstring. Can be used in per-leg [], but not in global {} for the dialstring. For global, use originate_timeout.You can also use leg_progress_timeout to specify the maximum time we will wait before we get media (whether it's early media, ringing or answer), allowing you to avoid going to voicemail for a particular line.If you are using group confirm then you can cancel the timeout by using the group_confirm_cancel_timeout channel variable. If leg_delay_start is also used, leg_timeout will not start the timeout counter until after the extension starts to be bridged to.

```
<action application="bridge" data="[leg_timeout=15]user/hastoanswerquickly/some.domain.com,[leg_timeout=60]user/hasaminutetoanswer@some.domain.com"/>
```




# 285 limit_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_id
- type: **string**



```

```




# 286 limit_ignore_transfer
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_ignore_transfer
- type: **string**



```

```




# 287 limit_max
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_max
- type: **string**



```

```




# 288 limit_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_rate
- type: **string**



```

```




# 289 limit_realm
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_realm
- type: **string**



```

```




# 290 limit_usage
- url: https://freeswitch.org/confluence/display/FREESWITCH/limit_usage
- type: **string**



```

```




# 291 local_ip_v4
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_ip_v4
- type: **string**

This global variable is set dynamically by the FreeSWITCH core by asking the underlying OS for the IP address of the server on which FreeSWITCH is running. If the server has multiple IP addresses this will be set to the first one returned by the OS. In the default configuration there are many settings that use this global variable. You cannot override the value of this global variable, because it will be reset by the FreeSWITCH core every minute. If your server has multiple IP addresses and you want to force FreeSWITCH to use a particular IP address, you can create a global variable force_local_ip_v4 and set it to the IP address you prefer. You must also set the local_ip_v4 variable to this IP address, you can do it by simply setting local_ip_v4 to use the value of force_local_ip_v4  Example: force_local_ip_v4
<X-PRE-PROCESS cmd="set" data="force_local_ip_v4=1.1.1.1"/>
<X-PRE-PROCESS cmd="set" data="local_ip_v4=$${force_local_ip_v4 }"/>
 FreeSWITCH will not validate that the IP address you entered for force_local_ip_v4 is actually pointing to the server, it's up to you to ensure that you use a valid IP address that's routed correctly to the server.

```

```




# 292 local_ip_v6
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_ip_v6
- type: **string**

This global variable is set dynamically by the FreeSWITCH core by asking the underlying OS for the IPv6 address of the server on which FreeSWITCH is running (if it supports IPv6). If the server has multiple IPv6 addresses this will be set to the first one returned by the OS. In the default configuration this variable is used for setting up IPv6 SIP and Verto Profiles.You cannot override the value of this global variable, because it will be reset by the FreeSWITCH core every minute. If your server has multiple IPv6 addresses and you want to force FreeSWITCH to use a particular IPv6 address, you can create a global variable force_local_ip_v6 and set it to the IP address you prefer. You must also set the local_ip_v6 variable to this IP address, you can do it by simply setting local_ip_v6 to use the value of force_local_ip_v6. Example: force_local_ip_v6
<X-PRE-PROCESS cmd="set" data="force_local_ip_v4=1.1.1.1"/>
<X-PRE-PROCESS cmd="set" data="local_ip_v4=$${force_local_ip_v4 }"/>
 FreeSWITCH will not validate that the IPv6 address you entered for force_local_ip_v6 is actually pointing to the server, it's up to you to ensure that you use a valid IP address that's routed correctly to the server.

```

```




# 293 local_mask_v4
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_mask_v4
- type: **string**

This global variable is set dynamically by the FreeSWITCH core by using the network mask received from the underlying OS when determining the local_ip_v4.

```

```




# 294 local_media_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_media_ip
- type: **string**



```

```




# 295 local_media_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_media_port
- type: **string**



```

```




# 296 local_video_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_video_ip
- type: **string**



```

```




# 297 local_video_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/local_video_port
- type: **string**



```

```




# 298 log_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/log_dir
- type: **string**



```

```




# 299 loopback_bowout_on_execute
- url: https://freeswitch.org/confluence/display/FREESWITCH/loopback_bowout_on_execute
- type: **boolean**

Set to true to have one-legged loopback channels "bow out" (remove the loopback legs) of the call.loopback_bowout_on_execute is only useful to single leg calls. You never have to set it: loopback_bowout is true by default. It tries to remove loopback by doing uuid_bridge.When setting loopback_bowout=false, a bridged loopback call results in 4 legs (a-leg, loopback-a, loopback-b, b-leg).When setting loopback_bowout=true, a bridged loopback call results in 2 legs (a-leg, b-leg).During the call setup phase even with loopback_bowout=true there will always be 4 legs, however. loopback-a and loopback-b will be destroyed when a-leg and b-leg are successfully bridged.

```
<action application="set" data="loopback_bowout_on_execute=true"/>
```




# 300 loopback_export
- url: https://freeswitch.org/confluence/display/FREESWITCH/loopback_export
- type: **string**

A list of channel variables to pass from loopback-a to loopback-b.

```

```




# 301 loopback_leg
- url: https://freeswitch.org/confluence/display/FREESWITCH/loopback_leg
- type: **string**



```

```




# 302 max_forwards
- url: https://freeswitch.org/confluence/display/FREESWITCH/max_forwards
- type: **integer**

Contains the current Max-Forwards value provided in the originating request. The Max-Forwards value is decremented by one for each hop in a SIP call, when the Max-Forwards value is depleted the receiving agent must not pass the call onwards.The max_forwards variable may be set on an outbound channel, some providers such as BT IP Exchange insist on a minimum value to faithfully terminate the call, 50 in BT's case. If the max_forwards value is reset it can cause potential cyclic calls between two operators who loop calls back to each other in error. Use wisely.

```
ridge an incoming call to a provider requiring a minimum Max-Forwards value:
<action application="bridge" data="{max_forwards=65}sofia/gateway/ipexchange/442920180123"/>
```




# 303 max_session_transfers
- url: https://freeswitch.org/confluence/display/FREESWITCH/max_session_transfers
- type: **integer**

Allows to separate counting transfers from max_forwards.Normally, when transfer application is invoked, max_forwards is decremented.When max_session_transfers variable is set in a channel, max_forwards is not touched when transfer application is invoked and max_session_transfers value is decremented instead.This can be used to prevent calls going on-hook in larger IVR applications when many transfers are expected.

```

```




# 304 mduration
- url: https://freeswitch.org/confluence/display/FREESWITCH/mduration
- type: **string**



```

```




# 305 media_bug_answer_req
- url: https://freeswitch.org/confluence/display/FREESWITCH/media_bug_answer_req
- type: **boolean**

Start recording only when the channel has been answered.

```
<action application="set" data="media_bug_answer_req=true"/>
```




# 306 media_mix_inbound_outbound_codecs
- url: https://freeswitch.org/confluence/display/FREESWITCH/media_mix_inbound_outbound_codecs
- type: **boolean**

Set which list of codecs is offered to the B-leg.FreeSWITCH used to take the codecs from the inbound A-leg and offer them out to the B-leg mixed with the configured list of outbound codecs. With large lists of codecs this can exceed the MTU of the UDP message and cause call setup failures.As of 

                     FS-8321
                            -
            Getting issue details...
                                                STATUS
                
 the old behavior now requires the variable media_mix_inbound_outbound_codecs=true as the new default behavior is to offer the exact same codecs on the outbound B-leg that were offered on the inbound A-leg.

```
<action application="set" data="media_mix_inbound_outbound_codecs=true"/>
```




# 307 media_webrtc
- url: https://freeswitch.org/confluence/display/FREESWITCH/media_webrtc
- type: **boolean**

Used to instruct FS to generate an INVITE for a WebRTC call. For example, in case you need to originate a WebRTC call but you are not calling a SIP UA that is registered with FS (if the UA is registered with FS, FS knows it should originate a WebRTC call).

```
media_webrtc=true}
```




# 308 memory_debug
- url: https://freeswitch.org/confluence/display/FREESWITCH/memory_debug
- type: **boolean**



```

```




# 309 min_dup_digit_spacing_ms
- url: https://freeswitch.org/confluence/display/FREESWITCH/min_dup_digit_spacing_ms
- type: **integer**

Duplicate inband DTMF that starts sooner than this time will be ignored. That is, this is the minimum gap from the end of the first digit and the start of the repeated digit required for two digits to be detected. This value is 0 by default. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="min_dup_digit_spacing_ms=40"/>
<action application="spandsp_start_dtmf" />
```




# 310 mod_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/mod_dir
- type: **string**



```

```




# 311 monitor_early_media_fail
- url: https://freeswitch.org/confluence/display/FREESWITCH/monitor_early_media_fail
- type: **string**

Monitors early media for failure conditions, such as a busy signal. This allows faster processing of failed calls when ignoring early media.The syntax is a series of ! delimited early media conditions in the following format:condition_name:number_of_hits:tone_detect_frequenciescondition_nameuser defined name for the error conditionnumber_of_hitsthe number of times the tone must be heard before considering it a failtone_detect_frequenciesthe frequencies to listen for (delimited by + instead of ,). See tone_detect this variable only works when ignore_early_media is set to true.

```
<action application="bridge" data="{ignore_early_media=true,monitor_early_media_fail=user_busy:2:480+620!destination_out_of_order:2:1776.7}sofia/dial/string"/>
```




# 312 monitor_early_media_ring
- url: https://freeswitch.org/confluence/display/FREESWITCH/monitor_early_media_ring
- type: **string**

Monitors early media for a user-specific ring tone. Each time the tone is heard, the switch will increment an internal counter for that leg. Once the counter reaches monitor_early_media_ring_total (or this variable has not been set) then the early media will be sent.The syntax is a series of ! delimited early media conditions in the following format:condition_name:number_of_hits:tone_detect_frequenciescondition_nameuser defined name for the error conditionnumber_of_hitsthe number of times the tone must be heard before considering it a failtone_detect_frequenciesthe frequencies to listen for (delimited by + instead of ,). See tone_detect this variable only works when ignore_early_media is set to true.

```
<action application="bridge" data="{monitor_early_media_ring_total=3,monitor_early_media_ring=usring:1:440.0+480.0!ukring:2:400+450}sofia/gateway/yourgateway/1239@conference.freeswitch.org"/>
```




# 313 monitor_early_media_ring_total
- url: https://freeswitch.org/confluence/display/FREESWITCH/monitor_early_media_ring_total
- type: **string**

Specifies the number of user defined ring tones that can be heard before failing. To be used with monitor_early_media_ring.

```
<action application="bridge" data="{ignore_early_media=true,monitor_early_media_ring_total=3,monitor_early_media_ring=us_ring:1:440.0+480.0}sofia/dial/string"/>
```




# 314 monitor_fail_dispo
- url: https://freeswitch.org/confluence/display/FREESWITCH/monitor_fail_dispo
- type: **string**

This variable can be used to provide a custom originate_disposition as the result of an early media failure using monitor_early_media_fail or monitor_early_media_ring. If this variable is not set, a default value of monitor_early_media_fail or monitor_early_media_ring will be placed in originate_disposition.

```
<action application="bridge" data="{ignore_early_media=true,monitor_fail_dispo=strange_bleep_attack,monitor_early_media_fail=user_busy:2:1234}sofia/dial/string"/>
```




# 315 monitor_ring_dispo
- url: https://freeswitch.org/confluence/display/FREESWITCH/monitor_ring_dispo
- type: **string**



```

```




# 316 myid
- url: https://freeswitch.org/confluence/display/FREESWITCH/myid
- type: **string**



```

```




# 317 nat_private_addr
- url: https://freeswitch.org/confluence/display/FREESWITCH/nat_private_addr
- type: **string**

If you use auto-nat and a public IP address was detected, this variable will be set with the private IP address to which the detected public IP address is mapped.

```

```




# 318 nat_public_addr
- url: https://freeswitch.org/confluence/display/FREESWITCH/nat_public_addr
- type: **string**

If you use auto-nat and FreeSWITCH was able to identify the public IP address pointing to your server, this variable will be set with the auto detected public IP address.

```

```




# 319 nat_type
- url: https://freeswitch.org/confluence/display/FREESWITCH/nat_type
- type: **string**

If you use auto-nat FreeSWITCH will set this global variable to the type of auto nat device it detected this can be either pmp or upnp.

```

```




# 320 NDLB_support_asterisk_missing_srtp_auth
- url: https://freeswitch.org/confluence/display/FREESWITCH/NDLB_support_asterisk_missing_srtp_auth
- type: **boolean**



```

```




# 321 new_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/new_name
- type: **string**



```

```




# 322 no_throttle_limits
- url: https://freeswitch.org/confluence/display/FREESWITCH/no_throttle_limits
- type: **boolean**

You set this variable to true on your outbound calls to have them not count in sps

```
{no_throttle_limits=true}
```




# 323 nonexistantvar
- url: https://freeswitch.org/confluence/display/FREESWITCH/nonexistantvar
- type: **string**



```

```




# 324 original_caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/original_caller_id_name
- type: **string**



```

```




# 325 original_caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/original_caller_id_number
- type: **string**



```

```




# 326 original_destination_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/original_destination_number
- type: **string**



```

```




# 327 originate_continue_on_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_continue_on_timeout
- type: **boolean**

Controls whether or not a bridge should continue after timing out. This variable resets the timeout after each |. Default is false: die on first timeout.

```
<action application="set" data="originate_continue_on_timeout=true"/>
```




# 328 originate_delay_start
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_delay_start
- type: **integer**

You can specify a wait time in milliseconds before origination. This variable can be used in Enterprise originate where the variable leg_delay_start cannot be used.

```
<action application="bridge" data="sofia/profile/dest1:_:{originate_delay_start=10000}sofia/profile/dest2:_:{originate_delay_start=15000}sofia/profile/dest3"/>
A more complex example with breakdown and timeline (seconds in brackets):
<action application="bridge","users/1000:_:{originate_delay_start=8000}user/2302:_:{originate_delay_start=14000}sofia/gateway/flowroute/1231231234"/>
Assuming all users just let it ring:[00] - user 1000 rings
[10] - user 2302 rings
[15] - user 1231231234 rings
Assuming user 1000 declines after 2 seconds, other users ring:[00] - user 1000 rings
[08] - user 2302 rings
[14] - user 1231231234 rings
```




# 329 originate_disposition
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_disposition
- type: **string**

readonly This is the originate disposition or hangup cause that is returned. (LEG B)The value is updated after every bridge attempt, if the bridge is not successful.

```

```




# 330 originate_retries
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_retries
- type: **integer**

Number of retries before giving up on originating a call (default is 0).

```

```




# 331 originate_retry_sleep_ms
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_retry_sleep_ms
- type: **integer**

This will set how long FreeSWITCH is going to wait between sending invite messages to the receiving gateway.

```
ait 500ms between sending invite messages to the called gateway:
<action application="set" data="originate_retry_sleep_ms=500"/>
```




# 332 originate_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/originate_timeout
- type: **integer**

Determines how long FreeSWITCH is going to wait for a response from the invite message sent to the gateway. In effect, it is a way to control the timeout for a bridge/originate consisting of multiple endpoints.Default Value: 60

```
seful if you are using multiple gateways. In this example, FreeSWITCH will wait 2 seconds for 192.168.1.4 to respond to the invite message before trying the next gateway:
<action application="set" data="originate_timeout=2"/>
<action application="bridge" data="sofia/default/$1@192.168.1.4|sofia/default/$1@192.168.1.5"/>

<action application="bridge" data="{originate_timeout=10}[leg_timeout=5]sofia/default/foo1@bar1|[leg_timeout=5]sofia/default/foo2@bar2"/>

<action application="bridge" data="{originate_timeout=24}${group_call(sales@$${domain})}"/>
```




# 333 originating_leg_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/originating_leg_uuid
- type: **string**

Shows the UUID of the originating leg on an outbound channel.

```
n A-leg CDR:
<uuid>cb5f5b90-75a0-11e0-873b-d1cba9e0f1b8</uuid>
<call_uuid>cb5f5b90-75a0-11e0-873b-d1cba9e0f1b8</call_uuid>
In B-leg CDR: Note that the leg UUIDs are different. The call_uuid matches the two legs together, but the originating_leg_uuid can do so as well.
<uuid>cb8633aa-75a0-11e0-873d-d1cba9e0f1b8</uuid>
<call_uuid>cb5f5b90-75a0-11e0-873b-d1cba9e0f1b8</call_uuid>
<originating_leg_uuid>cb5f5b90-75a0-11e0-873b-d1cba9e0f1b8</originating_leg_uuid>
```




# 334 origination_callee_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_callee_id_name
- type: **string**

Set on the inbound leg to control what caller ID name appears in the caller phone's display. Also see ignore_diplay_updates which affect the processing of these variables.

```
If set doesn't work, try using export instead.
<action application="bridge" data="{origination_callee_id_name=Reginald}sofia/gateway/provider/<Reginald's cellphone number>" />
```




# 335 origination_callee_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_callee_id_number
- type: **string**

Set on the inbound leg to control what caller ID number appears in the caller phone's display. Also see ignore_diplay_updates which affect the processing of these variables.

```
<action application="bridge" data="{origination_callee_id_name=Reginald,origination_callee_id_number=2332}sofia/gateway/provider/<Reginald's cellphone number>" />
```




# 336 origination_caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_caller_id_name
- type: **string**

Sets the origination callerid name (LEG A).If you want to set the Caller ID on an origination call you should add this inside the {} brackets before the dialstring.

```
<action application="set" data="origination_caller_id_name=Uncle Sam"/>
```




# 337 origination_caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_caller_id_number
- type: **string**

Sets the origination callerid number. (LEG A)If you want to set the Caller ID on an origination call you should add this inside the {} brackets before the dialstring.

```
if you want to relay the Caller ID Number of an incoming PSTN call via FXO gateway, comment out this variable.
<action application="set" data="origination_caller_id_number=9185551212"/>
```




# 338 origination_cancel_key
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_cancel_key
- type: **dtmf digit**

Used with attended transfer function. Allows you to set a DTMF key that will cancel the att_xfer and re-connect to the call on hold. It'll also cancel a bridge that hasn't been bridged as yet (and thus can't be terminated with a bridge_terminate_key). Implemented in revision 14650.

```
<action application="set" data="origination_cancel_key=#"/>
```




# 339 origination_channel_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_channel_name
- type: **string**

Set this in the {} when doing an originate to create a custom channel name.

```
originate {origination_channel_name='this_is_my_channel_name'}loopback/9664 9195
```




# 340 origination_nested_vars
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_nested_vars
- type: **string**



```

```




# 341 origination_privacy
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_privacy
- type: **string**

Sets privacy profile for caller.Options:screenhide_namehide_number

```
<action application="set" data="origination_privacy=hide_name"/>
```




# 342 origination_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_timeout
- type: **string**

deprecated Use originate_timeout.

```

```




# 343 origination_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/origination_uuid
- type: **string**

You can specify the uuid of an originated call using origination_uuid. This way you can hang up the call before it is answered, since you know the uuid. Just remember you need to use the create_uuid command to generate the uuid as 2 calls with the same uuid == bad! Bridge also uses the origination syntax so you can also pre-allocate the UUID for the new channel resulting from a bridge by using the {}/[] syntax and specifying origination_uuid there, too.

```
originate [origination_uuid=....]sofia/<profile>/<extension>
```




# 344 originator
- url: https://freeswitch.org/confluence/display/FREESWITCH/originator
- type: **string**

Holds the UUID of the channel that originated the call. It's used to notify a parent channel that the state of its child has changed, hence interrupting any blocking reads on the parent. It's automatically set and read by FreeSWITCH internals. Usually, the user won't want to set it.

```

```




# 345 originator_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/originator_codec
- type: **string**

Sets the codec for calls originated from LEG A (setting the codec for LEG B)

```
<action application="set" data="originator_codec=PCMU"/>
```




# 346 originator_video_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/originator_video_codec
- type: **string**



```

```




# 347 other_loopback_leg_uuid
- url: https://freeswitch.org/confluence/display/FREESWITCH/other_loopback_leg_uuid
- type: **string**



```

```




# 348 outbound_redirect_fatal
- url: https://freeswitch.org/confluence/display/FREESWITCH/outbound_redirect_fatal
- type: **boolean**

When doing a simultaneous call to multiple endpoints, a 302 redirect can cause all the endpoints to stop ringing and the call will follow the redirect. When this channel variable is set it causes an endpoint that sends back a 302 redirect to be removed from the call list and the other endpoints continue to ring.

```
<action application="bridge" data="{outbound_redirect_fatal=true}${group_call(sales@$${domain})}"/>
```




# 349 pa_hold_file
- url: https://freeswitch.org/confluence/display/FREESWITCH/pa_hold_file
- type: **string**



```

```




# 350 pa_ring_file
- url: https://freeswitch.org/confluence/display/FREESWITCH/pa_ring_file
- type: **string**



```

```




# 351 park_after_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/park_after_bridge
- type: **boolean**

If set to true, it will park the call after bridge returns. This is checked before transfer_after_bridge and hangup_after_bridge.

```
<action application="set" data="park_after_bridge=true"/>
<action application="bridge" data="sofia/gateway/myprovider/5551231234"/>
```




# 352 park_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/park_timeout
- type: **string**

When set, a parked call will disconnect after the timeout has occurred. Timeout is specified in seconds. If no park_timeout value is set then the parked call will be held indefinitely or until it is removed with a uuid_transfer.

```
<action application="set" data="park_timeout=30"/>
<action application="park"/>
You can also specify which hangup_cause you need when the channel is disconnected by park_timeout.
<action application="set" data="park_timeout=30:MEDIA_TIMEOUT"/>
```




# 353 pass_rfc2833
- url: https://freeswitch.org/confluence/display/FREESWITCH/pass_rfc2833
- type: **boolean**

If set, it passes RFC 2833 DTMF digits from one side of a bridge to the other, untouched. If unset, it decodes and re-encodes them before passing them on.TODO RFC 2833 is obsoleted by RFC 4733.

```
<action application="set" data="pass_rfc2833=true"/>
```




# 354 passthru_ptime_mismatch
- url: https://freeswitch.org/confluence/display/FREESWITCH/passthru_ptime_mismatch
- type: **boolean**

If ptime from leg A and leg B don't match and if mod_com_g729 is used, the call would normally use the codec to re-packetize the RTP stream.With this parameter, mod_com_g729 will re-packetize without decoding/encoding, as mod_g729 would do.

```
his has to be set in {} before bridging. That will probably not work if set using export before bridging.
<action application="bridge" data="{passthru_ptime_mismatch=true}sofia/gateway/trunk/$1"/>
Globally in vars.xml
<X-PRE-PROCESS cmd="set" data="passthru_ptime_mismatch=true"/>
```




# 355 playback_delimiter
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_delimiter
- type: **string**

When set, allows playback of multiple files in sequence, which are separated by the specified delimiter. Uses mod_dptools: file_string internally.

```
etting playback_delimiter to the following:
<action application="set" data="playback_delimiter=&"/>
Permits the streaming of files foo.wav and bar.wav one right after the other:
<action application="playback" data="foo.wav&bar.wav"/>
```




# 356 playback_last_offset_pos
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_last_offset_pos
- type: **string**

Contains the file offset of the file that just played back. This can be used to resume playback at that position at a later time.

```

```




# 357 playback_ms
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_ms
- type: **integer**

Contains the number of milliseconds of the length of the audio file just played back. There is also a variable playback_seconds which stores the length in whole seconds.

```

```




# 358 playback_samples
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_samples
- type: **integer**

Contains the number of samples in the audio file just played back.

```

```




# 359 playback_sleep_val
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_sleep_val
- type: **integer**

How long to pause after a file is played. Default is 250 milliseconds.

```
o play a list of short files one right after the other, with no pause in between:
<action application="set" data="playback_sleep_val=0"/>
```




# 360 playback_terminator_used
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_terminator_used
- type: **string**

Contains the digit that the caller used to terminate a playback. Is undef when a new playback is called.

```

```




# 361 playback_terminators
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_terminators
- type: **dtmf digit**

Syntax: playback_terminators=123456789*0# | any | noneAllows you to set which DTMF tones, if pressed during the playback of a file or during mod_dptools: play_and_detect_speech, will terminate playback. The default terminator is * (star).Digits not specified as terminators will be collected, but not interrupt playback.none - undefines the terminator digit, meaning no DTMF tone will interrupt playbackany - any DTMF will interrupt playbackModifiers:+ (plus) - includes the following terminator digit along with the other DTMF digits in the returned stringx (letter ex) - includes the following terminator digit in the returned string and also returns SWITCH_STATUS_RESTART

```
ither * (star) or # (bar/pound/square) will interrupt the subsequent playback, tone_stream, or say operation:
<action application="set" data="playback_terminators=#*"/>
If DTMF 9 is dialed during playback, it will interrupt playback and return the digit 9 along with any other dialed digits; if * is dialed it will only interrupt playback without being included in the DTMF string returned:
<action application="set" data="playback_terminators=*+9"/>
```




# 362 playback_timeout_sec
- url: https://freeswitch.org/confluence/display/FREESWITCH/playback_timeout_sec
- type: **integer**

Set timeout for playback. This is very useful if you want to play short excerpts of a file that could be very long.

```
<action application="set" data="playback_timeout_sec=10"/>
```




# 363 pound_replace
- url: https://freeswitch.org/confluence/display/FREESWITCH/pound_replace
- type: **string**



```

```




# 364 presence_data_cols
- url: https://freeswitch.org/confluence/display/FREESWITCH/presence_data_cols
- type: **string**

You can customize the fields in FreeSWITCH's internal channels table by using the global variable presence_data_cols.Use : to separate the column names in presence_data_cols.You must define the field in the channels table first:ALTER TABLE channels ADD COLUMN accountcode VARCHAR(256)

```
n conf/vars.xml:
<X-PRE-PROCESS cmd="set" data="presence_data_cols=accountcode:domain_name"/>
```




# 365 presence_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/presence_id
- type: **string**

Will instruct mod_sofia to invoke a PRESENCE_IN event that will assert the BLF lamp for the subscribed entity. This only lasts while the channel still exists so it should not be used for persistent status (i.e. a user that is DND, or an agent logged into a queue).

```
<action application="set" data="presence_id=${dialed_extension}@${domain_name}"/>
```




# 366 process_cdr
- url: https://freeswitch.org/confluence/display/FREESWITCH/process_cdr
- type: **string**

Indicates how to process call detail records.Options:false - do not process the recordtrue - process records for both legs. This is the default.a_only - only process records on the a legb_only - only process records on the b legThis variable is unconditionally exported.

```
<action application="set" data="process_cdr=a_only"/>
```




# 367 profile_created_time
- url: https://freeswitch.org/confluence/display/FREESWITCH/profile_created_time
- type: **integer**

Contains the start time (in microseconds) of when the call profile was created.

```
n the event that a call is transferred, this is the effective created_time for that transfer. For example, if you did this call flow:
2000 > 2001 (created_time=1357138714 / profile_created_time=1357138714)
transfer to 2002 (created_time=1357138714 / profile_created_time=1357138752)
transfer to 2003 (created_time=1357138714 / profile_created_time=1357138766)
transfer to 2004 (created_time=1357138714 / profile_created_time=1357138784)
You would still use progress_time to retrieve the progress start time, no matter if it's a transfer leg or not.
```




# 368 profile_start_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/profile_start_epoch
- type: **integer**



```

```




# 369 profile_start_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/profile_start_stamp
- type: **string**



```

```




# 370 profile_start_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/profile_start_uepoch
- type: **integer**



```

```




# 371 progress_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_epoch
- type: **integer**



```

```




# 372 progress_media_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_media_epoch
- type: **integer**



```

```




# 373 progress_media_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_media_stamp
- type: **string**



```

```




# 374 progress_media_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_media_uepoch
- type: **integer**



```

```




# 375 progress_mediamsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_mediamsec
- type: **integer**



```

```




# 376 progress_mediasec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_mediasec
- type: **integer**



```

```




# 377 progress_mediausec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_mediausec
- type: **integer**



```

```




# 378 progress_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_stamp
- type: **string**



```

```




# 379 progress_time
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_time
- type: **string**



```

```




# 380 progress_timeout
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_timeout
- type: **integer**

This is the maximum time we will wait before we get media (whether it's early media, ringing or answer) e.g. maximum PDD before abandoning the route -- the time from Sending the INVITE to receiving the first ringing response for example: a SIP/2.0 180 Ringing or 183. Typical fixed lines have a PDD of under 3 seconds, and mobiles of under 8 seconds.I set my progress_timeout to 13 seconds to accommodate for slow-setup mobile connections, however, it can probably be shorter. -- Avi MarcusTwo scenarios:If a carrier is having issues with their platform, all calls might timeout.If it's not a carrier issue -- if a single carrier timed out at 13 seconds and the user actually waited, the call rarely connected via any other carrier (although they all expired at 13 seconds).See also: Early Media

```
<action application="set" data="progress_timeout=20"/>
```




# 381 progress_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/progress_uepoch
- type: **integer**



```

```




# 382 progressmsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progressmsec
- type: **integer**



```

```




# 383 progresssec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progresssec
- type: **integer**



```

```




# 384 progressusec
- url: https://freeswitch.org/confluence/display/FREESWITCH/progressusec
- type: **integer**



```

```




# 385 proto_specific_hangup_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/proto_specific_hangup_cause
- type: **string**

This variable will cause FreeSWITCH to force the SIP response code to a specific setting when hanging up a call. The example below is one where all possible extensions have been tested and failed and you want FreeSWITCH to generate and respond with a specific code. (This is not a passthrough example).By the way, you'll be unable to rewrite the hangup cause for a bridge that gets a 180 or 183 packet from the gateway before getting a 4xx, 5xx or 6xx packet (because those bridges don't 'fail'). This happens with SIP providers that give a 183 Session Progress before a 404 Not Found if the PSTN number dialed doesn't exist.

```
<extension name="nothing_left" continue="true">
  <condition break="always">
    <action application="set" data="proto_specific_hangup_cause=sip:503"/>
    <action application="hangup"/>
  </condition>
</extension>
Example SIP Response Map
<extension name="from_gw_to_internal">
  <condition field="destination_number" expression="^(.*)$">
    <action application="set" data="hangup_after_bridge=true"/>
    <action application="set" data="continue_on_fail=19"/>
    <action application="bridge" data="{sip_cid_type=none}sofia/gateway/gw/$1"/>
    <action application="transfer" data="480to503"/>
  </condition>
</extension>

<extension name="480to503">
  <condition field="${proto_specific_hangup_cause}" expression="sip:480">
    <action application="set" data="sip_ignore_remote_cause=true"/>
    <action application="respond" data="503"/>
    <action application="hangup" data="NORMAL_CIRCUIT_CONGESTION"/>
  </condition>
</extension>
```




# 386 proxy_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/proxy_media
- type: **boolean**

Proxy Media mode puts Freeswitch in a "transparent proxy mode" for the RTP streams. The RTP streams still pass through freeswitch (unlike bypass media mode), however it is lighter on the CPU because freeswitch never even parses the packets or processes them in any way, it simply forwards them onwards.See also: Proxy Media

```
Late Negotiation () must be enabled in sip profile for this to work in the dialplan.
<action application="set" data="proxy_media=true"/>
```




# 387 rdnis
- url: https://freeswitch.org/confluence/display/FREESWITCH/rdnis
- type: **string**



```

```




# 388 read_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/read_codec
- type: **string**

readonly The negotiated codec of the inbound call leg.

```

```




# 389 read_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/read_rate
- type: **string**



```

```




# 390 read_result
- url: https://freeswitch.org/confluence/display/FREESWITCH/read_result
- type: **string**



```

```




# 391 read_terminator_used
- url: https://freeswitch.org/confluence/display/FREESWITCH/read_terminator_used
- type: **dtmf digit**

Contains the digit that the caller used to terminate a playback.

```

```




# 392 RECORD_APPEND
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_APPEND
- type: **boolean**

Recording is appended to file. Set RECORD_APPEND=true on the channel and all recordings will behave this way to formats which support it (curently mod_sndfile for WAV, etc.)

```
<action application="set" data="RECORD_APPEND=true"/>
```




# 393 RECORD_ARTIST
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_ARTIST
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_ARTIST=Unknown"/>
```




# 394 RECORD_BRIDGE_REQ
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_BRIDGE_REQ
- type: **boolean**

Record session only when the channel is bridged. See 

                     FS-5127
                            -
            Getting issue details...
                                                STATUS
                


```
<action application="set" data="RECORD_BRIDGE_REQ=true"/>
```




# 395 RECORD_COMMENT
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_COMMENT
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_COMMENT=This is a blog spot"/>
```




# 396 RECORD_COPYRIGHT
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_COPYRIGHT
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_COPYRIGHT=(c)2007-me"/>
```




# 397 RECORD_DATE
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_DATE
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_DATE=${strftime(%Y-%m-%d %H:%M)}"/>
```




# 398 RECORD_DISCARDED
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_DISCARDED
- type: **string**

readonly If a recording gets dropped or discarded then this channel variable is set to true. Useful for diagnostics.

```

```




# 399 record_fill_cng
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_fill_cng
- type: **string**



```
<action application="set" data="record_fill_cng=1200"/>
```




# 400 RECORD_HANGUP_ON_ERROR
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_HANGUP_ON_ERROR
- type: **boolean**

When set to true this channel variable will cause the call to hangup if there is an error when trying to record the call. This is not a common feature, however in cases where a call MUST be recorded it makes it impossible to have calls that are not recorded. (Useful in some business scenarios.)

```
<action application="set" data="RECORD_HANGUP_ON_ERROR=true"/>
```




# 401 RECORD_MIN_SEC
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_MIN_SEC
- type: **integer**

Sets the minimum recording length. Normally a recording must be at least 3 seconds long. If a recording does not meet the minimum length, it is deleted after being recorded.

```
<action application="set" data="RECORD_MIN_SEC=0"/>
```




# 402 record_ms
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_ms
- type: **integer**

readonly Contains the length in milliseconds of the most recent recording.

```

```




# 403 record_post_process_exec_api
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_post_process_exec_api
- type: **string**

Executes an API for the purpose of postprocessing recorded audio. These two variables allow the postprocessing of recorded audio. The reason this is required is if the A leg hangs up first in a call, the dialplan stops being processed, and then you aren't able to take action on the file that was recorded.

```
<action application="set" data="record_post_process_exec_api=api_here:api_arg1 api_arg2 api_arg3" />
```




# 404 record_post_process_exec_app
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_post_process_exec_app
- type: **string**

Executes an app for the purpose of postprocessing recorded audio. The reason this is required is if the A leg hangs up first in a call, the dialplan stops being processed, and then you aren't able to take action on the file that was recorded.

```
<action application="set" data="record_post_process_exec_app=lua::vm_test.lua" />
```




# 405 RECORD_READ_ONLY
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_READ_ONLY
- type: **boolean**

Record read stream only.

```
rom the perspective of FreeSWITCH looking toward the endpointAleg is recording, and only incoming audio read from the channel goes into file
<action application="set" data="RECORD_READ_ONLY=true"/>
or Bleg is recording, and only incoming audio read from the channel goes into file
<action application="bridge" data="{RECORD_READ_ONLY=true}user/1000"/>
See Also:RECORD_WRITE_ONLY
```




# 406 record_restart_limit_on_dtmf
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_restart_limit_on_dtmf
- type: **boolean**

When set to true it allows the person recording to press a DTMF key and extend the amount of time they have before the recording times out.

```
<action application="set" data="record_restart_limit_on_dtmf=true"/>
```




# 407 record_sample_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_sample_rate
- type: **integer**

Set the sample rate of the recording.

```
<action application="set" data="record_sample_rate=8000"/>
```




# 408 RECORD_SOFTWARE
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_SOFTWARE
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_SOFTWARE=FreeSWITCH"/>
```




# 409 RECORD_STEREO
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_STEREO
- type: **boolean**

Record leg A and leg B streams (i.e. the caller is recorded to the left channel and the reciever is recorded on right channel) into different channel in a stereo file.

```
<action application="set" data="RECORD_STEREO=true"/>
```




# 410 RECORD_STEREO_SWAP
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_STEREO_SWAP
- type: **boolean**

Allow to invert the recording channel when RECORD_STEREO variable is set to true. So the caller is recorded to the right channel and the receiver is recorded on left channel.

```

```




# 411 RECORD_TITLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_TITLE
- type: **string**

Set prior to performing a record to store in the file header meta data (provided the file format supports meta headers).

```
<action application="set" data="RECORD_TITLE=Recording ${destination_number} ${caller_id_number} ${strftime(%Y-%m-%d %H:%M)}"/>
```




# 412 record_waste_resources
- url: https://freeswitch.org/confluence/display/FREESWITCH/record_waste_resources
- type: **string**

By default record doesn't send RTP packets. This is generally acceptable, but for longer recordings or depending on the RTP timer of your gateway, your channel may hangup with cause MEDIA_TIMEOUT. Setting this variable will 'waste' bandwidth by sending RTP even during recording. The value can be true, false, or [desired silence factor]. By default the silence factor is 1400 if you set record_waste_resources=true.

```
<action application="set" data="record_waste_resources=true"/>

<action application="set" data="record_waste_resources=1300"/>
```




# 413 RECORD_WRITE_ONLY
- url: https://freeswitch.org/confluence/display/FREESWITCH/RECORD_WRITE_ONLY
- type: **boolean**

Record write stream only.

```
rom the perspective of FreeSWITCH looking toward the endpointAleg is recording, and only outgoing audio written to the channel goes into file
<action application="set" data="RECORD_WRITE_ONLY=true"/>
or Bleg is recording, and only outgoing audio written to the channel goes into file
<action application="bridge" data="{RECORD_WRITE_ONLY=true}user/1000"/>
 See AlsoRECORD_READ_ONLY
```




# 414 recording_follow_transfer
- url: https://freeswitch.org/confluence/display/FREESWITCH/recording_follow_transfer
- type: **boolean**

Set to true if you want recording to continue after a transfer.

```
<action application="set" data="recording_follow_transfer=true"/>
```




# 415 recordings_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/recordings_dir
- type: **string**



```

```




# 416 recovery_profile_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/recovery_profile_name
- type: **string**

It's used internally so the core recovery engine knows which profile name goes with the call. The profile name to the core is just an arbitrary sub category of the call where to mod_sofia it means the sip profile name. See mailing list discussion.

```

```




# 417 remote_media_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/remote_media_ip
- type: **string**



```

```




# 418 remote_media_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/remote_media_port
- type: **integer**



```

```




# 419 remote_video_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/remote_video_ip
- type: **string**



```

```




# 420 remote_video_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/remote_video_port
- type: **integer**



```

```




# 421 ringback
- url: https://freeswitch.org/confluence/display/FREESWITCH/ringback
- type: **string**

This addition lets you set artificial ringback on a channel that is waiting for an originated call to be answered. This will specify the audio to play to the A leg on unanswered aka (early media) calls.Syntax: <action application="set" data="ringback=[data]"/>Where data is either the full path ( must be full path!) to an audio file or teletone generation markup language.You may also combine this with the ring_ready application. In this case the caller hears the normal ringback tone for a fraction of a second, then he hears the defined ringback media. Since r15025 local ringback tone is generated only when there is no early media. To force local ringback despite early media use the ignore_early_media channel variable. Ringback will not be sent unless the variable is set and there's a ringing indication from the party that is being called. See instant_ringback if you want to fake ringback even when ringing indication hasn't been received yet.

```
sing the French ring tone defined in vars.xml:
<action application="set" data="ringback=${fr-ring}"/>
US ring tone:
<action application="set" data="ringback=%(2000,4000,440.0,480.0)"/>
You can send ringback after the call is answered:
def handler(uuid):
    session = PySession(uuid)
    session.answer()
    session.speak("Hello, connecting your call to the first available agent")
    session.execute("set","call_timeout=30")
    session.execute("set","continue_on_fail=true")
    session.execute("set","hangup_after_bridge=true")
    session.execute("set","ringback=%(2000,4000,440.0,480.0)")
    session.execute("bridge","sofia/foo/bar@test.com,sofia/foo/baz@test2.com:5070")
    session.speak("doh!")
```




# 422 rss_alt_config
- url: https://freeswitch.org/confluence/display/FREESWITCH/rss_alt_config
- type: **string**



```

```




# 423 rtcp_audio_interval_msec
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtcp_audio_interval_msec
- type: **integer**

Channel variable to set the interval in msec between each RTCP SR packet. setting the rtp_timer_name to none will create all sorts of undesired side effects with RTCP (packets not sent, RTCP autoadjust failing, etc.).

```

```




# 424 rtcp_mux
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtcp_mux
- type: **boolean**

Channel variable to force rtcp-mux to be used on the outgoing INVITE.

```

```




# 425 rtcp_octet_count
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtcp_octet_count
- type: **integer**

Contains number of RTCP octets collected during the call.

```

```




# 426 rtcp_packet_count
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtcp_packet_count
- type: **integer**

Contains number of RTCP packets collected during the call.

```

```




# 427 rtp_adv_audio_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_adv_audio_ip
- type: **string**

This channel variable explicitly sets the IP address in SDP on a one-off basis. The "right" way to do this is ext-rtp-ip in the sofia profile.

```
<action application="set" data="rtp_adv_audio_ip=127.0.0.1" />
```




# 428 rtp_append_audio_sdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_append_audio_sdp
- type: **string**

This may be used to append audio parameters to the SDP sent to B-leg.It should/must be set before bridging.

```
<action application="export" data="rtp_append_audio_sdp=a=fmtp:18 annexb=no"/>
```




# 429 rtp_assume_rtcp
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_assume_rtcp
- type: **boolean**

Channel variable to force freeswitch to assume rtcp is at rtp port + 1 all the time.

```

```




# 430 rtp_autoflush
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_autoflush
- type: **boolean**

When set to true (default if not present), it will skip timer waits when the socket already has data on read. When set to false, it will always sleep one timer interval. When a packet is too late with this setting, it would be saved for next time in the udp stack and we would place a filler packet into the core to keep it moving that is flagged as CNG so you know there is no audio in it. If you have it set to false, you end up with delay if the other side is sending the audio at a different speed (can be tiny difference but it would build up).It is worth it to set to true if you have crappy network conditions where you are hearing hiccups it's related to jitter. Sometimes you have the other side sending audio too fast, then this option set to false will smooth it out but if you have it set to false in jitter conditions it tricks it into moving too fast.

```

```




# 431 rtp_autoflush_during_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_autoflush_during_bridge
- type: **boolean**

The same as rtp_autoflush, but is set during the bridge.

```

```




# 432 rtp_disable_hold
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_disable_hold
- type: **boolean**

When set to true the user may not put the call on hold.

```
<action application="set" data="rtp_disable_hold=true"/>
```




# 433 rtp_disable_vad_in
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_disable_vad_in
- type: **boolean**



```

```




# 434 rtp_disable_vad_out
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_disable_vad_out
- type: **boolean**



```

```




# 435 rtp_enable_vad_in
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_enable_vad_in
- type: **boolean**



```

```




# 436 rtp_enable_vad_out
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_enable_vad_out
- type: **boolean**



```

```




# 437 rtp_force_audio_fmtp
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_force_audio_fmtp
- type: **string**

Set the audio fmtp.

```

```




# 438 rtp_hold_timeout_sec
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_hold_timeout_sec
- type: **integer**



```

```




# 439 rtp_jitter_buffer_during_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_jitter_buffer_during_bridge
- type: **boolean**



```
<action application="set" data="rtp_jitter_buffer_during_bridge=true"/>

<action application="set" data="rtp_jitter_buffer_during_bridge=false"/>
```




# 440 rtp_manual_rtp_bugs
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_manual_rtp_bugs
- type: **string**



```
<action application="set" data="rtp_manual_rtp_bugs=cisco_skip_mark_bit_2833"/>
```




# 441 rtp_negotiate_near_match
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_negotiate_near_match
- type: **boolean**

Setting this to true will cause FreeSWITCH to consider codec PTIME on inbound codec negotiation as well. If you receive a call with PCMU@30i and only have PCMU@20i on the list, it will prefer anything else that matches codec and ptime by default. This changes behavior and matches PCMU@30i despite the PTIME mismatch. This is only valid if you have other matching codecs on the endpoints lists, of course.

```
<action application="set" data="rtp_negotiate_near_match=true"/>
```




# 442 rtp_rewrite_timestamps
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_rewrite_timestamps
- type: **boolean**



```

```




# 443 rtp_sdes_suites
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_sdes_suites
- type: **string**



```

```




# 444 rtp_secure_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_secure_media
- type: **string**

Syntax: rtp_secure_media=<permission>[:<list of encryption suites>] sip_secure_media is no longer implementedpermission:mandatory - Accept/Offer SAVP negotiation ONLYoptional - Accept/Offer SAVP/AVP with SAVP preferredforbidden - More useful for inbound to deny SAVP negotiationdeprecatedfalse - implies forbiddendeprecatedtrue - implies mandatorydefault - accept SAVP inbound if offeredencryption suites:AEAD_AES_256_GCM_8AEAD_AES_128_GCM_8AES_CM_256_HMAC_SHA1_80AES_CM_192_HMAC_SHA1_80AES_CM_128_HMAC_SHA1_80AES_CM_256_HMAC_SHA1_32AES_CM_192_HMAC_SHA1_32AES_CM_128_HMAC_SHA1_32AES_CM_128_NULL_AUTHExamples:rtp_secure_media=mandatory:AES_CM_256_HMAC_SHA1_80,AES_CM_256_HMAC_SHA1_32rtp_secure_media=true:AES_CM_256_HMAC_SHA1_80,AES_CM_256_HMAC_SHA1_32rtp_secure_media=optional:AES_CM_256_HMAC_SHA1_80rtp_secure_media=true:AES_CM_256_HMAC_SHA1_80

```

```




# 445 rtp_secure_media_inbound
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_secure_media_inbound
- type: **string**

Same syntax as rtp_secure_media: rtp_secure_media_inbound=<permission>[:<list of encryption suites>]Examples:rtp_secure_media_inbound=true:AEAD_AES_256_GCM_8,AES_CM_256_HMAC_SHA1_80,AES_CM_256_HMAC_SHA1_32rtp_secure_media_inbound=mandatory:AEAD_AES_256_GCM_8

```

```




# 446 rtp_secure_media_outbound
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_secure_media_outbound
- type: **string**

Same syntax as rtp_secure_media: rtp_secure_media_outbound=<permission>[:<list of encryption suites>]Examples:rtp_secure_media_outbound=true:AEAD_AES_128_GCM_8rtp_secure_media_outbound=optional:AEAD_AES_128_GCM_8

```

```




# 447 rtp_secure_media_suites
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_secure_media_suites
- type: **string**

An alternative, optional variable that specifies a comma-separated list of available encryption suites. If this is specified, then rtp_secure_media need only specify the permission flag without the list of suites.Syntax: rtp_secure_media_suites=<list of encryption suites>

```

```




# 448 rtp_stun_ping
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_stun_ping
- type: **string**



```

```




# 449 rtp_timeout_sec
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_timeout_sec
- type: **integer**



```

```




# 450 rtp_timer_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/rtp_timer_name
- type: **string**



```

```




# 451 run_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/run_dir
- type: **string**



```

```




# 452 script_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/script_dir
- type: **string**



```

```




# 453 sdp_m_per_ptime
- url: https://freeswitch.org/confluence/display/FREESWITCH/sdp_m_per_ptime
- type: **boolean**

Adds a new m= line for each distinct ptime in codec list.When this variable is not set:When mixing codecs with various ptime in a codec list, they will now be allowed to co-exist in the sdp but it will send no ptime attr. This means the ptime preferences on the offer will be ignored when mixing codecs with various ptimes. When receiving a codec list with no ptime attr, the ptime will be chosen from local preference instead of assuming 20ms. This means if offer contains PCMU with no ptime and FS has PCMU@40iDynamic payloads will now start at 98 and increment per additional dynamic codec per call. So now you can add CELT@32000h,CELT@48000h and each one will be auto-assigned a dynamic payload type.Is now implied to be true, if you don't like this set it to false but it's going to be undefined behaviour. This basically means if you call in with ptime 30 then you have a bunch of ptime 20 codecs in your outbound list that there will be one m= line with 30 and the original inbound codec and more m= lines for each discinct ptime in your list. This is, of course, will depend on disable_transcoding or absolute_codec_string as well.

```
<action application="set" data="sdp_m_per_ptime=true"/>
```




# 454 sdp_secure_savp_only
- url: https://freeswitch.org/confluence/display/FREESWITCH/sdp_secure_savp_only
- type: **string**

When rtp_secure_media=true FreeSWITCH will offer both AVP and SAVP in the SDP. Setting sdp_secure_savp_only=true (in addition to rtp_secure_media=true) will cause FreeSWITCH to offer only SAVP in the SDP.

```
<action application="export" data="sdp_secure_savp_only=true"/>
```




# 455 send_silence_when_idle
- url: https://freeswitch.org/confluence/display/FREESWITCH/send_silence_when_idle
- type: **string**

When greater than 0, this variable tells FreeSWITCH to transmit comfort noise when idle. The value of this variable is set to the divisor of the silence generating function. 400 or 1400 are common values set, but you may experiment with other choices to pick one that sounds best.When true, FreeSWITCH will pick a default comfort noise value.When -1, FreeSWITCH will transmit silence without comfort noise.

```
<action application="set" data="send_silence_when_idle=400"/>
```




# 456 session_in_hangup_hook
- url: https://freeswitch.org/confluence/display/FREESWITCH/session_in_hangup_hook
- type: **boolean**

Allows channel variables to be accessible in the api_hangup_hook that gets executed for the channel. See Lua env object for an example.

```
<action application="set" data="session_in_hangup_hook=true"/>
```




# 457 signal_bond
- url: https://freeswitch.org/confluence/display/FREESWITCH/signal_bond
- type: **string**

UUID of the channel this channel is bridged/bonded to. Not present on a one-legged call.

```

```




# 458 signal_bridge_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/signal_bridge_to
- type: **string**



```

```




# 459 sip
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip
- type: **string**



```

```




# 460 sip_acl_authed_by
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_acl_authed_by
- type: **string**

readonly Contains the name of the ACL node that authorized this call.

```

```




# 461 sip_acl_token
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_acl_token
- type: **string**

readonly Contains the ACL auth token for the current call.

```

```




# 462 sip_auth_method
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auth_method
- type: **string**

The request method used to authenticate with.Known values:REGISTER

```

```




# 463 sip_auth_password
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auth_password
- type: **string**

For mod_sofia use with sip_auth_username to answer auth challenges without defining a full gateway.

```
originate {sip_auth_username=<your_user_name>,sip_auth_password=<your_password>}sofia/external/1xxxxxxx@12.34.56.78 &echo
```




# 464 sip_auth_realm
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auth_realm
- type: **string**

This should contain the domain/realm of the authenticated user that has triggered the event, if applicable.

```
originate {sip_auth_username=<your_user_name>,sip_auth_password=<your_password>}sofia/external/1xxxxxxx@12.34.56.78 &echo
Depending on how your FreeSWITCH instance is configured, you may experience problems with this variable being incorrect or blank after calling the 'bridge' application. If this happens, you may want to force the channel variable:
<action application="bridge" data="{sip_auth_realm=${sip_auth_realm}}sofia/gateway/external/2000"/>
```




# 465 sip_auth_username
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auth_username
- type: **string**

For mod_sofia answer auth challenges without defining a full gateway. Used in tandem with sip_auth_password. Also indicates the SIP username a device successfully registered to FreeSWITCH with.

```
originate {sip_auth_username=<your_user_name>,sip_auth_password=<your_password>}sofia/external/1xxxxxxx@12.34.56.78 &echo
```




# 466 sip_authorized
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_authorized
- type: **string**

Indicates whether the SIP device accessing the dialplan is authorized to FreeSWITCH or not. The SIP device can be authorized either via an ACL or via digest authentication.

```

```




# 467 sip_auto_answer
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auto_answer
- type: **boolean**

Tells the SIP phone to auto-answer the call, if supported. Can be used for intercom support.

```
<action application="export" data="sip_auto_answer=true"/>
```




# 468 sip_auto_answer_detected
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auto_answer_detected
- type: **string**



```

```




# 469 sip_auto_answer_notify
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auto_answer_notify
- type: **string**



```

```




# 470 sip_auto_answer_suppress_notify
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auto_answer_suppress_notify
- type: **string**



```

```




# 471 sip_auto_simplify
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_auto_simplify
- type: **boolean**

When set, this directs FreeSWITCH to remove itself from the SIP signaling path if it can safely do so.

```
<action application="set" data="sip_auto_simplify=true"/>
```




# 472 sip_call_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_call_id
- type: **string**

SIP header Call-ID.

```

```




# 473 sip_callee_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_callee_id_name
- type: **string**

deprecated Set on the inbound leg to control what caller ID number appears in the caller phone's display.

```
If you find that set doesn't work, try using export instead.
<action application="set" data="sip_callee_id_name=Reginald" />
<action application="set" data="sip_callee_id_number=2332" />
<action application="bridge" data="sofia/gateway/provider/<Reginald's cellphone number>" />
```




# 474 sip_cid_in_1xx
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_cid_in_1xx
- type: **boolean**

Prevents FreeSWITCH when it receives 183 from leg-B to automatically insert RPID before sending 183 to leg-A. This can be defined profile-wide with: pass-callee-id=false.

```
<action application="set" data="sip_cid_in_1xx=false"/>
```




# 475 sip_cid_type
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_cid_type
- type: **string**

Modify how the Caller ID will show up in SIP header of the outbound leg. privacy on the inbound leg controls the remaining contents of RPID and Privacy headers.

```
end no extra caller id info (Caller ID will be in the SIP From): this will not work for gateways. You must set caller-id-in-from=true in the gateway settings.
{sip_cid_type=none}sofia/default/user@example.com
Send Remote-Party-ID (default):
{sip_cid_type=rpid}sofia/default/user@example.com
Send P-Asserted-Identity: you must set privacy flag, otherwise P-Preferred-Identity will be inserted instead of P-Asserted-Identity.
{sip_cid_type=pid}sofia/default/user@example.com
Send RPID with chosen content and privacy flags (+ delimited, none to clear all flags):
{sip_cid_type=rpid,origination_caller_id_name=test,origination_caller_id_number=1234,origination_privacy=screen+hide_name+hide_number}sofia/default/user@example.com
Send Remote-Party-ID with chosen content:
{sip_cid_type=rpid,origination_caller_id_name=test,origination_caller_id_number=1234}sofia/default/user@example.com
```




# 476 sip_codec_negotiation
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_codec_negotiation
- type: **string**

sip_codec_negotiation is basically a channel variable equivalent of inbound-codec-negotiation.Options:generousscroogegreedyBefore 74a0cfd1e101413a3941c41d04ee01d8df2ae418, sip_codec_negotiation will always be overwritten by the sofia profile configuration param sip-codec-negotiation. As of this revision, the codec negotiation can be changed on a per-call basis.

```
<action application="set" data="sip_codec_negotiation=greedy"/>
```




# 477 sip_contact_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_contact_host
- type: **string**

Hostname part of the Contact SIP header.

```
f your request header contains:
Contact: <sip:gw+test@server.example.com:5060;transport=udp;gw=test>
Then the value for this field would be:
server.example.com
```




# 478 sip_contact_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_contact_port
- type: **integer**

Port part of the Contact SIP header.

```
f your request header contains:
Contact: <sip:gw+test@server.example.com:5060;transport=udp;gw=test>
Then the value for this field would be:
5060
```




# 479 sip_contact_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_contact_user
- type: **string**

Username part from the Contact SIP header.

```
f your request header contains:
Contact: <sip:gw+test@server.example.com:5060;transport=udp;gw=test>
Then the value for this field would be:
gw+test
```




# 480 sip_copy_custom_headers
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_copy_custom_headers
- type: **boolean**

To pass some custom X-headers from B-leg to A-leg, add {sip_copy_custom_headers=true} to the dial string of the B-leg.

```
et it to false to disable sending custom X- headers to your SIP gateway provider:
<action application="set" data="sip_copy_custom_headers=false"/>
```




# 481 sip_copy_multipart
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_copy_multipart
- type: **boolean**

FreeSWITCH supports only INVITEs with multipart bodies. FreeSWITCH does not support response messages such as 183 Session Progress or 200 Ok with multipart bodies. Typically SIP bodies only have one MIME part with an SDP using MIME type application/sdp. The SIP spec allows for multiple bodies defined with MIME type multipart/mixed. In this case FreeSWITCH will do it's best to find the MIME part with the SDP and parse that as it normally does. However, you can change FreeSWITCH behavior with multipart bodies and bridge using this variable. FreeSWITCH will "do the right thing" and attach an application/sdp type generated by FreeSWITCH (per your settings) for the B leg as it normally would. The other non-SDP MIME parts just pass through.

```
o have FreeSWITCH keep the multiple MIME parts intact when using bridge (default):
<action application="set" data="sip_copy_multipart=true"/>
To have FreeSWITCH strip the multiple MIME parts when using bridge:
<action application="set" data="sip_copy_multipart=false"/>
```




# 482 sip_destination_url
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_destination_url
- type: **string**



```

```




# 483 sip_enable_soa
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_enable_soa
- type: **boolean**

For per call basis which can be set to false to disable SIP SOA from sofia and most likely result in untouched exchange of SDP.

```
<action application="set" data="bypass_media=true"/>
<action application="export" data="sip_enable_soa=false"/>
```




# 484 sip_exclude_contact
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_exclude_contact
- type: **string**



```

```




# 485 sip_execute_on_image
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_execute_on_image
- type: **string**

Execute an application as soon as you get a T.38 invite. This variable is similar to execute_on_answer. You can run t38_gateway or rxfax etc when you get a T.38 re-invite but no CNG tone, or you want to ignore the tone and only react when getting a T.38 re-invite.

```

```




# 486 sip_force_audio_fmtp
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_force_audio_fmtp
- type: **string**

Set the audio fmtp.

```

```




# 487 sip_force_full_from
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_force_full_from
- type: **string**



```

```




# 488 sip_force_full_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_force_full_to
- type: **string**



```

```




# 489 sip_force_video_fmtp
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_force_video_fmtp
- type: **boolean**



```

```




# 490 sip_from_comment
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_comment
- type: **string**



```

```




# 491 sip_from_display
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_display
- type: **string**

The 'User' element of the SIP From: line

```
lear the user part of the SIP message sent to the Leg B call:
<action application="bridge" data="{sip_from_display=_undef_}user/1001"/>
```




# 492 sip_from_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_host
- type: **string**

Hostname part of the From SIP header.

```
f your request header contains:
From: <sip:1000@server.example.com>;tag=0e70ba56
Then the value for this field would be:
server.example.com
```




# 493 sip_from_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_port
- type: **integer**

Port part of the From SIP header.

```
f your request header contains:
From: <sip:1000@server.example.com:5661>;tag=0e70ba56
Then the value for this field would be:
5661
However, if your request header does not contain a port, then the value for this field would be your default SIP port (usually 5060) - for example:
From: <sip:1000@server.example.com>;tag=0e70ba56
```




# 494 sip_from_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_uri
- type: **string**

The SIP URI of the endpoint sending the INVITE.

```
<action application="export" data="sip_from_uri=${sip_from_uri}"/>
Some SIP providers insist on handling caller ID in a non-normal way. In most cases you can use effective_caller_id_name and effective_caller_id_number to set the caller ID on the outbound (B leg) of a bridged call. In some cases the SIP provider doesn't like that and may just show "anonymous" or some other default caller ID information.The above example takes the From URI of an incoming SIP call and exports that value to the B leg. This is handy when you have a scenario like this:
Alice ==> FreeSWITCH bridge ==> Bob
You want Alice's caller ID information to be sent to Bob instead of FreeSWITCH's caller ID information. Usually this "just works" but if it doesn't you can try exporting sip_from_uri as above.
```




# 495 sip_from_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_user
- type: **string**

Username part of the From SIP header.

```
f your request header contains:
From: <sip:1000@server.example.com>;tag=0e70ba56
Then the value for this field would be:
1000
```




# 496 sip_from_user_stripped
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_from_user_stripped
- type: **string**

This is the same as sip_from_user, but has the + sign stripped from it.

```

```




# 497 sip_gateway
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_gateway
- type: **string**



```

```




# 498 sip_gateway_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_gateway_name
- type: **string**

If your call is outbound, and Leg B is routed via a gateway, then this variable will contain the gateway name.

```
all from user on internal profile, routed out via gateway "ntl":
sip_profile_name=gateway
sip_gateway_name=ntl
sofia_profile_name=internal
```




# 499 sip_h_Referred-By
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_h_Referred-By
- type: **string**

This is the line Referred-By in the SIP message. It may be set on a transfer to a number, which then bridges somewhere else.

```
<action application="set" data="sip_h_referred-by=000@domain.com"/>
If you wish to unset it, you can use:
<action application="unset" data="sip_h_referred-by"/>
```




# 500 sip_handle_full_from
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_handle_full_from
- type: **string**



```

```




# 501 sip_handle_full_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_handle_full_to
- type: **string**



```

```




# 502 sip_hangup_disposition
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_hangup_disposition
- type: **string**

This variable contains the value of who sent the SIP BYE message. Some examples from XML CDRs:
<sip_hangup_disposition>send_bye</sip_hangup_disposition>
<sip_hangup_disposition>recv_bye</sip_hangup_disposition>
<sip_hangup_disposition>send_refuse</sip_hangup_disposition>
<sip_hangup_disposition>send_cancel</sip_hangup_disposition>
Interpretation of these values differs on incoming and outgoing calls since FreeSWITCH is at different ends of the session:ValueIncomingOutgoingsend_byeFS sent BYE to the caller (we hung up)FS sent BYE to the endpoint (we hung up)recv_byeFS received BYE from the caller (they hung up)FS received BYE from the endpoint (they hung up)send_refuseFS rejected the call (e.g. 4xx or 5xx)Endpoint rejected the call (e.g. 4xx or 5xx)send_canceln/aFS aborted the call (we sent CANCEL)

```

```




# 503 sip_has_crypto
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_has_crypto
- type: **string**

deprecated Use rtp_has_crypto instead.

```

```




# 504 sip_header_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_header_name
- type: **string**



```

```




# 505 sip_history_info
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_history_info
- type: **string**



```

```




# 506 sip_ignore_183nosdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_ignore_183nosdp
- type: **string**

Ignoring 183 without SDP. This option is not for normal basic call flow.

```
<action application="set" data="sip_ignore_183nosdp=true"/>
```




# 507 sip_ignore_reinvites
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_ignore_reinvites
- type: **boolean**

Tells FreeSWITCH to accept/ignore re-INVITEs from remote end.

```
on't allow any re-INVITEs once bridged:
<action application="set" data="sip_ignore_reinvites=true"/>
```




# 508 sip_ignore_remote_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_ignore_remote_cause
- type: **boolean**



```

```




# 509 sip_invite_call_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_call_id
- type: **string**

SIP Call-ID to use when originating a call.

```
<action application="set" data="sip_invite_call_id=mycustomcallid"/>
```




# 510 sip_invite_contact_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_contact_params
- type: **string**



```

```




# 511 sip_invite_domain
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_domain
- type: **string**

Set the from domain in leg (B).

```
<action application="bridge" data="{sip_invite_domain=${sip_from_host}}sofia/gateway/gw1/$1@domain.org"/>
```




# 512 sip_invite_from_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_from_params
- type: **string**

Sets the from parameters on the B-leg of the call. The from parameters come after user@host:port and before. The initial semi-colon is added after the port.

```
{sip_invite_from_params=otg=mytrunk}sofia/gateway/sonus/$1
Returns:
From: <sip:5552345678@sonus:5060;otg=mytrunk>;tag=blah
```




# 513 sip_invite_from_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_from_uri
- type: **string**



```

```




# 514 sip_invite_full_from
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_full_from
- type: **string**



```

```




# 515 sip_invite_full_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_full_to
- type: **string**



```

```




# 516 sip_invite_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_params
- type: **string**



```

```




# 517 sip_invite_record_route
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_record_route
- type: **string**



```

```




# 518 sip_invite_req_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_req_uri
- type: **string**

Sets the URI in the header Request-Line INVITE when calling bridge or originate. RFC 3261 specifies that compliant endpoints SHOULD route based on the Request URI, not the URI in To:

```
<action application="bridge" data="{sip_invite_req_uri=sip:11112222@test1.com}sofia/external/33334444%192.168.4.6"/>
Result:
INVITE sip:11112222@test1.com SIP/2.0
From: "" <sip:0000000000@192.168.2.7>;tag=N6K579y4g6j0D
To: <sip:33334444@192.168.4.6>
```




# 519 sip_invite_route_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_route_uri
- type: **string**

Sets the URI in the header Route when calling bridge or originate.

```
originate {sip_invite_route_uri=<sip:+48399999999@10.0.0.51:5080;lr;orig>,origination_caller_id_number=399999000}sofia/internal/+48399999999@domain.com &echo
Result:
INVITE sip:+48399999999@domain.com SIP/2.0
Via: SIP/2.0/UDP 10.0.0.51;rport;branch=z9hG4bKpmFv4aXv4tKcK
Route: <sip:+48399999999@10.0.0.51:5080;lr;orig>
```




# 520 sip_invite_tel_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_tel_params
- type: **string**

Tel URI parameters (npdi, rn) appearing in SIP URI on outbound calls.

```
o produce INVITE sip:555000002;npdi=yes;rn=5555550001@1.2.3.4;user=phone SIP/2.0:
<action application="bridge" data="{sip_invite_tel_params=npdi=yes;rn=555000001,sip_invite_params=user=phone}sofia/gateway/test_gw/555000002"/>
```




# 521 sip_invite_to_params
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_to_params
- type: **string**



```

```




# 522 sip_invite_to_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_invite_to_uri
- type: **string**

Sets the URI in the header To when calling bridge or originate.

```
originate {sip_invite_to_uri=<sip:11112222@test1.com>}sofia/internal/33334444@192.168.4.6 &park
Result:
INVITE sip:33334444@192.168.4.6 SIP/2.0
From: "" <sip:0000000000@192.168.2.7>;tag=N6K579y4g6j0D
To: <sip:11112222@test1.com>
Alternatively, if you need to set just the username in the header To, you can pass it at the end of the dial string:
originate sofia/internal/33334444@192.168.4.6^11112222 &park
Result:
INVITE sip:33334444@192.168.4.6 SIP/2.0
From: "" <sip:0000000000@192.168.2.7>;tag=Qr6pB00BBrZ5m
To: <sip:11112222@@192.168.4.6>
```




# 523 sip_jitter_buffer_plc
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_jitter_buffer_plc
- type: **boolean**

Enables/disables packet loss concealment (PLC) when using the jitter buffer. PLC is enabled by default when the jitter buffer is enabled. Set this variable before enabling the jitter buffer for it to have an effect.

```
<action application="set" data="sip_jitter_buffer_plc=true"/>

<action application="set" data="sip_jitter_buffer_plc=false"/>
```




# 524 sip_local_sdp_str
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_local_sdp_str
- type: **string**



```

```




# 525 sip_local_url
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_local_url
- type: **string**



```

```




# 526 sip_looped_call
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_looped_call
- type: **boolean**

true if the call has been authenticated via means other than an ACL and the current request IP/port matches the profile IP/port (see src/mod/endpoints/mod_sofia/sofia.c).

```
n conf/dialplan/public.xml:
<condition field="${sip_looped_call}" expression="^true$">

<extension name="unloop">
  <condition field="${unroll_loops}" expression="^true$"/>
  <condition field="${sip_looped_call}" expression="^true$">
    <action application="deflect" data="${destination_number}"/>
  </condition>
</extension>
```




# 527 sip_mirror_remote_audio_codec_payload
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_mirror_remote_audio_codec_payload
- type: **boolean**

To tell sip to break the rfc and expect the codec payload the other side replies with rather than the one it offered which is the correct behavior. This variable can be set globally or per channel.

```

```




# 528 sip_nat_detected
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_nat_detected
- type: **string**



```

```




# 529 sip_network_destination
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_network_destination
- type: **string**

It is intended for use with devices registering behind a NAT where the Request-URI should contain the contact that was bound to the AOR during the registration request while the request itself should be sent to the public IP and port number of the NAT "pinhole". It does not add a Route header field to the request like the ;fs_path= or the sip_route_uri options do.

```
<action application="bridge" data="{sip_network_destination=sip:5551234567@66.243.109.243:10005}sofia/external/5551234567@172.16.110.45:5060"/>
```




# 530 sip_outgoing_call_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_outgoing_call_id
- type: **string**

deprecated Replaced by sip_invite_call_id.

```

```




# 531 sip_p_rtp_stat
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_p_rtp_stat
- type: **string**



```

```




# 532 sip_profile
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_profile
- type: **string**

Name of the SIP profile which the request was received on.

```

```




# 533 sip_profile_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_profile_name
- type: **string**

If your call is outbound, then this variable will contain the profile name used for the outbound channel (Leg B)If the outbound channel is a gateway, then this variable will be set to gateway, and you'd need to look at sip_gateway_name to get the name of the gateway.If the outbound channel is another profile, then this variable will be set to the name of that profile. This should NOT be confused with sofia_profile_name, which is the name of the profile for Leg A.

```
all from user on internal profile, routed out via gateway "ntl":
sip_profile_name=gateway
sip_gateway_name=ntl
sofia_profile_name=internal
Call from user on internal profile, routed out via internal profile:
sip_profile_name=internal
sip_gateway_name=
sofia_profile_name=internal
Call from user on external profile, routed out via internal profile:
sip_profile_name=internal
sip_gateway_name=
sofia_profile_name=external
```




# 534 sip_received_ip
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_received_ip
- type: **string**



```

```




# 535 sip_received_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_received_port
- type: **integer**



```

```




# 536 sip_recover_contact
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_recover_contact
- type: **string**



```

```




# 537 sip_recover_via
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_recover_via
- type: **string**



```

```




# 538 sip_recovery_break_rfc
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_recovery_break_rfc
- type: **string**

To NOT reverse the from and to on UAS Re-INVITEs. This breaks RFC. This variable can be set globally or per channel

```

```




# 539 sip_refer_reply
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_refer_reply
- type: **string**



```

```




# 540 sip_referred_by_cid
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_referred_by_cid
- type: **string**



```

```




# 541 sip_referred_by_user_stripped
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_referred_by_user_stripped
- type: **string**



```

```




# 542 sip_renegotiate_codec_on_reinvite
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_renegotiate_codec_on_reinvite
- type: **boolean**

Allow SDP codec change with re-INVITE.

```
<action application="bridge" data="{sip_renegotiate_codec_on_reinvite=true}sofia/gateway/trunk/$1"/>
Globally in vars.xml:
<X-PRE-PROCESS cmd="set" data="sip_renegotiate_codec_on_reinvite=true"/>
In a SIP profile:
<param name="renegotiate-codec-on-reinvite" value="true"/>
```




# 543 sip_reply_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_reply_host
- type: **string**



```

```




# 544 sip_request_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_request_host
- type: **string**

Hostname part of the SIP header.

```
f your request header starts with:
REGISTER sip:172.16.44.8 SIP/2.0
Then the value of this field would be:
172.16.44.8
```




# 545 sip_request_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_request_port
- type: **string**

Port part of the SIP header.

```
f your request header starts with:
REGISTER sip:172.16.44.8:5061 SIP/2.0
Then the value of this field would be:
5061
However, if your request header does not contain a port, then the value for this field would be your default SIP port (usually 5060):
REGISTER sip:172.16.44.8 SIP/2.0
```




# 546 sip_require_timer
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_require_timer
- type: **boolean**

FS requires timer by default on session refresh unless its t.38 re-invite. To disable the require timer on session refresh, set it to false.

```
<action application="set" data="sip_require_timer=false"/>
```




# 547 sip_route_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_route_uri
- type: **string**

This sets where the INVITE packet should actually be sent to.This should normally be needed in situations where the TO field contains a hostname which points back at itself, and would cause an endless loop if this variable is not set.See also: 

                     FS-5349
                            -
            Getting issue details...
                                                STATUS
                


```
ery simple usage, set during bridge immediately before the endpoint to bridge to:
bridge {sip_route_uri=sip:USER@HOSTNAME.or.IP.ADDRESS}
A real-life example where this was needed. It changes the Request-URI and sends the INVITE packet to the correct destination by looking up the contact details for the registered endpoint. This is used to send an incoming call to a registered endpoint (PBX in this case) but set a Request-URI so the call can be routed by the receiving party. Without the sip_route_uri variable set, the call would loop back to FreeSWITCH endlessly until the originating party cancels the call. The incoming number routes to another extension, and exports the original dialled DDI (as dialled_ddi) so this can be used with this bridge command.
bridge {sip_route_uri=sip:${sofia_contact(${dialed_extension}@${domain_name})},sip_invite_req_uri=sip:${dialled_ddi}@${domain_name}}user/${user_data(${dialed_extension}@${domain_name} attr id)}@${domain_name}
```




# 548 sip_rtp_rxstat
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_rtp_rxstat
- type: **string**



```

```




# 549 sip_rtp_txstat
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_rtp_txstat
- type: **string**



```

```




# 550 sip_secure_media
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_secure_media
- type: **string**

deprecated No longer implemented. Use rtp_secure_media instead.

```

```




# 551 sip_sticky_contact
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_sticky_contact
- type: **string**



```

```




# 552 sip_subject
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_subject
- type: **string**



```

```




# 553 sip_term_cause
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_term_cause
- type: **string**



```

```




# 554 sip_term_status
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_term_status
- type: **string**



```

```




# 555 sip_to_comment
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_to_comment
- type: **string**



```

```




# 556 sip_to_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_to_host
- type: **string**

Hostname part of the To SIP header.

```
f your request header contains:
To: <sip:1000@server.example.com>;tag=0e70ba56
Then the value for this field would be:
server.example.com
```




# 557 sip_to_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_to_port
- type: **string**

Port part of the To SIP header.

```
f your request header contains:
To: <sip:1000@server.example.com:5661>;tag=0e70ba56
Then the value for this field would be:
5661
However, if your request header does not contain a port, then the value for this field would be your default SIP port (usually 5060):
To: <sip:1000@server.example.com>;tag=0e70ba56
```




# 558 sip_to_uri
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_to_uri
- type: **string**



```

```




# 559 sip_to_user
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_to_user
- type: **string**

Username part of the To SIP header.

```
o set manually, use:
<action application="set" data="sip_to_user=whatevah" />
Then the value for this field would be:
1000
As options you can make call:
bridge(sofia/external/333@biloxi.com^1234)
or make call:
bridge(sofia/external/333^1234@biloxi.com)
```




# 560 sip_transport
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_transport
- type: **string**



```

```




# 561 sip_use_gateway
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_use_gateway
- type: **string**



```

```




# 562 sip_user_agent
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_user_agent
- type: **string**

User agent part of the SIP header.

```
f your request header contains:
User-Agent: FreeSWITCH-mod_sofia/1.2.0-rc2+git~20120713T162602Z~0afd7318bd+unclean~20120713T184029Z
Then the value of this field would be:
FreeSWITCH-mod_sofia/1.2.0-rc2+git~20120713T162602Z~0afd7318bd+unclean~20120713T184029Z
```




# 563 sip_via_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_via_host
- type: **string**



```

```




# 564 sip_via_port
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_via_port
- type: **integer**



```

```




# 565 sip_via_protocol
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_via_protocol
- type: **string**



```

```




# 566 sip_via_rport
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_via_rport
- type: **string**



```

```




# 567 sip_video_fmtp
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_video_fmtp
- type: **string**



```

```




# 568 sip_video_pt
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_video_pt
- type: **string**



```

```




# 569 sip_wait_for_aleg_ack
- url: https://freeswitch.org/confluence/display/FREESWITCH/sip_wait_for_aleg_ack
- type: **string**

When you set the variable sip_wait_for_aleg_ack on the b leg in the {} for the outbound call, this should make the B leg delay sending the ACK until it sees that the A leg has recv'd an ack.

```
<action application="bridge" data="{sip_wait_for_aleg_ack=true}sofia/internal/foo@bar.com"/>
```




# 570 skeleton
- url: https://freeswitch.org/confluence/display/FREESWITCH/skeleton
- type: **string**

This is an example of how to create a channel variable page. This section is the description of the variable. Put the description information here and then the usage example below.

```
<action application="set" data="skeleton=foo"/>
```




# 571 skip_cdr_causes
- url: https://freeswitch.org/confluence/display/FREESWITCH/skip_cdr_causes
- type: **string**

This is a list of call hangup causes that should not trigger CDR processing.

```

```




# 572 sleep_eat_digits
- url: https://freeswitch.org/confluence/display/FREESWITCH/sleep_eat_digits
- type: **boolean**

When set to true, the sleep application will consume DTMFs which will, for example, prevent a caller from exiting out of an IVR. The default behavior is not to eat DTMF digits. This variable was added in SVN rev 14102. this is a change in default behavior as the sleep application previously ate DTMFs without exception. Be sure to set sleep_eat_digits to true in order to preserve the previous behavior.

```
<action application="set" data="sleep_eat_digits=true"/>
```




# 573 socket_host
- url: https://freeswitch.org/confluence/display/FREESWITCH/socket_host
- type: **string**



```

```




# 574 socket_path
- url: https://freeswitch.org/confluence/display/FREESWITCH/socket_path
- type: **string**



```

```




# 575 SOFIA_CRYPTO_MANDATORY_VARIABLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_CRYPTO_MANDATORY_VARIABLE
- type: **string**



```

```




# 576 SOFIA_HAS_CRYPTO_VARIABLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_HAS_CRYPTO_VARIABLE
- type: **string**



```

```




# 577 sofia_profile_domain_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sofia_profile_domain_name
- type: **string**



```

```




# 578 sofia_profile_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/sofia_profile_name
- type: **string**

The name of the profile of which the call originated (Leg A). This should NOT be confused with sip_profile_name.

```
all from user on external profile
sofia_profile_name=external
Call from user on internal profile
sofia_profile_name=internal
```




# 579 sofia_record_file
- url: https://freeswitch.org/confluence/display/FREESWITCH/sofia_record_file
- type: **string**



```

```




# 580 SOFIA_REFER_TO_VARIABLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_REFER_TO_VARIABLE
- type: **string**



```

```




# 581 SOFIA_REPLACES_HEADER
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_REPLACES_HEADER
- type: **string**



```

```




# 582 SOFIA_SECURE_MEDIA_CONFIRMED_VARIABLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_SECURE_MEDIA_CONFIRMED_VARIABLE
- type: **string**



```

```




# 583 SOFIA_SECURE_MEDIA_VARIABLE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_SECURE_MEDIA_VARIABLE
- type: **string**



```

```




# 584 SOFIA_SESSION_TIMEOUT
- url: https://freeswitch.org/confluence/display/FREESWITCH/SOFIA_SESSION_TIMEOUT
- type: **string**



```

```




# 585 sound_prefix
- url: https://freeswitch.org/confluence/display/FREESWITCH/sound_prefix
- type: **string**

Directory prefix where the sounds lives.

```

```




# 586 sounds_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/sounds_dir
- type: **string**



```

```




# 587 spandsp_dtmf_rx_filter_dialtone
- url: https://freeswitch.org/confluence/display/FREESWITCH/spandsp_dtmf_rx_filter_dialtone
- type: **boolean**

Sets the filter dialtone parameter in the spandsp DTMF detector. Dialtone filtering is disabled by default. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="spandsp_dtmf_rx_filter_dialtone=true"/>
<action application="spandsp_start_dtmf" />
```




# 588 spandsp_dtmf_rx_reverse_twist
- url: https://freeswitch.org/confluence/display/FREESWITCH/spandsp_dtmf_rx_reverse_twist
- type: **integer**

Sets the reverse twist setting in the spandsp DTMF detector. Reverse twist is set to 4 dB by default. This value can be safely increased up to 6 or 7 without a significant increase in talk-off to allow DTMFs that exceed this threshold to be detected. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="spandsp_dtmf_rx_reverse_twist=6"/>
<action application="spandsp_start_dtmf" />
```




# 589 spandsp_dtmf_rx_threshold
- url: https://freeswitch.org/confluence/display/FREESWITCH/spandsp_dtmf_rx_threshold
- type: **integer**

Sets the threshold parameter in the spandsp DTMF detector. Threshold is set to -42 dBm0 by default. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="spandsp_dtmf_rx_threshold=-42"/>
<action application="spandsp_start_dtmf" />
```




# 590 spandsp_dtmf_rx_twist
- url: https://freeswitch.org/confluence/display/FREESWITCH/spandsp_dtmf_rx_twist
- type: **dtmf digit**

Sets the twist parameter in the spandsp DTMF detector. Twist is set to 8 dB by default. Set this variable prior to executing spandsp_start_dtmf.

```
<action application="set" data="spandsp_dtmf_rx_twist=8"/>
<action application="spandsp_start_dtmf" />
```




# 591 star_replace
- url: https://freeswitch.org/confluence/display/FREESWITCH/star_replace
- type: **string**



```

```




# 592 start_epoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/start_epoch
- type: **integer**



```

```




# 593 start_stamp
- url: https://freeswitch.org/confluence/display/FREESWITCH/start_stamp
- type: **string**



```

```




# 594 start_uepoch
- url: https://freeswitch.org/confluence/display/FREESWITCH/start_uepoch
- type: **integer**



```

```




# 595 storage_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/storage_dir
- type: **string**



```

```




# 596 stream_prebuffer
- url: https://freeswitch.org/confluence/display/FREESWITCH/stream_prebuffer
- type: **string**



```

```




# 597 suppress_cng
- url: https://freeswitch.org/confluence/display/FREESWITCH/suppress_cng
- type: **boolean**

Sets a=silenceSupp: off in the SDP to disable silence suppression while making an outbound call.

```
<action application="set" data="suppress_cng=true"/>
```




# 598 switch_m_sdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/switch_m_sdp
- type: **string**

readonly The B-leg remote SDP. It is used to store the remote SDP used by the other leg/channel of a call. (In the A-leg that will be the remote SDP of the B-leg). This variable is set, but never used by FreeSWITCH.

```

```




# 599 SWITCH_PLAYBACK_TERMINATOR_USED
- url: https://freeswitch.org/confluence/display/FREESWITCH/SWITCH_PLAYBACK_TERMINATOR_USED
- type: **string**



```

```




# 600 switch_r_sdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/switch_r_sdp
- type: **string**

readonly This variable holds the remote SDP for the current leg/channel.

```
Don't add a carriage return after "set"> or you'll end up writing a variable with a different name, leaving switch_r_sdp with the same value.
<action application="set"><![CDATA[switch_r_sdp=(sdp here)
]]>
</action>
```




# 601 switch_serial
- url: https://freeswitch.org/confluence/display/FREESWITCH/switch_serial
- type: **string**



```

```




# 602 SWITCH_UUID_BRIDGE
- url: https://freeswitch.org/confluence/display/FREESWITCH/SWITCH_UUID_BRIDGE
- type: **string**



```

```




# 603 temp_dir
- url: https://freeswitch.org/confluence/display/FREESWITCH/temp_dir
- type: **string**



```

```




# 604 temp_hold_music
- url: https://freeswitch.org/confluence/display/FREESWITCH/temp_hold_music
- type: **string**

This variable specifies a hold music value that gets played to a caller only until they get transferred. After the transfer, the hold_music variable will apply.

```
<action application="set" data="temp_hold_music=local_stream://alternate_moh"/>
```




# 605 timer_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/timer_name
- type: **string**

If set will make playback and speak use a timer to clock the audio instead of the read.

```
<action application="set" data="timer_name=soft"/>
```




# 606 timezone
- url: https://freeswitch.org/confluence/display/FREESWITCH/timezone
- type: **string**

Sets the timezone for this particular call. Can be used, e.g., to set the timezone for a caller who is checking his/her voicemail. The value is expressed in Linux timezone format (ex. America/New_York -- see /usr/share/zoneinfo/zone.tab for the standard list of Linux timezones). this variable must actually be set before the comparison, so either set it inline, transfer, or set it in the user directory.See also: Time of Day and Holiday Routing.

```
ou can set the time zone globally for Freeswitch in /conf/vars.xml
<X-PRE-PROCESS cmd="set" data="timezone=America/Toronto"/>
Specify the timezone in the dialplan:
<action application="set" data="timezone=Asia/Seoul"/>

<action application="set" data="timezone=GMT0"/>

<action application="set" data="timezone=America/New_York"/>
In the directory:
<param name="timezone" value="America/New_York"/>
```




# 607 tod_tz_offset
- url: https://freeswitch.org/confluence/display/FREESWITCH/tod_tz_offset
- type: **integer**

Sets the GMT offset to be used on this call for time of day conditions. this variable must actually be set before the comparison, so either set it inline, transfer, or set it in the user directory.

```
o set the offset global in conf/vars.xml:
<X-PRE-PROCESS cmd="set" data="tod_tz_offset=5"/>

<action application="set" data="tod_tz_offset=5"/>
```




# 608 tone_detect_expires
- url: https://freeswitch.org/confluence/display/FREESWITCH/tone_detect_expires
- type: **string**



```

```




# 609 tone_detect_sleep
- url: https://freeswitch.org/confluence/display/FREESWITCH/tone_detect_sleep
- type: **string**



```

```




# 610 total_loops
- url: https://freeswitch.org/confluence/display/FREESWITCH/total_loops
- type: ****

TODO Probably has to do with mod_dptools: loop_playback or to sendmsg in the Event Socket Library (see loops header for execute ).

```

```




# 611 transfer_after_bridge
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_after_bridge
- type: **string**

This variable can control what happens when a call is hang up. This can be used in conjunction with mod_fifo to control the "agent", possibly sending them back to an agent queue. This is checked after park_after_bridge and before hangup_after_bridge. Variable gets cleaned after bridge is destroyed and leg is transferred to the specified dialplan.

```
<action application="set" data="transfer_after_bridge=1000"/>
 Note the : separator
<action application="set" data="transfer_after_bridge=1000:XML:default"/>
```




# 612 transfer_fallback_extension
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_fallback_extension
- type: **string**

It's an extension the channel falls back to on failed transfer. Set it before the transfer. For example, if you transfer to some invalid or unavailable ext, it will then "fall back" to the ext set in the var.

```

```




# 613 transfer_history
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_history
- type: **string**



```

```




# 614 transfer_on_fail
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_on_fail
- type: **string**

Allows you to transfer call flow when a called party can not be reached for specific reasons (unallocated_number, etc). you must also set failure_causesArgument syntax: hangupcauses destination dialplan context

```
<action application="set" data="failure_causes=UNALLOCATED_NUMBER"/>
<action application="set" data="transfer_on_fail=UNALLOCATED_NUMBER"/>

<action application="set" data="transfer_on_fail=1"/>
```




# 615 transfer_ringback
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_ringback
- type: **string**

This is the sound that will play if a call has already been answered, and it is then transferred to another endpoint. The syntax is the same as ringback.

```
<action application="set" data="transfer_ringback=${fr-ring}"/>
```




# 616 transfer_source
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_source
- type: **string**



```

```




# 617 transfer_to
- url: https://freeswitch.org/confluence/display/FREESWITCH/transfer_to
- type: **string**



```

```




# 618 tts_commandline
- url: https://freeswitch.org/confluence/display/FREESWITCH/tts_commandline
- type: **string**

See Alsomod_tts_commandline

```

```




# 619 tts_engine
- url: https://freeswitch.org/confluence/display/FREESWITCH/tts_engine
- type: **string**

valuetts_commandlinefliteunimrcp:mrcp_server_name See Alsomod_tts_commandlinemod_flitetts_commandline

```

```




# 620 tts_voice
- url: https://freeswitch.org/confluence/display/FREESWITCH/tts_voice
- type: **string**



```

```




# 621 uduration
- url: https://freeswitch.org/confluence/display/FREESWITCH/uduration
- type: **integer**



```

```




# 622 UNIQUEID
- url: https://freeswitch.org/confluence/display/FREESWITCH/UNIQUEID
- type: **string**



```

```




# 623 user_context
- url: https://freeswitch.org/confluence/display/FREESWITCH/user_context
- type: **string**



```

```




# 624 user_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/user_name
- type: **string**



```

```




# 625 uuid_bridge_continue_on_cancel
- url: https://freeswitch.org/confluence/display/FREESWITCH/uuid_bridge_continue_on_cancel
- type: **boolean**

When set to true causes the system to move on in the dialplan if it hits a bad b-leg. Default is false because this behavior is probably not recommended. You may find this variable useful when implementing Dialplan FollowMe.

```
<action application="set" data="uuid_bridge_continue_on_cancel=true"/>
```




# 626 verbose_presence
- url: https://freeswitch.org/confluence/display/FREESWITCH/verbose_presence
- type: **string**



```

```




# 627 verbose_sdp
- url: https://freeswitch.org/confluence/display/FREESWITCH/verbose_sdp
- type: **boolean**

The RFCs require an rtpmap for IANA dynamic payload types. An rtpmap with codec name and payload type is not required for well known static payloads - (PCMU, PCMA, G729, etc).By default FreeSWITCH sets verbose_sdp=false which doesn't include an rtpmap for static payload types. If your equipment doesn't support this (shame on them) set verbose_sdp=true which will include rtpmaps for any static payload types (previous default behavior).

```

```




# 628 video_logo_path
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_logo_path
- type: **string**

View more details about this in the mod_conference page mod_conference#SettableChannelVariables

```

```




# 629 video_mirror_input
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_mirror_input
- type: **boolean**

If set to true, mirrors the output resolution to match the input resolution of the caller, applies to calls or conferences.

```

```




# 630 video_possible
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_possible
- type: **string**



```

```




# 631 video_read_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_read_codec
- type: **string**



```

```




# 632 video_read_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_read_rate
- type: **string**



```

```




# 633 video_write_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_write_codec
- type: **string**



```

```




# 634 video_write_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/video_write_rate
- type: **string**



```

```




# 635 vm_cc
- url: https://freeswitch.org/confluence/display/FREESWITCH/vm_cc
- type: **string**



```

```




# 636 vm_message_ext
- url: https://freeswitch.org/confluence/display/FREESWITCH/vm_message_ext
- type: **string**

Determines in which format the voicemail message is saved. Can also be set using the param vm-message-ext.This variable is set in the dial plan.Default available options:mp3wav

```
<action application="set" data="vm_message_ext=mp3"/>
```




# 637 vmd_detect
- url: https://freeswitch.org/confluence/display/FREESWITCH/vmd_detect
- type: **string**



```

```




# 638 vname
- url: https://freeswitch.org/confluence/display/FREESWITCH/vname
- type: **string**



```

```




# 639 voicemail_account
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_account
- type: **string**



```

```




# 640 voicemail_alternate_greet_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_alternate_greet_id
- type: **string**

Overrides the ID the voicemail application reads back i.e. to say a phone number instead of the user ID.

```
<user id="johnsmith" number-alias="1000">
   <variables>
       <variable name="mailbox" value="1000"/>
       <variable name="effective_caller_id_name" value="1000"/>
       <variable name="effective_caller_id_number" value="1000"/>
       <variable name="voicemail_alternate_greet_id" value="1000"/>
   </variables>
</user>
```




# 641 voicemail_authorized
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_authorized
- type: **string**



```

```




# 642 voicemail_caller_id_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_caller_id_name
- type: **string**



```

```




# 643 voicemail_caller_id_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_caller_id_number
- type: **string**



```

```




# 644 voicemail_current_folder
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_current_folder
- type: **string**



```

```




# 645 voicemail_domain
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_domain
- type: **string**

Sets the domain name in the sender email address when mod_voicemail emails a voicemail message.

```
rom conf/directory/default/1010.xml:
<include>
  <user id="1010" mailbox="1010">
    <params>
      <param name="password" value="password"/>
      <param name="vm-password" value="1010"/>
    </params>
    <variables>
      <variable name="voicemail_domain" value="speakblast.com"/>
    </variables>
  </user>
</include>
```




# 646 voicemail_domain_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_domain_name
- type: **string**



```

```




# 647 voicemail_email
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_email
- type: **string**



```

```




# 648 voicemail_file_path
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_file_path
- type: **string**



```

```




# 649 voicemail_greeting_number
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_greeting_number
- type: **string**



```

```




# 650 voicemail_greeting_path
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_greeting_path
- type: **string**



```

```




# 651 voicemail_id
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_id
- type: **string**



```

```




# 652 voicemail_message_len
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_message_len
- type: **integer**



```

```




# 653 voicemail_priority
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_priority
- type: **string**



```

```




# 654 voicemail_profile_name
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_profile_name
- type: **string**



```

```




# 655 voicemail_read_flags
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_read_flags
- type: **string**



```

```




# 656 voicemail_time
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_time
- type: **string**



```

```




# 657 voicemail_total_new_messages
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_total_new_messages
- type: **integer**



```

```




# 658 voicemail_total_saved_messages
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_total_saved_messages
- type: **integer**



```

```




# 659 voicemail_urgent_new_messages
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_urgent_new_messages
- type: **integer**



```

```




# 660 voicemail_urgent_saved_messages
- url: https://freeswitch.org/confluence/display/FREESWITCH/voicemail_urgent_saved_messages
- type: **integer**



```

```




# 661 waitmsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/waitmsec
- type: **integer**



```

```




# 662 waitsec
- url: https://freeswitch.org/confluence/display/FREESWITCH/waitsec
- type: **integer**



```

```




# 663 waitusec
- url: https://freeswitch.org/confluence/display/FREESWITCH/waitusec
- type: **integer**



```

```




# 664 write_codec
- url: https://freeswitch.org/confluence/display/FREESWITCH/write_codec
- type: **string**

readonly The negotiated codec of the outbound call leg.

```

```




# 665 write_rate
- url: https://freeswitch.org/confluence/display/FREESWITCH/write_rate
- type: **string**



```

```




# 666 xfer_uuids
- url: https://freeswitch.org/confluence/display/FREESWITCH/xfer_uuids
- type: **string**



```

```




# 667 xml_cdr_base
- url: https://freeswitch.org/confluence/display/FREESWITCH/xml_cdr_base
- type: **string**



```

```




# 668 zrtp_enabled
- url: https://freeswitch.org/confluence/display/FREESWITCH/zrtp_enabled
- type: **string**

This global variable is set by the FreeSWITCH core to the value of the global rtp-enable-zrtp setting in switch.conf.xml. For more information see the SIP TLS page.

```

```


