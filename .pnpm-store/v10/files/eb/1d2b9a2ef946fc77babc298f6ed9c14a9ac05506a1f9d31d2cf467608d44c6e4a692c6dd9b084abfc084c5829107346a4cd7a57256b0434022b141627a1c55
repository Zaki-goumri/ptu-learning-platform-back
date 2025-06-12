import { Box, MessageBox } from '@adminjs/design-system';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { connect } from 'react-redux';
import allowOverride from '../../hoc/allow-override.js';
import { useTranslation } from '../../hooks/index.js';
import { dropNotice } from '../../store/actions/drop-notice.js';
import { setNoticeProgress } from '../../store/actions/set-notice-progress.js';
const TIME_TO_DISAPPEAR = 3;
const NoticeElement = props => {
  const {
    drop,
    notice,
    notifyProgress
  } = props;
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef();
  const {
    tm,
    i18n: {
      language
    }
  } = useTranslation();
  const message = useMemo(() => tm(notice.message, notice.resourceId, notice.options), [notice.id, language]);
  const variant = notice.type === 'error' ? 'danger' : notice.type ?? 'info';
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      const _progress = progress + 100 / TIME_TO_DISAPPEAR;
      notifyProgress({
        noticeId: notice.id,
        progress
      });
      setProgress(_progress);
      return _progress;
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [notice]);
  useEffect(() => {
    if (progress >= 100) {
      drop();
    }
  }, [drop, progress]);
  return /*#__PURE__*/React.createElement(MessageBox, {
    style: {
      minWidth: '480px'
    },
    message: message,
    variant: variant,
    onCloseClick: drop
  }, notice.body);
};
const NoticeBox = props => {
  const {
    drop,
    notices,
    notifyProgress
  } = props;
  if (!notices.length) return null;
  return /*#__PURE__*/React.createElement(Box, {
    as: "div",
    "data-testid": "notice-wrapper",
    "data-css": "notice-wrapper",
    flex: true,
    flexDirection: "column",
    p: "sm",
    style: {
      gap: 4
    }
  }, notices.map(notice => /*#__PURE__*/React.createElement(NoticeElement, {
    key: notice.id,
    notice: notice,
    drop: () => drop(notice.id),
    notifyProgress: notifyProgress
  })));
};
const mapStateToProps = state => ({
  notices: state.notices
});
const mapDispatchToProps = dispatch => ({
  drop: noticeId => dispatch(dropNotice(noticeId)),
  notifyProgress: ({
    noticeId,
    progress
  }) => dispatch(setNoticeProgress({
    noticeId,
    progress
  }))
});
const ConnectedNoticeBox = connect(mapStateToProps, mapDispatchToProps)(NoticeBox);
const OverridableConnectedNoticeBox = allowOverride(ConnectedNoticeBox, 'NoticeBox');
export { OverridableConnectedNoticeBox as NoticeBox, OverridableConnectedNoticeBox as default, ConnectedNoticeBox as OriginalNoticeBox };