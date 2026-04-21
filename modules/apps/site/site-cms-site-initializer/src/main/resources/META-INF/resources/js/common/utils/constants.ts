/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import { ActionId } from "../types/Action";

export const OBJECT_DEFINITION_CLASS_NAME =
	'com.liferay.object.model.ObjectDefinition';
export const OBJECT_ENTRY_FOLDER_CLASS_NAME =
	'com.liferay.object.model.ObjectEntryFolder';

export const ENTERPRISE_URL = 'https://www.liferay.com/web/lr/cms-upgrade';

export const FDS_EVENT_UPDATE_DISPLAY = 'fds-update-display';

export const ACTION_ID = {
  ADD_DISCUSSION: 'ADD_DISCUSSION',
  ADD_ENTRY: 'ADD_ENTRY',
  ADD_OBJECT_ENTRY_FOLDER: 'ADD_OBJECT_ENTRY_FOLDER',
  DELETE: 'DELETE',
  DELETE_DISCUSSION: 'DELETE_DISCUSSION',
  DOWNLOAD: 'DOWNLOAD',
  PERMISSIONS: 'PERMISSIONS',
  SUBSCRIBE: 'SUBSCRIBE',
  UPDATE: 'UPDATE',
  UPDATE_DISCUSSION: 'UPDATE_DISCUSSION',
  VIEW: 'VIEW',
} as const;