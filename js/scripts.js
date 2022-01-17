$(document).ready(function () {


    let body = $("body");

    //workstream
    let workstream = () => {
        let left_nav_btn = body.find(".rightnav-rp");
        let left_menu_nav = body.find(".left-menu-nav");
        let goto_chatlist = body.find(".goto_chatlist");
        let userList_btn = body.find(".userList-rp");
        let userlist = body.find(".users-list");
        let close_userlist = body.find(".close-userlist");
        let show_member_container = body.find(".show-member-container");
        let show_member_container_closeBTN = show_member_container.find(".close_show-member-container");
        let show_member_container_BTN = body.find(".show-members-BTN");
        let display_member_profile = show_member_container.find(".display_user_profileBTN");
        let display_user_profile = show_member_container.find(".display_user_profile");
        let display_user_profile_closeBTN = display_user_profile.find(".display_user_profile_closeBTN");
        let addMember_container = body.find(".addMember_container");
        let show_addMember_container = body.find(".show_addMember_container");
        let close_addMember_container = addMember_container.find(".close-addMember-container");
        let send_message_popup = body.find(".send_message_popup");
        let close_send_message_popup = send_message_popup.find(".close_send_message_popup");
        let send_message_popupBTN = body.find(".send_message_popupBTN");
        let attachment_viewALL = body.find(".attachment_viewALL");
        let attachment_container = body.find(".attachment_container");
        let membersList_container = body.find(".membersList_container");
        let attachment_backBTN = body.find(".attachment_backBTN");
        let attachment_option = attachment_container.find(".attachment_option");
        let left_menu_nav_closeBTN = body.find(".left_menu_nav_closeBTN");
        let membersList_container_toggler = membersList_container.find(".membersList_container_toggler");
        let memberList_more_option = membersList_container.find(".memberList_more_option");
        let SavedChat_Member = membersList_container.find(".SavedChat_Member");
        let search_add_filter = body.find(".search_add_filter");
        let header_budget_optionBTN = body.find(".header_budget_optionBTN");
        let new_group_conversationBTN = body.find(".new_group_conversationBTN");
        let new_group_conversation = body.find(".new_group_conversation");
        let manage_chat_box = membersList_container.find(".manage_chat_box");
        let search_container = membersList_container.find(".search-container");
        let savechat_checker = SavedChat_Member.find(".checker");
        let savedChat_MemberPF = SavedChat_Member.find(".savedChat_MemberPF");
        let manage_conversationBTN = body.find(".manage_conversationBTN");
        let close_manage_chat_box = manage_chat_box.find(".close_manage_chat_box");
        let manage_chat_OptionBTNS = manage_chat_box.find(".manage_chat_OptionBTNS");
        let manage_chat_counter = manage_chat_box.find(".counter");
        let messaging_settings = body.find(".messaging_settings");
        let close_messaging_settings = messaging_settings.find(".close_messaging_settings");
        let messaging_settingsBTN = body.find(".messaging_settingsBTN");
        let MemberListBody = membersList_container.find(".MemberListBody");
        let message_requests = membersList_container.find(".message_requests");
        let MemberList_HeaderBottom = membersList_container.find(".MemberList_HeaderBottom");
        let message_requestsBTN = body.find(".message_requestsBTN");
        let close_message_request = message_requests.find(".backBTN");
        let chat_container = body.find(".private_chat");
        let job_container = body.find(".job_chat");
        let mobile_navigation = body.find("[mobile_navigation]");

        let make_voice_call = body.find("[make_voice_call]");
        let voice_call_popup = body.find("[voice_call_popup]");
        let minimized_voice_call = body.find("[minimized_voice_call]");
        let go_minimized_call = voice_call_popup.find("[go_minimized_call]");
        let go_maximized_call = minimized_voice_call.find("[go_maximized_call]");
        let close_voice_call = body.find("[close_voice_call]");

        let report_user = body.find("[report_user]");
        let report_userBTN = body.find("[report_userBTN]");
        let cancel_report_user = report_user.find("[cancel_report_user]");

        let remove_user = body.find("[remove_user]");
        let remove_userBTN = body.find("[remove_userBTN]");
        let cancel_remove_user = remove_user.find("[cancel_remove_user]");


        //MOBILE NAVIGATION BACK TO THE CHATLIST
        goto_chatlist.on("click", function () {
            membersList_container.parents('.others').fadeIn('300');
            mobile_navigation.animate({
                "bottom": "0"
            });
        });

        left_menu_nav_closeBTN.on("click", function () {
            left_menu_nav.animate({
                "left": -100 + "%"
            });
        });

        left_nav_btn.on("click", function () {
            left_menu_nav.animate({
                "left": 0 + "%"
            });
        });

        userList_btn.on("click", function () {
            userlist.animate({
                left: "0%"
            });
        })
        close_userlist.on("click", function () {
            userlist.animate({
                left: "-100%"
            });
        })

        // $(document).on("click", function (e) {
        //     if (!e.target.closest(".left-menu-nav")) {
        //         left_menu_nav.animate({
        //             "left": -100 + "%"
        //         });
        //     }
        // });


        //    DISPLAYIING THE MEMBERS POPUP
        show_member_container_BTN.on("click", function () {
            show_member_container.css("display", "flex");
        });
        show_member_container_closeBTN.on("click", function () {
            show_member_container.css("display", "none");
        });


        display_member_profile.on("click", function () {
            display_user_profile.fadeIn("300");
        });

        display_user_profile_closeBTN.on("click", function () {
            display_user_profile.fadeOut("300");
        });


        //    DISPLAYING THE ADD MEMBERS POPUP

        show_addMember_container.on("click", function () {
            addMember_container.css("display", "flex");
        })


        close_addMember_container.on("click", function () {
            addMember_container.css("display", "none");
        })

        //    SHOW ALL ATTACHMENT WHEN VIEW ALL IS CLICKED
        attachment_viewALL.on("click", function (e) {
            e.preventDefault();
            attachment_container.parent(".reference").css("overflow", "hidden");
            attachment_backBTN.fadeIn("300");
            attachment_option.fadeIn("300");
            attachment_container.animate({
                height: "100%"
            })
        });

        attachment_backBTN.on("click", function () {
            attachment_container.parent(".reference").css("overflow", "auto");
            attachment_backBTN.fadeOut("300");
            attachment_option.fadeOut("300");
            attachment_container.animate({
                height: "45%"
            })
        });

        attachment_option.each(function () {
            $(this).on("click", function (e) {

                e.stopPropagation();
                attachment_option.find(".more-option").not($(this).find(".more-option")).fadeOut("300");
                $(this).find(".more-option").fadeIn("300");

            });
        });

        $(document).on("click", function (e) {
            if (!e.target.closest(".more-option")) {
                attachment_option.find(".more-option").fadeOut("300");
            }
        });

        //    TOGGLING THE MEMBERLIST CHANNEL UP AND DOWN

        if (!window.matchMedia('(max-width: 991px)').matches) {
            membersList_container_toggler.on("click", function () {
                if (!membersList_container.hasClass("active")) {
                    membersList_container.addClass("active");
                    membersList_container.animate({
                        top: "1%"
                    });
                    memberList_more_option.find(".more_option").css("top", "33px");
                    membersList_container_toggler.addClass("active");
                    membersList_container.parent(".reference").css("overflow", "hidden");

                } else {
                    membersList_container.removeClass("active");
                    membersList_container.animate({
                        top: "89%"
                    });
                    memberList_more_option.find(".more_option").css("top", "-174px");
                    membersList_container_toggler.removeClass("active");

                }
            });
        }


        // DISPLAYING THE MEMBERLIST OPTION LIST
        memberList_more_option.on("click", function (e) {
            e.stopPropagation();
            $(this).find(".more_option").fadeIn("300");
            search_add_filter.find(".search_filter_option").fadeOut("300");

        });

        $(window).on("click", function (e) {
            if (!e.target.closest(".more_option")) {
                memberList_more_option.find(".more_option").fadeOut("300");

            }
        })

        // DISPLAYING THE QUICK SEND MESSAGE POP-UP
        send_message_popupBTN.on("click", function () {
            send_message_popup.css("display", "flex");
        });

        close_send_message_popup.on("click", function () {
            send_message_popup.css("display", "none");
        });

        //  SELECTING A CHAT FROM MEMBERS LIST
        SavedChat_Member.each(function () {
            $(this).on("click", function () {
                mobile_navigation.animate({
                    "bottom": "-100%"
                });
                if (!manage_chat_box.hasClass("active")) {

                    if ($(this).hasClass("JobChat")) {

                        chat_container.css("display", "none");
                        job_container.css("display", "block");

                    } else if ($(this).hasClass("PrivateChat")) {

                        chat_container.css("display", "block");
                        job_container.css("display", "none");

                    }
                }

                SavedChat_Member.not($(this)).removeClass("active");
                $(this).addClass("active");

                if (matchMedia('(max-width: 991px)').matches) {
                    membersList_container.parents('.others').css("display", "none");
                }
            });
        });

        // ADD MORE FILTER TO THE MEMBER MESSAGES SEARCH

        search_add_filter.on("click", function (e) {
            e.stopPropagation();
            $(this).find(".search_filter_option").fadeIn("300");
            memberList_more_option.find(".more_option").fadeOut("300");

        });

        $(window).on("click", function (e) {
            if (!e.target.closest(".search_filter_option")) {
                search_add_filter.find(".search_filter_option").fadeOut("300");
            }
        });

        //  CHAT HEADER BUDGET DROP-DOWN

        header_budget_optionBTN.on("click", function (e) {
            e.stopPropagation();
            header_budget_optionBTN.find(".header_budget_option").fadeIn("300");
        });

        $(window).on("click", function (e) {
            if (!e.target.closest(".header_budget_option")) {
                header_budget_optionBTN.find(".header_budget_option").fadeOut("300");
            }
        });

        //  NEW GROUP CONVERSATION

        new_group_conversationBTN.on("click", function (e) {
            e.stopPropagation();
            new_group_conversation.css("display", "flex");
            $(this).parents(".more-option").css("display", "none");
        });

        new_group_conversation.find(".close-new_group_conversation").on("click", function () {
            new_group_conversation.css("display", "none");
        });


        //  MANAGE CONVERSATIONS SETTINGS

        function positionMemberList() {
            if (!membersList_container.hasClass("active")) {
                membersList_container.addClass("active");
                membersList_container.animate({
                    top: "1%"
                });
                membersList_container_toggler.addClass("active");
                memberList_more_option.find(".more_option").css("top", "33px");
                membersList_container.parent(".reference").css("overflow", "hidden");

            }
        }

        manage_conversationBTN.on("click", function (e) {
            e.stopPropagation();

            manage_chat_box.css("display", "flex").addClass("active");
            $(this).parents(".more-option").css("display", "none");
            search_container.css("display", "none");
            savedChat_MemberPF.css("display", "none");
            savechat_checker.fadeIn("300");

            // CLOSING THE MESSAGE REQUEST POP UP IF IT IS OPEN
            close_mesageRequest();


            positionMemberList();
        });

        // CLOSING THE MESSAGE CONVERSATION SETTINGS
        function close_manage_chatBOX() {
            manage_chat_box.css("display", "none")
            search_container.fadeIn("300");
            savechat_checker.css("display", "none");
            savedChat_MemberPF.fadeIn("300");
            manage_chat_box.removeClass("active");
            SavedChat_Member.removeClass("selected");
            SavedChat_Member.find(".checker").removeAttr('checked');
            manage_chat_counter.text("0");
        }

        close_manage_chat_box.on("click", function () {
            close_manage_chatBOX();
        });

        SavedChat_Member.each(function () {
            $(this).on("click", function (e) {

                if (manage_chat_box.hasClass("active")) {

                    if (!$(this).hasClass("selected")) {
                        $(this).addClass("selected");
                        $(this).find(".checker").attr('checked', 'checked');
                        manage_chat_counter.text(parseInt(manage_chat_counter.text()) + 1);

                    } else {
                        $(this).find(".checker").removeAttr('checked');
                        $(this).removeClass("selected");
                        manage_chat_counter.text(parseInt(manage_chat_counter.text()) - 1);
                    }

                    membersList_container.parents('.others').css("display", "block")

                }

                if (parseInt(manage_chat_counter.text()) >= 1) {
                    manage_chat_OptionBTNS.addClass("active").removeAttr("disabled");
                } else {
                    manage_chat_OptionBTNS.removeClass("active").attr("disabled", "disabled");
                }


            });
        })

        //  MESSAGING SETTINGS
        messaging_settingsBTN.on("click", function (e) {
            e.stopPropagation();
            $(this).parents(".more-option").css("display", "none");
            messaging_settings.css("display", "flex");
        });

        close_messaging_settings.on("click", function () {
            messaging_settings.css("display", "none");
        });

        //  MESSAGE REQUESTS

        message_requestsBTN.on("click", function (e) {
            e.stopPropagation();

            membersList_container.find(".header").css("height", "11%");
            if (matchMedia('(max-width:400px)').matches) {
                membersList_container.find(".header").css("height", "12%");
            }
            MemberList_HeaderBottom.css("display", "none");
            MemberListBody.css("display", "none");
            message_requests.css("display", "block");
            $(this).parents(".more-option").css("display", "none");

            // CLOSING THE MESSAGE CONVERSATION SETTINGS IF IT IS OPEN
            close_manage_chatBOX();
            //===================================

            positionMemberList();

        });

        // CLOSING THE MESSAGE REQUEST POP UP
        function close_mesageRequest() {
            membersList_container.find(".header").css("height", "19%");
            if (matchMedia('(max-width:400px)').matches) {
                membersList_container.find(".header").css("height", "21%");
            }
            MemberList_HeaderBottom.css("display", "block");
            MemberListBody.css("display", "flex");
            message_requests.css("display", "none");
        }

        close_message_request.on("click", function () {
            close_mesageRequest();
        });


        //    VOICE CALL POP UPS

        make_voice_call.each(function () {
            $(this).on("click", function () {
                voice_call_popup.css("display", "flex").fadeIn("300");
            });
        });

        go_minimized_call.on("click", function () {
            voice_call_popup.css("display", "none");
            minimized_voice_call.css("display", "flex").fadeIn("300");
        });

        go_maximized_call.on("click", function () {
            minimized_voice_call.css("display", "none");
            voice_call_popup.css("display", "flex").fadeIn("300");
        });

        close_voice_call.on("click", function () {
            voice_call_popup.css("display", "none");
            minimized_voice_call.css("display", "none");
        });


        //   REPORT USER

        report_userBTN.on("click", function () {
            report_user.css("display", "flex").fadeIn("300");
        });

        cancel_report_user.on("click", function () {
            report_user.css("display", "none").fadeOut("300");
        });

        //   REMOVE USER

        remove_userBTN.on("click", function () {
            remove_user.css("display", "flex").fadeIn("300");
        });

        cancel_remove_user.on("click", function () {
            remove_user.css("display", "none").fadeOut("300");
        });


        //THE SEARCH FILTERING SCRIPT
        let search_droplet = body.find('.search-droplet');
        let input_search = search_droplet.find('[filter_input]');
        let result = search_droplet.find('.search_result');
        let result_items = result.find('.search_li');

        body.find(".form").on("submit",function (e) {
            e.preventDefault();
        })


        input_search.on('keyup', function () {
            let value = $(this).val().toLowerCase();
            result.css('display', 'block');
            result_items.filter(function () {
                $(this).toggle($(this).text().toLowerCase().substring(0, value.length) === value);
            })
        });
        result_items.each(function () {
            $(this).on('click', function () {
                input_search.val($(this).text());
                result.css('display', 'none');
            });
        });
        $(document).on('click', function () {
            result.css('display', 'none');
        });




        //THE SEARCH TAG FILTERING SCRIPT
        let search_tags = body.find('.search-tags');
        let tag_search = search_tags.find('[filter_input]');
        let tag_result = search_tags.find('.search_tag_result');
        let tag_result_items = tag_result.find('.search_li');

        body.find(".form").on("submit",function (e) {
            e.preventDefault();
        })


        tag_search.on('keyup', function () {
            let value = $(this).val().toLowerCase();
            tag_result.css('display', 'block');
            tag_result_items.filter(function () {
                $(this).toggle($(this).text().toLowerCase().substring(0, value.length) === value);
            })
        });
        tag_result_items.each(function () {
            $(this).on('click', function () {
                tag_search.val($(this).text());
                tag_search.$(this).trigger('focusout');
                tag_result.css('display', 'none');
            });
        });
        $(document).on('click', function () {
            tag_result.css('display', 'none');
        });

        tag_search.on('focusout',function () {
            let txt = this.value.replace(/[^a-zA-Z0-9+\-.#]/g,''); // allowed
            if (txt) $(this).before('<span class="tag">' + txt + '</span>');
            this.value = "";
            this.focus();
        }).on('keyup',function (e) {
            if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
        })
        search_tags.find(".tags").on('click','.tag',function () {
            if (confirm("Really delete this tag?")) $(this).remove();
        })



    }

    switch (body.attr("app-data")) {
        case "workstream":
            workstream()
            break;
        default:
            console.log('please check at script.js if script is correct');
    }


});