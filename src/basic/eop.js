i/*vietlong.org -> build: 05/01/21 15:45:11*/
var dOneTask = function() {
    var t = "deopsound"
      , i = {
        false: ["false2.wav", "oo.wav"],
        true: ["true1.wav", "true2.wav"],
        success: ["success1.wav", "success0.wav"],
        congratulations: {
            course_done: "victory.mp3",
            unit_done: "congratulations0.mp3"
        }
    };
    return {
        f6: {
            id: 0,
            sec: "",
            start: ""
        },
        f0: {},
        b9: "",
        a5: {},
        c0: {},
        a6: null,
        f1: {
            inittaskid: 0,
            weekid: 0,
            callbackUrl: "/study/task",
            isUnitTest: !1,
            unitdonelink: "",
            courselink: "",
            isMobile: !1,
            isTeacher: !1,
            isDeveloper: !1,
            languageid: 0,
            soundon: !0,
            user: {
                id: 0,
                display: "",
                avatar: "",
                studentid: 0,
                email: "",
                classid: 0
            }
        },
        f4: function(t) {
            console.log(t);
            return 0 === this.f1.weekid ? "answer" === t ? "#dViewAnswer" : "submit" === t ? "dSubmit" : "" : "#" + t + dj.sec(this.f1.user.id + "@" + this.f1.inittaskid + "." + this.f1.weekid).substring(3, 11)
        },
        setLanguage: function(t) {
            this.f1.languageid = t
        },
        e1: function() {
            var i = dj.cookie(t);
            dj.isNull(i) || (this.f1.soundon = 1 === parseInt(i));
            var e = this
              , n = dj("#dsound");
            n.addClass(this.f1.soundon ? "dsoundon" : "dsoundoff").click((function() {
                return e.f1.soundon ? n.removeClass("dsoundon").addClass("dsoundoff") : n.removeClass("dsoundoff").addClass("dsoundon"),
                e.f1.soundon = !e.f1.soundon,
                dWin.noise("Bạn <b>" + e.f1.user.display + "</b> đã <b>" + (e.f1.soundon ? "bật" : "tắt") + " âm thanh</b> hệ thống thành công!"),
                dj.cookie(t, e.f1.soundon ? 1 : 0),
                !1
            }
            ))
        },
        b5: function(t) {
            0 === t.err ? (dj("#dupload .fname").attr("rel", t.name).attr("href", t.src).html("<b>" + t.name + "</b> (" + t.filesize + "KB)"),
            dWin.noise("Upload tệp tin <b>" + t.filename + "</b> (" + t.filesize + "KB) thành công")) : dDialog.alertError("Không thể Upload tệp tin <b>" + t.filename + "</b>")
        },
        c7: function() {
            dj('#dupload input[name="fileattach"]').change((function(t) {
                var i = t.target.value
                  , e = t.currentTarget.files[0].size;
                if ("" !== i) {
                    var n = i.toLowerCase().replace(/^.*\./, "");
                    dj.inArray(n, ["zip", "doc", "docx", "ppt", "pptx"]) > -1 ? e <= 8388608 ? (document.domain = djConfig.HOST,
                    dj(t.target).parents("form").attr("action", "/study/uploadfile/b5").submit()) : dDialog.alertError("File đính kèm vượt quá dung lượng 8MB cho phép") : dDialog.alertError("Không cho phép đính kèm tệp tin có định dạng " + n)
                }
            }
            ))
        },
        d5: function() {
            var t = this;
            dj(".errchk input").iCheck({
                radioClass: "iradio_square-green"
            }),
            dj("#derrInfo .dsubmit").click((function() {
                return t.a2()
            }
            ))
        },
        init: function(t) {
            this.f1 = dj.extend({}, this.f1, t),
            this.f1.isMobile && (this.f1.soundon = !1);
            var i = this;
            dj(document).ready((function() {
                i.d5(),
                i.c7(),
                i.e1(),
                dj("#duinfo img").attr("src", i.f1.user.avatar)
            }
            ))
        },
        c2: function(t, i) {
            void 0 === i && (i = this.f6.id);
            var e = this.f1.callbackUrl + "/" + t + "/" + this.f1.user.id + "/" + i;
            return djConfig.DEBUG && (e += "?r=" + Math.floor(1e3 * Math.random())),
            e
        },
        e4: function() {
            dj("#mbody").html(this.b9)
        },
        a7: function(t, i) {
            var e = this
              , n = dj("#daudioplayer").unbind("ended").on("ended", (function() {
                dj(".fa-pause").addClass("fa-play-circle").removeClass("fa-pause"),
                dj.isFunction(i) && i()
            }
            ));
            this.c0.done = [],
            dj(".daudio").click((function() {
                var t = dj(this)
                  , i = t.attr("media-url");
                dj(".fa-pause").addClass("fa-play-circle").removeClass("fa-pause"),
                t.hasClass("fa-play-circle") ? (n.attr("src", i).html('<source src="' + i.replace(/.mp3/i, ".ogg") + '" type="audio/ogg" />'),
                t.addClass("fa-pause").removeClass("fa-play-circle"),
                n[0].play()) : (t.addClass("fa-play-circle").removeClass("fa-pause"),
                n[0].pause()),
                t.removeClass("fa-play-circle").addClass("fa-pause");
                var a = t.attr("rel");
                void 0 !== a && "" !== a && -1 === dj.inArray(a, e.c0.done) && e.c0.done.push(a)
            }
            ))
        },
        e5: function(t) {
            dj(".dvoca:first").addClass("active");
            var i = this;
            if (1 === this.f6.view.write) {
                function e(t) {
                    var n = t.parent().parent()
                      , a = dj(".dview", n)
                      , s = dj("<li>" + t.html() + "</li>").click((function() {
                        var i = dj(this)
                          , n = i.parent().parent()
                          , a = dj("<li>" + t.html() + "</li>").click((function() {
                            e(dj(this))
                        }
                        ));
                        dj(".dstore", n).append(a),
                        i.remove()
                    }
                    ));
                    dj(s).insertBefore(dj("br", a)),
                    t.remove();
                    var d = a.text().toUpperCase()
                      , r = dj(".dtitle", n)
                      , o = dj.sec(d).substr(0, 20);
                    if (r.val() === o)
                        return i.e6(r, o)
                }
                dj(".sortable>li").click((function() {
                    e(dj(this))
                }
                ))
            } else
                dj("#dmcq .dtitle").click((function() {
                    var t = dj(this);
                    return i.e6(dj("span", t), t.attr("rel"))
                }
                ));
            1 === this.f6.view.audio && (this.a7(t),
            setTimeout((function() {
                dj("#dmcq .daudio:first").click()
            }
            ), 1e3)),
            t && t.center()
        },
        b6: function(t) {
            if (void 0 !== t.answers)
                if (1 === this.f6.view.fill) {
                    var i = t.answers;
                    dj("#dquestion input.danw").each((function() {
                        dj(this).val(i.shift())
                    }
                    ))
                } else if (1 === this.f6.view.choose) {
                    var e = t.answers;
                    for (var n in e)
                        dj("#dquestion input[value='" + e[n] + "']").iCheck("check")
                }
            1 === this.f6.view.choose ? (dj("#dquestion input[type='checkbox']").iCheck({
                checkboxClass: "icheckbox_square-green"
            }),
            dj("#dquestion input[type='radio']").iCheck({
                radioClass: "iradio_square-green"
            })) : 1 === this.f6.view.fill && dj.inArray(this.f1.languageid, [2, 3, 4]) > -1 && dj("#dquestion input.danw").each((function() {
                var t = dj(this);
                t.attr("size", 2 * parseInt(t.attr("size")))
            }
            ))
        },
        d6: function(t, i) {
            if (void 0 === t)
                return !1;
            var e = '<source src="' + t.replace(/.mp3/i, ".ogg") + '" type="audio/ogg" />';
            try {
                dj("#daudioplayer").unbind("ended").on("ended", (function() {
                    dj.isFunction(i) && i()
                }
                )).attr("src", t).html(e).unbind("error").on("error", (function() {
                    dj.isFunction(i) && i()
                }
                ))[0].play()
            } catch (t) {
                djLog(t)
            }
            return !1
        },
        e7: function(t) {
            return djConfig.MEDIA_URL + "rs/" + t
        },
        playSoundCdn: function(t, i) {
            if (!this.f1.soundon)
                return dj.isFunction(i) && i(),
                !1;
            var e = this.e7(t);
            return this.d6(e, i)
        },
        a8: function(t, i) {
            var e = dj(".q" + t + " .daudio:first").attr("media-url");
            return this.d6(e, i)
        },
        e6: function(t, i) {
            var e = this
              , n = parseInt(t.attr("aid"));
            return this.d7(t, i, n, (function(t) {
                var i = ".q" + t
                  , n = ".q" + (t + 1);
                1 === e.f6.view.audio ? (dj(i).removeClass("active"),
                dj(n).addClass("active"),
                setTimeout((function() {
                    dj(n + " .daudio:first").click()
                }
                ), 500)) : e.a8(t, (function() {
                    setTimeout((function() {
                        dj(i).removeClass("active"),
                        dj(n).addClass("active")
                    }
                    ), 200)
                }
                ))
            }
            ))
        },
        d7: function(t, e, n, a) {
            var s = t.attr("rel")
              , d = dj("#qid" + s).attr("rel").split("-")
              , r = parseInt(d[0]);
            if (dj(".q" + r).hasClass("active")) {
                var o = !1;
                if (1 === this.f6.view.write)
                    o = !0;
                else {
                    var c = parseInt(dj.oEncrypt2(d[1]));
                    o = n - 1 == parseInt(dj.oEncrypt2(d[2])) - c - parseInt(s)
                }
                if (o)
                    void 0 !== e && "" !== e && -1 === dj.inArray(e, this.c0.done) && this.c0.done.push(e),
                    this.b0(),
                    a(r);
                else {
                    var u = Math.floor(Math.random() * i.false.length);
                    this.playSoundCdn(i.false[u]),
                    t.parent().parent().css({
                        border: "dotted 1px RED"
                    })
                }
            }
            return !1
        },
        b0: function() {
            var t = this.c0.done.length === this.c0.total;
            if (t) {
                var i = this
                  , e = this.d0();
                this.e4(),
                e.vocabularys = this.c0.done.join(","),
                dj.postJSON(this.c2("result"), e, (function(t) {
                    if (0 === t.err)
                        return i.d1(t.data);
                    dDialog.alertError(t.msg)
                }
                ))
            }
            return t
        },
        d2: function(t) {
            return this.c2("api", t)
        },
        d8: function(t, i) {
            return 1 === this.f1.languageid ? dj.rsa.decrypt(t, i) : t
        },
        developerNextTask: function() {
            var t = this;
            return dDialog.confirm("Bạn chắc chắn muốn qua bài?", (function() {
                dj.postJSON(t.c2("devnext"), t.d0(), (function(i) {
                    if (0 === i.err)
                        return t.d1(i.data);
                    dWin.alert("Có lỗi, không thể qua bài.")
                }
                ))
            }
            )),
            !1
        },
        b2: function(t) {
            var i = "degroup_" + t
              , e = dj.cookie(i);
            return dj.isNull(e)
        },
        c5: function(t, i) {
            if (0 !== i.err)
                return dWin.alert(i.msg),
                !1;
            var e = i.data;
            1 === this.f1.languageid && (e = dj.rsa.decrypt(i.data, i.publickey));
            var n = e.split("||");
            if (1 === this.f6.view.fill)
                for (var a in n) {
                    var s = dj.oEncrypt2(n[a]);
                    dj("#dquestion .danw:eq(" + a + ")").attr("placeholder", s).val(s).css({
                        color: "GREEN"
                    })
                }
            else if (1 === this.f6.view.choose)
                for (var a in dj("#dquestion .dchk .deck").iCheck("uncheck"),
                n) {
                    var d = n[a];
                    dj("#dquestion .dchk #chk_" + d).iCheck("check")
                }
            return t.html('<i class="fa fa-undo"></i>&nbsp;Làm lại').removeClass("btn-danger").addClass("btn-primary"),
            this.f0.showAnswering = !0,
            !1
        },
        a1: function() {
            null === this.b7 && (this.b7 = dj(this.f4("submit")));
            var t = this
              , i = dj(this.f4("answer")).click((function() {
                if (t.f0.showAnswering)
                    t.f0.showAnswering = !1,
                    t.b7.show(),
                    i.html('<i class="fa fa-eye"></i>&nbsp;Xem lại đáp án').removeClass("btn-primary").addClass("btn-danger"),
                    1 === t.f6.view.fill ? dj("#dquestion .danw").val("").css({
                        color: "RED"
                    }) : 1 === t.f6.view.choose && (dj("#dquestion .dchk .deck").iCheck("uncheck"),
                    dj("#dquestion .dchk .dred").removeClass("dred"));
                else {
                    if (t.d3() - t.f0.timenow < t.f6.seconds)
                        return dWin.alert("Phải suy nghĩ ít nhất " + t.f6.seconds + " giây mới có thể xem đáp án."),
                        !1;
                    if (t.b7.hide(),
                    t.f0.btn_answer += 1,
                    void 0 !== t.a5[t.f6.id])
                        return t.c5(i, t.a5[t.f6.id]);
                    dj.postJSON(t.c2("answer"), dj.extend({}, t.d0(), {
                        languageid: t.f1.languageid,
                        qsortkey: t.f0.qsortkey
                    }), (function(e) {
                        return t.a5[t.f6.id] = e,
                        t.c5(i, e)
                    }
                    ))
                }
            }
            ));
            return i
        },
        b7: null,
        a2: function() {
            var t = window.screen
              , i = this
              , e = dj("#derrInfo textarea")
              , n = e.val();
            if ("" === n)
                return dWin.alert("Bạn cần nhập nội dung ý kiến đóng góp cho hệ thống"),
                !1;
            var a = 0;
            if (dj("#derrInfo .errchk input").each((function() {
                var t = dj(this);
                t.iCheck("update")[0].checked && (a = parseInt(t.val()))
            }
            )),
            0 === a)
                return dWin.alert("Bạn góp ý cho vấn đề gì?"),
                !1;
            var s = this.f6.id
              , d = this.d3()
              , r = djson.encode({
                languageid: this.f1.languageid,
                studentid: this.f1.user.studentid,
                classid: this.f1.user.classid,
                timeclient: d,
                errtpy: a,
                errmsg: n,
                sw: t.width,
                sh: t.height
            })
              , o = dj.rsa.encrypt(r);
            return e.val(""),
            dj.postJSON(this.c2("report", s), {
                taskid: this.f6.sec,
                timeclient: d,
                data: o,
                seck: dj.sec(o)
            }, (function(t) {
                dj("#derrInfo").modal("hide"),
                0 === t.err ? dWin.noise(djTemplate.render("Hệ thống ghi nhận đóng góp của <b>{display}</b>!", i.f1.user)) : dWin.alert("Không thể báo lỗi. " + t.msg)
            }
            )),
            !1
        },
        a0: function(t, i) {
            if (911 === t.err) {
                var e = this
                  , n = t.length
                  , a = null
                  , s = '<div class="dgcaptcha"><input id="txtcaptcha" type="text" maxLength="' + n + '" placeholder="Nhập theo ảnh"/></div>';
                dDialog.openContent(s, "Tôi không phải Robot", {
                    modal: !0,
                    unloadOnHide: !0,
                    afterShow: function(i) {
                        a = dCaptcha.init("txtcaptcha", 150, 50, n, t.token),
                        i.moveTo(100),
                        i.center()
                    }
                }, {
                    btnSubmit: {
                        cls: "L3",
                        title: "Tiếp tục",
                        command: function() {
                            var t = dj("#txtcaptcha").val()
                              , s = dj("#hdtxtcaptcha").val();
                            return "" !== t && "" !== s && t.length === n ? (dj.postJSON(i, dj.extend({
                                captcha: n.toString() + e.f6.id.toString() + t.toString() + s
                            }, e.a6), (function(t) {
                                e.a0(t, i)
                            }
                            )),
                            !0) : (a.refresh(),
                            !1)
                        }
                    }
                })
            } else
                0 === t.err ? this.b1(t) : dDialog.alertError("Có lỗi, không thể gửi dữ liệu bài học, bạn vui lòng làm lại bài tập.");
            return !1
        },
        b1: function(t) {
            this.f0.btn_submit += 1;
            var i = this
              , e = t.data
              , n = "Đã gửi kết quả lên máy chủ";
            if (this.f1.isUnitTest)
                dWin.noise(n, 2e3, {
                    action: "success",
                    callback: function() {
                        return i.d1(e)
                    }
                });
            else {
                if (e.result = Math.round(100 * e.result),
                1 === this.f6.view.choose)
                    n = djTemplate.render("Bạn đã hoàn thành <b>{result}</b>% yêu cầu của <b>{total_question}</b> câu hỏi, chưa thể vượt qua bài học.", e),
                    e.done && (n = djTemplate.render("Bạn đã đánh dấu đúng toàn bộ <b>{total_question}</b> câu hỏi!", e)),
                    dj("#dquestion .dchk label").css({
                        color: "BLACK"
                    }),
                    dj("#dquestion .deck").each((function() {
                        var t = dj(this);
                        if (t.iCheck("update")[0].checked) {
                            var i = t.attr("id")
                              , n = t.val()
                              , a = dj.inArray(n, e.true_idx) > -1;
                            dj("#dquestion .dchk label[for='" + i + "']").css({
                                color: a ? "GREEN" : "RED"
                            })
                        }
                    }
                    ));
                else if (1 === this.f6.view.fill)
                    for (var a in n = djTemplate.render("Bạn đã điền đúng <b>{total_answerok}</b> / <b>{total_fill}</b> ô trống đáp án (đạt {result}% yêu cầu).", e),
                    e.done && (n = djTemplate.render("Bạn đã điền đúng toàn bộ đáp án!", e)),
                    e.true_idx) {
                        var s = e.true_idx[a];
                        dj("#dquestion .danw:eq(" + s + ")").css({
                            color: "GREEN"
                        })
                    }
                dWin.noise(n, 1500, {
                    action: e.done ? "success" : "error",
                    callback: function() {
                        if (e.done)
                            return i.d1(t.data);
                        i.f0.btn_submit >= 1 && (1 === i.f0.btn_submit && dWin.noise('Có thể tham khảo Đáp án bằng cách Click vào "Xem đáp án"', 2e3, {
                            positionClass: "toast-bottom-right"
                        }),
                        dj(i.f4("answer")).show())
                    }
                })
            }
        },
        b8: function() {
            var t = this;
            setTimeout((function() {
                t.b7.removeAttr("disabled")
            }
            ), 2e3)
        },
        c6: function(t, i) {
            if (0 === t.err) {
                this.f6 = t.task;
                var e = t.key.public
                  , n = t.key.private
                  , a = t.task.title + "<i> - " + t.task.source + "</i>";
                void 0 !== i && (a += " (" + i.done + " / " + i.total + ")"),
                dj("#dtasktitle").html(a);
                var s = {
                    source: this.f6.source,
                    showid: this.f6.showid,
                    body: this.d8(t.data.view, e)
                }
                  , d = djTemplate.render('<div class="d{source} {showid}">{body}</div>', s);
                dj("#mbody").html(d);
                var r = dj("#mbody").width()
                  , o = !0
                  , c = !0
                  , u = 30;
                this.f1.isUnitTest && (o = !1,
                c = !1,
                u = 10),
                dmediaEmbed({
                    width: r,
                    scale: 0,
                    isAd: !1,
                    hls: !0,
                    audio: {
                        allowSeek: o,
                        allowPause: c,
                        maxPlay: u,
                        onPlay: function(t) {
                            dj.isFunction(t) && t()
                        },
                        onPause: function(t) {
                            dj.isFunction(t) && t()
                        },
                        onMaxPlayed: function() {
                            dWin.alert("Đã nghe quá số lần quy định (" + u + " lần).")
                        }
                    }
                }),
                this.f1.isUnitTest && (dj("#mfooter .btpn").hide(),
                void 0 !== this.f6.backward && dj("#test_backward").attr("href", this.f6.backward).show(),
                void 0 !== this.f6.forward && dj("#test_forward").attr("href", this.f6.forward).show()),
                dj("#mbody a").each((function() {
                    dj(this).attr("target", "_blank")
                }
                )),
                dj("#mbody img").each((function() {
                    var t = dj(this);
                    t.attr("src");
                    setTimeout((function() {
                        t.css({
                            border: "solid 1px #FEFEFE"
                        })
                    }
                    ), 1e3)
                }
                )),
                dj(".dnut").hide().unbind("click"),
                "upload-content" === this.f6.showid ? (t.task.user_attach && (dj("#dupload textarea").val(t.task.user_attach.m),
                dj("#dupload .fname").html(t.task.user_attach.f).attr("rel", t.task.user_attach.f).attr("href", t.task.user_attach.src),
                dj("#dupload .stime").attr("rel", t.task.user_attach.t),
                dWidget.time()),
                dj("#dupload").show()) : dj("#dupload").hide();
                var l = this
                  , h = this.c2("result");
                if ("vocabulary" === this.f6.source)
                    this.c0.total = t.data.total,
                    this.a7(),
                    this.b7 = dj(this.f4("submit")).click((function() {
                        return l.b7.attr("disabled", !0),
                        l.b0() || dWin.alert("Bạn cần click đọc tất cả các từ mới để học và chuyển bài tiếp theo"),
                        l.b8(),
                        !1
                    }
                    )),
                    setTimeout((function() {
                        l.b7.show()
                    }
                    ), 2e3);
                else if ("mcq" === this.f6.source)
                    this.c0.total = t.data.total,
                    this.e5();
                else if ("content" === this.f6.source)
                    this.b7 = dj(this.f4("submit")).click((function() {
                        l.b7.attr("disabled", !0);
                        var t = l.d0();
                        "upload-content" === l.f6.showid && dj.extend(t, {
                            attach_msg: dj("#dupload textarea").val(),
                            attach_file: dj("#dupload .fname").attr("rel")
                        }),
                        dj.postJSON(h, t, (function(t) {
                            return l.b8(),
                            0 === t.err ? dWin.noise("Đã hoàn thành bài đọc", 2e3, {
                                action: "success",
                                callback: function() {
                                    return l.d1(t.data)
                                }
                            }) : dWin.alert("Có lỗi, không thể gửi dữ liệu bài học, bạn vui lòng làm lại bài tập."),
                            !1
                        }
                        ))
                    }
                    )),
                    setTimeout((function() {
                        l.b7.show()
                    }
                    ), 2e3);
                else if ("question" === this.f6.source) {
                    var f = t.data.total;
                    if (this.b6(t),
                    this.f0.showAnswering = !1,
                    this.f0.qsortkey = t.data.qsortkey,
                    this.b7 = dj(this.f4("submit")).click((function() {
                        if (l.b7.attr("disabled", !0),
                        l.f0.showAnswering)
                            return l.b8(),
                            !1;
                        var t = null;
                        if (1 === l.f6.view.choose) {
                            var i = [];
                            if (dj("#dquestion .deck").each((function() {
                                var t = dj(this);
                                t.iCheck("update")[0].checked && i.push(t.val())
                            }
                            )),
                            !l.f1.isUnitTest && i.length < f)
                                return dWin.alert("Bạn cần đánh dấu vào các lựa chọn cho câu trả lời trước khi gửi kết quả."),
                                l.b8(),
                                !1;
                            t = djson.encode({
                                ua: i
                            })
                        } else if (1 === l.f6.view.fill) {
                            var a = []
                              , s = !1
                              , d = [];
                            if (dj("#dquestion .danw").each((function() {
                                var t = dj(this).val();
                                a.push(t),
                                "" !== t && (s = !0,
                                d.push(t))
                            }
                            )),
                            !l.f1.isUnitTest && (!s || d.length < a.length))
                                return dWin.alert("Bạn cần điền nội dung câu trả lời vào các ô trống trước khi gửi kết quả."),
                                l.b8(),
                                !1;
                            t = djson.encode({
                                ua: a
                            })
                        }
                        if (null !== t) {
                            var r = t;
                            1 === l.f1.languageid && (r = dj.rsa.encrypt(t, e)),
                            l.a6 = dj.extend({}, l.d0(), {
                                qsortkey: l.f0.qsortkey,
                                answer: r,
                                publickey: e,
                                clientkey: n
                            }),
                            dj.postJSON(h, l.a6, (function(t) {
                                return l.b8(),
                                l.a0(t, h)
                            }
                            ))
                        }
                    }
                    )),
                    setTimeout((function() {
                        l.b7.show()
                    }
                    ), 1500),
                    !this.f1.isUnitTest) {
                        var p = this.a1();
                        (this.f1.isTeacher || this.f1.isDeveloper) && p.show()
                    }
                }
                setTimeout((function() {
                    dj("#dReport").show()
                }
                ), 5e3)
            } else
                dWin.alert("Có lỗi: " + t.msg)
        },
        e3: function(t, i) {
            this.f0 = {
                timenow: this.d3(),
                btn_submit: 0,
                btn_answer: 0
            },
            this.c0 = {
                total: 0,
                done: []
            },
            this.c6(t, i)
        },
        oneTask: function(t, i, e) {
            if (void 0 !== e && this.b2(e))
                return dWin.alert("Bạn cần chọn lại lớp độc lập để bắt đầu thực hành các bài học"),
                !1;
            this.f6.sec = i,
            this.b9 = dj("#mbody").html(),
            this.e4();
            var n = this;
            return dj.postJSON(this.d2(t), this.d0(), (function(t) {
                n.e3(t)
            }
            )),
            !1
        },
        d3: function() {
            return Math.round((new Date).getTime() / 1e3)
        },
        d0: function(t) {
            return dj.extend({}, {
                taskid: this.f6.sec,
                languageid: this.f1.languageid,
                taskstart: this.f6.start,
                timeclient: this.d3()
            }, this.f0, t)
        },
        d1: function(t) {
            var e = this
              , n = dj("#dunittitle").text();
            if (t.unit_done)
                if (e.f1.isUnitTest) {
                    var a = djTemplate.render('<div style="max-width:350px"><h5><b>{display}</b> đã hòan thành xong các bài của <b>{unit_name}</b>!</h5><p>Còn thời gian nên bạn có thể làm lại, hệ thống ghi nhận kết quả cuối cùng.</p><p style="text-align:center;margin:10px auto"><img src="{img}" style="width:200px;height:auto;max-height:180px"/></p></div>', {
                        unit_name: n,
                        display: this.f1.user.display,
                        img: this.e7("unittest_done.jpg")
                    });
                    dDialog.openContent(a, "Thông báo", {
                        modal: !0,
                        afterShow: function(t) {
                            dj(document).ready((function() {
                                t.moveTo(100),
                                t.center()
                            }
                            ))
                        }
                    }, {
                        btnSubmit: {
                            cls: "L3",
                            title: "Nộp bài",
                            command: function() {
                                window.location.href = e.f1.unitdonelink
                            }
                        },
                        btnCancel: {
                            cls: "L4",
                            title: "Làm tiếp"
                        }
                    })
                } else {
                    var s = djTemplate.render("Chúc mừng {display} đã học xong bài {unittitle}.", {
                        display: this.f1.user.display,
                        unittitle: n
                    });
                    dWin.alert(s),
                    this.playSoundCdn(i.congratulations.unit_done, (function() {
                        setTimeout((function() {
                            window.location.href = e.f1.courselink
                        }
                        ), 2e3)
                    }
                    ))
                }
            else if (t.next) {
                if (e.f1.isUnitTest)
                    e.e3(t.next, t.userlog);
                else {
                    var d = Math.floor(Math.random() * i.success.length)
                      , r = i.success[d];
                    this.playSoundCdn(r, (function() {
                        e.e3(t.next, t.userlog)
                    }
                    ))
                }
                history.replaceState({}, "", t.next.task.id + "?id=" + t.next.task.sec)
            }
            return !1
        }
    }
}();
